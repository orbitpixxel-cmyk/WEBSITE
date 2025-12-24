"use client";

import StackIcon from "tech-stack-icons";

const techStack = [
  "nextjs",
  "react",
  "typescript",
  "tailwindcss",
  "nodejs",
  "postgresql",
  "figma",
  "vercel",
] as const;

export default function TechStackRow() {
  return (
    <div className="w-full mt-24 mb-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        {/* Header with lines */}
        <div className="flex items-center w-full gap-6 mb-12">
          <div className="h-px bg-slate-200 flex-1" />
          <p className="text-[10px] font-bold tracking-[0.3em] text-black/30 uppercase whitespace-nowrap">
            Built with modern, production-ready tools
          </p>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Logos */}
        <div className="flex w-full items-center justify-center gap-10 md:gap-16 overflow-x-auto whitespace-nowrap py-4 px-4 scrollbar-hide">
          {techStack.map((name) => (
            <div
              key={name}
              className="flex shrink-0 items-center justify-center transition-transform hover:scale-110 duration-300"
            >
              <StackIcon
                name={name}
                className="h-8 w-8 sm:h-9 sm:w-9 opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
