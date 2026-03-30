"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Bot, BarChart3, ChevronRight } from "lucide-react";
// @ts-ignore
import BorderGlow from "@/components/ui/Border/BorderGlow";
import Workflow from "@/components/ui/Workflow/workflow";
import DashboardVisual from "@/components/ui/Workflow/DashboardVisual";
import UnifiedSystemSection from "@/components/UnifiedSystemSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import AISection from "@/components/ui/AI_SECTION";
import BigTestimonialSection from "@/components/BigTestimonialSection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import CardAni from '@/components/ui/card-animation/cardAni';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import Footer from "@/components/Footer";
import WhatWeProvide from "@/components/ui/WhatWeProvide";

export default function DemoPage() {
    return (
        <SmoothScrolling>
            <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 relative overflow-hidden">
                {/* Visual Infrastructure Background Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
                    <svg className="h-full w-full stroke-zinc-500/20" aria-hidden="true">
                        <defs>
                            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%" y="-1">
                                <path d="M.5 80V.5H80" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
                    </svg>
                </div>

                {/* Ambient Deep Glows */}
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-[#FF5C35]/5 blur-[150px] rounded-full pointer-events-none" />

                {/* Top-most Purple Glow (Moved from Department Section) */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-[50%] w-[120vw] h-[800px] pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 75%)'
                    }}
                />

                <div className="min-h-[125vh] flex flex-col items-center justify-center w-full max-w-7xl mx-auto relative pt-20 pb-40 z-10 transition-all duration-500 mt-[-6vh]">
                    
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
                        
                        {/* Left: Hero Content */}
                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold mb-10 shadow-sm"
                            >
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C35] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C35]"></span>
                                </span>
                                Next-gen autonomous agent orchestration
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.1] text-white"
                            >
                                <span className="textured-text opacity-90 block text-left">AI agents and</span>
                                <span className="relative text-white/40 italic">workflows</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-14 font-light text-left"
                            >
                                Build visually, go deep with code, connect to anything. Every step of your agents&apos; reasoning is traceable. Deploy on your infrastructure or ours.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-6"
                            >
                                <button className="bg-gradient-to-r from-[#FF7A00] to-[#FF2A00] border-none text-white px-9 py-4 rounded-xl text-[15px] font-bold hover:opacity-95 transition-all hover:scale-[1.02] shadow-[0_20px_50px_rgba(255,92,53,0.15)] flex items-center gap-2 group">
                                    Start Building
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white/5 text-white px-9 py-4 rounded-xl text-[15px] font-bold border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]">
                                    Request Platform Demo
                                </button>
                            </motion.div>
                        </div>

                        {/* Right: Dashboard Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex-1 w-full max-w-[550px] relative hidden lg:block"
                        >
                            <DashboardVisual />
                        </motion.div>

                    </div>

                </div>

                <AISection />
                {/* <Workflow /> */}
                <UnifiedSystemSection />
                <WhoIsThisFor />
                <WhatWeProvide />
                <div className="h-[150vh] w-[100vw]">
                    <BigTestimonialSection />
                </div>
            </div>
        </SmoothScrolling>
    );
}
