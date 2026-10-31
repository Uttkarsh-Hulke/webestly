import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function AboutFounderSection() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: About Me (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delayMs={50}>
              <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-2">
                About Me
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--color-brand-navy)] tracking-tight leading-tight">
                Direct developer collaboration with an honest, hands-on approach.
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <p className="text-base text-[var(--color-brand-slate)] leading-relaxed font-normal">
                I&apos;m a B.E. AI &amp; Data Science student and MERN Stack developer interested in building useful websites and web applications.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={150}>
              <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed font-normal">
                I run WebEstly as an independent web development practice. When you hire WebEstly, you speak and work directly with me — the person planning, designing, and coding your site from start to finish.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={200} className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-[var(--color-brand-navy)]">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[var(--color-brand-orange)]" aria-hidden="true" />
                <span>B.E. Artificial Intelligence &amp; Data Science</span>
              </span>
            </ScrollReveal>
          </div>

          {/* Right Column: Skills / Technologies (Cols 8-12) */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="p-6 sm:p-8 rounded-[var(--radius-lg)] bg-[var(--color-brand-warm)] border border-[var(--color-border)] space-y-6">
              <ScrollReveal delayMs={80}>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--color-brand-dark-orange)] mb-1">
                  Technologies I Work With
                </p>
                <h3 className="font-heading font-bold text-lg text-[var(--color-brand-navy)]">
                  Core Technical Stack
                </h3>
              </ScrollReveal>

              {/* Technologies shown as clean typographic elements (No bordered boxes) */}
              <ScrollReveal delayMs={140} className="space-y-3">
                <p className="text-base font-heading font-semibold text-[var(--color-brand-navy)] leading-relaxed">
                  {technologies.map((tech, idx) => (
                    <span key={tech}>
                      <span className="hover:text-[var(--color-brand-orange)] transition-colors">{tech}</span>
                      {idx < technologies.length - 1 && (
                        <span className="text-[var(--color-brand-orange)] font-normal mx-2 select-none" aria-hidden="true">
                          &bull;
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                <p className="text-xs text-[var(--color-brand-slate)] pt-2 leading-relaxed font-normal">
                  Clean semantic HTML5, modern CSS3 with Tailwind CSS, React single-page and multi-page apps, and RESTful backends with Node, Express, and MongoDB.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200} className="pt-4 border-t border-[var(--color-border)]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-dark-orange)] transition-colors group"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
