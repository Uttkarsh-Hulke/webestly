import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Enhanced SEO metadata hook
 * Sets title, meta description, canonical link, og tags, twitter tags, robots, and JSON-LD.
 *
 * @param {string} title - Page title (without suffix)
 * @param {string} [description] - Page meta description
 * @param {Object} [options] - Additional SEO parameters
 * @param {string} [options.path] - Explicit pathname (defaults to window.location.pathname)
 * @param {boolean} [options.noIndex] - Set to true to prevent indexing (e.g. 404 page)
 * @param {Object} [options.schema] - JSON-LD structured data object
 */
export function usePageMeta(title, description, options = {}) {
  useEffect(() => {
    const siteUrl = siteConfig.contact.siteUrl || "https://webestly.com";
    const pathname = options.path || (typeof window !== 'undefined' ? window.location.pathname : '');
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

    // 1. Document Title
    const fullTitle = title 
      ? `${title} | WebEstly`
      : "WebEstly | Websites That Work for Your Business";
    document.title = fullTitle;

    // Helper to set or create a meta tag by selector
    const setMeta = (attrName, attrValue, content) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    // 3. Open Graph & Twitter Titles
    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);

    // 4. Open Graph URL & Canonical Link
    setMeta('property', 'og:url', canonicalUrl);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // 5. Robots Meta (noindex on 404 page)
    if (options.noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    }

    // 6. JSON-LD Structured Data
    let schemaScript = document.getElementById('page-jsonld');
    if (options.schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(options.schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, options.path, options.noIndex, options.schema]);
}
