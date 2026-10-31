import WebEstlyMark from './WebEstlyMark';

/**
 * WebEstly Full Brand Logo Component
 * Single Source of Truth based strictly on the authentic webestly_logo.svg
 * 
 * Rules:
 * - Displays the authentic WebEstly logo exactly as supplied.
 * - Never adds founder name to or under the logo.
 * - Light variant uses /webestly_logo_transparent.svg (navy body, orange stroke, gold facet).
 * - Reversed variant uses /webestly_logo_reversed.svg (white body, orange stroke, gold facet).
 * - Mark-only variant uses WebEstlyMark.
 */
export default function WebEstlyLogo({
  variant = 'light',
  layout = 'standard',
  size = 'md',
  className = '',
  alt = 'WebEstly - Websites That Work for Your Business'
}) {
  const isReversed = variant === 'reversed' || variant === 'dark';

  if (layout === 'mark-only') {
    return (
      <WebEstlyMark
        inverted={isReversed}
        className={size === 'lg' ? 'w-12 h-9' : size === 'sm' ? 'w-8 h-6' : 'w-10 h-7'}
        classNameProp={className}
      />
    );
  }

  // Size styling for the authentic SVG logo
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    hero: 'h-16 sm:h-20',
  };

  const chosenSizeClass = sizeClasses[size] || sizeClasses.md;
  const logoSrc = isReversed ? '/webestly_logo_reversed.svg' : '/webestly_logo_transparent.svg';

  return (
    <img
      src={logoSrc}
      alt={alt}
      width={1200}
      height={420}
      className={`w-auto object-contain shrink-0 select-none ${chosenSizeClass} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
