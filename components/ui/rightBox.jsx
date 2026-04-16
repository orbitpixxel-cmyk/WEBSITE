"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Rocket } from "lucide-react";
import Grainient from "../Grainient";

/**
 * Ultra-Premium Dashboard Card with WebGL Grainient Integration
 * Following the user-specified configurations for the high-impact graduation.
 */
const DashboardCard = ({
  title,
  subtitle,
  iconSrc,
  rating,
  delay = 0,
  children,
  className = "",
  variant = "blue" // blue, pink, dark
}) => {

  // High-Impact Color Profiles for Grainient
  const profiles = {
    blue: {
      c1: "#4F46E5",
      c2: "#3B82F6",
      c3: "#A78BFA",
      glow: "rgba(79, 70, 229, 0.4)",
      border: "rgba(79, 70, 229, 0.4)",
      bg: "bg-white/90"
    },
    pink: {
      c1: "#FF9FFC",
      c2: "#5227FF",
      c3: "#B19EEF",
      glow: "rgba(219, 39, 119, 0.4)",
      border: "rgba(219, 39, 119, 0.4)",
      bg: "bg-white/90"
    },
    dark: {
      c1: "#04070a",
      c2: "#10B981",
      c3: "#0E7490",
      glow: "rgba(16, 185, 129, 0.5)",
      border: "rgba(16, 185, 129, 0.5)",
      bg: "bg-[#04070a]/90"
    }
  };

  const p = profiles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`relative rounded-[2rem] overflow-hidden group ${className}`}
      style={{
        boxShadow: `0 30px 60px -12px ${p.glow}`,
      }}
    >
      {/* 2px Vibrant Border */}
      <div
        className="absolute inset-0 rounded-[2rem] p-[1.5px] pointer-events-none z-20"
        style={{
          background: `linear-gradient(135deg, ${p.border}, transparent 60%, ${p.border})`
        }}
      >
        <div className="absolute inset-0 rounded-[2rem] bg-transparent shadow-[inset_0_0_15px_rgba(255,255,255,0.4)]" />
      </div>

      {/* WEBGL GRAINIENT BACKGROUND - Using User-Provided Values */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1={p.c1}
          color2={p.c2}
          color3={p.c3}
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-30 p-3 md:p-4 flex flex-col h-full backdrop-blur-[1px]">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 pb-5 border-b border-gray-900/5 border-dashed">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <Image src={iconSrc} alt={title} fill className="object-contain drop-shadow-sm scale-110 sm:scale-125" />
            </div>
            <div>
              <h4 className={`text-[18px] sm:text-[20px] font-bold leading-tight text-white`}>
                {title}
              </h4>
              <p className={`text-[12px] sm:text-[13px] font-medium mt-0.5 text-blue-100/60`}>
                {subtitle}
              </p>
            </div>
          </div>
          {rating && (
            <div className={`flex items-center gap-1.5 pt-1 px-3 py-1 rounded-full bg-white/5 border-white/10 border backdrop-blur-md`}>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className={`text-[13px] font-bold text-white`}>
                {rating} <span className="opacity-40 font-normal ml-0.5">(350 calls)</span>
              </span>
            </div>
          )}
        </div>

        {/* Children content area */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const RightBox = () => {
  return (
    <div className="lg:col-span-7 flex justify-center lg:justify-end w-full relative lg:left-[80px] lg:-top-[60px]">
      {/* Background Canvas (The Container) */}
      <div className="w-full max-w-[720px] rounded-[3.5rem] bg-[#fdfdff] border border-gray-200/50 p-3 md:p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col justify-center">

        {/* Top Card: Calling Agents */}
        <DashboardCard
          title="Calling Agents"
          subtitle="Inbound & Outbound"
          iconSrc="/voice.png"
          rating="4.9"
          variant="blue"
          delay={0.3}
          className="mb-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Card: Inbound Voice Agents */}
            <div className="bg-white rounded-[1.25rem] border border-gray-100 shadow-sm flex flex-col overflow-hidden h-full">
              <div className="p-4 md:p-5 flex-1">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <h4 className="text-[13px] font-bold text-gray-900 tracking-tight">Inbound Voice Agents</h4>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] font-extrabold uppercase rounded-full tracking-wider whitespace-nowrap">Receive Calls</span>
                </div>
                <h3 className="text-[16px] font-semibold text-gray-800 leading-tight tracking-tight mb-5">
                  Your automated digital receptionist.
                </h3>
                <button className="bg-[#1a1a1b] hover:bg-black text-white px-4 py-2 rounded-xl flex items-center gap-1.5 text-[11px] font-bold transition-all hover:scale-105 active:scale-95 w-fit">
                  <Rocket className="w-3.5 h-3.5 text-white" />
                  Get Started
                </button>
              </div>
              <div className="bg-[#fafafa]/50 border-t border-gray-100 p-4 md:p-5">
                <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
                  {[
                    "Advanced Automations",
                    "Weekly Development Calls",
                    "Human Like Quality",
                    "Rigorous Testing",
                    "24/7 Priority Support",
                    "Latest AI Models"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-200 shrink-0 mt-[6px]" />
                      <span className="text-[9px] font-bold text-gray-500 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Outbound Voice Agents */}
            <div className="bg-[#242424] rounded-[1.25rem] border border-[#2d2d2d] shadow-sm flex flex-col overflow-hidden h-full">
              <div className="p-4 md:p-5 flex-1">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <h4 className="text-[13px] font-bold text-white tracking-tight">Outbound Voice Agents</h4>
                  <span className="px-2 py-0.5 bg-blue-400/20 text-blue-300 text-[8px] font-extrabold uppercase rounded-full tracking-wider whitespace-nowrap">Send Calls</span>
                </div>
                <h3 className="text-[16px] leading-tight tracking-tight mb-5 text-white/70 font-medium">
                  Fully automate <span className="font-bold text-white">reminders, follow-ups & more.</span>
                </h3>
                <button className="bg-white hover:bg-gray-100 text-[#1a1a1b] px-4 py-2 rounded-xl flex items-center gap-1.5 text-[11px] font-bold transition-all hover:scale-105 active:scale-95 w-fit">
                  <Rocket className="w-3.5 h-3.5 text-[#1a1a1b]" />
                  Get Started
                </button>
              </div>
              <div className="bg-[#1f1f1f]/80 border-t border-[#2d2d2d] p-4 md:p-5">
                <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
                  {[
                    "Advanced Automations",
                    "Weekly Development Calls",
                    "Human Like Quality",
                    "Rigorous Testing",
                    "24/7 Priority Support",
                    "Latest AI Models"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#5d5d5d] shrink-0 mt-[6px]" />
                      <span className="text-[9px] font-medium text-[#a2a2a2] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-5 mt-0">
          <DashboardCard
            title="Chat Agents"
            subtitle="24/7 Web & SMS"
            iconSrc="/chat.png"
            variant="pink"
            delay={0.4}
            className="h-full"
          >
            <div className="bg-white rounded-xl border border-violet-100 shadow-sm flex flex-col overflow-hidden w-full mt-3">
              <div className="p-3 md:p-4 flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h4 className="text-[12px] font-bold text-gray-900 tracking-tight">Direct Response</h4>
                  <span className="px-2 py-0.5 bg-violet-100 text-violet-700 text-[8px] font-extrabold uppercase rounded-full tracking-wider whitespace-nowrap">Omnichannel</span>
                </div>
                <h3 className="text-[14px] font-semibold text-gray-800 leading-tight tracking-tight mb-4">
                  Engage visitors instantly.
                </h3>
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold transition-all hover:scale-105 active:scale-95 w-fit">
                  Deploy Agent
                </button>
              </div>
              <div className="bg-[#f5eeff]/50 border-t border-violet-100/50 p-3 md:p-4">
                <ul className="flex flex-col gap-y-2">
                  {[
                    "SMS & WhatsApp Integration",
                    "Website Visitor Widget",
                    "Real-time CRM Sync"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-300 shrink-0 mt-[3px]" />
                      <span className="text-[9px] font-bold text-violet-800/50 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Automation Engine"
            subtitle="Workflow Orchestration"
            iconSrc="/AI.png"
            variant="dark"
            delay={0.5}
            className="h-full"
          >
            <div className="bg-[#0f172a] rounded-xl border border-[#1e293b] shadow-sm flex flex-col overflow-hidden w-full mt-3">
              <div className="p-3 md:p-4 flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h4 className="text-[12px] font-bold text-white tracking-tight">API Bridges</h4>
                  <span className="px-2 py-0.5 bg-blue-400/20 text-blue-300 text-[8px] font-extrabold uppercase rounded-full tracking-wider whitespace-nowrap">Zapier / Custom</span>
                </div>
                <h3 className="text-[14px] leading-tight tracking-tight mb-4 text-white/70 font-medium">
                  Connect tools <span className="font-bold text-white">seamlessly in the background.</span>
                </h3>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold transition-all hover:scale-105 active:scale-95 w-fit">
                  Explore Workflows
                </button>
              </div>
              <div className="bg-[#0b1121]/50 border-t border-[#1e293b] p-3 md:p-4">
                <ul className="flex flex-col gap-y-2">
                  {[
                    "Custom Application Endpoints",
                    "Database Bi-directional Sync",
                    "Real-time Event Triggers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-[3px]" />
                      <span className="text-[9px] font-medium text-blue-200/60 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default RightBox;
