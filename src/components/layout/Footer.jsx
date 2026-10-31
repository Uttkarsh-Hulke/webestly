import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, MessageCircle, Code2 } from 'lucide-react';
import WebEstlyLogo from '../branding/WebEstlyLogo';
import { siteConfig } from '../../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-slate-300 py-16 border-t border-slate-800 font-sans">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Founder Info (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="WebEstly Home">
              <WebEstlyLogo variant="reversed" size="md" />
            </Link>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              {siteConfig.founder.bio}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" aria-hidden="true" />
                <span>Founder: Uttkarsh Hulke &bull; B.E. AI &amp; Data Science</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Direct developer collaboration &bull; Transparent pricing</span>
              </div>

              {siteConfig.contact.hasEmail && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-300 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-white underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              )}

              {siteConfig.contact.hasWhatsApp && (
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <a 
                    href={siteConfig.contact.getWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Navigation (Col 3) */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Build & Contact (Col 4) */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              What I Build
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#business-website" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link to="/services#landing-page" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services#ai-integration" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link to="/services#business-automation" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  Business Automation
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs text-[var(--color-brand-orange)] hover:underline font-heading font-semibold"
              >
                <span>Get in touch for a project</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing & Transparency Notice */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300 font-semibold">Pricing Transparency:</strong> Quoted package prices are transparent starting estimates. Final quotes depend on agreed requirements, page count, and feature scope. Domain and hosting subscriptions are billed directly by respective infrastructure providers.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} WebEstly by Uttkarsh Hulke. Websites That Work for Your Business.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
