"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface WorkCardProps {
    filename: string;
    title: string;
    outcome: string;
    tags: string[];
    index: number;
    scrollProgress: any; // Kept for compatibility but unused
    isPrimary?: boolean;
    href: string;
}

export default function WorkCard({
    filename,
    title,
    outcome,
    tags,
    href,
}: WorkCardProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <Card className="h-full overflow-hidden border-border-subtle/60 bg-white transition-all duration-300 hover:shadow-lg hover:border-muted-foreground/30 flex flex-col relative">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                {/* Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                        src={`/webimages/${filename}`}
                        alt={`${title} — ${outcome}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 will-change-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                    />
                </div>

                {/* Content */}
                <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                            {title}
                        </CardTitle>
                        <ArrowUpRight className="w-5 h-5 text-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 pb-6 flex-grow">
                    <p className="text-sm text-black/60 leading-relaxed font-normal">
                        {outcome}
                    </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-black/60 bg-slate-100 rounded-full border border-slate-200"
                        >
                            {tag}
                        </span>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    );
}
