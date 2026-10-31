import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';

export default function CTASection() {
  return (
    <section className="py-12 lg:py-16 bg-[var(--color-brand-navy)] text-white border-b border-slate-800">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <ScrollReveal delayMs={50}>
            <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
              Start Your Project
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[var(--color-brand-orange)] mt-1">
              Let&apos;s build it.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <p className="text-base text-slate-300 leading-relaxed max-w-lg mx-auto font-normal">
              Tell me what your business does and what you want your website to achieve. I&apos;ll get back to you with an honest, itemized quotation.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={200} className="pt-2 flex justify-center">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Contact Me
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
