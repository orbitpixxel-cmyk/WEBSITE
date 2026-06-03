"use client";

import React from 'react';
import { ShieldCheck, Lock, FileText, Server } from 'lucide-react';
import { useInViewClass } from '@/lib/useInView';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const stats = [
    { value: '99.99%', label: 'Uptime SLA', sublabel: 'Guaranteed' },
    { value: '0', label: 'Security Incidents', sublabel: 'Track record' },
    { value: '24/7', label: 'Active Monitoring', sublabel: 'Round the clock' },
    { value: '<1hr', label: 'Incident Response', sublabel: 'Average time' },
];

const features = [
    {
        icon: Lock,
        title: 'End-to-end encryption',
        description:
            'Military-grade AES-256 encryption protects all data at rest and in transit. Your IP and sensitive information never leave your sovereign control.',
        tags: ['AES-256', 'TLS 1.3', 'Zero-knowledge'],
        accent: '#3b82f6',         // blue
        iconBg: 'rgba(59,130,246,0.08)',
        iconBorder: 'rgba(59,130,246,0.2)',
        iconColor: '#60a5fa',
        tagBg: 'rgba(59,130,246,0.08)',
        tagBorder: 'rgba(59,130,246,0.2)',
        tagColor: '#93c5fd',
        topBar: '#3b82f6',
    },
    {
        icon: FileText,
        title: 'Immutable audit trails',
        description:
            'Every action is logged, timestamped, and tamper-proof. Full AI decision transparency for governance, compliance, and legal defensibility.',
        tags: ['Immutable logs', 'Decision transparency', 'Export ready'],
        accent: '#22c55e',
        iconBg: 'rgba(34,197,94,0.08)',
        iconBorder: 'rgba(34,197,94,0.2)',
        iconColor: '#4ade80',
        tagBg: 'rgba(34,197,94,0.08)',
        tagBorder: 'rgba(34,197,94,0.2)',
        tagColor: '#86efac',
        topBar: '#22c55e',
    },
    {
        icon: Server,
        title: 'Enterprise infrastructure',
        description:
            'Deployed on hardened multi-region infrastructure with automatic failover. Your AI systems are always on — no excuses, no downtime.',
        tags: ['Multi-region', 'Auto-failover', 'SOC 2 Type II'],
        accent: '#f59e0b',
        iconBg: 'rgba(245,158,11,0.08)',
        iconBorder: 'rgba(245,158,11,0.2)',
        iconColor: '#fbbf24',
        tagBg: 'rgba(245,158,11,0.08)',
        tagBorder: 'rgba(245,158,11,0.2)',
        tagColor: '#fcd34d',
        topBar: '#f59e0b',
    },
];

/* ─────────────────────────────────────────────
   STAT CARD
   ───────────────────────────────────────────── */
function StatCard({ value, label, sublabel, index }) {
    const ref = useInViewClass({ threshold: 0.1 });
    const delayClass = `delay-${index + 1}`;

    return (
        <div
            ref={ref}
            className={`group flex flex-col items-center text-center p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300 cursor-default fade-in-up ${delayClass}`}
        >
            <span className="text-4xl md:text-[2.6rem] font-medium text-white group-hover:text-blue-400 transition-colors duration-300 leading-none mb-2 tracking-tight">
                {value}
            </span>
            <span className="text-white/50 text-[11px] font-medium uppercase tracking-widest mb-0.5">{label}</span>
            <span className="text-white/20 text-[11px]">{sublabel}</span>
        </div>
    );
}

/* ─────────────────────────────────────────────
   FEATURE CARD
   ───────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, description, tags, topBar, iconBg, iconBorder, iconColor, tagBg, tagBorder, tagColor, index }) {
    const ref = useInViewClass({ threshold: 0.1 });
    const delayClass = `delay-${index * 2 + 2}`;

    return (
        <div
            ref={ref}
            className={`group relative flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.035] transition-all duration-400 fade-in-up ${delayClass}`}
        >
            {/* Top accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: topBar }}
            />

            {/* Icon */}
            <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 shrink-0"
                style={{ background: iconBg, border: `0.5px solid ${iconBorder}` }}
            >
                <Icon className="w-[15px] h-[15px]" style={{ color: iconColor }} strokeWidth={1.8} />
            </div>

            {/* Text */}
            <h3 className="text-[15px] font-medium text-white mb-2.5 tracking-tight">{title}</h3>
            <p className="text-white/40 leading-relaxed text-[13px] flex-1 mb-5">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: tagBg, border: `0.5px solid ${tagBorder}`, color: tagColor }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function WhatWeProvide() {
    const badgeRef = useInViewClass({ threshold: 0.15 });
    const headerRef = useInViewClass({ threshold: 0.15 });

    return (
        <section className="relative w-full bg-transparent text-white py-28 md:py-36 overflow-hidden">

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

                {/* ─── Header ─── */}
                <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-[12px] font-medium mb-5 fade-in-down"
                    >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Enterprise Security
                    </div>

                    <div
                        ref={headerRef}
                        className="fade-in-up"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.1] mb-4">
                            Built for trust.{' '}
                            <span className="text-blue-400">
                                Hardened for scale.
                            </span>
                        </h2>
                        <p className="text-white/40 text-base leading-relaxed">
                            Security isn&apos;t something added later — it&apos;s built into how everything runs.
                        </p>
                    </div>
                </div>

                {/* ─── Stats Row ─── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 md:mb-16">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} index={i} />
                    ))}
                </div>

                {/* ─── Feature Cards ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} {...feature} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}