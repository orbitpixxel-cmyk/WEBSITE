"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumArcsProps {
  className?: string;
  opacity?: number;
}

export const PremiumArcs = ({ 
  className,
  opacity = 0.4
}: PremiumArcsProps) => {
  return (
    <div className={cn(
      "absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-visible",
      className
    )}
    style={{ opacity }}
    >
      <svg viewBox="0 0 1000 600" className="w-full h-full overflow-visible">
        <motion.circle
          cx="500" cy="600" r="300"
          fill="none" stroke="url(#arc-grad-3)" strokeWidth="1.5"
          strokeDasharray="1000 1000"
          initial={{ rotate: 170, opacity: 0 }}
          animate={{ rotate: 190, opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 }}
        />
        <motion.circle
          cx="500" cy="600" r="420"
          fill="none" stroke="url(#arc-grad-2)" strokeWidth="1.5"
          strokeDasharray="1300 1300"
          initial={{ rotate: 185, opacity: 0 }}
          animate={{ rotate: 175, opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 }}
        />
        <motion.circle
          cx="500" cy="600" r="550"
          fill="none" stroke="url(#arc-grad-1)" strokeWidth="1.5"
          strokeDasharray="1800 1800"
          initial={{ rotate: 170, opacity: 0 }}
          animate={{ rotate: 190, opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
        />
        <defs>
          <linearGradient id="arc-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="5%" stopColor="#1D4ED8" stopOpacity="0" />
            <stop offset="25%" stopColor="#1D4ED8" stopOpacity="1" />
            <stop offset="75%" stopColor="#1D4ED8" stopOpacity="1" />
            <stop offset="95%" stopColor="#1D4ED8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="arc-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="15%" stopColor="#2563EB" stopOpacity="1" />
            <stop offset="85%" stopColor="#2563EB" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="arc-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="15%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="65%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="85%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
