import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
    title: "Case Studies · Pixxelorbit",
    description: "Real project case studies and outcomes delivered by Pixxelorbit."
};

const CaseStudyBlock = ({
    study
}: {
    study: {
        title: string;
        sections: Array<{ title: string; content: string }>;
    };
}) => {
    return (
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden">
            <div className="px-8 md:px-12 py-10 md:py-12 border-b border-white/10">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">{study.title}</h3>
            </div>

            <div className="px-8 md:px-12 py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {study.sections.map((section) => {
                    const lines = section.content
                        .split("\n")
                        .map((l) => l.trim())
                        .filter(Boolean);
                    const isList = lines.length > 1;

                    return (
                        <div key={section.title} className="space-y-4">
                            <h4 className="text-[12px] font-bold text-purple-400 uppercase tracking-[0.25em]">
                                {section.title}
                            </h4>
                            {isList ? (
                                <ul className="space-y-2">
                                    {lines.map((line) => (
                                        <li key={line} className="text-white/75 text-[15px] leading-relaxed">
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-white/75 text-[15px] leading-relaxed">{section.content}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default function TestimonialsPage() {
    return (
        <div className="bg-transparent">
            <Section className="pt-32 md:pt-44 pb-16 md:pb-24 bg-transparent relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-80 pointer-events-none"
                    style={{ backgroundImage: "url('/assets/dualgradiation.webp')" }}
                />

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 blur-[120px] pointer-events-none rounded-full" />

                <Container className="max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                                Case studies that prove <span className="text-purple-500">clarity</span>.
                            </h1>
                        </FadeInSection>
                        <FadeInSection delay={0.1}>
                            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                                Detailed breakdowns of how we design, build, and position products to earn trust and drive consistent inquiries.
                            </p>
                        </FadeInSection>
                    </div>

                    <div className="mt-14 md:mt-20 flex flex-col gap-8">
                        {caseStudies.map(
                            (study: { title: string; sections: Array<{ title: string; content: string }> }) => (
                                <CaseStudyBlock key={study.title} study={study} />
                            )
                        )}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
