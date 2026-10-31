import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import WebEstlyMark from '../components/branding/WebEstlyMark';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  usePageMeta(
    "Page Not Found (404) | WebEstly by Uttkarsh Hulke",
    "The page you were looking for could not be found. Explore our services, portfolio, or return to the homepage.",
    { noIndex: true }
  );

  return (
    <div className="py-12 lg:py-16 flex items-center justify-center bg-white min-h-[60vh]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 w-full">
        <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
          <div className="w-12 h-12 rounded-[var(--radius-md)] bg-white border border-[var(--color-border)] flex items-center justify-center mb-6 shadow-xs">
            <WebEstlyMark className="w-8 h-7" />
          </div>

          <div className="inline-block px-3 py-1 rounded-[var(--radius-sm)] bg-white text-[var(--color-danger)] border border-[var(--color-border)] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            Error 404 &bull; Page Not Found
          </div>

          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] mb-3">
            This Page Does Not Exist.
          </h1>

          <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed mb-6 font-normal">
            The link you followed may be outdated or mistyped. Let&apos;s get you back to the right place.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return to Homepage
            </Button>
            <Button to="/services" variant="secondary" size="md">
              Browse Services
            </Button>
            <Button to="/portfolio" variant="secondary" size="md">
              View Work Demos
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-slate)] mb-3">
              Navigation Links
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[var(--color-brand-navy)]">
              <Link to="/" className="hover:text-[var(--color-brand-dark-orange)] transition-colors">Home</Link>
              <span className="text-[var(--color-border)]">&bull;</span>
              <Link to="/services" className="hover:text-[var(--color-brand-dark-orange)] transition-colors">Services</Link>
              <span className="text-[var(--color-border)]">&bull;</span>
              <Link to="/portfolio" className="hover:text-[var(--color-brand-dark-orange)] transition-colors">My Work</Link>
              <span className="text-[var(--color-border)]">&bull;</span>
              <Link to="/contact" className="hover:text-[var(--color-brand-dark-orange)] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
