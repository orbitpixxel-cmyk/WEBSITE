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
  const { threshold = 0.15, once = true } = options ?? {};

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
 * Observes all children with [data-animate] class inside a container.
 * Useful for staggered animations on lists/grids.
 */
export function useInViewChildren(options?: { threshold?: number; once?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, once = true } = options ?? {};

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            (entry.target as HTMLElement).classList.remove("is-visible");
          }
        });
      },
      { threshold }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [threshold, once]);

  return containerRef;
}
