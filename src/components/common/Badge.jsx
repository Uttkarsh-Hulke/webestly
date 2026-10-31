/**
 * WebEstly Standard Badge Component
 * Compliant with WCAG AA: uses dark orange #C2410C on light backgrounds, never #FF6500.
 */
export default function Badge({
  children,
  variant = "navy",
  className = "",
  size = "md"
}) {
  const variantStyles = {
    navy: "bg-[var(--color-surface)] text-[var(--color-brand-navy)] border-[var(--color-border)]",
    orange: "bg-[var(--color-surface)] text-[var(--color-brand-dark-orange)] border-[var(--color-border)]",
    primary: "bg-[var(--color-surface)] text-[var(--color-brand-dark-orange)] border-[var(--color-border)]",
    gold: "bg-[var(--color-surface)] text-[var(--color-brand-navy)] border-[var(--color-border)]",
    slate: "bg-[var(--color-surface)] text-[var(--color-brand-slate)] border-[var(--color-border)]",
    concept: "bg-white text-[var(--color-brand-slate)] border-[var(--color-border)] shadow-sm",
    success: "bg-emerald-50 text-[var(--color-success)] border-emerald-200",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 font-sans font-medium leading-none rounded-[var(--radius-sm)] border ${variantStyles[variant] || variantStyles.navy} ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
}
