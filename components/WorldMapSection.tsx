"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(() => new DottedMap({ height: 130, grid: "diagonal" }), []);

  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.3,
      color: "#2dde27e5",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [map]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] rounded-3xl bg-slate-50/20 border border-slate-200 relative overflow-hidden">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="world map"
        fill
        sizes="(min-width: 1024px) 800px, 100vw"
        className="h-full w-full pointer-events-none select-none"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="6" dur="2.4s" begin="0s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2.4s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            <g>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="6" dur="2.4s" begin="0s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2.4s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function WorldMapSection() {
  const dots = [
    {
      start: { lat: 51.5074, lng: -0.1278 },
      end: { lat: 40.7128, lng: -74.006 },
    },
    {
      start: { lat: 40.7128, lng: -74.006 },
      end: { lat: 28.6139, lng: 77.209 },
    },
    {
      start: { lat: 28.6139, lng: 77.209 },
      end: { lat: -33.8688, lng: 151.2093 },
    },
    {
      start: { lat: 37.7749, lng: -122.4194 },
      end: { lat: -1.2921, lng: 36.8219 },
    },
  ];

  return (
    <Section className="bg-white">
      <Container className="max-w-6xl">
        <div className="space-y-20 text-center">
          <FadeInSection className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight text-balance">
              Built remotely, worldwide.
            </h2>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
              Working async with founders across time zones.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <WorldMap
              lineColor="#2563EB"
              dots={dots}
            />
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
