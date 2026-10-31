import { useState } from 'react';
import { 
  Globe, 
  Target, 
  ShoppingCart, 
  Cpu, 
  Workflow, 
  Sparkles,
  Network,
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  ChevronUp,
  Layers,
  MessageSquare
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import Accordion from '../components/common/Accordion';
import ScrollReveal from '../components/common/ScrollReveal';
import { servicesData } from '../config/servicesData';
import { pricingPackages } from '../config/pricingData';
import { faqData } from '../config/faqData';
import { getBreadcrumbSchema } from '../config/schemaData';

export default function ServicesPage() {
  usePageMeta(
    "Services & Pricing | WebEstly by Uttkarsh Hulke",
    "Professional web development, AI integration, and workflow automation services by Uttkarsh Hulke. Transparent starting rates and direct founder collaboration.",
    {
      path: "/services",
      schema: getBreadcrumbSchema([{ label: "Services", path: "/services" }])
    }
  );

  // Track expanded state for each service card's "Learn More" drawer
  const [expandedServices, setExpandedServices] = useState({});

  const toggleLearnMore = (id) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'business-website':
        return Globe;
      case 'landing-page':
        return Target;
      case 'ecommerce-website':
        return ShoppingCart;
      case 'custom-web-applications':
        return Cpu;
      case 'business-automation':
        return Workflow;
      case 'ai-integration':
        return Sparkles;
      case 'api-integration':
        return Network;
      default:
        return Layers;
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Page Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[var(--color-brand-orange)] mb-2">
            Services &amp; Capabilities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            Web Development &amp; AI Automation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            Direct developer collaboration with transparent starting rates, clean code ownership, and practical solutions engineered for your business operations.
          </p>
        </ScrollReveal>

        {/* Concise Symmetrical Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
          {servicesData.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            const isExpanded = Boolean(expandedServices[service.id]);

            return (
              <ScrollReveal
                key={service.id}
                delayMs={idx * 60}
                className="h-full flex flex-col"
              >
                <div className="rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] p-6 shadow-[var(--shadow-sm)] hover:border-[var(--color-brand-orange)] transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-brand-navy)] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider px-2 py-1 rounded-[var(--radius-sm)] bg-[var(--color-surface)] text-[var(--color-brand-dark-orange)] border border-[var(--color-border)]">
                        {service.badge}
                      </span>
                    </div>

                    {/* Service Name */}
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--color-brand-navy)] min-h-[56px] flex items-center leading-snug">
                      {service.title}
                    </h2>

                    {/* One-Sentence Description */}
                    <p className="mt-3 text-base text-[var(--color-brand-slate)] leading-relaxed font-normal min-h-[48px]">
                      {service.description}
                    </p>

                    {/* Aligned Starting Price */}
                    <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-brand-slate)] block">
                        Starting Price:
                      </span>
                      <div className="text-lg sm:text-xl font-heading font-bold text-[var(--color-brand-dark-orange)] mt-1">
                        {service.startingPrice}
                      </div>
                    </div>

                    {/* Expandable Learn More Drawer */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-4 text-xs animate-fadeIn">
                        <div>
                          <h3 className="font-heading font-bold text-[var(--color-brand-navy)] uppercase tracking-wider mb-2">
                            What&apos;s Included:
                          </h3>
                          <ul className="space-y-1.5">
                            {service.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2 text-[var(--color-brand-navy)]">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {service.idealFor && (
                          <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--color-surface)] border border-[var(--color-border)]">
                            <span className="font-heading font-bold text-[var(--color-brand-navy)] block mb-1">
                              Suitable For:
                            </span>
                            <span className="text-[var(--color-brand-slate)] leading-relaxed">
                              {service.idealFor}
                            </span>
                          </div>
                        )}

                        {service.exclusions && (
                          <div className="p-3 rounded-[var(--radius-sm)] bg-amber-50/70 border border-amber-200 text-amber-900 leading-relaxed">
                            <span className="font-heading font-bold block mb-1">Scope Note:</span>
                            <span>{service.exclusions}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Aligned Bottom Actions */}
                  <div className="mt-auto pt-6 border-t border-[var(--color-border)] space-y-3">
                    <button
                      type="button"
                      onClick={() => toggleLearnMore(service.id)}
                      className="w-full min-h-[36px] flex items-center justify-center gap-2 text-xs font-heading font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-dark-orange)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand-orange)]"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
                      )}
                    </button>

                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      size="md"
                      className="w-full justify-center text-xs"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
                Final quotations depend on project scope, required features, and integrations. We can adjust the deliverable phases to match your budget priorities.
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

        {/* Starting Packages Quick Summary */}
        <section id="packages" className="scroll-mt-16 pt-8 pb-16 border-t border-[var(--color-border)]">
          <ScrollReveal className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[var(--color-brand-orange)] mb-2">
              Website Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-navy)] tracking-tight">
              Transparent Website Packages
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
              Direct developer rates with full source code ownership, zero monthly retainers, and fast cellular loading speeds.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
            {pricingPackages.map((pkg, idx) => (
              <ScrollReveal
                key={pkg.id}
                delayMs={idx * 80}
                className={`rounded-[var(--radius-lg)] p-6 flex flex-col justify-between border transition-all duration-150 shadow-[var(--shadow-sm)] ${
                  pkg.popular
                    ? 'border-2 border-[var(--color-brand-orange)] bg-white relative'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand-navy)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg text-[var(--color-brand-navy)]">
                      {pkg.name}
                    </h3>
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
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] space-y-2 mt-auto">
                  <Button
                    to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.popular ? "primary" : "secondary"}
                    size="md"
                    className="w-full justify-center text-xs"
                  >
                    Select Plan
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              badge="Frequently Asked Questions"
              badgeVariant="orange"
              title="Common Questions About Working Together"
              subtitle="Clear answers on deliverables, scope handovers, and flexible collaboration."
              centered={true}
            />
          </ScrollReveal>
          <div className="mt-8">
            <Accordion items={faqData.slice(0, 6)} />
          </div>
        </section>

        {/* Bottom CTA */}
        <ScrollReveal className="max-w-3xl mx-auto p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-brand-navy)] text-white shadow-md">
          <div className="space-y-3">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Ready to start your project?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal max-w-xl">
              Send me your project details and what you need your website or automation to achieve. I&apos;ll review and reply with an itemized scope.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Discuss Your Project
              </Button>
              <Button to="/pricing" variant="secondary" className="bg-transparent text-white border-white/25 hover:bg-white/10 shadow-none" size="md">
                View All Pricing
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
