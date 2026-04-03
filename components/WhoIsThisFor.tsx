"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Users, Calendar, Mail, Headphones, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUpNumber } from "@/components/ui/CountUpNumber";

const tabData = [
    {
        id: "leads",
        label: "Lead Handling",
        icon: <Users className="w-4 h-4" />,
        category: "LEAD ACQUISITION",
        title: "Capture & Convert Every Lead Automatically",
        desc: "Every call or inquiry is instantly answered, qualified, and converted into a booked appointment — without any manual effort from your team.",
        bullets: [
            "Answers calls instantly (24/7)",
            "Qualifies high-intent customers",
            "Books directly into your calendar",
            "Eliminates missed opportunities",
        ],
        metrics: [
            { stat: "+320%", label: "More Bookings" },
            { stat: "0", label: "Missed Calls" },
            { stat: "70%", label: "Faster Response" },
        ],
    },
    {
        id: "booking",
        label: "Appointment Booking",
        icon: <Calendar className="w-4 h-4" />,
        category: "SCHEDULING",
        title: "Automated Appointment Scheduling",
        desc: "AI handles scheduling, rescheduling, and confirmations — removing the need for front desk coordination entirely.",
        bullets: [
            "Real-time calendar sync",
            "Instant confirmations sent",
            "Handles rescheduling automatically",
            "Reduces no-shows significantly",
        ],
        metrics: [
            { stat: "50%", label: "Fewer No-Shows" },
            { stat: "2x", label: "Faster Scheduling" },
            { stat: "100%", label: "Calendar Sync" },
        ],
    },
    {
        id: "followups",
        label: "Follow-ups",
        icon: <Mail className="w-4 h-4" />,
        category: "RETENTION",
        title: "Never Forget to Follow Up Again",
        desc: "AI automatically follows up with leads and customers at the right time to maximize conversions and long-term retention.",
        bullets: [
            "Automated reminder sequences",
            "Lead nurturing campaigns",
            "Missed call follow-ups",
            "Re-engagement workflows",
        ],
        metrics: [
            { stat: "+40%", label: "Conversion Rate" },
            { stat: "3x", label: "Follow-up Speed" },
            { stat: "85%", label: "Higher Retention" },
        ],
    },
    {
        id: "support",
        label: "Customer Support",
        icon: <Headphones className="w-4 h-4" />,
        category: "SUPPORT",
        title: "24/7 Customer Support Without Hiring",
        desc: "Answer customer questions, handle inquiries, and provide consistent support instantly — anytime of the day or night.",
        bullets: [
            "Handles FAQs instantly",
            "Reduces support workload",
            "Available 24/7, 365 days",
            "Consistent, accurate responses",
        ],
        metrics: [
            { stat: "60%", label: "Cost Reduction" },
            { stat: "<1s", label: "Response Time" },
            { stat: "95%", label: "Satisfaction Rate" },
        ],
    },
];

function parseStat(stat: string) {
    const match = stat.match(/^([+\-<>]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { prefix: "", value: 0, suffix: stat };
    const [, sign, num, suffix] = match;
    return { prefix: sign || "", value: parseFloat(num), suffix: suffix || "" };
}

export default function WhoIsThisFor() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const switchTab = (newIndex: number) => {
        if (newIndex === activeIndex) return;
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
    };

    const tab = tabData[activeIndex];

    return (
        <Section className="py-20 md:py-28 overflow-hidden w-full relative bg-[#0A0F1E]">
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#0ECFB3]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Section heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-12"
                >
                    <p className="text-[#0ECFB3] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        What We Automate
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                        Our Modern AI{" "}
                        <span className="text-[#0ECFB3]">Automation System</span>
                    </h2>
                </motion.div>

                {/* ── Tab navigation (Pill style like reference) ── */}
                <div className="w-full bg-[#111827]/50 backdrop-blur-md rounded-xl p-0 mb-6 border border-white/5 overflow-hidden">
                    <div className="flex flex-wrap sm:flex-nowrap">
                        {tabData.map((t, idx) => (
                            <button
                                key={t.id}
                                onClick={() => switchTab(idx)}
                                className={`relative flex-1 flex flex-col sm:flex-row items-center justify-center gap-2.5 py-4 px-4 transition-all duration-300 outline-none group
                                    ${activeIndex === idx
                                        ? "bg-white text-black font-black"
                                        : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                                    }`}
                            >
                                <span className={`transition-colors ${activeIndex === idx ? "text-blue-600" : "text-inherit"}`}>
                                    {t.icon}
                                </span>
                                <span className="text-[12px] font-black uppercase tracking-widest hidden sm:block">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Content card (reference style: dark, two-column) ── */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="bg-[#0D1224] border border-white/5 rounded-xl overflow-hidden shadow-[0_40px_100px_-15px_rgba(30,58,138,0.3)]">
                            <div className="flex flex-col lg:flex-row divide-x divide-white/5">

                                {/* Left: text content (Smooth Blue Theme) */}
                                <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6 bg-[#0F172A]/80 relative overflow-hidden">
                                    {/* Subtle radial glow backend */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
                                    
                                    {/* Category badge */}
                                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-1.5 w-fit relative z-10">
                                        <span className="text-blue-400 font-bold">{tab.icon}</span>
                                        <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.1em]">{tab.category}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-black text-white leading-[1.1] tracking-tight relative z-10">
                                        {tab.title}
                                    </h3>

                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg font-bold relative z-10">
                                        {tab.desc}
                                    </p>

                                    {/* Bullets */}
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 relative z-10">
                                        {tab.bullets.map((b, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.08, duration: 0.25 }}
                                                className="flex items-center gap-3 text-slate-300 font-black text-sm"
                                            >
                                                <span className="shrink-0 w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                                    <Check className="w-3 h-3 text-white stroke-[4px]" />
                                                </span>
                                                {b}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA link */}
                                    <button className="mt-4 w-fit flex items-center gap-2 text-white text-[12px] font-black uppercase tracking-widest hover:gap-4 transition-all duration-300 group px-6 py-3 bg-blue-600/90 rounded-lg hover:bg-blue-500 shadow-lg shadow-blue-900/40 relative z-10">
                                        Discover case study
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Right: metrics panel (Navy Sidebar Style) */}
                                <div className="lg:w-[360px] p-8 lg:p-10 flex flex-col justify-center gap-10 bg-[#0A0F1E] relative overflow-hidden">
                                    {/* Decorator background icon */}
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] scale-[2.5] text-blue-500">
                                          {tab.icon}
                                    </div>
                                    
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-3 leading-none relative z-10">
                                        <span className="w-2 h-2 rounded-lg bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                                        Performance Impact
                                    </p>
                                    {tab.metrics.map((m, i) => {
                                        const { prefix, value, suffix } = parseStat(m.stat);
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.12, duration: 0.3 }}
                                                className="flex flex-col gap-1.5 relative z-10"
                                            >
                                                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none block drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                                    <CountUpNumber
                                                        value={value}
                                                        prefix={prefix}
                                                        suffix={suffix}
                                                        duration={1.8}
                                                    />
                                                </span>
                                                <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest">{m.label}</span>
                                                {/* thin separator */}
                                                {i < tab.metrics.length - 1 && (
                                                    <div className="mt-2 h-px bg-white/5 w-1/4" />
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </Container>
        </Section>
    );
}