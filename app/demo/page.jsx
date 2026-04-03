"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Bot, BarChart3, ChevronRight, Phone, Shield, Clock, Layers, Sparkles, Lock } from "lucide-react";
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
import HeroSection from "@/components/HeroSection";

export default function DemoPage() {
    return (
        <SmoothScrolling>
            <div className="flex min-h-screen flex-col items-center justify-center px-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #020617 0%, #050816 40%, #0B1226 100%)' }}>
                {/* Visual Infrastructure Background Layer - Darker */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]">
                    <svg className="h-full w-full stroke-slate-500/20" aria-hidden="true">
                        <defs>
                            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%" y="-1">
                                <path d="M.5 80V.5H80" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
                    </svg>
                </div>

                {/* Ambient Deep Glows - Subtle Dark Theme */}
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-slate-700/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-slate-800/5 blur-[150px] rounded-full pointer-events-none" />

                {/* Center Glow Behind Content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

                {/* Subtle Top Glow - Reduced Blue */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-[50%] w-[120vw] h-[600px] pointer-events-none z-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 75%)'
                    }}
                />

                <HeroSection />

                <AISection />
                {/* <Workflow /> */}
                <UnifiedSystemSection />
                <WhoIsThisFor />
                <WhatWeProvide />
                {/* <div className="h-[150vh] w-[100vw]">
                    <BigTestimonialSection />
                </div> */}
            </div>
        </SmoothScrolling>
    );
}