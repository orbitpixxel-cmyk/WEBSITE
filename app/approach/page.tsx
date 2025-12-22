import type { Metadata } from "next";
import SystemFrameworkSection from "@/components/SystemFrameworkSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FinalCTASection from "@/components/FinalCTASection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
    title: "Our Approach · Pixxelorbit",
    description: "How we turn chaos into calm systems for fast-growing startups.",
};

export default function ApproachPage() {
    return (
        <div className="bg-white">
            {/* Dedicated Hero */}
            <Section className="pt-32 md:pt-40 pb-0 overflow-hidden">
                <Container className="max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
                                From chaos to <span className="text-blue-600">clarity.</span>
                            </h1>
                        </FadeInSection>
                        <FadeInSection delay={0.1}>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
                                We believe that growth shouldn’t feel like an emergency. Our approach is built on structured frameworks that replace manual friction with automated flow.
                            </p>
                        </FadeInSection>
                    </div>
                </Container>
            </Section>

            <SystemFrameworkSection />
            <BeforeAfterSection />
            <FinalCTASection />
        </div>
    );
}

