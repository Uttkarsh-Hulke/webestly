/**
 * SectionHeading Component
 * Clean typography-based headings without artificial badge/bordered boxes.
 */
export default function SectionHeading({
  eyebrow,
  badge, // alias for backwards compatibility
  title,
  subtitle,
  centered = false,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  dark = false
}) {
  const eyebrowText = eyebrow || badge;

  return (
    <div className={`space-y-2 ${centered ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrowText && (
        <p className={`text-xs font-heading font-bold uppercase tracking-wider ${
          dark ? 'text-[var(--color-brand-orange)]' : 'text-[var(--color-brand-dark-orange)]'
        }`}>
          {eyebrowText}
        </p>
      )}
      {title && (
        <h2 className={`text-2xl sm:text-3xl font-heading font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[var(--color-brand-navy)]'
        } ${titleClassName}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed font-normal ${
          dark ? 'text-slate-300' : 'text-[var(--color-brand-slate)]'
        } ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
