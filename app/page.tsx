"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/hero2";

// Lazy-loaded below-the-fold components
const SectionLoader = () => (
  <div className="w-full min-h-[40vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

const UnifiedSystemSection = dynamic(() => import("@/components/UnifiedSystemSection"), {
  loading: SectionLoader,
  ssr: false,
});

const WhatWeProvide = dynamic(() => import("@/components/ui/WhatWeProvide"), {
  loading: SectionLoader,
  ssr: false,
});

const AISection = dynamic(() => import("@/components/ui/AI_SECTION"), {
  loading: SectionLoader,
  ssr: false,
});

const BigTestimonialSection = dynamic(() => import("@/components/BigTestimonialSection"), {
  loading: SectionLoader,
  ssr: false,
});

export default function DemoPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 relative overflow-hidden">
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
            {/* <BigTestimonialSection /> */}
          </div>
          {/* <AISection /> */}
          <UnifiedSystemSection />
          {/* <WhoIsThisFor /> */}
          <WhatWeProvide />
        </div>
      </div>
    </>
  );
}