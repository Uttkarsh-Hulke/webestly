import { siteConfig } from './siteConfig';
import { faqData } from './faqData';
import { pricingPackages } from './pricingData';

const siteUrl = siteConfig.contact.siteUrl || "https://webestly.com";

/**
 * ProfessionalService / LocalBusiness Schema
 */
export function getLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebEstly by Uttkarsh Hulke",
    "alternateName": "WebEstly",
    "url": siteUrl,
    "logo": `${siteUrl}/webestly_logo.svg`,
    "image": `${siteUrl}/og-image.png`,
    "description": siteConfig.brand.positioning,
    "founder": {
      "@type": "Person",
      "name": "Uttkarsh Hulke",
      "jobTitle": "MERN Stack Developer | AI Integration & Automation"
    },
    "priceRange": "₹7,999 - ₹24,999+",
    "areaServed": [
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": [
      "Website Development",
      "Web Design",
      "Mobile-Friendly Website Design",
      "Custom Web Applications",
      "MERN Stack Web Development"
    ]
  };

  if (siteConfig.contact.hasEmail) {
    schema.email = siteConfig.contact.email;
  }
  if (siteConfig.contact.hasPhone) {
    schema.telephone = siteConfig.contact.phoneDisplay;
  }
  if (siteConfig.contact.hasWhatsApp) {
    schema.sameAs = [siteConfig.contact.getWhatsAppUrl()];
  }

  return schema;
}

/**
 * FAQPage Schema
 */
export function getFaqSchema(items = faqData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

/**
 * Service / OfferCatalog Schema for Pricing Packages
 */
export function getPricingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Design & Development Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "WebEstly by Uttkarsh Hulke",
      "url": siteUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Packages",
      "itemListElement": pricingPackages.map((pkg) => ({
        "@type": "Offer",
        "name": pkg.name,
        "description": pkg.description,
        "price": pkg.startingPriceNumeric,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `${siteUrl}/services`
      }))
    }
  };
}

/**
 * BreadcrumbList Schema for Inner Pages
 */
export function getBreadcrumbSchema(breadcrumbs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": b.label,
        "item": `${siteUrl}${b.path || ''}`
      }))
    ]
  };
}
