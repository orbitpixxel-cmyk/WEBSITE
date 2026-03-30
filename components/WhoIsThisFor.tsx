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
        <Section className="bg-transparent py-24 md:py-32 relative overflow-hidden w-[100vw]">
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#32C864]/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />

            <Container className="max-w-4xl relative z-10">
                <div className="space-y-12">
                    <FadeInSection className="text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                            Who this is <span className="textured-text">for</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
                            Built for founders who value clarity over chaos.
                        </p>
                    </FadeInSection>

                    <FadeInSection delay={0.1} className="space-y-10">
                        <h3 className="text-sm uppercase tracking-[0.3em] font-semibold text-[#32C864]/80 text-center">
                            Ideal for you if:
                        </h3>

                        <div className="space-y-4">
                            {criteria.map((item, index) => (
                                <FadeInSection key={index} delay={0.15 + index * 0.05}>
                                    <div className="group flex gap-6 items-center p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#32C864]/30 hover:bg-white/[0.05] transition-all duration-500">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 rounded-xl bg-[#32C864]/10 flex items-center justify-center border border-[#32C864]/20 group-hover:scale-110 transition-transform duration-300">
                                                <Check className="w-4 h-4 text-[#32C864]" />
                                            </div>
                                        </div>
                                        <p className="text-lg md:text-xl text-white/80 leading-snug font-medium group-hover:text-white transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.5} className="text-center pt-8">
                        <p className="text-xl md:text-2xl font-light italic text-white/40">
                            If this resonates with your journey, <span className="text-white not-italic font-semibold underline decoration-[#32C864]/40 underline-offset-8">we&apos;ll get along well.</span>
                        </p>
                    </FadeInSection>
                </div>
            </Container>
        </Section>
    );
}
