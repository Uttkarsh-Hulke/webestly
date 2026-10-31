/**
 * WebEstly Unified Contact Configuration
 *
 * Single source of truth for all contact details, social links, and external endpoints.
 * All sensitive or environment-specific values are read directly from Vite environment
 * variables (`import.meta.env`).
 *
 * ENVIRONMENT VARIABLES:
 * - VITE_CONTACT_EMAIL: Official studio inquiries email address
 * - VITE_WHATSAPP_NUMBER: WhatsApp Business phone in international format (e.g., 9198XXXXXXXX)
 * - VITE_PHONE_DISPLAY: Formatted phone number for display (e.g., "+91 98XXX XXXXX")
 * - VITE_CONTACT_API_ENDPOINT: Real form submission endpoint (e.g., Formspree / webhook)
 * - VITE_SITE_URL: Canonical public website URL (default: "https://webestly.com")
 */

const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};

// Environment variables (official contact email; never invent fake fallback data)
export const VITE_CONTACT_EMAIL = (env.VITE_CONTACT_EMAIL || "uttkarshhulke@gmail.com").trim();
export const VITE_WHATSAPP_NUMBER = (env.VITE_WHATSAPP_NUMBER || "").trim();
export const VITE_PHONE_DISPLAY = (env.VITE_PHONE_DISPLAY || "").trim();
export const VITE_CONTACT_API_ENDPOINT = (env.VITE_CONTACT_API_ENDPOINT || "").trim();
export const VITE_SITE_URL = (env.VITE_SITE_URL || "https://webestly.com").trim().replace(/\/$/, "");

// Predicate helpers for clean UI conditional rendering
export const hasEmail = Boolean(VITE_CONTACT_EMAIL && VITE_CONTACT_EMAIL.includes('@'));
export const hasWhatsApp = Boolean(VITE_WHATSAPP_NUMBER && VITE_WHATSAPP_NUMBER.replace(/\D/g, '').length >= 7);
export const hasPhone = Boolean(VITE_PHONE_DISPLAY && VITE_PHONE_DISPLAY.length > 0);
export const hasApiEndpoint = Boolean(VITE_CONTACT_API_ENDPOINT && VITE_CONTACT_API_ENDPOINT.startsWith('http'));

// WhatsApp configuration
export const WHATSAPP_NUMBER = VITE_WHATSAPP_NUMBER;
export const WHATSAPP_ENABLED = hasWhatsApp;
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi WebEstly! I'm interested in your web development and automation services. Please share more details.";

/**
 * Returns whether WhatsApp contact is currently active and configured with a real number.
 * @returns {boolean}
 */
export function isWhatsAppActive() {
  return hasWhatsApp;
}

/**
 * Returns a properly formatted and URL-encoded WhatsApp click-to-chat URL.
 * Sanitizes the number to ensure only digits are passed to wa.me.
 * Returns null if WhatsApp is not configured.
 *
 * @param {string} [customMessage] - Optional custom message to override the default.
 * @returns {string|null}
 */
export function getWhatsAppUrl(customMessage) {
  if (!hasWhatsApp) return null;
  const sanitizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!sanitizedNumber) return null;
  const message = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an accessible mailto: link with pre-encoded subject and body.
 * Returns null if no contact email is configured.
 *
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string|null}
 */
export function getMailtoUrl(subject, body) {
  if (!hasEmail) return null;
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${VITE_CONTACT_EMAIL}${params.length ? '?' + params.join('&') : ''}`;
}

/**
 * Generates a clean tel: link.
 * Returns null if no phone display is configured.
 *
 * @returns {string|null}
 */
export function getTelUrl() {
  if (!hasPhone) return null;
  const clean = VITE_PHONE_DISPLAY.replace(/[^\d+]/g, '');
  return clean ? `tel:${clean}` : null;
}
