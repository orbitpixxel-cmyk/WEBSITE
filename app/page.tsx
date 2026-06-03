import React from "react";
import dynamic from "next/dynamic";
// @ts-ignore
import HeroSection from "@/components/hero2";

// Lazy-load all below-the-fold sections — they won't be included in the initial JS bundle
const AISection = dynamic(() => import("@/components/ui/AI_SECTION"), {
  ssr: false,
});
const UnifiedSystemSection = dynamic(
  () => import("@/components/UnifiedSystemSection"),
  { ssr: false }
);
const WhatWeProvide = dynamic(() => import("@/components/ui/WhatWeProvide"), {
  ssr: false,
});

export default function DemoPage() {
  return (
    <>
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0 overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 75%)'
          }}
        />

        <div className="relative z-0 w-full flex flex-col items-center">
          <HeroSection />
        </div>

        <div className="relative z-10 w-full">

          {/* <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <BigTestimonialSection />
          </div> */}
          <div id="ai-section">
            <AISection />
          </div>
          <UnifiedSystemSection />
          {/* <WhoIsThisFor /> */}
          <WhatWeProvide />
        </div>
      </div>
    </>
  );
}