import { ArrowRight, Code2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';
import { getBreadcrumbSchema } from '../config/schemaData';

export default function PortfolioPage() {
  usePageMeta(
    "My Work | WebEstly by Uttkarsh Hulke",
    "Portfolio and web development projects by Uttkarsh Hulke. Accepting new client projects for business websites, landing pages, and web applications.",
    { 
      path: "/portfolio", 
      schema: getBreadcrumbSchema([{ label: "My Work", path: "/portfolio" }]) 
    }
  );

  return (
    <div className="py-12 lg:py-16 bg-white min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6 w-full">
        <Breadcrumbs items={[{ label: "My Work" }]} />

        <div className="max-w-2xl mx-auto text-center py-8 sm:py-12 space-y-6">
          <ScrollReveal delayMs={50}>
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-6 h-6 text-[var(--color-brand-orange)]" aria-hidden="true" />
            </div>
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
              Portfolio Status
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-extrabold tracking-tight text-[var(--color-brand-navy)] leading-tight">
              Client Projects in Development
            </h1>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
              I do not showcase fictional client work or fabricated testimonials. Genuine client websites and case studies will be published here upon delivery.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed font-normal">
              I am currently accepting new freelance projects for business websites, campaign landing pages, and custom MERN stack applications.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={200} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              Start a Project
            </Button>
            <Button
              to="/services"
              variant="secondary"
              size="md"
            >
              View Services &amp; Packages
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
