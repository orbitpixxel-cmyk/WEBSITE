"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
      <span className={`transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`} style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.01em' }}>
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
          <div className="pb-5 px-5 text-zinc-500 leading-relaxed" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}>
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
      <div className="text-gray-900 truncate" style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</div>
      <div className="text-zinc-400" style={{ fontSize: '11px', fontWeight: 400, lineHeight: 1.5 }}>{role}</div>
    </div>
    <div className="flex items-center gap-1 shrink-0">
      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
      <span className="text-gray-700" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.01em' }}>{rating}</span>
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
    <div className="text-gray-900 mb-3 tracking-tight" style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em' }}>{value}</div>
    <p className="text-zinc-500 leading-relaxed max-w-[280px]" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>{description}</p>
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
      {/* Background Mesh Gradients - Blueish */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 text-left">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-start mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/60 bg-blue-50 text-blue-600 shadow-sm" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.02em' }}>
            <BrainCircuit className="w-3.5 h-3.5" />
            AI-Powered Solutions
          </span>
        </motion.div>

        {/* Main Content Grid: Left Text + Right Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column - Heading + Description + Accordions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="tracking-tight leading-[1.05] mb-6 whitespace-normal" style={{ fontSize: '40px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Systems That Run Your Business,</span>
                <div className="absolute -bottom-2 right-0 w-[40%] h-3 bg-blue-200/40 blur-md rounded-full -z-10" />
              </span>
              <br />
              <span className="text-gray-900">So You Don&apos;t Have To</span>
            </h2>

            {/* Feature Blurb */}
            <div className="mb-12">
              <p className="text-zinc-500 leading-relaxed max-w-[460px]" style={{ fontSize: '17px', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.7 }}>
                We design and manage smart systems that handle your calls, bookings, follow-ups, and workflows, so your business runs smoothly and never misses an opportunity
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full max-w-lg mb-8">
              <div className="mt-12">
                {/* Accordion Items */}
                <AccordionItem
                  title="Built Around Your Business"
                  isOpen={openAccordion === 0}
                  onToggle={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
                  delay={0.1}
                >
                  Every system is designed to match your workflows, goals, and growth, so you get a solution that fits from day one.
                </AccordionItem>

                <AccordionItem
                  title="Enterprise-Grade Security"
                  isOpen={openAccordion === 1}
                  onToggle={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
                  delay={0.2}
                >
                  SOC 2 compliant systems with private cloud and on-prem options. so your data stays secure, controlled, and always yours.
                </AccordionItem>

                <AccordionItem
                  title="Works With Your Existing Tools"
                  isOpen={openAccordion === 2}
                  onToggle={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
                  delay={0.3}
                >
                  No rip-and-replace. We integrate seamlessly so your team keeps working exactly as they do today.
                </AccordionItem>
              </div>
            </div>
          </motion.div>

          {/* Right Column - AI Dashboard (Extracted to RightBox) */}
          <RightBox />
        </div>
      </div>

      {/* Strategic Vision CTA Section (Moved to 2nd) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mt-24 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] p-12 md:p-16" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}>
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col">
              <h2 className="leading-[1.1] text-white mb-6 tracking-tight" style={{ fontSize: '40px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                A CRM That Works
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">the Way Your Business Does</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md" style={{ fontSize: '16px', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.7 }}>
                We design and manage custom systems that handle your leads, follow-ups, and customer journeys, so every opportunity is tracked and converted
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Custom CRM", icon: Settings },
                  { label: "Sales Automation", icon: Zap },
                  { label: "Lead Management", icon: Users },
                  { label: "Business Analytics", icon: BarChart3 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-slate-300 border border-white/10" style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.01em' }}>
                    <item.icon className="w-3.5 h-3.5 text-blue-400" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full transition-all shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:scale-105 active:scale-95" style={{ fontWeight: 500, fontSize: '15px', letterSpacing: '0.01em' }}>
                  Get Your Custom CRM
                </button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] border border-white/10 bg-slate-900"
            >
              <Image 
                src="/crm_dashboard_image.png"
                alt="AI CRM Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bento Grid Section (3rd) */}
      <Bento2 />

      {/* Getting Started Process Section (Moved to 4th/Bottom) */}
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
            <span className="text-blue-600 uppercase mb-4 block" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.02em' }}>How to start</span>
            <h3 className="text-gray-900 tracking-tight" style={{ fontSize: '40px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Getting started is easy</h3>
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
                desc: "Your AI agent gets built and connected to your systems - ready to use, no extra fees.",
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
                  <span className="text-gray-900 leading-none tracking-tighter opacity-80 group-hover:text-blue-600 transition-colors duration-300" style={{ fontSize: '40px', fontWeight: 500, letterSpacing: '-0.03em' }}>
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-50 group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-gray-900 mb-3 tracking-tight" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em' }}>
                  {item.title}
                </h4>
                <p className="text-zinc-500 leading-relaxed" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>
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