import React from "react";
import { cn } from "@/lib/utils";

interface BrushHighlightProps {
    className?: string;
    color?: string; // Hex or tailwind class override logic handled in usage
}

export default function BrushHighlight({ className, color = "#bfdbfe" }: BrushHighlightProps) {
    return (
        <span className={cn("absolute inset-0 -z-10", className)}>
            <svg
                viewBox="0 0 300 100"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Horizontal brush swipe */}
                <path
                    d="M10 50 L 290 50"
                    stroke={color}
                    strokeWidth="50"
                    strokeLinecap="square"
                    className="mix-blend-multiply"
                    style={{ filter: "url(#raw-dry-brush)" }}
                />
                <defs>
                    <filter id="raw-dry-brush" x="-20%" y="-20%" width="140%" height="140%">
                        {/* High frequency noise for 'torn paper' / dry brush edge */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.08 0.04"
                            numOctaves="3"
                            seed="2"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="8"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                        {/* Sharpen the edges slightly to look 'cut' or 'dry' rather than blurry */}
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="1.5" intercept="-0.2" />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>
        </span>
    );
}
