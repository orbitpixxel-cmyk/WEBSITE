"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SafariProps {
  url?: string;
  src?: string; // image source
  videoSrc?: string; // video source
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function Safari({
  url = "https://example.com",
  src,
  videoSrc,
  className,
  width = "100%",
  height = "auto",
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative rounded-[12px] border border-white/10 bg-[#0A0F1E] shadow-2xl overflow-hidden",
        className
      )}
      style={{ width, height }}
    >
      {/* Safari Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111827] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        
        {/* URL Bar */}
        <div className="flex-1 ml-4 mr-2 px-3 py-1 bg-white/5 rounded-md border border-white/5 flex items-center">
          <div className="w-full text-center text-[10px] text-slate-500 font-medium truncate select-none">
            {url}
          </div>
        </div>
        
        {/* Placeholder for menu icons if needed */}
        <div className="flex gap-2 opacity-20">
            <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
            <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
        </div>
      </div>

      {/* Safari Content Area */}
      <div className="relative w-full overflow-hidden bg-black aspect-video">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : src ? (
          <Image
            src={src}
            alt="Safari Mockup"
            fill
            unoptimized
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-800 font-bold text-xl uppercase tracking-widest">
            Pixxel Orbit Content
          </div>
        )}
        
        {/* Inner light reflection for premium feel */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
}
