"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  UserCheck, 
  Cpu, 
  Zap, 
  Settings, 
  LayoutDashboard, 
  Search,
  MessageSquare,
  Bot
} from "lucide-react";

export default function DashboardVisual() {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center pointer-events-none select-none">
      
      {/* Central Dashboard Base */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[440px] aspect-[4/3] bg-[#0c0d12]/85 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden group pointer-events-auto"
      >
        {/* Dashboard Sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-14 border-r border-white/5 flex flex-col items-center py-8 gap-8 bg-white/[0.02]">
           <LayoutDashboard className="w-5 h-5 text-[#FF5C35]" />
           <Search className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
           <MessageSquare className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
           <Settings className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
           <div className="mt-auto w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF5C35] to-orange-400 opacity-80" />
        </div>

        {/* Dashboard Content Area */}
        <div className="ml-14 p-10 pt-8 text-left">
           <div className="flex justify-between items-center mb-10">
              <div className="w-32 h-2.5 bg-white/10 rounded-full" />
              <div className="flex gap-2.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                 <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
              </div>
           </div>

           {/* Placeholder List Rows */}
           <div className="space-y-8">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center gap-5">
                   <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full border border-white/10" />
                   </div>
                   <div className="flex-1 space-y-2.5">
                      <div className={`h-2 rounded-full bg-white/${row === 1 ? '20' : '10'}`} style={{ width: row === 1 ? '70%' : '50%' }} />
                      <div className="h-1.5 rounded-full bg-white/5 w-[85%]" />
                   </div>
                   <div className={`w-14 h-5 rounded-lg border ${row === 1 ? 'border-[#FF5C35]/40 bg-[#FF5C35]/15' : 'border-white/5'}`} />
                </div>
              ))}
           </div>
        </div>

        {/* Decorative Inner Glow */}
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-[#FF5C35]/10 blur-[80px] rounded-full pointer-events-none" />
      </motion.div>

      {/* --- FLOATING ELEMENTS --- */}

      {/* Floating Card 2: Growth Chart (Bottom Left) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-10 -left-2 md:-left-4 w-48 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-[2rem] p-5 shadow-2xl z-10 pointer-events-auto"
      >
         <h4 className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.15em] mb-4 text-left">Growth Output</h4>
         <div className="flex items-end gap-2 h-16 bg-white/[0.02] rounded-xl p-2">
            {[40, 65, 35, 85, 55, 100].map((h, i) => (
              <div 
                key={i}
                className="flex-1 bg-gradient-to-t from-[#FF5C35]/30 to-[#FF5C35]/80 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
         </div>
         <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-bold text-white">+412.5%</span>
            <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-green-500" />
            </div>
         </div>
      </motion.div>

      {/* Floating Card 3: Performance Check (Middle Right) */}
      <motion.div 
        animate={{ x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 w-44 bg-[#12131a]/90 backdrop-blur-2xl border border-white/10 rounded-[1.8rem] p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] z-20 pointer-events-auto"
      >
         <div className="w-10 h-10 rounded-2xl bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-5">
            <UserCheck className="w-5 h-5 text-green-500" />
         </div>
         <div className="text-left">
            <h4 className="text-xs font-bold text-white mb-1.5">Execution Ready</h4>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">AI Agent successfully synced with your enterprise tools.</p>
         </div>
         <div className="mt-5 flex -space-x-2.5">
            {[1,2,3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-black/50 bg-zinc-800" />
            ))}
            <div className="w-6 h-6 rounded-full border-2 border-black/50 bg-[#FF5C35] flex items-center justify-center text-[8px] font-extrabold text-white">+12</div>
         </div>
      </motion.div>

      {/* Orbiting Logo Bits */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="w-full h-full relative"
         >
            <div className="absolute top-0 right-1/4 w-10 h-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-lg">
               <Cpu className="w-4 h-4 text-white/40" />
            </div>
            <div className="absolute bottom-1/4 left-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-lg">
               <Zap className="w-5 h-5 text-[#FF5C35]/50" />
            </div>
         </motion.div>
      </div>
    </div>
  );
}
