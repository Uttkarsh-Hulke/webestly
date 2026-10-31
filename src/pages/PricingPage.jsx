import { 
  Check, 
  X, 
  ArrowRight, 
  Info,
  MessageCircle,
  MessageSquare
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';
import { pricingPackages, thirdPartyCosts } from '../config/pricingData';
import { faqData } from '../config/faqData';
import Accordion from '../components/common/Accordion';
import { siteConfig } from '../config/siteConfig';
import { getPricingServiceSchema, getBreadcrumbSchema } from '../config/schemaData';

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getPricingServiceSchema(),
      getBreadcrumbSchema([{ label: "Pricing", path: "/pricing" }])
    ]
  };

  usePageMeta(
    "Website Packages & Pricing | WebEstly by Uttkarsh Hulke",
    "Clear, honest starting website development packages in INR (₹) by Uttkarsh Hulke. Starting from ₹7,999 for landing pages to ₹17,999 for 5-page business websites.",
    { path: "/pricing", schema: pricingSchema }
  );

  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Pricing" }]} />

        {/* Page Header */}
        <ScrollReveal className="mt-4 mb-10 max-w-3xl">
          <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
            Transparent Starting Rates
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            Clear Website Packages for Growing Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            Every quote includes complete source code ownership, mobile responsiveness, fast cellular performance, and zero mandatory monthly hosting lock-ins.
          </p>
        </ScrollReveal>

        {/* Mandatory Transparency Notice Box */}
        <ScrollReveal className="p-4 sm:p-6 rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-border)] mb-12">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[var(--color-brand-orange)] shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-1 text-xs sm:text-sm text-[var(--color-brand-slate)]">
              <p className="font-heading font-bold text-[var(--color-brand-navy)]">Important Quotation Notice:</p>
              <p className="leading-relaxed">
                Prices are starting estimates. Your final quotation depends on your requirements, content, integrations, and agreed project scope.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {pricingPackages.map((pkg, idx) => (
            <ScrollReveal
              key={pkg.id}
              delayMs={idx * 100}
              className={`rounded-[var(--radius-lg)] p-6 flex flex-col justify-between border transition-all duration-150 shadow-[var(--shadow-sm)] ${
                pkg.popular
                  ? 'border-2 border-[var(--color-brand-orange)] bg-white relative'
                  : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand-navy)]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--color-brand-orange)] text-[var(--color-brand-navy)] text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)] shadow-sm">
                    Recommended
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading font-bold text-lg text-[var(--color-brand-navy)]">
                    {pkg.name}
                  </h2>
                  <span className="text-xs font-semibold text-[var(--color-brand-slate)]">
                    {pkg.badge}
                  </span>
                </div>

                <p className="text-xs text-[var(--color-brand-slate)] min-h-[36px] mb-4 leading-relaxed font-normal">
                  {pkg.description}
                </p>

                <div className="pb-4 mb-4 border-b border-[var(--color-border)]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[var(--color-brand-navy)]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[var(--color-brand-slate)]">starting</span>
                  </div>
                  <span className="text-xs text-[var(--color-brand-dark-orange)] font-semibold block mt-1">
                    {pkg.billingNote}
                  </span>
                </div>

                <div className="space-y-3 mb-6 text-xs">
                  <div className="p-3 rounded-[var(--radius-sm)] bg-white border border-[var(--color-border)]">
                    <span className="font-heading font-bold text-[var(--color-brand-navy)] block mb-1">Best For:</span>
                    <span className="text-[var(--color-brand-slate)]">{pkg.targetAudience}</span>
                  </div>

                  <div className="flex items-center justify-between text-[var(--color-brand-slate)] pt-1">
                    <span>Scope:</span>
                    <span className="font-semibold text-[var(--color-brand-navy)]">{pkg.includedPages}</span>
                  </div>

                  <div className="flex items-center justify-between text-[var(--color-brand-slate)]">
                    <span>Timeline:</span>
                    <span className="font-semibold text-[var(--color-brand-navy)]">{pkg.timeline}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6 text-xs">
                  <p className="font-heading font-bold text-[var(--color-brand-navy)] uppercase tracking-wider mb-2">
                    Scope Details:
                  </p>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      {feat.included ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                      ) : (
                        <X className="w-4 h-4 text-slate-400 shrink-0 mt-1" aria-hidden="true" />
                      )}
                      <span className={feat.included ? 'text-[var(--color-brand-navy)] font-medium' : 'text-slate-400 line-through'}>
                        {feat.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
                <div className="text-xs text-[var(--color-brand-slate)] mb-2 bg-white p-2 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
                  <strong className="text-[var(--color-brand-navy)]">Revisions:</strong> {pkg.revisionRounds}
                </div>

                <Button
                  to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  variant={pkg.popular ? "primary" : "secondary"}
                  size="md"
                  className="w-full justify-center text-xs"
                >
                  Get This Plan
                </Button>

                {siteConfig.contact.hasWhatsApp && (
                  <a
                    href={siteConfig.contact.getWhatsAppUrl(`Hi Uttkarsh! I am interested in getting the ${pkg.name} (${pkg.price}) for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[36px] flex items-center justify-center gap-2 text-xs text-[var(--color-brand-navy)] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-[var(--radius-md)] font-medium transition-colors"
                    aria-label={`Inquire about ${pkg.name} via WhatsApp (opens in new window)`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing Negotiation Banner (Section 7) */}
        <ScrollReveal className="mb-16 p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-brand-warm)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)]">
                <MessageSquare className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
                <span>Budget &amp; Scope Flexibility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--color-brand-navy)]">
                Have a different budget? Let&apos;s discuss your requirements and find a suitable solution.
              </h2>
              <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                Final quotes depend on project scope. We can phase features or adjust deliverables to align with your business budget.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Button
                to="/contact?discussBudget=true"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                Discuss Your Budget
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Third-Party Expenses Transparency Guide */}
        <ScrollReveal className="mb-16 bg-[var(--color-surface)] rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 sm:p-8 shadow-[var(--shadow-sm)]">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-slate)] mb-2">
              Cost Transparency
            </p>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--color-brand-navy)]">
              Third-Party Infrastructure &amp; Operational Costs
            </h2>
            <p className="mt-2 text-sm text-[var(--color-brand-slate)] leading-relaxed">
              To keep our business completely honest, here is a transparent breakdown of third-party services that you pay directly to their respective providers. I do not inflate or hide these costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thirdPartyCosts.map((c, i) => (
              <div key={i} className="p-4 rounded-[var(--radius-md)] bg-white border border-[var(--color-border)] flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="font-heading font-bold text-base text-[var(--color-brand-navy)] mb-1">
                    {c.category}
                  </h3>
                  <div className="font-semibold text-xs text-[var(--color-brand-dark-orange)] mb-2">
                    {c.estimate}
                  </div>
                  <p className="text-xs text-[var(--color-brand-slate)] leading-relaxed">
                    {c.notes}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--color-border)] text-xs text-[var(--color-brand-slate)]">
                  <strong className="text-[var(--color-brand-navy)]">Provider:</strong> {c.provider}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing FAQs */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              badge="Pricing FAQs"
              badgeVariant="orange"
              title="Questions About Pricing &amp; Payments"
              subtitle="Straight answers on milestones, advance payments, and revision allowances."
              centered={true}
            />
          </ScrollReveal>
          <div className="mt-8">
            <Accordion items={faqData.slice(0, 5)} />
          </div>
        </section>

        {/* Final CTA */}
        <ScrollReveal className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-brand-navy)] text-white max-w-3xl mx-auto shadow-md">
          <h2 className="text-2xl font-heading font-extrabold text-white">
            Ready for a Written Scope &amp; Quote?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
            Send me your business details and what you want to achieve. I&apos;ll reply with a structured scope and starting quotation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
              Request Project Quotation
            </Button>
            <Button to="/portfolio" variant="secondary" className="bg-transparent text-white border-white/25 hover:bg-white/10 shadow-none" size="md">
              View Work Demos
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
