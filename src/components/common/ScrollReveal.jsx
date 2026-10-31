import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * ScrollReveal Component
 * Reversible scroll animation:
 * - When entering viewport (scrolling down or up): smoothly transitions opacity 0 -> 1 and translateY 25px -> 0px over 700ms.
 * - When leaving viewport: resets state to opacity 0 and translateY 25px so it replays upon next entry.
 * - Staggered delay applied on entry; immediate reset on exit for instant readiness.
 * - Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  as: Component = 'div',
  threshold = 0.12,
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, triggerOnce: false });

  return (
    <Component
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delayMs}ms` : '0ms',
      }}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
