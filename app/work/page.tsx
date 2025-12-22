import type { Metadata } from "next";
import WorkSection from "@/components/WorkSection";
import FinalCTASection from "@/components/FinalCTASection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
    title: "Our Work · Pixxelorbit",
    description: "Recent systems, automations, and growth projects that drive real impact.",
};

export default function WorkPage() {
    return (
        <div className="bg-white">
            {/* Dedicated Hero */}
            <Section className="pt-32 md:pt-40 pb-0 overflow-hidden">
                <Container className="max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
                                Systems for <span className="text-blue-600">scale.</span>
                            </h1>
                        </FadeInSection>
                        <FadeInSection delay={0.1}>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
                                A collection of websites, automations, and growth systems we’ve built for startups that needed to stop guessing and start growing.
                            </p>
                        </FadeInSection>
                    </div>
                </Container>
            </Section>

            {/* Main Work Section */}
            <WorkSection showFooter={false} showHeader={false} />

            {/* Final CTA */}
            <FinalCTASection />
        </div>
    );
}

