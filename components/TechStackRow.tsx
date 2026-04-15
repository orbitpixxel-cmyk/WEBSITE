"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [

  { name: "Make", url: "https://simpleicons.org/icons/make.svg" },
  { name: "Google Sheets", url: "https://simpleicons.org/icons/googlesheets.svg" },

  { name: "Discord", url: "https://simpleicons.org/icons/discord.svg" },

];

const row2 = [
  { name: "Google Calendar", url: "https://simpleicons.org/icons/googlecalendar.svg" },
  { name: "Notion", url: "https://simpleicons.org/icons/notion.svg" },
  { name: "Google Sheets", url: "https://simpleicons.org/icons/googlesheets.svg" },
  { name: "PostgreSQL", url: "https://simpleicons.org/icons/postgresql.svg" },
  { name: "n8n", url: "https://simpleicons.org/icons/n8n.svg" },
  { name: "Zapier", url: "https://simpleicons.org/icons/zapier.svg" },
];

const BrandIcon = ({ url, name }: { url: string; name: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/[0.03] border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group hover:border-white/30 transition-all duration-500 hover:scale-110 cursor-pointer">
    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
      <Image
        src={url}
        alt={name}
        fill
        className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all"
      />
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[]; direction?: "left" | "right"; speed?: number }) => {
  const marqueeItems = [...items, ...items, ...items, ...items]; // Quadruple for safety

  return (
    <div className="flex w-full overflow-hidden items-center pt-1">
      <motion.div
        className="flex gap-6 sm:gap-8 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((item, i) => (
          <BrandIcon key={i} url={item.url} name={item.name} />
        ))}
      </motion.div>
    </div>
  );
};
export default function TechStackRow() {
  return (
    <div className="w-full py-0 relative flex flex-col items-center gap-6 mt-4">
      <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-[0.3em] opacity-80 z-40 relative mb-2">
        Integrated with your favorite tools
      </span>
      <div className="w-full max-w-xl mx-auto relative pointer-events-none z-20" style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}>
        <div className="w-full h-full flex flex-col justify-center py-0">
          <MarqueeRow items={row2} direction="right" speed={50} />
        </div>
      </div>

    </div>
  );
}
