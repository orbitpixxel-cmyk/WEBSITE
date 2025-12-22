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
    <div className="w-full mt-8 mb-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase opacity-70 mb-6">
          Built with modern, production-ready tools
        </p>
        <div className="flex w-full items-center justify-center gap-8 sm:gap-12 overflow-x-auto whitespace-nowrap py-4 px-4 scrollbar-hide">
          {techStack.map((name) => (
            <div
              key={name}
              className="flex shrink-0 items-center justify-center transition-transform hover:scale-110 duration-300"
            >
              <StackIcon
                name={name}
                className="h-8 w-8 sm:h-10 sm:w-10 opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
