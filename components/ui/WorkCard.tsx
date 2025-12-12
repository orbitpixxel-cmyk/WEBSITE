"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface WorkCardProps {
    filename: string;
    title: string;
    outcome: string;
    tags: string[];
    index: number;
    scrollProgress: any;
    isPrimary?: boolean;
}

export default function WorkCard({
    filename,
    title,
    outcome,
    tags,
    index,
    scrollProgress,
    isPrimary = false,
}: WorkCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
        stiffness: 400,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
        stiffness: 400,
        damping: 30,
    });

    // Scroll-based parallax
    // Center card (index 1) moves least, side cards move more
    const parallaxOffset = index === 1 ? 20 : 40;
    const y = useTransform(scrollProgress, [0, 1], [0, -parallaxOffset]);
    const scale = useTransform(scrollProgress, [0, 1], [0.96, 1.02]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.2, 0.9, 0.25, 1],
            }}
            style={{
                y,
                scale: isPrimary ? 1.04 : scale,
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group relative perspective-1000"
        >
            {/* Card Container */}
            <div className="relative rounded-[20px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-2xl shadow-black/10 transition-all duration-300 hover:shadow-3xl hover:shadow-black/20 focus-within:ring-2 focus-within:ring-blue-500/50">
                {/* Inner Vignette */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none z-10" />

                {/* Glossy Highlight */}
                <div className="absolute top-0 left-0 right-1/2 h-1/3 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10 rounded-tl-[20px]" />

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={`/webimages/${filename}`}
                        alt={`${title} — ${outcome}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                    />
                </div>

                {/* Caption */}
                <div className="relative p-6 bg-gradient-to-b from-white/80 to-white/90 backdrop-blur-md z-20">
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-sm text-black/60 mb-4 leading-relaxed">{outcome}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium text-black/70 bg-black/5 rounded-full border border-black/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
