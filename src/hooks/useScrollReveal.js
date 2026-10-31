import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal Hook (Reversible Scroll Animations)
 * Fully reversible: resets animation state when leaving viewport in either direction,
 * and replays smoothly when re-entering viewport whether scrolling up or down.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = false // Reversible: replay in both directions
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, always stay visible with zero animation
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(node);
        }
      } else {
        // Reset state when leaving viewport so animation replays upon re-entry
        setIsVisible(false);
      }
    }, { threshold, rootMargin });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
