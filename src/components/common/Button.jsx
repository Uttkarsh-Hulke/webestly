import { Link } from 'react-router-dom';

/**
 * WebEstly Standard Button Component
 * Enforces strict brand button rules:
 * - Primary: Orange background with Navy text (contrast 5.32:1, WCAG AA compliant).
 *   Never white text on orange.
 * - Secondary: White background, 1px border, Navy text.
 * - Ghost: Transparent, hover surface, Navy text.
 * - Inverted/Navy-section variant: White outline or subtle glass for dark sections.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  target,
  rel,
  ariaLabel
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold transition-all duration-150 rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-orange)] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-4 py-2 gap-2 text-sm",           // 8px 16px
    md: "px-4 py-2 gap-2 text-[15px]",       // 10px 20px (15px meets 15-17px typography requirement)
    lg: "px-6 py-3 gap-2 text-base",         // 12px 24px (16px meets 15-17px typography requirement)
  };

  const variantStyles = {
    // Primary: STRICTLY Orange background with Navy text (#10243A on #FF6500)
    primary:
      "bg-[var(--color-brand-orange)] hover:bg-[var(--color-primary-hover)] text-[var(--color-brand-navy)] border border-transparent shadow-[var(--shadow-sm)] active:translate-y-px",
    
    // Secondary: Light surface with border
    secondary:
      "bg-[var(--color-bg)] hover:bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] active:translate-y-px",
    
    // Ghost: Transparent hover
    ghost:
      "bg-transparent hover:bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-transparent",
    
    // Outline: Alias for secondary
    outline:
      "bg-[var(--color-bg)] hover:bg-[var(--color-surface)] text-[var(--color-brand-navy)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]",
    
    // White / On-Dark Secondary
    white:
      "bg-white hover:bg-slate-50 text-[var(--color-brand-navy)] border border-transparent shadow-[var(--shadow-sm)]",

    // On-Dark Outline
    darkOutline:
      "bg-transparent hover:bg-white/10 text-white border border-white/30",
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
