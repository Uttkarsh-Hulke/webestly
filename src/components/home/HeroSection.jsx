import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import WebEstlyLogo from '../branding/WebEstlyLogo';
import ScrollReveal from '../common/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      {/* 
        Horizontal 50/50 Split Hero:
        - CSS Grid: grid-template-columns: 1fr; grid-template-rows: 1fr 1fr;
        - Vertically stacked with two equal full-width horizontal sections (50% height each).
        - Top Half: Navy background (#10243A) with Personal Introduction.
        - Bottom Half: White background (#FFFFFF) with WebEstly Brand Showcase.
      */}
      <div 
        className="grid grid-cols-1 grid-rows-2 w-full min-h-[640px] lg:min-h-[720px]"
        style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr 1fr' }}
      >
        {/* TOP HALF: 50% height (Navy #10243A) */}
        <div className="bg-[var(--color-brand-navy)] text-white w-full py-12 lg:py-16 flex flex-col justify-center">
          <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <ScrollReveal delayMs={50} className="space-y-2">
                <p className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
                  FREELANCE DEVELOPER
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold tracking-tight text-white leading-tight">
                  Hi, I&apos;m Uttkarsh Hulke.
                </h1>
              </ScrollReveal>

              <ScrollReveal delayMs={100}>
                <p className="text-xl sm:text-2xl lg:text-[26px] font-heading font-bold text-[var(--color-brand-orange)] tracking-tight">
                  MERN Stack Developer | AI Integration &amp; Automation
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={150}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                  I build modern websites, web applications and AI-powered automation solutions for businesses.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Get a Website
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                >
                  Contact Me
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* BOTTOM HALF: 50% height (White #FFFFFF) */}
        <div className="bg-white text-[var(--color-brand-navy)] w-full py-12 lg:py-16 flex flex-col justify-center border-t border-[var(--color-border)]">
          <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              {/* Display original supplied WebEstly logo only */}
              <ScrollReveal delayMs={80} className="flex justify-center">
                <WebEstlyLogo
                  size="hero"
                  className="max-w-[260px] sm:max-w-[320px] mx-auto"
                  alt="WebEstly - Websites That Work for Your Business"
                />
              </ScrollReveal>

              <ScrollReveal delayMs={140}>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-[var(--color-brand-navy)] tracking-tight leading-tight">
                  Websites That Work for Your Business.
                </h2>
              </ScrollReveal>

              <ScrollReveal delayMs={200}>
                <p className="text-base sm:text-lg text-[var(--color-brand-slate)] leading-relaxed font-normal max-w-2xl mx-auto">
                  Practical web development, AI integration and automation solutions for growing businesses.
                </p>
              </ScrollReveal>

              {/* Three short points */}
              <ScrollReveal delayMs={260}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2 text-[15px] sm:text-base font-medium text-[var(--color-brand-navy)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Responsive websites.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Modern web development.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Direct developer collaboration.</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
