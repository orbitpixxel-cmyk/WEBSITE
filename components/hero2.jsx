"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Phone,
    MessageSquare,
    ShieldCheck,
    TrendingUp,
    Zap,
    BarChart3,
    Clock,
    Bot,
    User,
    Heart,
    MessageCircle
} from "lucide-react";

import DarkVeil from './DarkVeil';
import TechStackRow from './TechStackRow';

/**
 * FloatingCard Component
 * Wraps content in a premium card that floats subtly using Framer Motion.
 */
const FloatingCard = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
            opacity: 1,
            y: [0, -10, 0],
        }}
        transition={{
            opacity: { duration: 1, delay },
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 0.5
            }
        }}
        className={`absolute bg-white/80 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/30 p-4 z-[120] ${className}`}
    >
        {children}
    </motion.div>
);

export default function RoughHeroReplicate() {
    return (
        <div className="relative w-[100vw] h-[110vh] text-white flex flex-col items-center pt-20 font-sans z-[50] overflow-hidden bg-black" /* style={{
            background: 'radial-gradient(ellipse at 15% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 85% 75%, rgba(59, 130, 246, 0.10) 0%, transparent 45%), radial-gradient(ellipse at 50% 95%, rgba(37, 99, 235, 0.08) 0%, transparent 35%), linear-gradient(145deg, #fafbfc 0%, #f1f5f9 20%, #e2e8f0 40%, #f0f9ff 65%, #f8fafc 85%, #ffffff 100%)'
        }} */>

            {/* Background Infrastructure Layer - Pure DarkVeil */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
                    <DarkVeil
                        hueShift={0}
                        noiseIntensity={0}
                        scanlineIntensity={0}
                        speed={0.5}
                        scanlineFrequency={0}
                        warpAmount={0}
                    />
                </div>
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
                        <span className="text-white font-extrabold">
                            Empower Your
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#3B82F6]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                Business
                            </span>
                        </span><br />
                        <span className="text-white font-extrabold">
                            with an
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#60A5FA]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                AI Partner
                            </span>
                        </span><br />
                        <span className="text-white font-extrabold">
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
                        className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-wide"
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
                <div className="relative w-full h-[500px]">
                    {/* Tech Marquee: Positioned at the top of the playground to stay below text */}
                    <div className="absolute -top-24 left-0 w-full z-0 opacity-50 pointer-events-none">
                        <TechStackRow />
                    </div>

                    {/* NEW RECTANGULAR VIDEO MOCKUP — COMMENTED OUT */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[50vw] h-[50vw] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none z-[-1]"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: "-50%", y: 100 }}
                        animate={{ opacity: 1, x: "-50%", y: "-45%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-1/2 left-1/2 w-[300px] h-[520px] sm:w-[350px] sm:h-[620px] md:w-[45vw] md:h-[65vh] lg:w-[30vw] lg:h-[75vh] xl:w-[60vw] xl:h-[80vh] bg-white border-[6px] sm:border-[8px] border-slate-700 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_120px_rgba(59,130,246,0.3)] overflow-hidden z-[0]"
                    >
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-950 rounded-full z-[10] flex items-center justify-end px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all">
                            <div className="w-2 h-2 rounded-full bg-slate-900 border border-white/5 shadow-inner"></div>
                        </div>
                        <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                            <Image
                                src="/assets/Screenshot 2026-04-04 003858.png"
                                alt="Dashboard Preview"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                    */}

                    {/* Floating Image: Appointments (Top Left) - COMMENTED OUT */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        transition={{ opacity: { duration: 1, delay: 0.4 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 } }}
                        className="absolute top-[-70%] left-[-15%] w-[320px] hidden lg:block z-[120]"
                    >
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-blue-400/20 blur-[60px] -z-10 rounded-full pointer-events-none" />
                        <Image src="/hero/appointment-removebg-preview.png" alt="Appointments" width={610} height={487} className="w-full h-auto object-contain drop-shadow-2xl" />
                    </motion.div>
                    */}

                    {/* Floating Image: Email (Bottom Left) - COMMENTED OUT */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.1 } }}
                        className="absolute bottom-[82%] left-[-15%] w-[320px] hidden lg:block z-[120]"
                    >
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-blue-400/20 blur-[80px] -z-10 rounded-full pointer-events-none" />
                        <Image src="/hero/email-removebg-preview.png" alt="Email" width={739} height={528} className="w-full h-auto object-contain drop-shadow-2xl" />
                    </motion.div>
                    */}

                    {/* Floating Image: Chats (Top Right) - COMMENTED OUT */}
                    {/*
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        transition={{ opacity: { duration: 1, delay: 0.8 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.3 } }}
                        className="absolute top-[-70%] right-[-15%] w-[320px] hidden lg:block z-[120]"
                    >
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-blue-400/20 blur-[90px] -z-10 rounded-full pointer-events-none" />
                        <Image src="/hero/chats.png" alt="Chats" width={895} height={639} className="w-full h-auto object-contain drop-shadow-2xl" />
                    </motion.div>
                    */}

                    {/* Floating Card: Calls (Bottom Right) - COMMENTED OUT */}
                    {/*
                    <FloatingCard className="bottom-[82%] right-[-15%] w-[320px] hidden lg:block !p-0 overflow-hidden" delay={1}>
                        <div className="absolute inset-0 bg-blue-500/15 blur-[60px] -z-10 pointer-events-none rounded-full scale-125" />
                        <Image src="/hero/calls.png" alt="Calls" width={532} height={399} className="w-full h-full object-cover" />
                    </FloatingCard>
                    */}


                    {/* CENTRAL MOBILE MOCKUP - COMMENTED OUT AS REQUESTED */}
                    {/* 
                    <motion.div
                        initial={{ opacity: 0, x: "-50%", y: 100 }}
                        animate={{ opacity: 1, x: "-50%", y: "-53%" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-1/2 left-1/2 w-[260px] h-[450px] sm:w-[280px] sm:h-[480px] bg-slate-950 border-[8px] border-slate-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.1)] overflow-hidden z-[100] flex flex-col pt-3"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-zinc-800 mr-2"></div>
                            <div className="w-6 h-1 bg-zinc-800 rounded-full"></div>
                        </div>

                        <div className="flex-1 flex flex-col p-5 pt-6 overflow-y-auto no-scrollbar text-left relative">
                            <div className="flex justify-between items-center mb-6">
                                <div className="space-y-1">
                                    <div className="w-4 h-[2px] bg-white/40"></div>
                                    <div className="w-3 h-[2px] bg-white/40"></div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Bot className="w-4 h-4 text-white/50" />
                                    <div className="w-7 h-7 rounded-full border border-white/20 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 flex items-center justify-center font-bold text-[10px]">P</div>
                                </div>
                            </div>

                            <span className="text-[8px] text-blue-400 font-bold tracking-[0.2em] uppercase mb-1">Live Dashboard</span>
                            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Overview</h3>

                            <div className="bg-white/5 border border-white/10 rounded-[1.2rem] p-4 mb-6 backdrop-blur-sm">
                                <div className="flex gap-8 mb-4">
                                    <div>
                                        <span className="text-[8px] text-white opacity-30 block mb-1 uppercase tracking-widest font-bold">Revenue</span>
                                        <span className="text-xl font-bold text-white tracking-tighter">$42k<small className="opacity-40 font-normal text-[10px]">.5</small></span>
                                    </div>
                                    <div>
                                        <span className="text-[8px] text-white opacity-30 block mb-1 uppercase tracking-widest font-bold">Agents</span>
                                        <span className="text-xl font-bold text-white tracking-tighter">12</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1 py-1.5 bg-white rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                                        <Zap className="w-3 h-3 text-blue-600 fill-blue-600/10" />
                                        <span className="text-[9px] font-bold text-slate-900 uppercase">Auto</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-1">
                                    <h4 className="text-[12px] font-bold text-white">Active</h4>
                                    <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">All</span>
                                </div>
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                                            <User className="w-4 h-4 text-white/20 group-hover:text-blue-400" />
                                        </div>
                                        <div className="flex-1 border-b border-white/5 pb-2 group-last:border-0">
                                            <div className="w-20 h-2 bg-white/10 rounded-full mb-1"></div>
                                            <div className="w-12 h-1 bg-white/5 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-4 w-full flex items-center justify-center pb-2 shrink-0">
                            <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                        </div>
                    </motion.div>
                    */}

                </div>
            </div>
        </div>
    );
}