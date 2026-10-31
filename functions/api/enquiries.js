/**
 * ============================================================================
 * Cloudflare Pages Function: POST /api/enquiries
 * ============================================================================
 * Same-origin API proxy for secure Google Sheets & Apps Script integration.
 *
 * Security & Architecture:
 * 1. Frontend calls: POST /api/enquiries (relative path, same-origin).
 * 2. APPS_SCRIPT_URL is stored exclusively as a Cloudflare Pages secret/environment variable.
 *    It is NEVER bundled into client-side JavaScript.
 * 3. Validates and sanitizes payload on edge server.
 * 4. Checks honeypot spam protection.
 * 5. Forwards request to Google Apps Script Web App with redirect: 'follow'.
 * 6. Returns a clean JSON success or error response to the frontend.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    let payload;
    try {
      payload = await request.json();
    } catch (parseError) {
      return new Response(
        JSON.stringify({ 
          status: 'error', 
          message: 'Invalid JSON request payload.' 
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 1. Honeypot check for spam bots
    if (payload.honeypot && String(payload.honeypot).trim() !== '') {
      // Silently accept bots to avoid teaching them
      return new Response(
        JSON.stringify({ 
          status: 'success', 
          enquiryId: 'SPAM-TRAPPED', 
          message: "Thanks! Your enquiry has been received. I'll get back to you soon." 
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 2. Validate required fields
    const customerName = String(payload.name || payload.customerName || '').trim();
    const email = String(payload.email || '').trim();
    const projectDescription = String(payload.projectDescription || '').trim();
    const businessName = String(payload.businessName || 'Not Provided').trim();
    const serviceRequired = String(payload.serviceRequired || 'Business Website Development').trim();
    const budget = String(payload.budget || payload.approximateBudget || 'Not Specified').trim();
    const budgetFlexibility = String(payload.budgetFlexibility || 'Not Specified').trim();

    if (!customerName || !email || !projectDescription) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Missing required fields: Name, Email, and Project Description are required.'
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Please provide a valid email address.'
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 3. Read APPS_SCRIPT_URL secret from Cloudflare environment
    const appsScriptUrl = env.APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      return new Response(
        JSON.stringify({
          status: 'error',
          configured: false,
          message: 'Google Sheets integration endpoint (APPS_SCRIPT_URL) is not configured in Cloudflare environment secrets.'
        }),
        { status: 503, headers: corsHeaders }
      );
    }

    // 4. Generate unique enquiry ID
    const enquiryId = payload.enquiryId || `ENQ-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // 5. Forward request to Google Apps Script Web App
    // Note: Cloudflare Workers fetch automatically follows Google's 302 redirects when redirect: 'follow'
    const forwardPayload = {
      enquiryId,
      customerName,
      email,
      businessName,
      serviceRequired,
      budget,
      budgetFlexibility,
      projectDescription,
      status: 'New',
      honeypot: payload.honeypot || ''
    };

    const googleResponse = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forwardPayload),
      redirect: 'follow',
    });

    if (!googleResponse.ok) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: `Google Apps Script returned an unexpected HTTP error: ${googleResponse.status}`
        }),
        { status: 502, headers: corsHeaders }
      );
    }

    // Parse Google response JSON
    let responseData;
    try {
      responseData = await googleResponse.json();
    } catch (e) {
      const rawText = await googleResponse.text().catch(() => '');
      responseData = {
        status: 'success',
        enquiryId,
        message: "Thanks! Your enquiry has been received. I'll get back to you soon.",
        raw: rawText
      };
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: corsHeaders
    });

  } catch (err) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: err.message || 'Server error while proxying enquiry to Google Sheets.'
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

/**
 * Handle HTTP OPTIONS for preflight
 */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
