"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import WorkCard from "@/components/ui/WorkCard";

// File metadata derived from /public/webimages
const workItems = [
    {
        filename: "duckhawklaw.png",
        title: "Duckhawk Law Firm",
        outcome: "Redefining the digital legal experience with a premium, trust-driven presence",
        tags: ["Legal", "Website", "Design"],
        href: "https://www.duckhawk.in/",
    },
    {
        filename: "Studiodevstag.png",
        title: "Studio Devstag",
        outcome: "Immersive 3D configuration platform bringing custom products to life in AR",
        tags: ["AR/VR", "3D Experience", "Interaction"],
        href: "https://www.studiodevstag.com",
    },
    {
        filename: "askyourcounsellor.png",
        title: "Ask Your Counsellor",
        outcome: "Connecting students with experts through a streamlined guidance ecosystem",
        tags: ["EdTech", "Platform", "Community"],
        href: "https://www.askyourcounsellor.in/",
    },
    {
        filename: "doctorsapp.png",
        title: "Doctor App",
        outcome: "Simplified healthcare management for clinics and patients alike",
        tags: ["Healthcare", "App", "System"],
        href: "https://doctor-app-rho.vercel.app/",
    },
    {
        filename: "growmint.png",
        title: "Growmint",
        outcome: "High-performance agency site driving digital transformation and growth",
        tags: ["Agency", "Portfolio", "Growth"],
        href: "https://www.growmint.net/",
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
            className="py-24 md:py-32 bg-white overflow-hidden relative"
        >
            <Container className="max-w-6xl">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50/50 border border-blue-100/50 rounded-full">
                        Selected Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight text-balance">
                        Our Work
                    </h2>
                    <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
                        We build systems that scale. From immersive 3D experiences to complex operational dashboards,
                        here’s how we create clarity from chaos.
                    </p>
                </div>

                {/* Primary Cards Grid (First 3) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

                {/* Footer Link */}
                <div className="mt-16 text-center">
                    <a href="/work" className="inline-flex items-center gap-2 text-base font-medium text-black/60 hover:text-black transition-colors duration-300 group">
                        View all projects
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
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
