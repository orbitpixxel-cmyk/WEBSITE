"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Calendar, Zap, MessageSquare } from "lucide-react";
import { useInViewChildren } from "@/lib/useInView";

const Bento2 = () => {
  const containerRef = useInViewChildren();

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto w-full px-6 md:px-10 mt-24 mb-24 font-primary">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200/60 bg-blue-50 text-blue-600 shadow-sm" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.02em' }}>
          BENEFITS
        </span>
        <h2 className="tracking-tight text-gray-900 mb-6" style={{ fontSize: '48px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          What your business gains from this
        </h2>
      </div>

      {/* Bento Grid - Vertical on mobile, 2x2 on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Box 1 */}
        <div
          data-animate
          className="bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] fade-in-up delay-1"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/agents/20260405_0017_Image Generation_remix_01kncx44xfey0seb8sje261new.png"
              alt="Instant replies"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-gray-900 mb-3" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.01em' }}>Instant replies, 24/7</h3>
            <p className="text-zinc-500 leading-relaxed" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}>
              Pick up the phone instantly, even at night or on weekends - so you don&apos;t lose leads or keep customers waiting.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div
          data-animate
          className="bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] fade-in-up delay-3"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/agents/20260405_0022_Image Generation_remix_01kncxc5p8fg5vdy8tg8rw9qtb.png"
              alt="Save time"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-purple-900/5 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-purple-900" />
            </div>
            <h3 className="text-gray-900 mb-3" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.01em' }}>Save time for your team</h3>
            <p className="text-zinc-500 leading-relaxed" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}>
              By handling repetitive calls, the agent frees up your team to focus on work that actually needs a human.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div
          data-animate
          className="bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] fade-in-up delay-5"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/agents/20260405_0030_Image Generation_remix_01kncxvezcev58fbemj0stfwf5.png"
              alt="System integration"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-gray-900" />
            </div>
            <h3 className="text-gray-900 mb-3" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.01em' }}>Works with your existing systems</h3>
            <p className="text-zinc-500 leading-relaxed" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}>
              The AI connects to your tools like CRM, job schedulers, or calendars - so it fits right into your workflow without adding complexity.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div
          data-animate
          className="bg-white rounded-[2.5rem] flex flex-col overflow-hidden min-h-[380px] group border border-gray-100 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] fade-in-up delay-7"
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/agents/20260405_0027_Image Generation_remix_01kncxn0n7ehrsc1c7xjr1y9s7.png"
              alt="Full ownership"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 flex-1">
            <div className="w-10 h-10 rounded-xl bg-blue-900/5 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-blue-900" />
            </div>
            <h3 className="text-gray-900 mb-3" style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.01em' }}>You fully own the agent</h3>
            <p className="text-zinc-500 leading-relaxed" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.7 }}>
              Once your agent is built, it&apos;s yours. No hidden platform fees or subscriptions. You stay in full control.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bento2;