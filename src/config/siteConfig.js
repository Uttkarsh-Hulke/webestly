import { 
  VITE_CONTACT_EMAIL, 
  VITE_PHONE_DISPLAY, 
  VITE_CONTACT_API_ENDPOINT, 
  VITE_SITE_URL,
  hasEmail,
  hasWhatsApp,
  hasPhone,
  hasApiEndpoint,
  WHATSAPP_NUMBER, 
  WHATSAPP_ENABLED,
  getWhatsAppUrl,
  getMailtoUrl,
  getTelUrl
} from './contact';

/**
 * Central Configuration for WebEstly
 * Single Source of Truth for Founder Identity, Brand Rules, and Site Configuration
 */
export const siteConfig = {
  founder: {
    name: "Uttkarsh Hulke",
    title: "MERN Stack Developer | AI Integration & Automation",
    education: "B.E. in Artificial Intelligence & Data Science",
    availability: "Available for Freelance Projects",
    bio: "I build modern websites, web applications and AI-powered automation solutions for businesses.",
    skillsList: "Frontend, Backend, AI & GenAI, Automation & Integration",
  },

  brand: {
    name: "WebEstly",
    fullName: "WebEstly by Uttkarsh Hulke",
    tagline: "Websites That Work for Your Business.",
    positioning:
      "I build modern websites, web applications and AI-powered automation solutions for businesses.",
  },

  // Contact details
  contact: {
    email: VITE_CONTACT_EMAIL,
    hasEmail,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappEnabled: WHATSAPP_ENABLED,
    hasWhatsApp,
    phoneDisplay: VITE_PHONE_DISPLAY,
    hasPhone,
    apiEndpoint: VITE_CONTACT_API_ENDPOINT,
    hasApiEndpoint,
    siteUrl: VITE_SITE_URL,
    getWhatsAppUrl,
    getMailtoUrl,
    getTelUrl,
    workingHours: "Monday - Saturday: 10:00 AM - 7:00 PM IST",
  },

  // Main Navigation: 4 Pages (Home, Services, My Work, Contact)
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "My Work", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ],

  disclaimers: {
    pricingNotice:
      "Prices are starting estimates. Your final quotation depends on your requirements and agreed scope.",
    thirdPartyNotice:
      "Domain registration and hosting fees are billed directly by respective infrastructure providers.",
  },
};
