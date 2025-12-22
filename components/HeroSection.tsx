"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInSection from "@/components/ui/FadeInSection";
import AnimatedTooltipPreview from "@/components/animated-tooltip-demo";
import VideoPreviewSection from "@/components/VideoPreviewSection";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <Section
            id="hero"
            className="pt-[90px] pb-12"
        >
            <Container className="max-w-7xl">
                {/* Centered Vertical Stack with Premium Spacing */}
                <div className="flex flex-col items-center text-center">

                    {/* Main Headline - Reduced Size, Wider Max-Width */}
                    <FadeInSection className="max-w-[820px]">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[56px] font-bold leading-[1.06] tracking-tight text-black">
                            Websites that <span className="relative inline-block px-1">
                                <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#1E63F9]/20"></span>
                                convert
                            </span><br />
                            Workflows that <span className="relative inline-block px-1">
                                <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#1E63F9]/20"></span>
                                run
                            </span><br />
                            Growth that <span className="relative inline-block px-1">
                                <span className="absolute inset-x-[-2px] inset-y-[8%] -z-10 -rotate-3 rounded-[4px] bg-[#1E63F9]/20"></span>
                                sticks
                            </span>
                        </h1>
                    </FadeInSection>

                    <FadeInSection delay={0.1} className="mt-6 max-w-3xl">
                        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-medium leading-[1.15] text-black/85">
                            We design, automate, and tune <br />
                            the system you actually want to own.
                        </h2>
                    </FadeInSection>

                    {/* CTA Block - Horizontal Layout */}
                    <FadeInSection delay={0.25} className="mt-8 flex items-center justify-center gap-5">
                        <Link href="/contact">
                            <Button className="h-14 px-10 text-base bg-[#1E63F9] hover:bg-[#1E63F9]/90 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5">
                                Book intro call
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm text-[#6B7280]">
                            30 min clarity call · No sales pressure
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.3} className="mt-10">
                        <AnimatedTooltipPreview />
                    </FadeInSection>

                    <VideoPreviewSection />

                </div>
            </Container>
        </Section>
    );
}
