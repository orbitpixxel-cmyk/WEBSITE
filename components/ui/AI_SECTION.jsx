"use client";

import React from "react";
import { motion } from "framer-motion";
import CardAni from "./card-animation/cardAni";
import { Workflow, Shield, Zap, Layout } from "lucide-react";

/**
 * Bento Grid Item component for the Left Column
 */
const ServiceBox = ({ icon: Icon, title, description, stat, statCaption, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-2xl border border-gray-100 flex flex-col h-full bg-white/50 backdrop-blur-sm group hover:border-[#3b82f6]/20 transition-all duration-300 shadow-sm"
  >
    <div className="mb-6">
      <div className="p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-[#3b82f6]/5 transition-colors border border-gray-100/50">
        <Icon className="w-6 h-6 text-gray-500 group-hover:text-[#3b82f6]" />
      </div>
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
    <p className="text-sm text-zinc-500 leading-relaxed font-medium mb-8">
      {description}
    </p>
    
    <div className="mt-auto">
      <div className="text-3xl font-bold text-[#3b82f6] mb-1">{stat}</div>
      <div className="text-xs text-zinc-400 font-medium">{statCaption}</div>
    </div>
  </motion.div>
);

const certifications = ["Business Strategist", "AI Architect"];
const badges = [
  { name: "Solutions", level: "Expert", stars: 3, icon: "bg-gray-600/20" },
  { name: "Strategy", level: "Expert", stars: 3, icon: "bg-[#b8860b]/20", active: true },
  { name: "Insights", level: "Advanced", stars: 2, icon: "bg-gray-600/20" },
];

export default function AISection() {
  return (
    <div className="min-h-screen w-full rounded-[3.5rem] bg-white py-24 text-black z-10 relative overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-[#3b82f6]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 text-left">
        {/* Heading Section - Matches Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-gray-900">
            Unlocking AI for enterprise isn't about chasing <span className="text-[#3b82f6]">shiny trends</span>
          </h2>
          <p className="text-zinc-500 mt-8 max-w-3xl text-lg md:text-xl font-medium leading-relaxed">
            Most organizations face the same obstacles. The difference between success and failure isn't the latest hype wave—it's having a partner who understands enterprise complexity.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column - Clean Grid Boxes */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 lg:pb-0">
            <ServiceBox 
              icon={Workflow}
              title="Workflows"
              description="Custom autonomous agents that handle complex, multi-step business logic without intervention."
              stat="90%"
              statCaption="of manual tasks automated"
              delay={0.1}
            />
            <ServiceBox 
              icon={Zap}
              title="Execution"
              description="Ultra-fast deployment of LLM-powered features tailored to your specific industry vertical."
              stat="4x"
              statCaption="faster production cycles"
              delay={0.2}
            />
            <ServiceBox 
              icon={Shield}
              title="Security"
              description="Privacy-first architecture ensuring your proprietary data remains safe and fully compliant."
              stat="100%"
              statCaption="data sovereignty guaranteed"
              delay={0.3}
            />
            <ServiceBox 
              icon={Layout}
              title="Integration"
              description="Seamless connection to your existing CRM, ERP, and communication tools for zero friction."
              stat="0"
              statCaption="friction during implementation"
              delay={0.4}
            />
          </div>

          {/* Right Column - Premium Strategy Bot Display */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] flex flex-col justify-start items-center">

            {/* Visual Infrastructure Background */}
            <div className="absolute inset-0 w-full h-[600px] rounded-[3rem] bg-gray-50/50 border border-gray-100/50 overflow-hidden flex flex-col items-center justify-center -z-10 mt-12">
               <span className="text-black/5 font-extrabold text-7xl tracking-[.15em] uppercase select-none pb-20">INFRASTRUCTURE</span>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] rounded-full" />
            </div>

            {/* Shifted Overlapping Strategy Bot Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] bg-[#1a1b23] p-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 z-20 backdrop-blur-2xl mt-8"
            >
              {/* Profile Header */}
              <div className="flex flex-row items-center gap-6 mb-10 text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#3b82f6]/40 to-[#3b82f6]/10 border border-[#3b82f6]/20 shrink-0 overflow-hidden relative shadow-lg">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/30 backdrop-blur-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#3b82f6]/30 blur-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl tracking-tight leading-none mb-2">Strategy Bot</span>
                  <span className="text-[#3b82f6] text-[10px] font-bold font-mono uppercase tracking-[0.2em] opacity-80">Solution Architect</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-white/15 to-transparent mb-10" />

              {/* Focus Areas */}
              <div className="mb-10 text-left">
                <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-5">Enterprise Focus Areas</h4>
                <div className="flex flex-row gap-4">
                  {certifications.map((c, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-2xl border border-white/5 p-5 relative overflow-hidden group hover:bg-white/10 transition-colors">
                      <span className="text-[11px] text-zinc-300 block mb-4 font-semibold leading-tight">{c}</span>
                      <div className="w-8 h-1 bg-[#3b82f6]/50 rounded-full group-hover:w-12 transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Strengths */}
              <div className="text-left">
                <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-5">Strategic Capabilities</h4>
                <div className="flex flex-row gap-4">
                  {badges.map((b, i) => (
                    <div key={i} className={`flex-1 min-h-[110px] flex flex-col items-center justify-center rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${b.active
                      ? "bg-white/10 border-[#b8860b]/40 shadow-[0_15px_30px_rgba(184,134,11,0.15)]"
                      : "bg-white/5 border-white/5"
                      }`}>
                      <div className={`w-8 h-8 rounded-full mb-4 flex items-center justify-center ${b.active ? "bg-[#b8860b]/20" : "bg-white/10"}`}>
                        <div className={`w-2.5 h-2.5 rounded-sm ${b.active ? "bg-[#b8860b]" : "bg-zinc-600"}`} />
                      </div>
                      <span className={`text-[10px] font-bold tracking-tight mb-2 ${b.active ? "text-[#b8860b]" : "text-zinc-300"}`}>{b.name}</span>
                      <span className="text-[7px] text-zinc-500 uppercase tracking-widest font-bold">{b.level}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full mt-24">
        <section id="solutions" className="relative w-full">
          <CardAni />
        </section>
      </div>
    </div>
  );
}