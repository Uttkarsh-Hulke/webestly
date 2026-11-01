/**
 * ============================================================================
 * WebEstly - Google Sheets & Google Apps Script Backend Integration
 * ============================================================================
 * Spreadsheet Name: "WebEstly Customer Enquiries"
 * Target Sheet Tab:  "Enquiries"
 * Notification Email: uttkarshhulke@gmail.com
 * Timezone:           Asia/Kolkata (IST)
 * Default Status:     New
 *
 * This script runs as a Google Apps Script Web App. It receives enquiry submissions
 * forwarded by the Cloudflare Worker proxy (/api/enquiries) or directly from the
 * React frontend contact form, validates and sanitizes all inputs, prevents duplicate
 * submissions, records enquiries in Google Sheets, and sends instant email alerts.
 * ============================================================================
 */

const NOTIFICATION_EMAIL = "uttkarshhulke@gmail.com";
const SPREADSHEET_NAME = "WebEstly Customer Enquiries";
const SHEET_NAME = "Enquiries";

/**
 * Access or create the target spreadsheet:
 * Supports container-bound execution (Extensions > Apps Script inside a Sheet)
 * and standalone execution (from script.google.com).
 */
function getEnquirySpreadsheet() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;

  const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  return SpreadsheetApp.create(SPREADSHEET_NAME);
}

/**
 * Handle HTTP POST requests (Enquiry Submissions)
 */
function doPost(e) {
  // 1. Concurrency control: LockService prevents simultaneous write conflicts
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // Wait up to 10 seconds
  } catch (lockError) {
    return responseJSON({ 
      status: "error", 
      message: "Server is busy processing another request. Please try again in a few moments." 
    }, 429);
  }

  try {
    let data;

    // 2. Parse incoming payload (supports JSON payload from Cloudflare/fetch)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      return responseJSON({ 
        status: "error", 
        message: "No data payload received." 
      }, 400);
    }

    // 3. Honeypot Spam Protection
    if (data.honeypot && String(data.honeypot).trim() !== "") {
      return responseJSON({ 
        status: "success", 
        enquiryId: "SPAM-TRAPPED", 
        message: "Thanks! Your enquiry has been received." 
      });
    }

    // 4. Extract and sanitize inputs (matches ContactForm.jsx & functions/api/enquiries.js)
    const customerName = sanitize(data.customerName || data.name || "");
    const email = sanitize(data.email || "");
    const businessName = sanitize(data.businessName || "Not Provided");
    const serviceRequired = sanitize(data.serviceRequired || "Website Development");
    const budget = sanitize(data.budget || data.approximateBudget || "Not Specified");
    const budgetFlexibility = sanitize(data.budgetFlexibility || "Not Specified");
    const projectDescription = sanitize(data.projectDescription || "");

    // 5. Server-side validation for required fields
    if (!customerName || !email || !projectDescription) {
      return responseJSON({
        status: "error",
        message: "Validation failed: Customer Name, Email, and Project Description are required."
      }, 400);
    }

    // Basic email pattern check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return responseJSON({
        status: "error",
        message: "Validation failed: A valid email address is required."
      }, 400);
    }

    // 6. Access or initialize spreadsheet and tab
    const ss = getEnquirySpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.getSheets()[0];
      sheet.setName(SHEET_NAME);
    }

    // Exact 10 columns as required
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

    // 7. Duplicate Submission Prevention (inspect last 10 submissions)
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
          return responseJSON({
            status: "success",
            enquiryId: String(row[0]),
            duplicate: true,
            message: "Thanks! Your enquiry has been received. I'll get back to you soon."
          });
        }
      }
    }

    // 8. Timestamps in Indian Standard Time (IST) & Unique Enquiry ID
    const now = new Date();
    const submissionDate = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    const enquiryId = data.enquiryId || "ENQ-" + now.getTime() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
    const status = "New";

    // 9. Append Row to Google Sheet
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

    // 10. Send Email Notification to Founder
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
Spreadsheet: "${SPREADSHEET_NAME}"
View URL: ${ss.getUrl()}
      `.trim();

      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: emailSubject,
        body: emailBody,
        replyTo: email
      });
    } catch (emailErr) {
      Logger.log("Email notification error: " + emailErr.toString());
    }

    // 11. Return Verified JSON Success Response
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
 * Handle HTTP GET / Health check
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
