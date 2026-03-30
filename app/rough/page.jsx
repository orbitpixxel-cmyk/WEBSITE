"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, ScrollStack, ScrollStackItem } from '@/components/ui/card';
import CardAni from '@/components/ui/card-animation/cardAni';
import { initScrollReveal } from '@/utils/scrollReveal';
import SmoothScrolling from '@/components/ui/SmoothScrolling';

export default function RoughPage() {

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Handle scroll progress and active section
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const currentScrollY = window.scrollY;
        const progress = currentScrollY / totalHeight;
        setScrollProgress(progress);

        // Determine active section based on scroll position
        const sections = ['hero', 'about', 'slack', 'changingCards', 'services'];
        const sectionElements = sections.map(id => document.getElementById(id));
        const viewportHeight = window.innerHeight;
        const viewportMiddle = currentScrollY + viewportHeight / 2;

        // Find active section with improved efficiency
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const section = sectionElements[i];
          if (section && viewportMiddle >= section.offsetTop) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      });
    };

    // Throttle scroll events for better performance
    let scrollTimeout;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 10); // Small timeout to limit executions
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Initialize scroll reveal animations (now one-sided and lightweight)
    const { cleanup } = initScrollReveal();

    // Parallax and tilt logic - more efficient with selectors
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length > 0) {
      revealElements.forEach(element => {
        if (element.classList.contains('parallax-scroll')) {
          const speed = element.getAttribute('data-speed') || 0.5;
          element.style.setProperty('--parallax-factor', `${speed * 100}px`);
        }
        if (element.classList.contains('tilt-on-scroll')) {
          const tiltX = element.getAttribute('data-tilt-x') || 10;
          const tiltY = element.getAttribute('data-tilt-y') || 5;
          element.style.setProperty('--tilt-factor-x', `${tiltX}deg`);
          element.style.setProperty('--tilt-factor-y', `${tiltY}deg`);
        }
      });
    }

    // Initial call to set everything up
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimeout);
      cleanup();
    };
  }, [activeSection]);

  return (
    <SmoothScrolling>
      <div>
        <section id="slack" className="relative">
          <CardAni />
        </section>
      </div>
    </SmoothScrolling>
  );
}

