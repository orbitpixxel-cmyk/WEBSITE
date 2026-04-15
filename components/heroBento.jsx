import React from "react";
import { motion } from "framer-motion";

export default function HeroBento() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid w-full lg:w-[48%] relative flex-shrink-0 grid-cols-2 gap-4 lg:-mr-16 xl:-mr-24"
            style={{ gridTemplateRows: 'auto auto' }}
        >
            {/* Card 1 (Top-Left): Large Visual AI Card (Premium Purple Gradient) */}
            <div className="row-span-2 rounded-[12px] overflow-hidden bg-gradient-to-br from-[#4323A6] via-[#653ED1] to-[#8F68FA] border border-purple-400/20 shadow-[0_20px_50px_rgba(101,62,209,0.25)] relative flex flex-col p-6 min-h-[280px]">

                {/* Header Text */}
                <div className="mb-2 relative z-10">
                    <h2 className="text-[18px] md:text-[20px] font-semibold text-white leading-[1.2] tracking-tight mb-1.5 max-w-[220px]">
                        Crypto Payments
                    </h2>
                    <p className="text-purple-100 text-[10px] md:text-[11px] font-medium leading-[1.4] max-w-[230px]">
                        Experience quick, secure transactions powered by advanced end-to-end encryption.
                    </p>
                </div>

                {/* Static Minimal Premium Bar Graph */}
                <div className="flex-1 flex flex-col justify-end relative z-10 mb-6 mt-4 h-[90px] w-full">
                    <div className="relative w-full h-full flex items-end justify-between gap-[5px] z-10 border-b border-white/20 pb-1">
                        {[25, 40, 30, 60, 45, 80, 50, 75, 90, 100].map((h, i) => (
                            <div
                                key={i}
                                className={`w-full rounded-t-[2px] transition-all ${i === 9 ? 'bg-[#34D399] shadow-[0_0_12px_rgba(52,211,153,0.5)]' : i > 5 ? 'bg-white/60' : 'bg-white/20'}`}
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom metric (Glassmorphism) */}
                <div className="bg-white/10 backdrop-blur-md rounded-[16px] px-4 py-3.5 flex items-center justify-between border border-white/10 shadow-sm relative z-10 mt-auto">
                    <div>
                        <div className="text-[22px] font-black text-white leading-none">98%</div>
                        <div className="text-[11px] text-purple-200 font-semibold mt-1">AI Accuracy</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[22px] font-black text-white leading-none">2.4s</div>
                        <div className="text-[11px] text-purple-200 font-semibold mt-1">Avg Response</div>
                    </div>
                </div>
            </div>

            {/* Card 2 (Top-Right): Instant Updates layout from image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="rounded-[16px] bg-[#FAFBFC] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-5 flex flex-col items-center justify-center min-h-[130px] text-center"
            >
                <div className="w-[46px] h-[46px] rounded-full bg-[#683EE8] flex items-center justify-center shadow-md mb-2.5">
                    <svg className="w-[22px] h-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1 tracking-tight">Instant Updates</h3>
                <p className="text-[11px] text-slate-500 font-medium">Never miss out any update.</p>
            </motion.div>

            {/* Card 3 (Bottom-Right): Trusted Companies layout from image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="rounded-[16px] bg-[#FAFBFC] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-5 md:p-6 flex items-center justify-between min-h-[110px]"
            >
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
            </motion.div>

            {/* Card 4 (Bottom spanning both cols): Financial Insights layout from image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="col-span-2 rounded-[16px] bg-gradient-to-br from-[#FAFBFC] to-[#F1F3F7] border border-slate-100/60 shadow-[0_15px_40px_rgba(0,0,0,0.03)] p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 relative overflow-hidden h-full"
            >
                {/* Decorative background grid/gradient */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-violet-200/20 rounded-br-full blur-[40px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200/20 rounded-tl-full blur-[30px] pointer-events-none" />

                {/* Left Side: Text */}
                <div className="flex-[0.9] z-10 lg:pr-3">
                    <h2 className="text-[18px] md:text-[19px] font-semibold text-slate-900 leading-[1.2] tracking-tight mb-1 max-w-[200px]">
                        Personalized Financial Insights
                    </h2>
                    <p className="text-slate-600 text-[10px] font-medium leading-[1.4] max-w-[210px]">
                        Experience hassle-free shopping with access to international brands.
                    </p>
                </div>

                {/* Right Side: Dashboard Widget */}
                <div className="flex-1 bg-white rounded-[14px] p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-slate-100 relative z-10 w-full max-w-[300px]">

                    {/* Header Row: Title & Chip */}
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[12px] font-bold text-slate-900">
                            Habits are improving!
                        </h3>
                        <div className="bg-[#F8F9FB] text-slate-500 text-[7px] font-bold px-1.5 py-0.5 rounded border border-slate-100 flex items-center gap-1">
                            March
                        </div>
                    </div>

                    {/* Stats container */}
                    <div className="flex gap-1.5 mb-2">
                        {/* Most transaction */}
                        <div className="bg-[#F8F9FB] rounded-[8px] p-2 flex-[1.1] border border-slate-100">
                            <div className="text-[8px] font-bold text-slate-700 mb-1">Most transaction</div>
                            <div className="flex -space-x-1 mb-1">
                                {['#60A5FA', '#A78BFA', '#F472B6', '#34D399'].map((color, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-[14px] h-[14px] rounded-full border border-white shrink-0 z-10 relative overflow-hidden" style={{ background: color }}>
                                            {/* Avatar mock */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-[4px] text-[6px] font-semibold text-slate-400 ml-0.5">
                                <span>8%</span><span>2%</span><span>7%</span><span>4%</span>
                            </div>
                        </div>

                        {/* Spent reduce */}
                        <div className="bg-[#F8F9FB] rounded-[8px] p-1.5 flex-1 border border-slate-100 flex flex-col justify-center">
                            <div className="text-[8px] font-bold text-slate-700 mb-1">Spent reduce</div>
                            <div className="h-2.5 bg-violet-100 rounded-full w-full overflow-hidden relative flex items-center border border-violet-100/50">
                                <div className="absolute left-0 top-0 bottom-0 w-[75%] bg-violet-600 rounded-full" />
                                <span className="absolute left-1 text-[6px] font-bold text-white z-10">75%</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#1A1C20] hover:bg-black text-white text-[10px] font-bold py-1.5 rounded-[8px] transition-colors shadow-sm">
                        View Details
                    </button>
                </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-blue-500/15 blur-[50px] rounded-full pointer-events-none col-span-2" />
        </motion.div>
    );
}
