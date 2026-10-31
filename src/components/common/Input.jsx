export default function Input({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  className = "",
  ...rest
}) {
  const baseStyles =
    "w-full h-10 px-3 text-sm font-sans font-normal bg-[var(--color-bg)] text-[var(--color-text)] border rounded-[var(--radius-md)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed";
  const stateStyles = error
    ? "border-[var(--color-danger)] focus:ring-[var(--color-danger)] focus:border-[var(--color-danger)]"
    : "border-[var(--color-border)]";

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseStyles} ${stateStyles} ${className}`}
      {...rest}
    />
  );
}
