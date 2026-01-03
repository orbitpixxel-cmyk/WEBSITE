import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Check } from "lucide-react";

const criteria = [
    "You're a founder or solo operator building something real — and your systems are starting to break.",
    "You're tired of manual work, scattered tools, and duct-taped workflows.",
    "You want your product, automation, and growth to work together quietly in the background.",
    "You care about long-term, steady growth — not quick hacks or noisy tactics.",
    "You want a partner who thinks in systems, not just features."
];

export default function WhoIsThisFor() {
    return (
        <Section className="bg-slate-50">
            <Container className="max-w-4xl">
                <div className="space-y-12">
                    {/* Header */}
                    <FadeInSection className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight text-balance">
                            Who this is for
                        </h2>
                        <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
                            Built for people who want clarity, not chaos.
                        </p>
                    </FadeInSection>

                    {/* This is for you if: */}
                    <FadeInSection delay={0.1} className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-black text-center">
                            This is for you if:
                        </h3>

                        <div className="space-y-4">
                            {criteria.map((item, index) => (
                                <FadeInSection key={index} delay={0.15 + index * 0.05}>
                                    <div className="flex gap-4 items-start p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors duration-300">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-blue-600" />
                                            </div>
                                        </div>
                                        <p className="text-base md:text-lg text-black/80 leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </FadeInSection>

                    {/* Closing statement */}
                    <FadeInSection delay={0.5} className="text-center pt-4">
                        <p className="text-lg md:text-xl font-medium text-black/90 text-balance">
                            If that sounds like you, we'll get along well.
                        </p>
                    </FadeInSection>
                </div>
            </Container>
        </Section>
    );
}
