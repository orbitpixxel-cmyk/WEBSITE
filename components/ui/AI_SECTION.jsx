"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CardAni from "./card-animation/cardAni";
import BorderGlow from "./Border/BorderGlow";
import Bento from "./Bento";
import Bento2 from "./Bento2";
import RightBox from "./rightBox";
import { ChevronDown, Star, Bot, BrainCircuit, ShieldCheck, Users, Cpu, Briefcase, Zap, Phone, MessageSquare, Settings, RefreshCw, ArrowRight, Globe, Webhook, TrendingUp, Search, Rocket, Monitor, BarChart3 } from "lucide-react";

/**
 * Accordion Item
 */
const AccordionItem = ({ title, children, isOpen, onToggle, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`mb-3 rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-blue-200 bg-white shadow-[0_8px_30px_-4px_rgba(59,130,246,0.1)]' : 'border-gray-200/60 bg-gray-50/30 hover:border-blue-100 hover:bg-gray-50'}`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 px-5 text-left group"
    >
      <span className={`text-[16px] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
        {title}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-blue-200 group-hover:text-blue-500 shadow-sm'}`}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="pb-5 px-5 text-sm text-zinc-500 leading-relaxed font-medium">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/**
 * Profile row inside dashboard card
 */
const ProfileRow = ({ name, role, rating, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors cursor-default"
  >
    <div
      className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm"
      style={{ background: color }}
    >
      {name.split(" ").map(n => n[0]).join("")}
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm font-semibold text-gray-900 truncate">{name}</div>
      <div className="text-[11px] text-zinc-400 font-medium">{role}</div>
    </div>
    <div className="flex items-center gap-1 shrink-0">
      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
      <span className="text-xs font-semibold text-gray-700">{rating}</span>
    </div>
  </motion.div>
);

/**
 * Stat Card for the bottom row
 */
const StatCard = ({ icon: Icon, customIcon, value, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center px-4"
  >
    {customIcon ? (
      <div className="-mb-8 flex items-center justify-center relative z-10">
        {customIcon}
      </div>
    ) : (
      <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#3b82f6]/5 transition-colors">
        {Icon && <Icon className="w-6 h-6 text-[#3b82f6]" />}
      </div>
    )}
    <div className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{value}</div>
    <p className="text-sm text-zinc-500 leading-relaxed font-medium max-w-[280px]">{description}</p>
  </motion.div>
);

const teamMembers = [
  { name: "Arlene McCoy", role: "Business Development", rating: "4.8", color: "#7c3aed" },
  { name: "David Beckham", role: "AI Strategy Lead", rating: "4.9", color: "#2563eb" },
  { name: "Ronald Richards", role: "Solutions Architect", rating: "4.7", color: "#059669" },
];

const featuredExperts = [
  { name: "Mario Kassa", role: "LLM Engineer", color: "#ec4899" },
  { name: "Sara Rose", role: "Lead Developer", color: "#f59e0b" },
];


export default function AISection() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <div className="min-h-screen w-full rounded-[3.5rem] bg-white py-24 text-black z-10 relative overflow-hidden">
      {/* Background Mesh Gradients — Blueish */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-[#3b82f6]/8 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[50%] h-[50%] bg-[#60a5fa]/6 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#93c5fd]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 text-left">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-start mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/60 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5" />
            AI-Powered Solutions
          </span>
        </motion.div>

        {/* Main Content Grid: Left Text + Right Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column — Heading + Description + Accordions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.05] text-gray-900 mb-6">
              Intelligent Systems{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Built for Scale</span>
                <div className="absolute -bottom-2 right-0 w-[40%] h-3 bg-blue-200/40 blur-md rounded-full -z-10" />
              </span>
            </h2>

            {/* Feature Blurb */}
            <div className="mb-12">
              <p className="text-[17px] text-zinc-500 leading-relaxed font-medium max-w-[460px]">
                We design and deploy AI systems powered by LLMs that drive operational efficiency, surface deeper insights, and give your business a measurable competitive edge.
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full max-w-lg mb-8">  {/* Container for accordions for tighter grouping */}

              {/* Accordion Items */}
              <AccordionItem
                title="No Cost Until You See Results"
                isOpen={openAccordion === 0}
                onToggle={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
                delay={0.1}
              >
                We work on a performance-first model. You only invest when our AI solutions demonstrate measurable business impact — zero risk, full transparency.
              </AccordionItem>

              <AccordionItem
                title="Enterprise-Grade Security"
                isOpen={openAccordion === 1}
                onToggle={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
                delay={0.2}
              >
                Every system we deploy is SOC 2 aligned with private cloud and on-prem options. Your proprietary data never leaves your infrastructure.
              </AccordionItem>

              <AccordionItem
                title="Seamless Integration"
                isOpen={openAccordion === 2}
                onToggle={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
                delay={0.3}
              >
                Our AI plugs directly into your existing CRM, ERP, and internal tools — no rip-and-replace. Your teams keep working the way they already do.
              </AccordionItem>
            </div> {/* End Accordion Container */}
          </motion.div>

          {/* Right Column — AI Dashboard (Extracted to RightBox) */}
          <RightBox />
        </div>
      </div>

      {/* ─── Strategic Vision CTA Section (Moved to 2nd) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-24 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] p-12 md:p-16" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] text-white mb-6 tracking-tight">
                Empower your growth with a{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">custom CRM built for your business.</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed font-medium mb-8 max-w-md">
                Ditch the generic tools. We build tailored CRM systems that integrate perfectly with your internal workflows and scale as you grow.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Custom CRM", icon: Settings },
                  { label: "Sales Automation", icon: Zap },
                  { label: "Lead Management", icon: Users },
                  { label: "Business Analytics", icon: BarChart3 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-300 border border-white/10">
                    <item.icon className="w-3.5 h-3.5 text-blue-400" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:scale-105 active:scale-95 text-sm">
                  Schedule a Demo →
                </button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] border border-white/10"
            >
              <Image
                src="/assets/20260403_1348_Image Generation_remix_01kn96pkwbfes8t2s32d6se0rp.png"
                alt="AI Intelligence Visualization"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ─── Bento Grid Section (3rd) ─── */}
      <Bento2 />

      {/* ─── Getting Started Process Section (Moved to 4th/Bottom) ─── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-gray-100 mb-20"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 block">How it works</span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Getting started is easy</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Discovery Call",
                desc: "We learn about your business and figure out what kind of AI agent you need.",
                delay: 0.1,
              },
              {
                step: "02",
                icon: Search,
                title: "Scoping Call",
                desc: "We plan out the project and test scenarios to make sure everything works.",
                delay: 0.2,
              },
              {
                step: "03",
                icon: Monitor,
                title: "Development",
                desc: "Your AI agent gets built and connected to your systems — ready to use, no extra fees.",
                delay: 0.3,
              },
              {
                step: "04",
                icon: Rocket,
                title: "Testing & Launch",
                desc: "Final testing, then your AI agent goes live and starts helping your business.",
                delay: 0.4,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)] hover:border-blue-100 transition-all duration-500"
              >
                {/* Step Number & Icon Row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[40px] font-bold text-gray-900 leading-none tracking-tighter opacity-80 group-hover:text-blue-600 transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-[18px] font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[14px] text-zinc-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}