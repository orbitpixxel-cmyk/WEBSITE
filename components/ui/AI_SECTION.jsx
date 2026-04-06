"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CardAni from "./card-animation/cardAni";
import Bento from "./Bento";
import Bento2 from "./Bento2";
import { ChevronDown, Star, Bot, BrainCircuit, ShieldCheck, Users, Cpu, Briefcase, Zap, Phone, MessageSquare, Settings, RefreshCw, ArrowRight, Globe, Webhook } from "lucide-react";

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
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">AI</span>
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

          {/* Right Column — AI Automation Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#3b82f6]/10 via-[#60a5fa]/5 to-transparent blur-[40px] rounded-[3rem] pointer-events-none" />

            <div className="w-full max-w-[480px] rounded-[2rem] shadow-[0_24px_80px_-16px_rgba(59,130,246,0.15)] p-7 md:p-9 relative overflow-hidden border border-blue-100/50"
              style={{ background: 'linear-gradient(145deg, #f8faff 0%, #eef4ff 40%, #f0f4ff 100%)' }}
            >
              {/* Subtle blue corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/8 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60a5fa]/6 blur-[60px] rounded-full pointer-events-none" />

              {/* Title */}
              <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-tight mb-3 tracking-tight relative z-10">
                Boost Your Business Potential<br />with <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">AI Automation</span>
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium mb-8 relative z-10">
                Effortlessly manage leads and customer interactions through powerful AI-driven solutions.
              </p>

              {/* Calling Agents Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-3 border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 relative z-10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <Image src="/voice.png" alt="Calling Agents" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Calling Agents</span>
                    <p className="text-[12px] text-zinc-400 mt-0.5">Instant Lead Qualification | Call Nurturing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700">12 Active</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium">Avg. Connect Rate: <span className="font-semibold text-gray-700">68%</span></span>
                </div>
              </motion.div>

              {/* Chat Agents Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-3 border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 relative z-10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <Image src="/chat.png" alt="Chat Agents" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Chat Agents</span>
                    <p className="text-[12px] text-zinc-400 mt-0.5">AI-Powered Receptionist | Missed Call Recovery</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-blue-700">Always On</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium">Avg. Response: <span className="font-semibold text-gray-700">&lt;0.5s</span></span>
                </div>
              </motion.div>

              {/* Automation Engine Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 mb-0 border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 relative z-10"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <Image src="/AI.png" alt="Automation Engine" width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Automation Engine</span>
                    <p className="text-[12px] text-zinc-400 mt-0.5">End-to-end workflow orchestration</p>
                  </div>
                </div>

                {/* Workflow Pipeline */}
                <div className="flex items-center justify-between gap-1 mb-6 overflow-x-auto pb-1">
                  {[
                    { icon: Users, label: "Lead In", sub: "Webhook" },
                    { icon: Bot, label: "LLM (Deepgram)", sub: "" },
                    { icon: Globe, label: "OpenAI Agent", sub: "Weponse" },
                    { icon: Phone, label: "HubSpot Sync", sub: "Weprlok" },
                    { icon: Zap, label: "Slack Alert", sub: "" },
                  ].map((step, i, arr) => (
                    <div key={i} className="flex items-center gap-1 shrink-0">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100/50 flex items-center justify-center mb-1.5">
                          <step.icon className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <span className="text-[9px] font-semibold text-gray-700 leading-tight max-w-[60px]">{step.label}</span>
                        {step.sub && <span className="text-[8px] text-zinc-400 leading-tight">{step.sub}</span>}
                      </div>
                      {i < arr.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-blue-300 shrink-0 mt-[-14px]" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex-1">
                    <div className="text-xl font-bold text-gray-900 tracking-tight">$1,250<span className="text-sm text-zinc-400">.00</span></div>
                    <div className="text-[11px] text-zinc-400 font-medium">Revenue Generated</div>
                  </div>
                  <div className="w-[1px] h-10 bg-gray-100" />
                  <div className="flex-1">
                    <div className="text-xl font-bold text-gray-900 tracking-tight">4.5%</div>
                    <div className="text-[11px] text-zinc-400 font-medium">Conversion Rate</div>
                  </div>
                </div>
              </motion.div>

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
              customIcon={
                <div className="relative w-48 h-48 -mt-[70px]">
                  <Image
                    src="/20260405_0210_Reversed Colors Button_remix_01knd3h12gehvvpw1atm6qnpyr.png"
                    alt="Calling Agents"
                    fill
                    className="object-contain"
                  />
                </div>
              }
              value="Calling Agents"
              description="Qualify leads, schedule meetings, and instantly route them to the right rep - no human needed."
              delay={0.1}
            />
            <StatCard
              customIcon={
                <div className="relative w-48 h-48 -mt-[70px]">
                  <Image
                    src="/chat.png"
                    alt="Chat Agents"
                    fill
                    className="object-contain"
                  />
                </div>
              }
              value="Chat Agents"
              description="Answer instantly, resolve FAQs, and guide every user to the right place - all in real time."
              delay={0.2}
            />
            <StatCard
              customIcon={
                <div className="relative w-48 h-48 -mt-[70px]">
                  <Image
                    src="/AI.png"
                    alt="Automation Agents"
                    fill
                    className="object-contain"
                  />
                </div>
              }
              value="Automation Agents"
              description="Capture buyer intent, engage leads, and solve requests automatically - with a human tone."
              delay={0.3}
            />
          </div>
        </motion.div>

      </div>


      {/* ─── Bento Grid Section ─── */}
      {/* <Bento /> */}
      <Bento2 />

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