"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Users, Calendar, Mail, Headphones, Check, Zap, MessageSquare } from "lucide-react";

const Bento = () => {
  return (
    <div className="max-w-5xl mx-auto w-full px-6 md:px-10 mt-24 mb-24 font-primary">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full border border-blue-600/30 bg-blue-600/5 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          BENEFITS
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-primary">
          What you get with Inflate AI
        </h2>
      </div>

      {/* Bento Grid - Original 12-column layout with staggered cards */}
      <div className="grid grid-cols-12 gap-8">

        {/* Box 1 — Instant replies, 24/7 — col-span-5 — White BG */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)]"
        >
          {/* Image on top, full width */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/hero/appointment.png"
              alt="Automatic Booking System"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text below */}
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary tracking-tight">Automatic Booking System</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-semibold">
              AI schedules appointments, sends confirmations, and manages your calendar — so you never miss a booking.
            </p>
          </div>
        </motion.div>

        {/* Box 2 — Save time for your team — col-span-7 — White BG */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-7 bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)]"
        >
          {/* Image on top, full width */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/hero/email.png"
              alt="Automated Email"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Text below */}
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-purple-900/5 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-purple-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary tracking-tight">Save time for your team</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-semibold">
              By handling repetitive tasks and emails, the agent frees up your team to focus on work that actually needs a human.
            </p>
          </div>
        </motion.div>

        {/* Box 3 — Works with your existing systems — col-span-7 — White BG */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-7 bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)]"
        >
          {/* Image on top, full width */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/hero/chats.png"
              alt="System integration"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Text below */}
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary tracking-tight">Works with your existing systems</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-semibold">
              The AI connects to your tools like CRM, job schedulers, or calendars - so it fits right into your workflow without adding complexity.
            </p>
          </div>
        </motion.div>

        {/* Box 4 — You fully own the agent — col-span-5 — White BG */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)]"
        >
          {/* Image on top, full width */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/agents/20260405_0027_Image Generation_remix_01kncxn0n7ehrsc1c7xjr1y9s7.png"
              alt="Full ownership"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Text below */}
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-blue-900/5 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-primary tracking-tight">You fully own the agent</h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-semibold">
              Once your agent is built, it&apos;s yours. No hidden platform fees or subscriptions. You stay in full control.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Bento;
