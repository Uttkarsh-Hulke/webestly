/**
 * WebEstly Brand Mark (Icon Only)
 * Faithfully extracted from the supplied webestly_logo.svg
 * 
 * Geometry:
 * - Left stroke & base: var(--color-brand-navy) (#10243A) or white (#FFFFFF) if inverted
 * - Rising right stroke: var(--color-brand-orange) (#FF6500)
 * - Top-right fold accent: var(--color-brand-gold) (#FFB000)
 */
export default function WebEstlyMark({
  className = 'w-8 h-8',
  inverted = false,
  role = 'img',
  ariaLabel = 'WebEstly Mark'
}) {
  return (
    <svg
      viewBox="385 45 365 205"
      className={`shrink-0 ${className}`}
      role={role}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 2)">
        {/* Navy (or White) Left and Center Wing */}
        <path
          d="M390 52 L452 52 L500 157 L548 82 Q562 60 580 82 L630 157 L681 52 L743 52 L663 220 Q653 242 635 242 Q617 242 606 221 L565 151 L524 221 Q513 242 495 242 Q477 242 467 220 Z"
          fill={inverted ? '#FFFFFF' : 'var(--color-brand-navy)'}
        />
        {/* Primary Orange Right Wing */}
        <path
          d="M630 157 L681 52 L743 52 L663 220 Q653 242 635 242 Q617 242 606 221 L595 202 L631 157 Z"
          fill="var(--color-brand-orange)"
        />
        {/* Accent Gold Fold */}
        <path
          d="M681 52 L743 52 L703 134 L672 119 Z"
          fill="var(--color-brand-gold)"
        />
      </g>
    </svg>
  );
}
