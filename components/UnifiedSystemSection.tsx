"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ArrowLeft, ArrowRight, TrendingUp, Megaphone, Headphones, Settings, DollarSign, Check } from "lucide-react";
import { motion } from "framer-motion";

const tabData = [
    {
        id: "sales",
        label: "Sales",
        category: "Sales acceleration",
        icon: <TrendingUp className="w-4 h-4" />,
        title: "Close deals faster with AI",
        desc: "Accelerate deal cycles with AI-powered lead scoring, automated outreach, and intelligent forecasting that helps your team focus on the opportunities that matter most.",
        bullets: [
            "Lead scoring & prioritization",
            "Automated outreach sequences",
            "Pipeline forecasting",
            "Conversation intelligence"
        ],
        outcomes: [
            { stat: "35%", label: "increase in qualified leads" },
            { stat: "28%", label: "faster deal cycles" }
        ]
    },
    {
        id: "marketing",
        label: "Marketing",
        category: "Marketing intelligence",
        icon: <Megaphone className="w-4 h-4" />,
        title: "Personalize campaigns at scale",
        desc: "Create personalized campaigns at scale with AI that understands your audience, optimizes content performance, and turns data into actionable insights.",
        bullets: [
            "Content personalization",
            "Campaign optimization",
            "Audience segmentation",
            "Performance analytics"
        ],
        outcomes: [
            { stat: "3x", label: "content output" },
            { stat: "45%", label: "improvement in engagement" }
        ]
    },
    {
        id: "support",
        label: "Support",
        category: "Customer support",
        icon: <Headphones className="w-4 h-4" />,
        title: "Resolve issues faster",
        desc: "Resolve issues faster with intelligent routing, automated responses for common queries, and AI assistants that empower your support team to deliver exceptional service.",
        bullets: [
            "Intelligent ticket routing",
            "Automated response handling",
            "Knowledge base AI",
            "Sentiment analysis"
        ],
        outcomes: [
            { stat: "60%", label: "reduction in response time" },
            { stat: "40%", label: "increase in CSAT scores" }
        ]
    },
    {
        id: "operations",
        label: "Operations",
        category: "Operations optimization",
        icon: <Settings className="w-4 h-4" />,
        title: "Streamline daily workflows",
        desc: "Automate repetitive tasks, sync data across platforms, and create deeply integrated operational systems that scale seamlessly without adding headcount.",
        bullets: [
            "Data synchronization",
            "Workflow automation",
            "Resource allocation",
            "Compliance monitoring"
        ],
        outcomes: [
            { stat: "50%", label: "reduction in manual tasks" },
            { stat: "100s", label: "of hours saved monthly" }
        ]
    },
    {
        id: "finance",
        label: "Finance",
        category: "Financial automation",
        icon: <DollarSign className="w-4 h-4" />,
        title: "Accelerate financial operations",
        desc: "Reduce errors and speed up financial closes with AI that automates invoice processing, expense categorization, and anomaly detection.",
        bullets: [
            "Invoice processing",
            "Expense management",
            "Anomaly detection",
            "Automated reporting"
        ],
        outcomes: [
            { stat: "70%", label: "faster month-end close" },
            { stat: "99%", label: "accuracy in data extraction" }
        ]
    }
];

export default function UnifiedSystemSection({ showHeader = true }: { showHeader?: boolean }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const switchTab = (newIndex: number) => {
        if (newIndex === activeIndex) return;
        setActiveIndex(newIndex);
    };

    const handleNext = () => switchTab((activeIndex + 1) % tabData.length);
    const handlePrev = () => switchTab((activeIndex - 1 + tabData.length) % tabData.length);

    return (
        <Section className="bg-transparent text-white py-10 md:py-12 overflow-hidden w-full">
            <Container className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── Heading Section ─── */}
                {showHeader && (
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                            <span className="textured-text">AI for every</span> <span className="text-blue-500">department</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
                            From Sales to Operations to Finance, we help every team across your organization unlock the true power of AI.
                        </p>
                    </div>
                )}

                {/* ── Tab navigation (Pill style with smooth sliding background) ── */}
                <div className="w-full max-w-5xl mx-auto bg-[#111827]/50 backdrop-blur-md rounded-2xl p-0 mb-10 border border-white/5 overflow-hidden">
                    <div className="relative flex flex-wrap sm:flex-nowrap gap-0">
                        {tabData.map((t, idx) => (
                            <button
                                key={t.id}
                                onClick={() => switchTab(idx)}
                                className={`relative flex-1 flex flex-col sm:flex-row items-center justify-center gap-2.5 py-4 px-4 transition-all duration-300 outline-none z-10 ${activeIndex === idx ? "text-black font-bold" : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {activeIndex === idx && (
                                    <motion.div
                                        layoutId="activePillUnified"
                                        className="absolute inset-0 bg-white rounded-xl shadow-lg"
                                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors ${activeIndex === idx ? "text-blue-600" : "text-inherit"}`}>
                                    {t.icon}
                                </span>
                                <span className="relative z-10 text-[12px] font-bold uppercase tracking-widest hidden sm:block">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ─── Sliding track with 5 separate containers ─── */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex flex-row transition-transform duration-500 ease-&lsqb;cubic-bezier(0.25,0.8,0.25,1)&rsqb;"
                        style={{
                            width: `${tabData.length * 100}%`,
                            transform: `translateX(-${activeIndex * (100 / tabData.length)}%)`
                        }}
                    >
                        {tabData.map((data) => (
                            <div
                                key={data.id}
                                className="shrink-0"
                                style={{ width: `${100 / tabData.length}%` }}
                            >
                                <CardShell>
                                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                                        <LeftContent
                                            icon={data.icon}
                                            category={data.category}
                                            title={data.title}
                                            desc={data.desc}
                                            bullets={data.bullets}
                                        />
                                        <RightContent
                                            stat1={data.outcomes[0].stat}
                                            label1={data.outcomes[0].label}
                                            stat2={data.outcomes[1].stat}
                                            label2={data.outcomes[1].label}
                                        />
                                    </div>
                                </CardShell>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </Section>
    );
}

/* ─── Card Shell (each container's wrapper) ─── */
function CardShell({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="relative w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl p-6 md:p-8 lg:p-10"
            style={{
                background: 'radial-gradient(circle at 90% 50%, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0.6) 25%, rgba(2, 6, 23, 0.8) 70%, #000000 100%)',
                backgroundColor: '#020617',
                WebkitMaskImage: 'linear-gradient(to right, transparent 2px, black 2px)',
                maskImage: 'linear-gradient(to right, transparent 2px, black 2px)'
            }}
        >
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

/* ─── Left Content (text, bullets, CTA) ─── */
function LeftContent({ icon, category, title, desc, bullets }: { icon: React.ReactNode; category: string; title: string; desc: string; bullets: string[] }) {
    return (
        <div className="flex-[1.2] flex flex-col gap-5">
            <div className="flex items-center gap-3">
                <div className="text-blue-500 flex items-center justify-center scale-125">
                    {icon}
                </div>
                <span className="text-xl text-white/90 font-medium">{category}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">{title}</h2>
            <p className="text-base text-white/60 leading-relaxed font-light max-w-xl">{desc}</p>
            <ul className="flex flex-col gap-2 mt-1">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm md:text-base">
                        <div className="shrink-0 w-4 h-4 rounded-sm bg-blue-600 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white stroke-[3px]" />
                        </div>
                        {b}
                    </li>
                ))}
            </ul>
            <div className="mt-2">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 border-none text-white px-7 py-3 rounded-md text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                    Learn more
                </button>
            </div>
        </div>
    );
}

/* ─── Right Content (outcomes card) ─── */
function RightContent({ stat1, label1, stat2, label2 }: { stat1: string; label1: string; stat2: string; label2: string }) {
    return (
        <div className="flex-[0.8]">
            <div className="w-full h-full min-h-[300px] bg-[#0c0d12] rounded-2xl border-[0.05rem] border-gray-600/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-start justify-center p-8 lg:p-10">
                <h4 className="text-white/40 uppercase tracking-widest text-xs font-semibold mb-6">Typical Outcomes</h4>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-5xl md:text-6xl font-light text-blue-500 tracking-tight">{stat1}</span>
                        <span className="text-white/60 text-sm md:text-base">{label1}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-5xl md:text-6xl font-light text-blue-500 tracking-tight">{stat2}</span>
                        <span className="text-white/60 text-sm md:text-base">{label2}</span>
                    </div>
                </div>
                <p className="text-[0.7rem] text-white/30 mt-8 leading-relaxed">Results based on enterprise engagements. Individual outcomes may vary based on scope.</p>
            </div>
        </div>
    );
}
