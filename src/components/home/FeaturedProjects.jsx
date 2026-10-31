import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, GraduationCap, Compass, ExternalLink } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import ProjectArtwork from '../portfolio/ProjectArtwork';
import ScrollReveal from '../common/ScrollReveal';
import { portfolioData } from '../../config/portfolioData';

export default function FeaturedProjects() {
  const getIcon = (id) => {
    switch (id) {
      case 'daily-roast':
        return Coffee;
      case 'summit-learning':
        return GraduationCap;
      case 'forma-interiors':
        return Compass;
      default:
        return Coffee;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-[var(--layout-max-width)] mx-auto px-4 sm:px-6">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Selected Work"
            badgeVariant="orange"
            title="Concept Projects &amp; Live Demonstrations"
            subtitle="I build end-to-end concept websites to demonstrate practical layout structures, mobile responsiveness, and clean code for various industries."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[var(--color-brand-navy)] hover:text-[var(--color-brand-dark-orange)] transition-colors group shrink-0 min-h-[44px]"
          >
            <span>View All Concept Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.map((project, idx) => {
            const Icon = getIcon(project.id);
            return (
              <ScrollReveal
                key={project.id}
                delayMs={idx * 120}
                className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col justify-between hover:border-[var(--color-brand-orange)] transition-colors duration-150 shadow-[var(--shadow-sm)]"
              >
                <div>
                  {/* SVG Vector Artwork Header */}
                  <div className="h-48 relative overflow-hidden border-b border-[var(--color-border)]">
                    <ProjectArtwork projectId={project.id} className="w-full h-full object-cover" />

                    {/* Overlay Header Elements */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <span className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-brand-navy)] flex items-center justify-center text-white shadow-sm">
                        <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                      </span>
                      <Badge variant="concept" size="sm">
                        Concept Project
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10 pointer-events-none">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--color-brand-gold)] font-semibold">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs text-[var(--color-brand-dark-orange)] font-heading font-bold uppercase tracking-wider mb-2">
                      {project.specs.deliverableType}
                    </p>
                    <p className="text-sm text-[var(--color-brand-slate)] leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-2">
                      <span className="text-xs font-heading font-bold text-[var(--color-brand-navy)] uppercase tracking-wider block">
                        Demonstrated Features:
                      </span>
                      <ul className="text-xs text-[var(--color-brand-slate)] space-y-2">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" aria-hidden="true" />
                            <span className="font-medium text-[var(--color-brand-navy)] truncate">{f.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="w-full min-h-[40px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white hover:bg-[var(--color-surface)] text-sm font-semibold text-[var(--color-brand-navy)] transition-colors duration-150 shadow-sm"
                  >
                    <span>View Project Details</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Clear Transparency Banner */}
        <ScrollReveal delayMs={200} className="mt-8 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-brand-slate)]">
          <strong className="text-[var(--color-brand-navy)] font-semibold">Honest Disclosure:</strong> To maintain complete integrity, all projects shown are original demonstration websites built by Uttkarsh Hulke to showcase design aesthetics, mobile UX, and full-stack architecture.
        </ScrollReveal>
      </div>
    </section>
  );
}
