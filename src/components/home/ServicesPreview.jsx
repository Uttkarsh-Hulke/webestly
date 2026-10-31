import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Sparkles, Workflow, Network, ArrowRight, ChevronDown, Check, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';

export default function ServicesPreview() {
  const [expandedServices, setExpandedServices] = useState({});

  const toggleService = (id) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const services = [
    {
      id: "website-development",
      icon: Globe,
      title: "Website Development",
      summary: "Professional websites that help businesses build their online presence.",
      details:
        "Custom multi-page business websites, high-converting landing pages, and responsive web applications built with modern frontend and backend standards. Clean, maintainable code engineered for reliability, fast load times, and seamless usability.",
      features: [
        "Responsive across mobile, tablet & desktop",
        "Landing pages & multi-page websites",
        "Clean semantic code & fast load times",
        "Contact inquiry forms & SEO basics",
      ],
      link: "/services#business-website",
    },
    {
      id: "ai-integration",
      icon: Sparkles,
      title: "AI Integration",
      summary:
        "Add AI-powered chatbots, intelligent assistants and LLM features to your applications.",
      details:
        "Add generative AI and large language model capabilities directly to your digital products. Seamlessly connect Gemini API, OpenAI, or custom LLM endpoints to automate customer inquiries, document summarization, and interactive workflows.",
      features: [
        "Gemini & LLM API integration",
        "Custom AI chatbots & assistants",
        "Prompt engineering & output parsing",
        "Content & document automation",
      ],
      link: "/services#ai-integration",
    },
    {
      id: "business-automation",
      icon: Workflow,
      title: "Business Automation",
      summary: "Automate repetitive tasks, customer enquiries and everyday business workflows.",
      details:
        "Streamline day-to-day operations by connecting your website to automated backend processes. Eliminate repetitive manual tasks through automated inquiry routing, instant customer alerts, and scheduled jobs.",
      features: [
        "Routine task & process automation",
        "Automated email & WhatsApp notifications",
        "Data handling & spreadsheet sync",
        "Error logging & fallback monitoring",
      ],
      link: "/services#business-automation",
    },
    {
      id: "api-integration",
      icon: Network,
      title: "API Integration",
      summary: "Connect applications with external services, APIs and third-party platforms.",
      details:
        "Extend the capability of your website or app by connecting external services. Seamlessly integrate payment gateways, customer relationship platforms, authentication providers, and third-party REST APIs.",
      features: [
        "Payment gateway integration (UPI, Razorpay)",
        "Third-party REST API connectivity",
        "Secure webhooks & data sync",
        "External platform integrations",
      ],
      link: "/services#api-integration",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[var(--color-brand-warm)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        {/* Section Heading with Natural Hierarchy */}
        <ScrollReveal className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold tracking-tight text-[var(--color-brand-navy)] leading-tight">
            What I Build?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal">
            Websites, web applications, and AI-powered automation solutions designed around your business needs.
          </p>
        </ScrollReveal>

        {/* 4-Column Symmetrical Service Grid: Equal widths, equal heights, aligned actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = Boolean(expandedServices[item.id]);

            return (
              <ScrollReveal
                key={item.id}
                delayMs={idx * 100}
                className="h-full flex flex-col"
              >
                <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 sm:p-8 flex flex-col h-full hover:border-[var(--color-brand-orange)] transition-colors duration-150 shadow-[var(--shadow-sm)]">
                  {/* Top Content Area */}
                  <div>
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] flex items-center justify-center mb-4 shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-brand-orange)]" aria-hidden="true" />
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[var(--color-brand-navy)] mb-2 min-h-[56px] flex items-center">
                      {item.title}
                    </h3>

                    <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    {/* Smooth inline expanded content */}
                    <div
                      id={`service-details-${item.id}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden space-y-3">
                        <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed border-t border-[var(--color-border)] pt-3 font-normal">
                          {item.details}
                        </p>
                        <ul className="space-y-1.5 pt-1">
                          {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs text-[var(--color-brand-navy)]">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions Area: Pushed to bottom via mt-auto for perfect vertical alignment */}
                  <div className="mt-auto pt-6 flex flex-col">
                    {/* Learn More Interactive Button */}
                    <button
                      type="button"
                      onClick={() => toggleService(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`service-details-${item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[var(--color-brand-orange)] hover:text-[var(--color-brand-dark-orange)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand-orange)] rounded-[var(--radius-sm)]"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Footer Link to Services page */}
                    <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-dark-orange)] transition-colors group"
                      >
                        <span>View details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pricing Negotiation Banner (Section 7) */}
        <ScrollReveal className="mt-12 p-6 sm:p-8 rounded-[var(--radius-lg)] bg-white border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)]">
                <MessageSquare className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
                <span>Budget Flexibility</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--color-brand-navy)]">
                Have a different budget? Let&apos;s discuss your requirements and find a suitable solution.
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                Final quotes depend on project scope. We can tailor the deliverable milestones to accommodate your specific budget.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Button
                to="/contact?discussBudget=true"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                Discuss Your Budget
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
