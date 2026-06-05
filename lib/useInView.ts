"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver hook that adds 'is-visible' class
 * to elements when they scroll into view. Replaces framer-motion's whileInView.
 *
 * Usage: const ref = useInViewClass(); then <div ref={ref} className="fade-in-up">
 */
export function useInViewClass(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.02, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

/**
 * Observes the container itself. When the container enters the viewport,
 * it adds 'is-visible' to the container and all child elements marked with [data-animate]
 * to execute synchronized staggered animations.
 */
export function useInViewChildren(options?: { threshold?: number; once?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.02, once = true } = options ?? {};

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.classList.add("is-visible");
          
          // Find and animate all marked child elements
          const children = container.querySelectorAll("[data-animate]");
          children.forEach((child) => {
            child.classList.add("is-visible");
          });

          if (once) observer.unobserve(container);
        } else if (!once) {
          container.classList.remove("is-visible");
          
          const children = container.querySelectorAll("[data-animate]");
          children.forEach((child) => {
            child.classList.remove("is-visible");
          });
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, once]);

  return containerRef;
}
