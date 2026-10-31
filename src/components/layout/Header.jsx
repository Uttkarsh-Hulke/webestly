import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import WebEstlyLogo from '../branding/WebEstlyLogo';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuToggleRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & focus management for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && mobileNavRef.current) {
        const focusables = mobileNavRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-150 bg-white/95 backdrop-blur-sm ${
        isScrolled
          ? 'border-b border-[var(--color-border)] py-2 shadow-[var(--shadow-sm)]'
          : 'border-b border-[var(--color-border)] py-4'
      }`}
    >
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Original Supplied Brand Logo */}
          <Link
            to="/"
            className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-orange)] rounded-[var(--radius-sm)] group"
            aria-label="WebEstly Home"
          >
            <WebEstlyLogo size="md" />
          </Link>

          {/* Desktop Navigation (4 Items: Home, Services, My Work, Contact) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-[15px] font-sans font-medium rounded-[var(--radius-md)] transition-colors duration-150 ${
                    isActive
                      ? 'text-[var(--color-brand-navy)] bg-[var(--color-surface)] font-semibold border-b-2 border-[var(--color-brand-orange)]'
                      : 'text-[var(--color-brand-slate)] hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-surface)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp CTA when configured */}
            {siteConfig.contact.hasWhatsApp && (
              <a
                href={siteConfig.contact.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] text-xs font-sans font-medium hover:bg-[var(--color-border)] transition-colors"
                aria-label="Chat with Uttkarsh on WhatsApp (opens in new window)"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[var(--color-success)]" aria-hidden="true" />
                <span className="hidden 2xl:inline">WhatsApp</span>
              </a>
            )}

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
            >
              Contact
            </Button>
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 rounded-[var(--radius-md)] text-[var(--color-brand-navy)] hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand-orange)]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open main navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={mobileNavRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="md:hidden border-b border-[var(--color-border)] bg-white px-4 pt-3 pb-6 shadow-[var(--shadow-md)]"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-[15px] font-sans font-medium rounded-[var(--radius-md)] transition-colors ${
                    isActive
                      ? 'text-[var(--color-brand-navy)] bg-[var(--color-surface)] font-semibold border-l-2 border-[var(--color-brand-orange)]'
                      : 'text-[var(--color-brand-slate)] hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-surface)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-3">
            {siteConfig.contact.hasWhatsApp && (
              <a
                href={siteConfig.contact.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] text-sm font-sans font-medium hover:bg-[var(--color-border)] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[var(--color-success)]" />
                <span>Chat on WhatsApp</span>
              </a>
            )}

            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={ArrowRight}
            >
              Get in Touch
            </Button>

            <p className="text-center text-xs text-[var(--color-brand-slate)]">
              Websites That Work for Your Business.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
