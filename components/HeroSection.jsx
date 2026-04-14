"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Zap,
    Phone,
    MessageSquare,
    Mail,
    CalendarCheck,
    ArrowRight,
    Users,
    TrendingUp,
    Bot,
} from "lucide-react";

import TechStackRow from './TechStackRow';
import DarkVeil from './DarkVeil';

/* ─── Animation Variants ────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const fadeScale = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

/* ─── Bento Card Shell ──────────────────────────────────────────── */
const BentoCard = ({ children, className = "", delay = 0, ...props }) => (
    <motion.div
        {...fadeScale(delay)}
        className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.05] group ${className}`}
        {...props}
    >
        {children}
    </motion.div>
);

export default function HeroSection() {
    return (
        <div className="relative w-[100vw] h-[110vh] text-white flex flex-col items-center font-sans z-[50] overflow-hidden bg-black">

            {/* Background Infrastructure Layer - Pure DarkVeil */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <DarkVeil
                        hueShift={0}
                        noiseIntensity={0}
                        scanlineIntensity={0}
                        speed={0.5}
                        scanlineFrequency={0}
                        warpAmount={0}
                    />
                </div>
            </div>

            {/* ══════════ MAIN CONTENT ══════════ */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-4">

                {/* Two-Column Layout: Text | Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ──────── LEFT COLUMN: Text Content ──────── */}
                    <div className="flex flex-col items-start text-left max-w-xl">

                        {/* Badge Pill */}
                        <motion.div
                            {...fadeUp(0.1)}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] backdrop-blur-md text-sm font-medium mb-8"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-slate-300 tracking-wide">Pioneering Next-Gen AI</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            {...fadeUp(0.2)}
                            className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[48px] font-bold leading-[1.1] tracking-tight mb-5"
                        >
                            <span className="text-white">
                                Empower Your{' '}
                            </span>
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                    Business
                                </span>
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </span>
                            <br />
                            <span className="text-white">with an </span>
                            <span className="bg-gradient-to-r from-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent italic">
                                AI Partner
                            </span>
                            <br />
                            <span className="text-white">That </span>
                            <span className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                                Never Sleeps
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            {...fadeUp(0.35)}
                            className="text-slate-400 text-sm md:text-sm leading-relaxed mb-6 max-w-sm"
                        >
                            We build custom AI solutions that automate your operations, enhance customer engagement, and drive business growth 24/7.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            {...fadeUp(0.45)}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <button className="group flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-xs transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.12)] hover:shadow-[0_12px_48px_rgba(255,255,255,0.18)] hover:scale-[1.03] active:scale-95">
                                Book a Free Call
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs text-white/80 border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2]">
                                Our Services
                            </button>
                        </motion.div>

                    </div>

                    {/* ──────── RIGHT COLUMN: 4 Images ──────── */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <motion.div {...fadeScale(0.3)} className="rounded-3xl overflow-hidden group">
                            <Image src="/hero/chats.png" alt="AI Chat Interface" width={600} height={450} className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-[1.04]" priority />
                        </motion.div>
                        <motion.div {...fadeScale(0.4)} className="rounded-3xl overflow-hidden group">
                            <Image src="/hero/appointment.png" alt="AI Appointment Booking" width={600} height={400} className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-[1.04]" />
                        </motion.div>
                        <motion.div {...fadeScale(0.45)} className="rounded-3xl overflow-hidden group">
                            <Image src="/hero/calls.png" alt="AI Voice Calls" width={600} height={400} className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-[1.04]" />
                        </motion.div>
                        <motion.div {...fadeScale(0.55)} className="rounded-3xl overflow-hidden group">
                            <Image src="/hero/email.png" alt="AI Email Automation" width={600} height={450} className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-[1.04]" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ══════════ TECH STACK MARQUEE ══════════ */}
            <div className="relative z-10 w-full -mt-10 sm:-mt-16 lg:-mt-20">
                <div className="max-w-4xl mx-auto opacity-40 pointer-events-none">
                    <TechStackRow />
                </div>
            </div>
        </div>
    );
}