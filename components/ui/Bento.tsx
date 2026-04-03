"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Calendar, Mail, Headphones, Check, Zap, MessageSquare } from "lucide-react";

const Bento = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 md:px-10 mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/5 text-[#7c3aed] text-xs font-semibold uppercase tracking-widest mb-4">
          Feature
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          AI solutions you need
        </h2>
        <p className="text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
          Whether you&apos;re a lean startup or a large enterprise, we have an AI plan that&apos;s right for you.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-8">

        {/* Box 1 — Lead Handling — Zero Effort Qualification */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 bg-[#F3F4F6] rounded-3xl p-8 flex flex-col justify-between min-h-[350px]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead Handling</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px]">
              Capture and convert every lead instantly with 24/7 automated qualification and booked appointments.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200/80 text-[11px] font-bold text-gray-900 flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               Instant qualification
            </div>
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200/80 text-[11px] font-bold text-emerald-600">
              100% Capture ✓
            </div>
          </div>
        </motion.div>

        {/* Box 2 — Appointment Booking — Seamless Scheduling */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-7 bg-[#EDE9FE] rounded-3xl p-8 flex flex-col justify-between min-h-[350px]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-900/5 flex items-center justify-center mb-5">
              <Calendar className="w-5 h-5 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Booking</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[320px]">
              AI handles scheduling, rescheduling, and instant confirmations directly on your team&apos;s real-time calendar.
            </p>
          </div>
          <div className="mt-6 bg-white/70 rounded-2xl border border-purple-100 overflow-hidden backdrop-blur-sm">
            <div className="flex border-b border-purple-100">
              <div className="flex-1 py-1.5 text-center text-[10px] font-bold text-gray-700 bg-white uppercase tracking-wider">Calendar Sync</div>
              <div className="flex-1 py-1.5 text-center text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Real-Time</div>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#7c3aed] flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 tracking-tight">Lead Booked @ 10:30 AM</span>
                </div>
                <span className="text-[10px] font-bold text-[#7c3aed]">Confirmed</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center border border-emerald-200">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-800 tracking-tight">Google Calendar Synced</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Live</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Box 3 — Dark Purple — Smart Follow-ups */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-7 bg-[#4C1D95] rounded-3xl p-8 flex flex-col justify-between min-h-[350px]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
              <Mail className="w-5 h-5 text-purple-200" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Smart Follow-ups</h3>
            <p className="text-sm text-purple-200/70 leading-relaxed max-w-[320px]">
              AI manages reminder sequences and multi-channel nurturing workflows, ensuring no lead slips through the cracks.
            </p>
          </div>
          <div className="mt-6 bg-[#000000]/20 rounded-2xl p-5 border border-white/5 shadow-inner backdrop-blur-md">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight">Conversion Lift</span>
                <span className="text-[10px] text-purple-200/40 font-medium">Insights for the last 7 days</span>
              </div>
              <div className="flex p-0.5 bg-white/5 rounded-lg border border-white/5">
                {["3m", "30d", "7d"].map((pill, i) => (
                  <button
                    key={pill}
                    className={`px-3 py-1 text-[9px] font-bold rounded-md transition-all ${
                      i === 2 ? "bg-white/10 text-white shadow-sm" : "text-purple-200/40 hover:text-white"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom SVG Area Chart mimicking the image */}
            <div className="relative h-24 w-full group">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background Grid Lines */}
                <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                
                {/* Lower Area Path */}
                <path
                  d="M0 80 Q 50 90, 100 70 T 200 60 T 300 80 T 400 70 V 100 H 0 Z"
                  fill="rgba(255,255,255,0.05)"
                />
                <path
                  d="M0 80 Q 50 90, 100 70 T 200 60 T 300 80 T 400 70"
                  stroke="rgba(255,255,255,0.15)"
                  fill="none"
                  strokeWidth="1.5"
                />

                {/* Upper Area Path (Primary) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  d="M0 50 Q 50 95, 100 60 T 200 45 T 300 90 T 400 65"
                  stroke="#ffffff"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0 50 Q 50 95, 100 60 T 200 45 T 300 90 T 400 65 V 100 H 0 Z"
                  fill="url(#purpleGradient)"
                  className="opacity-60"
                />
              </svg>
            </div>

            <div className="flex justify-between mt-4">
              {["Jun 24", "Jun 26", "Jun 28", "Jun 30"].map(m => (
                <span key={m} className="text-[9px] font-bold text-purple-200/30 uppercase tracking-tight">{m}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Box 4 — Customer Support — 24/7 Availability */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[350px] border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-900/5 flex items-center justify-center mb-5">
              <Headphones className="w-5 h-5 text-blue-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px]">
              Provide consistent, instant answers to customer FAQs anytime of day, without hiring extra staff.
            </p>
          </div>
          <div className="mt-6 bg-gray-50 rounded-2xl border border-gray-100 p-4">
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-3">Support Channels</div>
            <div className="space-y-3">
              {[
                { name: "Website AI Agent", status: "Active", icon: <MessageSquare className="w-3.5 h-3.5" /> },
                { name: "WhatsApp Business", status: "Live", icon: <Zap className="w-3.5 h-3.5" /> },
                { name: "Email Automations", status: "Synced", icon: <Mail className="w-3.5 h-3.5" /> },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="text-blue-500">{item.icon}</div>
                     <span className="text-[11px] font-bold text-gray-700 tracking-tight">{item.name}</span>
                  </div>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Bento;
