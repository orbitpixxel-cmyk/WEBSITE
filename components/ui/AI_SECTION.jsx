"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CardAni from "./card-animation/cardAni";
import Bento from "./Bento";
import { ChevronDown, Star, Bot, BrainCircuit, ShieldCheck, Users, Cpu, Briefcase, Zap } from "lucide-react";

/**
 * Accordion Item
 */
const AccordionItem = ({ title, children, isOpen, onToggle, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group"
    >
      <span className="text-lg font-semibold text-gray-900 group-hover:text-[#3b82f6] transition-colors">
        {title}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-5 text-sm text-zinc-500 leading-relaxed font-medium">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <div className="h-[1px] bg-gray-100" />
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
const StatCard = ({ icon: Icon, value, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center px-4"
  >
    <div className="w-14 h-14 rounded-full bg-[#f8fafc] border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#3b82f6]/5 transition-colors">
      <Icon className="w-6 h-6 text-[#3b82f6]" />
    </div>
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
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-[#3b82f6]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 relative z-10 text-left">

        {/* Main Content Grid: Left Text + Right Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column — Heading + Description + Accordions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900 mb-10">
              Check our Business Model built with{" "}
              <span className="text-[#3b82f6]">AI</span>
            </h2>

            {/* Feature Blurb */}
            <div className="mb-8">
              <h4 className="text-base font-bold text-gray-900 mb-2">AI is the future of enterprise</h4>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium max-w-md">
                We build intelligent AI systems powered by LLMs that give better operational efficiency, deeper insights, and a competitive edge to our clients.
              </p>
            </div>

            <div className="h-[1px] bg-gray-100 mb-2" />

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
          </motion.div>

          {/* Right Column — Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[480px] bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] p-6 md:p-8 relative overflow-hidden">
              {/* Subtle bg pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#3b82f6]/5 blur-[80px] rounded-full pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                    <BrainCircuit className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">AI Team Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* Team Members List */}
              <div className="space-y-1 mb-6 relative z-10">
                {teamMembers.map((member, i) => (
                  <ProfileRow key={i} {...member} delay={0.3 + i * 0.1} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gray-100 mb-6" />

              {/* Featured Experts Row */}
              <div className="flex gap-3 mb-6 relative z-10">
                {featuredExperts.map((expert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-1 p-4 bg-gray-50/80 rounded-xl border border-gray-100/80 hover:border-[#3b82f6]/20 transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-full mb-3 flex items-center justify-center text-white text-xs font-bold shadow-sm"
                      style={{ background: expert.color }}
                    >
                      {expert.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{expert.name}</div>
                    <div className="text-[11px] text-zinc-400 font-medium">{expert.role}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors duration-300 relative z-10"
              >
                View Profile
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-dashed divide-gray-200">
            <StatCard
              icon={Briefcase}
              value="500+"
              description="We provide best-in-class AI implementations with deep domain expertise across every major industry vertical."
              delay={0.1}
            />
            <StatCard
              icon={Users}
              value="Total Clients 14M"
              description="We serve millions of end-users through our client deployments. You can check our customer success stories."
              delay={0.2}
            />
            <StatCard
              icon={Zap}
              value="AI Solutions Deployed 15K"
              description="The AI industry is evolving rapidly, and our solutions are built to scale with your growing business needs."
              delay={0.3}
            />
          </div>
        </motion.div>

      </div>


      {/* ─── Bento Grid Section ─── */}
      <Bento />

      <div className="w-full mt-24">
        <section className="relative overflow-hidden h-fit py-32 bg-transparent text-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] text-black mb-8">
                We turn complex business challenges into intelligent AI-driven solutions.
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Workflow Automation", "Predictive Models", "Custom LLM Apps", "Data Pipelines"].map((tag) => (
                  <div key={tag} className="px-5 py-2 bg-gray-100/80 backdrop-blur-sm rounded-full text-sm font-semibold text-zinc-600 border border-gray-200/50">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
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
        </section>
      </div>
    </div>
  );
}