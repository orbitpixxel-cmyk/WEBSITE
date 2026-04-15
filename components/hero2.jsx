"use client";
import React from "react";
import { motion } from "framer-motion";
import { PremiumArcs } from "@/components/ui/PremiumArcs";
import { Zap } from "lucide-react";

import TechStackRow from './TechStackRow';

export default function RoughHeroReplicate() {
    return (
        <div className="relative w-[100vw] h-[110vh] text-slate-900 flex flex-col items-center pt-20 font-sans z-[50] overflow-hidden bg-white" style={{
            background: 'radial-gradient(ellipse at 15% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 85% 75%, rgba(59, 130, 246, 0.10) 0%, transparent 45%), radial-gradient(ellipse at 50% 95%, rgba(37, 99, 235, 0.08) 0%, transparent 35%), linear-gradient(145deg, #fafbfc 0%, #f1f5f9 20%, #e2e8f0 40%, #f0f9ff 65%, #f8fafc 85%, #ffffff 100%)'
        }}>

            {/* Background Infrastructure Layer - Circular Gradiations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Concentric Decorative Circles - Increased Visibility */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[100vw] h-[100vw] opacity-[0.06]">
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500 scale-[0.9] origin-center" />
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500 scale-[0.75] origin-center" />
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500 scale-[0.6] origin-center" />
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500 scale-[0.45] origin-center" />
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-blue-500 scale-[0.3] origin-center" />
                </div>

                {/* 3 Premium Semi-Circles (Concentric Arcs) - Now Reusable */}
                {/* <PremiumArcs opacity={0.4} /> */}

                {/* Soft Radial Glows for Light Theme - Ultra Premium Enhanced Wings */}
                <div
                    className="absolute inset-x-0 top-0 h-full opacity-70 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 5% 5%, rgba(37, 99, 235, 0.3) 0%, transparent 60%), radial-gradient(circle at 95% 5%, rgba(37, 99, 235, 0.3) 0%, transparent 60%), radial-gradient(circle at 50% 15%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)' }}
                />
            </div>

            {/* Content Wrapper to help centering */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

                {/* Hero Header Section */}
                <div className="text-center max-w-4xl mb-8 mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-sm font-medium mb-6 mx-auto shadow-sm"
                    >
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span>Pioneering Next-Gen AI Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[56px] font-bold leading-snug tracking-normal mb-8 px-6"
                    >
                        <span className="text-slate-900 font-extrabold">
                            Empower Your
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#3B82F6]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                Business
                            </span>
                        </span><br />
                        <span className="text-slate-900 font-extrabold">
                            with an
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#60A5FA]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                AI Partner
                            </span>
                        </span><br />
                        <span className="text-slate-900 font-extrabold">
                            That
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#22D3EE]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                Never Sleeps
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-wide"
                    >
                        We build custom AI solutions that automate your operations, enhance customer engagement, and drive business growth 24/7.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:scale-105 active:scale-95">
                            Book a Free Call
                        </button>
                        <button className="bg-white hover:bg-blue-50 text-slate-800 border border-slate-200 px-8 py-3 rounded-full font-bold transition-all shadow-sm hover:border-blue-200">
                            Our Services
                        </button>
                    </motion.div>


                </div>

                {/* Hero Interactive Playground */}
                {/* Hero Interactive Playground */}
                <div className="relative w-full h-[120px] md:h-[150px] mt-0 overflow-visible">
                    {/* Tech Marquee */}
                    <div className="absolute top-2 lg:top-4 left-0 w-full z-0 opacity-50 pointer-events-none">
                        <TechStackRow />
                    </div>

                    {/* Instant Updates Card (Left, Tilted Down) */}
                    <div className="absolute -top-[210px] lg:-top-[340px] -left-[1%] md:-left-[4%] lg:-left-[6%] xl:-left-[8%] rotate-[-10deg] z-10 w-[220px] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                        <div className="rounded-[16px] bg-white/60 backdrop-blur-md border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 flex flex-col items-center justify-center min-h-[130px] text-center">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#683EE8] flex items-center justify-center shadow-md mb-2.5">
                                <svg className="w-[22px] h-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1 tracking-tight">Instant Updates</h3>
                            <p className="text-[11px] text-slate-500 font-medium">Never miss out any update.</p>
                        </div>
                    </div>

                    {/* Trusted Companies Card (Right, Tilted Down) */}
                    <div className="absolute -top-[240px] lg:-top-[340px] -right-[1%] md:-right-[4%] lg:-right-[6%] xl:-right-[8%] rotate-[10deg] z-10 w-[280px] transition-transform duration-500 hover:rotate-0 hover:scale-105">
                        <div className="rounded-[16px] bg-white/60 backdrop-blur-md border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 md:p-6 flex items-center justify-between min-h-[110px]">
                            {/* Text */}
                            <div className="text-[14px] md:text-[15px] leading-[1.3] font-semibold text-slate-800 tracking-tight">
                                Trusted By 100+<br />Companies
                            </div>

                            {/* Overlapping Icons */}
                            <div className="flex -space-x-3">
                                {/* Lime Green */}
                                <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-[#E1F92D] border-[2px] border-[#FAFBFC] flex items-center justify-center shadow-sm relative z-[1]">
                                    <svg className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </div>
                                {/* Red */}
                                <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-[#FF453A] border-[2px] border-[#FAFBFC] flex items-center justify-center shadow-sm relative z-[2]">
                                    <svg className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                {/* Blue */}
                                <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-[#0A84FF] border-[2px] border-[#FAFBFC] flex items-center justify-center shadow-sm relative z-[3]">
                                    <svg className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 10.5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 4v-11l-4 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}