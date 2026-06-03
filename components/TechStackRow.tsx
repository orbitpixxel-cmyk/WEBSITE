"use client";

import React from "react";
import Image from "next/image";

const row2 = [
  { name: "Google Calendar", url: "https://simpleicons.org/icons/googlecalendar.svg" },
  { name: "Notion", url: "https://simpleicons.org/icons/notion.svg" },
  { name: "Google Sheets", url: "https://simpleicons.org/icons/googlesheets.svg" },
  { name: "PostgreSQL", url: "https://simpleicons.org/icons/postgresql.svg" },
  { name: "n8n", url: "https://simpleicons.org/icons/n8n.svg" },
  { name: "Zapier", url: "https://simpleicons.org/icons/zapier.svg" },
];

const BrandIcon = ({ url, name }: { url: string; name: string }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/[0.03] border border-white/10 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group hover:border-white/30 transition-all duration-500 hover:scale-110 cursor-pointer shrink-0">
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

export default function TechStackRow() {
  // Double the items for seamless CSS marquee loop
  const marqueeItems = [...row2, ...row2];

  return (
    <div className="w-full py-0 relative flex flex-col items-center gap-6 mt-4">
      <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-[0.3em] opacity-80 z-40 relative mb-2 text-center sm:text-left">
        Integrated with your favorite tools
      </span>
      <div className="w-full max-w-xl mx-auto relative pointer-events-none z-20" style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}>
        <div className="w-full h-full flex flex-col justify-center py-0">
          {/* CSS-only marquee — no framer-motion overhead */}
          <div className="flex w-full overflow-hidden items-center pt-1">
            <div className="marquee-track flex gap-6 sm:gap-8 items-center">
              {marqueeItems.map((item, i) => (
                <BrandIcon key={i} url={item.url} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 50s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
