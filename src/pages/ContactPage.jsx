import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send,
  Copy,
  Check,
  UserCheck
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactForm from '../components/contact/ContactForm';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get('package') || '';
  const preselectedService = searchParams.get('service') || '';
  const preselectedInspiration = searchParams.get('inspiration') || '';
  const discussBudget = searchParams.get('discussBudget') === 'true' || searchParams.get('budget') === 'flexible';
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const officialEmail = "uttkarshhulke@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(officialEmail).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      });
    }
  };

  usePageMeta(
    "Contact & Project Enquiry | WebEstly by Uttkarsh Hulke",
    "Get in touch with Uttkarsh Hulke for an honest project quotation. Direct developer communication, itemized scope breakdown, and fast turnarounds for your business.",
    { path: "/contact" }
  );

  return (
    <div className="py-12 lg:py-16 bg-white min-h-[75vh]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        {/* Page Header (Section 10) */}
        <ScrollReveal className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            Let&apos;s Talk About Your Project.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            Tell me what you need. I&apos;ll review your requirements and get back to you.
          </p>
        </ScrollReveal>

        {/* 2-Column Desktop Layout: Left: Personal Intro & Email | Right: Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Short introduction & Email Contact (Cols 1 to 5) */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-brand-warm)] border border-[var(--color-border)] p-6 sm:p-8 space-y-6 shadow-[var(--shadow-sm)]">
              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
                  Direct Founder Collaboration
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--color-brand-navy)]">
                  Uttkarsh Hulke
                </h2>
                <p className="text-sm font-semibold text-[var(--color-brand-orange)] mt-1">
                  MERN Stack Developer | AI Integration &amp; Automation
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                When you reach out, you speak directly with me — the developer who will plan, design, and write the code for your project. No middle management or delayed communication.
              </p>

              {/* Email Contact Block */}
              <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brand-slate)] block">
                  Official Email Address:
                </span>
                <a
                  href={`mailto:${officialEmail}`}
                  className="text-base sm:text-lg font-heading font-bold text-[var(--color-brand-dark-orange)] hover:underline block break-all"
                >
                  {officialEmail}
                </a>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <Button
                    href={`mailto:${officialEmail}`}
                    variant="primary"
                    size="md"
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto justify-center"
                  >
                    Send Email
                  </Button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-heading font-bold text-[var(--color-brand-navy)] bg-white border border-[var(--color-border)] rounded-[var(--radius-md)] hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand-orange)]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--color-brand-slate)]" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)] flex items-center gap-2 text-xs text-[var(--color-brand-slate)]">
                <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Zero obligation. Detailed response with itemized scope.</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Clean Project Enquiry Form (Cols 6 to 12) */}
          <ScrollReveal delayMs={100} className="lg:col-span-7">
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
              <div className="pb-4 mb-6 border-b border-[var(--color-border)]">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--color-brand-navy)]">
                  Project Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-brand-slate)] mt-1">
                  Share your project vision to receive an itemized proposal and quotation.
                </p>
              </div>

              <ContactForm
                preselectedPackage={preselectedPackage}
                preselectedService={preselectedService}
                preselectedInspiration={preselectedInspiration}
                discussBudget={discussBudget}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
