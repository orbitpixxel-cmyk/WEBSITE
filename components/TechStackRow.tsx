"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
  { name: "n8n", url: "https://simpleicons.org/icons/n8n.svg" },
  { name: "Make", url: "https://simpleicons.org/icons/make.svg" },
  { name: "Google Sheets", url: "https://simpleicons.org/icons/googlesheets.svg" },
  { name: "Slack", url: "https://simpleicons.org/icons/slack.svg" },
  { name: "Discord", url: "https://simpleicons.org/icons/discord.svg" },
  { name: "Zapier", url: "https://simpleicons.org/icons/zapier.svg" },
];

const row2 = [
  { name: "Google Calendar", url: "https://simpleicons.org/icons/googlecalendar.svg" },
  { name: "Notion", url: "https://simpleicons.org/icons/notion.svg" },
  { name: "Cal.com", url: "https://simpleicons.org/icons/cal-dot-com.svg" },
  { name: "PostgreSQL", url: "https://simpleicons.org/icons/postgresql.svg" },
  { name: "OpenAI", url: "https://simpleicons.org/icons/openai.svg" },
];

const BrandIcon = ({ url, name }: { url: string; name: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/[0.03] border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group hover:border-white/20 transition-all duration-500 hover:scale-110">
    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
      <Image
        src={url}
        alt={name}
        fill
        className="object-contain filter invert brightness-[2] contrast-125 group-hover:brightness-[3] transition-all"
      />
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: any[]; direction?: "left" | "right"; speed?: number }) => {
  const marqueeItems = [...items, ...items, ...items, ...items]; // Quadruple for safety

  return (
    <div className="flex w-full overflow-hidden items-center py-4">
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
    <div className="w-full py-16 relative flex flex-col items-center gap-4">
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-20" style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}>
        <div className="w-full h-full flex flex-col justify-center gap-6">
          {/* <MarqueeRow items={row1} direction="left" speed={35} /> */}
          <MarqueeRow items={row2} direction="right" speed={45} />
        </div>
      </div>

      {/* Background Abyss Blur Areas */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none blur-xl sm:blur-2xl opacity-80" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none blur-xl sm:blur-2xl opacity-80" />

      {/* Invisible container to maintain height */}
      <div className="opacity-0 pointer-events-none">
        <div className="h-40 sm:h-48" />
      </div>
    </div>
  );
}
