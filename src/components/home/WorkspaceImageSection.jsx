import ScrollReveal from '../common/ScrollReveal';

/**
 * WorkspaceImageSection Component
 * Displays the high-resolution coding workspace photograph
 * showing a modern laptop with code, hands typing, and ambient workspace lighting.
 * 
 * Design specifications:
 * - Full-width photographic showcase
 * - Desktop height: 380–480px (responsive lg:h-[420px])
 * - Mobile height: 260–320px (responsive h-[280px] sm:h-[340px])
 * - object-cover with mobile focal alignment preserving laptop & hands
 * - Subtle navy tint overlay for brand cohesion (#10243A at 10%)
 * - No text, cards, badges, or buttons over the image
 * - Zero layout shift via fixed container aspect/height
 * - Reversible scroll reveal animation
 */
export default function WorkspaceImageSection() {
  return (
    <section 
      aria-label="Development Workspace" 
      className="w-full overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-brand-navy)]"
    >
      <ScrollReveal className="w-full">
        <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden">
          <img
            src="/images/workspace-coding.jpg"
            alt="Modern MERN stack development and AI automation workspace with coding on laptop"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-[62%_center] sm:object-center select-none"
          />
          {/* Subtle brand navy overlay for cohesive visual harmony without darkening photograph */}
          <div 
            className="absolute inset-0 bg-[#10243A]/10 pointer-events-none" 
            aria-hidden="true" 
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
