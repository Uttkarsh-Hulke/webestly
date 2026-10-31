import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <ScrollReveal delayMs={50}>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-[var(--color-brand-navy)] tracking-tight leading-tight">
              About Me
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <p className="text-xl sm:text-2xl text-[var(--color-brand-navy)] font-heading font-medium leading-relaxed max-w-2xl mx-auto">
              I&apos;m Uttkarsh, a B.E. Artificial Intelligence &amp; Data Science student and MERN Stack developer interested in building useful web applications and AI-powered solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <p className="text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal max-w-2xl mx-auto">
              Through WebEstly, I work directly with clients to turn ideas into clean code, practical websites, and smart automations that genuinely serve their daily operations.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={200} className="flex items-center justify-center pt-2 text-sm font-medium text-[var(--color-brand-navy)]">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
              <span>B.E. Artificial Intelligence &amp; Data Science</span>
            </span>
          </ScrollReveal>

          <ScrollReveal delayMs={250} className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-dark-orange)] transition-colors group"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
