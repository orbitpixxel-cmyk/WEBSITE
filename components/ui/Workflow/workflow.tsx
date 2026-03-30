"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, UserCheck, Cpu, BarChart3 } from "lucide-react";
import DashboardVisual from "./DashboardVisual";

export default function Workflow() {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-black text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF5C35] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
            Operational Intelligence
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            Scale your business <br />
            <span className="text-white/40">with autonomous AI</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
            We build and deploy custom AI operating systems that handle your entire workflow—from lead capture to final execution—with zero manual intervention.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, text: "5x Speed Increase" },
              { icon: UserCheck, text: "99.9% Logic Accuracy" },
              { icon: Cpu, text: "Seamless Deployment" },
              { icon: BarChart3, text: "Data-Driven ROI" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#FF5C35]/10 flex items-center justify-center border border-[#FF5C35]/20">
                  <item.icon className="w-4 h-4 text-[#FF5C35]" />
                </div>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Layered Visual Column */}
        <div className="flex-1 w-full">
           <DashboardVisual />
        </div>

      </div>
    </div>
  );
}
