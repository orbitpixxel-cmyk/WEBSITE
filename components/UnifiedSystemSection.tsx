"use client";

import { LayoutTemplate, Workflow, TrendingUp, Palette, Network, BarChart3 } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface UnifiedSystemSectionProps {
    showHeader?: boolean;
}

export default function UnifiedSystemSection({ showHeader = true }: UnifiedSystemSectionProps) {
    return (
        <Section className="bg-white text-black">
            <Container className="max-w-6xl">
                {/* Header */}
                {showHeader && (
                    <FadeInSection className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-6 text-balance">
                            What we build, systemize, and scale
                        </h2>
                        <p className="text-lg md:text-xl text-black/80 leading-relaxed text-balance">
                            We design high-performing websites, connect them to automation, and grow them with structured marketing systems.
                        </p>
                    </FadeInSection>
                )}

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* TOP ROW - PRIMARY */}
                    <BentoCard
                        title="Websites"
                        description="High-converting, fast, and built to scale."
                        icon={<LayoutTemplate className="w-5 h-5" />}
                        delay={0.1}
                        variant="primary"
                    />
                    <BentoCard
                        title="Automations"
                        description="CRMs, workflows, and AI that run in the background."
                        icon={<Workflow className="w-5 h-5" />}
                        delay={0.2}
                        variant="primary"
                    />
                    <BentoCard
                        title="Marketing & Growth"
                        description="Campaigns, ads, and funnels that compound over time."
                        icon={<TrendingUp className="w-5 h-5" />}
                        delay={0.3}
                        variant="primary"
                    />

                    {/* BOTTOM ROW - SECONDARY */}
                    <BentoCard
                        title="Design Systems"
                        description="Clean UI systems teams trust long-term."
                        icon={<Palette className="w-4 h-4" />}
                        delay={0.4}
                        variant="secondary"
                    />
                    <BentoCard
                        title="Integrations"
                        description="We connect your entire stack into one flow."
                        icon={<Network className="w-4 h-4" />}
                        delay={0.5}
                        variant="secondary"
                    />
                    <BentoCard
                        title="Analytics & Funnels"
                        description="Clear insights and conversion-focused growth loops."
                        icon={<BarChart3 className="w-4 h-4" />}
                        delay={0.6}
                        variant="secondary"
                    />
                </div>
            </Container>
        </Section>
    );
}

interface BentoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
    variant: "primary" | "secondary";
}

function BentoCard({ title, description, icon, delay, variant }: BentoCardProps) {
    const isPrimary = variant === "primary";

    return (
        <FadeInSection delay={delay} className="h-full">
            <div className="relative h-full group rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors duration-300 overflow-hidden">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    variant="default"
                />

                <div className={`relative h-full flex flex-col gap-4 p-6 ${isPrimary ? 'md:p-8' : 'md:p-6'}`}>
                    <div className={`w-fit rounded-lg border border-slate-100 p-2 ${isPrimary ? 'bg-blue-50/50 text-blue-600' : 'bg-slate-50 text-slate-500'}`}>
                        {icon}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className={`font-semibold text-black tracking-tight ${isPrimary ? 'text-xl' : 'text-base'}`}>
                            {title}
                        </h3>
                        <p className={`text-black/70 leading-relaxed text-balance ${isPrimary ? 'text-base' : 'text-sm'}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}
