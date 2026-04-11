"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    ShieldCheck, Lock, Server, FileText,
    Zap, Globe, Eye, CheckCircle2
} from 'lucide-react';

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
        title: 'End-to-End Encryption',
        description: 'Military-grade AES-256 encryption protects all data at rest and in transit. Your IP and sensitive information never leave your sovereign control.',
        tags: ['AES-256', 'TLS 1.3', 'Zero-knowledge'],
        color: 'blue',
    },
    {
        icon: FileText,
        title: 'Immutable Audit Trails',
        description: 'Every action is logged, timestamped, and tamper-proof. Full AI decision transparency for governance, compliance, and legal defensibility.',
        tags: ['Immutable logs', 'Decision transparency', 'Export ready'],
        color: 'indigo',
    },
    {
        icon: Server,
        title: 'Enterprise Infrastructure',
        description: 'Deployed on hardened multi-region infrastructure with automatic failover. Your AI systems are always on — no excuses, no downtime.',
        tags: ['Multi-region', 'Auto-failover', 'SOC 2 Type II'],
        color: 'cyan',
    },
];

const trustBadges = [];

/* ─────────────────────────────────────────────
   ANIMATED STAT
───────────────────────────────────────────── */
function StatCard({ value, label, sublabel, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300"
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500 pointer-events-none" />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 tracking-tight">
                {value}
            </span>
            <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">{label}</span>
            <span className="text-white/30 text-xs mt-0.5">{sublabel}</span>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   FEATURE CARD
───────────────────────────────────────────── */
const colorMap = {
    blue: {
        glow: 'from-blue-600/20 to-transparent',
        icon: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
        tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        dot: 'bg-blue-400',
    },
    indigo: {
        glow: 'from-indigo-600/20 to-transparent',
        icon: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
        tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
        dot: 'bg-indigo-400',
    },
    cyan: {
        glow: 'from-cyan-600/20 to-transparent',
        icon: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
        tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        dot: 'bg-cyan-400',
    },
};

function FeatureCard({ icon: Icon, title, description, tags, color, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const c = colorMap[color];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col rounded-[1.75rem] border border-white/[0.07] bg-[#050a14] p-8 overflow-hidden hover:border-white/[0.15] transition-all duration-500"
        >
            {/* Corner gradient glow */}
            <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${c.glow} rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 group-hover:scale-125`} />

            {/* Icon */}
            <div className={`relative w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                <Icon className="w-5 h-5" strokeWidth={1.8} />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-white/50 leading-relaxed text-sm flex-1 mb-6">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${c.tag}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function WhatWeProvide() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

    return (
        <section className="relative w-full bg-transparent text-white py-28 md:py-40 overflow-hidden">

            {/* ── Background Orbs ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
            </div>

            {/* ── Grid pattern overlay ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

                {/* ─── Header ─── */}
                <div ref={headerRef} className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Enterprise Security
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
                            Built for trust.{' '}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                                Hardened for scale.
                            </span>
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed">
                            Security isn't a feature — it's the foundation. Every solution we build is backed by enterprise-grade infrastructure, immutable audit trails, and ironclad encryption so you can deploy AI with confidence.
                        </p>
                    </motion.div>
                </div>

                {/* ─── Stats Row ─── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 md:mb-24">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} index={i} />
                    ))}
                </div>

                {/* ─── Features Bento Grid ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} {...feature} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
