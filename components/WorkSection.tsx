"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import WorkCard from "@/components/ui/WorkCard";

// File metadata derived from /public/webimages
const workItems = [
    {
        filename: "admindashboard.jpg",
        title: "Admin Dashboard",
        outcome: "Centralized ops dashboard for handoffs & automations",
        tags: ["Dashboard", "Automation"],
    },
    {
        filename: "doctorapp.jpg",
        title: "Doctor App",
        outcome: "Clean system for patient management and scheduling",
        tags: ["Website", "Dashboard"],
    },
    {
        filename: "duckhawk.jpg",
        title: "Duck Hawk",
        outcome: "Growth-ready landing page for product launch",
        tags: ["Website", "Growth"],
    },
    {
        filename: "growmint.png",
        title: "Grow Mint",
        outcome: "Weekly experiments & conversion tracking dashboard",
        tags: ["Dashboard", "Growth"],
    },
    {
        filename: "studiodevstag.png",
        title: "Studio Dev Stag",
        outcome: "Clean system for product and growth",
        tags: ["Website", "Template"],
    },
];

export default function WorkSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll progress for parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Transform scroll into parallax values
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <Section
            ref={sectionRef}
            className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
        >
            <Container className="max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                        Selected Systems
                    </h2>
                    <p className="text-lg text-black/60 max-w-2xl mx-auto">
                        Real projects built for growth, operations, and scale
                    </p>
                </div>

                {/* Primary Cards Grid (First 3) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12">
                    {workItems.slice(0, 3).map((item, index) => (
                        <WorkCard
                            key={item.filename}
                            {...item}
                            index={index}
                            scrollProgress={scrollProgress}
                            isPrimary={index === 1}
                        />
                    ))}
                </div>

                {/* Secondary Cards (Remaining 2) */}
                {workItems.length > 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
                        {workItems.slice(3).map((item, index) => (
                            <WorkCard
                                key={item.filename}
                                {...item}
                                index={index + 3}
                                scrollProgress={scrollProgress}
                            />
                        ))}
                    </div>
                )}
            </Container>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @media (prefers-reduced-motion: reduce) {
          .perspective-1000 {
            perspective: none;
          }
        }
      `}</style>
        </Section>
    );
}
