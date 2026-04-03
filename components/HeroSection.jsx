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
        <div className="relative w-[100vw] h-[145vh] bg-black text-white flex flex-col items-center pt-20 font-sans z-[50]">

            {/* Background Infrastructure Layer (Clipped to HeroSection boundary) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Visual Infrastructure Background Layer - Darker */}
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg className="h-full w-full stroke-slate-500/20" aria-hidden="true">
                        <defs>
                            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%" y="-1">
                                <path d="M.5 80V.5H80" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid)" />
                    </svg>
                </div>

                {/* Ambient Deep Glows - Subtle Dark Theme */}
                <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-slate-700/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-slate-800/5 blur-[150px] rounded-full" />

                {/* Center Glow Behind Content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full z-0" />

                {/* Subtle Top Glow - Reduced Blue */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-[50%] w-full h-[600px] z-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 75%)'
                    }}
                />

                {/* Background Concentric Arcs - RADIATING FROM THE BOTTOM (Semi-circles) */}
                <div className="absolute top-[115%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1700px] h-[1700px] opacity-40">
                    <svg viewBox="0 0 1000 1000" className="w-full h-full">
                        <circle cx="500" cy="500" r="400" fill="#1e1b4b" fillOpacity="0.05" stroke="#264181ff" strokeWidth="1.5" /> {/* Outer - Deep Indigo */}
                        <circle cx="500" cy="500" r="315" fill="#334155" fillOpacity="0.05" stroke="#264181ff" strokeWidth="2" /> {/* Middle - Slate Blue */}
                    </svg>
                </div>
            </div>

            {/* Content Wrapper to help centering */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

                {/* Hero Header Section */}
                <div className="text-center max-w-4xl mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 mx-auto"
                    >
                        <Zap className="w-4 h-4 fill-blue-400/20" />
                        <span>Experience the future of AI communication</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[56px] font-bold leading-[1.06] tracking-tight mb-8 px-6"
                    >
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Empower Your
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#3B82F6]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                Business
                            </span>
                        </span><br />
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            with an
                        </span>{' '}
                        <span className="relative inline-block px-1">
                            <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#60A5FA]/20"></span>
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#22D3EE] bg-clip-text text-transparent">
                                AI Partner
                            </span>
                        </span><br />
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
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
                        className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium"
                    >
                        Stay connected to those who matter most with consistent messaging & calling options available on iOS and Android devices.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_15px_30px_rgba(59,130,246,0.25)] hover:scale-105 active:scale-95">
                            Download App
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full font-bold transition-all backdrop-blur-sm hover:border-white/20">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Hero Interactive Playground */}
                <div className="relative w-full h-[500px]">

                    {/* NEW RECTANGULAR VIDEO MOCKUP */}
                    {/* Ambient Aura Glow behind mockup */}
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
                        {/* Dynamic Island / Selfie Camera */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-950 rounded-full z-[10] flex items-center justify-end px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] transition-all">
                            <div className="w-2 h-2 rounded-full bg-slate-900 border border-white/5 shadow-inner"></div>
                        </div>

                        {/* Content Area */}
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

                    {/* Floating Card: Engagement Stats (Top Left) — High Elevation */}
                    <FloatingCard className="top-[-18%] left-[-10%] w-52 hidden lg:block" delay={0.4}>
                        <div className="flex flex-col text-left">
                            <span className="text-3xl font-bold text-blue-500 tracking-tight leading-none mb-1">48%↑</span>
                            <p className="text-[10px] text-slate-500 font-bold mb-3">Increase in Communication</p>
                        </div>
                        <div className="flex gap-1 items-end h-8 w-full">
                            {[20, 50, 80, 100, 70, 85, 45, 60, 90, 30].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-100 rounded-[1px]" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </FloatingCard>

                    {/* Floating Card: Chat (Bottom Left) — High Elevation */}
                    <FloatingCard className="bottom-[40%] left-[-5%] w-72 hidden lg:block" delay={0.6}>
                        <div className="flex items-start gap-2 text-left">
                            <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <User className="w-full h-full text-slate-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 leading-none mb-2">Jane Cooper • 10 am</span>
                                <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 mb-2">
                                    <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                                        Sounds good! 🙌🔥, I&apos;m not sure about the rest of the group.
                                    </p>
                                </div>
                                <div className="bg-blue-950 text-white rounded-lg p-2.5 self-end">
                                    <p className="text-[11px] font-semibold">Yes, I am still interested. Count me in ❤️</p>
                                </div>
                            </div>
                        </div>
                    </FloatingCard>

                    {/* Floating Card: Shelba AI (Top Right) — High Elevation */}
                    <FloatingCard className="top-[-16%] right-[-10%] w-72 hidden lg:block" delay={0.8}>
                        <div className="flex items-center gap-2 mb-2 text-left">
                            <div className="p-1 bg-blue-100 rounded-lg">
                                <Bot className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-[11px] font-extrabold text-slate-900 tracking-tight uppercase">Shelba AI</span>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-slate-50 rounded-lg p-3 text-left border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-800 leading-relaxed">Hi, I&apos;m Shelba!</p>
                                <p className="text-[9px] text-slate-500 font-medium leading-relaxed">You can ask me all your questions</p>
                                <span className="text-[9px] text-blue-600 font-bold mt-1 block cursor-pointer">Learn More</span>
                            </div>
                            <div className="bg-blue-800 text-white rounded-lg p-2.5 inline-block ml-auto shadow-md">
                                <p className="text-[9px] font-bold">How much PTO do I have?</p>
                            </div>
                        </div>
                    </FloatingCard>

                    {/* Floating Card: Insight/Engagement (Bottom Right) — High Elevation */}
                    <FloatingCard className="bottom-[41%] right-[-10%] w-60 hidden lg:block" delay={1}>
                        <div className="flex items-center gap-2 mb-3 text-left">
                            <div className="w-7 h-7 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <User className="w-full h-full text-slate-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-extrabold text-slate-900 leading-none">Jackie Sprow</span>
                                <span className="text-[8px] text-slate-400 font-bold">Just now</span>
                            </div>
                        </div>
                        <p className="text-[11px] font-extrabold text-slate-900 mb-2 text-left leading-tight">Thank You all! ✨</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {["#feedback", "#relate", "#realtalk", "#thankyou"].map((tag) => (
                                <span key={tag} className="text-[7px] font-bold text-blue-500 uppercase">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-50 pt-2 text-slate-400">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-1">
                                    <Heart className="w-2.5 h-2.5 text-blue-500" />
                                    <span className="text-[8px] font-bold">12k</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageCircle className="w-2.5 h-2.5" />
                                    <span className="text-[8px] font-bold">842</span>
                                </div>
                            </div>
                        </div>
                    </FloatingCard>

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

            <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        </div>
    );
}