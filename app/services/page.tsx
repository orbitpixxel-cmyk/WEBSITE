import type { Metadata } from "next";
import UnifiedSystemSection from "@/components/UnifiedSystemSection";
import FinalCTASection from "@/components/FinalCTASection";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
    title: "Services · Pixxelorbit",
    description: "Our capabilities in design, automation, and growth for modern startups.",
};

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Dedicated Hero */}
            <Section className="mt-32 md:mt-40 pt-0 pb-0 overflow-hidden">
                <Container className="max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
                                <span className="text-blue-600">Capabilities</span> & Systems.
                            </h1>
                        </FadeInSection>
                        <FadeInSection delay={0.1}>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
                                We don’t just build assets; we build the infrastructure for your growth. From your first landing page to your hundredth automated workflow.
                            </p>
                        </FadeInSection>
                    </div>
                </Container>
            </Section>

            {/* Main Services Section */}
            <UnifiedSystemSection showHeader={false} />

            {/* Final CTA */}
            <FinalCTASection />
        </div>
    );
}

