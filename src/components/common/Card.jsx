export default function Card({
  children,
  className = "",
  as: Component = "div",
  interactive = false,
  ...rest
}) {
  const baseStyles =
    "bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-150";
  const interactiveStyles = interactive ? "hover:shadow-[var(--shadow-md)]" : "";

  return (
    <Component
      className={`${baseStyles} ${interactiveStyles} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
