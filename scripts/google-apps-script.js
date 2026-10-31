/**
 * ============================================================================
 * WebEstly - Google Sheets & Google Apps Script Integration
 * ============================================================================
 * Spreadsheet Name: "WebEstly Customer Enquiries"
 * Target Sheet Name: "Enquiries"
 * Notification Email: uttkarshhulke@gmail.com
 *
 * This script runs as a Google Apps Script Web App. It receives enquiry submissions
 * forwarded by the Cloudflare Pages Function (or direct POST), validates and
 * sanitizes all inputs, prevents duplicate submissions, writes to Google Sheets,
 * and sends an instant email notification to Uttkarsh Hulke.
 *
 * ----------------------------------------------------------------------------
 * STEP-BY-STEP SETUP INSTRUCTIONS
 * ----------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.google.com).
 * 2. Create a new blank spreadsheet.
 * 3. Title the spreadsheet in the top left:
 *      WebEstly Customer Enquiries
 * 4. In the top navigation menu, click:
 *      Extensions > Apps Script
 * 5. In the Apps Script code editor, delete any existing code (such as myFunction).
 * 6. Paste this entire file contents into the editor.
 * 7. Click the floppy disk icon ("Save project") or press Ctrl+S.
 * 8. At the top right, click the blue "Deploy" button and choose "New deployment".
 * 9. In the modal:
 *      - Click the gear icon next to "Select type" and choose "Web app".
 *      - Description: WebEstly Customer Enquiry API
 *      - Execute as: Me (your Google account)
 *      - Who has access: Anyone (allows Cloudflare Pages Function to forward enquiries)
 * 10. Click "Deploy".
 * 11. Google will prompt you to "Authorize access". Click it, choose your account,
 *     click "Advanced" > "Go to Untitled project (unsafe)" > "Allow".
 * 12. Copy the "Web app URL" provided:
 *     (It looks like: https://script.google.com/macros/s/AKfycb.../exec)
 * 13. Add this URL as an environment secret:
 *     - Local: In your .env file:
 *         APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 *     - Cloudflare Pages: Dashboard > Your Project > Settings > Environment variables:
 *         Add variable: APPS_SCRIPT_URL (Encrypt / Secret)
 * ============================================================================
 */

const NOTIFICATION_EMAIL = "uttkarshhulke@gmail.com";
const SHEET_NAME = "Enquiries";

/**
 * Handle HTTP POST requests
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  try {
    lock.waitLock(10000);
  } catch (lockError) {
    return responseJSON({ 
      status: "error", 
      message: "Server is busy processing another request. Please try again in a few moments." 
    }, 429);
  }

  try {
    let data;

    // 1. Parse incoming payload (supports JSON or URL-encoded form data)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      return responseJSON({ status: "error", message: "No data payload received" }, 400);
    }

    // 2. Spam Honeypot Detection
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Silently accept bots without writing to sheet or spamming inbox
      return responseJSON({ 
        status: "success", 
        enquiryId: "SPAM-TRAPPED", 
        message: "Enquiry received." 
      });
    }

    // 3. Extract and Sanitize Inputs
    const customerName = sanitize(data.customerName || data.name || "");
    const email = sanitize(data.email || "");
    const businessName = sanitize(data.businessName || "Not Provided");
    const serviceRequired = sanitize(data.serviceRequired || "Website Development");
    const budget = sanitize(data.budget || data.approximateBudget || "Not Specified");
    const budgetFlexibility = sanitize(data.budgetFlexibility || "Not Specified");
    const projectDescription = sanitize(data.projectDescription || "");

    // 4. Server-Side Validation
    if (!customerName || !email || !projectDescription) {
      return responseJSON({
        status: "error",
        message: "Validation failed: Customer Name, Email, and Project Description are required."
      }, 400);
    }

    // Simple email pattern check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return responseJSON({
        status: "error",
        message: "Validation failed: A valid email address is required."
      }, 400);
    }

    // 5. Access or initialize spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.getSheets()[0];
      sheet.setName(SHEET_NAME);
    }

    // Initialize the exact 10 columns if the sheet is fresh
    const headers = [
      "Enquiry ID",
      "Submission Date",
      "Customer Name",
      "Email",
      "Business Name",
      "Service Required",
      "Budget",
      "Budget Flexibility",
      "Project Description",
      "Status"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold")
                 .setBackground("#10243A")
                 .setFontColor("#FFFFFF")
                 .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 6. Duplicate Submission Protection
    // Check recent submissions to avoid accidental double-clicks or duplicates
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const checkRows = Math.min(lastRow - 1, 10);
      const startRow = lastRow - checkRows + 1;
      const recentData = sheet.getRange(startRow, 1, checkRows, 10).getValues();

      for (let i = recentData.length - 1; i >= 0; i--) {
        const row = recentData[i];
        const existingEmail = String(row[3]).trim().toLowerCase();
        const existingDesc = String(row[8]).trim();

        if (existingEmail === email.toLowerCase() && existingDesc === projectDescription) {
          // Duplicate detected - return success with existing ID
          return responseJSON({
            status: "success",
            enquiryId: String(row[0]),
            duplicate: true,
            message: "Thanks! Your enquiry has been received. I'll get back to you soon."
          });
        }
      }
    }

    // 7. Generate Unique Enquiry ID & Format Timestamp
    const now = new Date();
    const submissionDate = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    const enquiryId = data.enquiryId || "ENQ-" + now.getTime() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
    const status = "New";

    // 8. Append Row to Google Sheet
    sheet.appendRow([
      enquiryId,
      submissionDate,
      customerName,
      email,
      businessName,
      serviceRequired,
      budget,
      budgetFlexibility,
      projectDescription,
      status
    ]);

    // Format new row text wrapping for readability
    const newRowIndex = sheet.getLastRow();
    sheet.getRange(newRowIndex, 1, 1, 10).setWrap(true);

    // 9. Send Email Notification to Founder
    try {
      const emailSubject = `[WebEstly Enquiry] ${customerName} (${businessName}) - ${serviceRequired}`;
      const emailBody = `
New Customer Project Enquiry on WebEstly!
===================================================
Enquiry ID:         ${enquiryId}
Submission Date:    ${submissionDate} (IST)
Status:             ${status}

CUSTOMER DETAILS
---------------------------------------------------
Name:               ${customerName}
Email:              ${email}
Business / Brand:   ${businessName}

PROJECT DETAILS
---------------------------------------------------
Service Required:   ${serviceRequired}
Budget:             ${budget}
Budget Flexibility: ${budgetFlexibility}

PROJECT DESCRIPTION:
---------------------------------------------------
${projectDescription}

===================================================
View the full enquiry database in Google Sheets:
"WebEstly Customer Enquiries"
      `.trim();

      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: emailSubject,
        body: emailBody,
        replyTo: email
      });
    } catch (emailErr) {
      Logger.log("Email notification note: " + emailErr.toString());
    }

    // 10. Return Verified Success Response
    return responseJSON({
      status: "success",
      enquiryId: enquiryId,
      submissionDate: submissionDate,
      message: "Thanks! Your enquiry has been received. I'll get back to you soon."
    });

  } catch (err) {
    Logger.log("Execution error: " + err.toString());
    return responseJSON({
      status: "error",
      message: "Server error storing enquiry: " + err.toString()
    }, 500);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle HTTP GET / healthcheck
 */
function doGet(e) {
  return responseJSON({
    status: "active",
    service: "WebEstly Google Sheets Enquiry Webhook",
    timestamp: new Date().toISOString()
  });
}

/**
 * Handle HTTP OPTIONS for CORS preflight
 */
function doOptions(e) {
  return responseJSON({ status: "ok" });
}

/**
 * Basic input sanitization
 */
function sanitize(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

/**
 * Helper to build JSON ContentService response
 */
function responseJSON(obj, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
