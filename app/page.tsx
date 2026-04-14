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
// import HeroSection from "@/components/HeroSection";
import HeroSection from "@/components/hero2";

export default function DemoPage() {
  return (
    <SmoothScrolling>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 relative overflow-hidden" style={{
        background: 'radial-gradient(ellipse at 15% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 85% 75%, rgba(59, 130, 246, 0.10) 0%, transparent 45%), radial-gradient(ellipse at 50% 95%, rgba(37, 99, 235, 0.08) 0%, transparent 35%), linear-gradient(145deg, #fafbfc 0%, #f1f5f9 20%, #e2e8f0 40%, #f0f9ff 65%, #f8fafc 85%, #ffffff 100%)',
        // Removed opacity: 0
      }}>
        {/* Visual Infrastructure Background Layer - Darker */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)', backgroundSize: '80px 80px', backgroundPosition: '50% -1px' }}
        />

        {/* Ambient Deep Glows - Subtle Dark Theme */}
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-slate-700/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-slate-800/5 blur-[150px] rounded-full pointer-events-none" />

        {/* Center Glow Behind Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Subtle Top Glow - Reduced Blue */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0 overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 75%)'
          }}
        />

        <div className="relative z-0 w-full flex flex-col items-center">
          <HeroSection />
        </div>

        <div className="relative z-10 w-full">

          <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <BigTestimonialSection />
          </div>
          <AISection />
          <UnifiedSystemSection />
          {/* <WhoIsThisFor /> */}
          <WhatWeProvide />
        </div>
      </div>
    </SmoothScrolling>
  );
}