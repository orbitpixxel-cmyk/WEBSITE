import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
    title: "Case Studies · Pixxelorbit",
    description: "Real project case studies and outcomes delivered by Pixxelorbit."
};

// Logo mapping for each company
const logoMap: { [key: string]: string } = {
    "Duck Hawk Law Firm": "/company-logos/duckhawk.png",
    "Studio Devstag": "/company-logos/devstag_logo.png",
    "Ask Your Counsellor": "/company-logos/askyourcounsellor_logo.png",
    "Doctor Appointment & Consultation Platform": "/company-logos/aurahealth_logo.png",
    "Growmint": "/company-logos/growmint_logo.png"
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
                <div className="flex items-center gap-4">
                    {/* Company Logo */}
                    <div className={`${study.title === "Growmint" ? "w-16 h-16" : "w-14 h-14"} rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-inner border border-white/20`}>
                        <img
                            src={logoMap[study.title] || "/company-logos/default.png"}
                            alt={`${study.title} logo`}
                            className={`${study.title === "Growmint" ? "w-full h-full object-cover rounded-full scale-110" : "w-full h-full object-contain"} ${study.title === "Studio Devstag" ? "brightness-0" : ""}`}
                        />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">{study.title}</h3>
                </div>
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
            <Section className="pt-32 md:pt-44 pb-16 md:pb-24 relative overflow-hidden">
                {/* Professional Dark Blue & Black Background */}
                <div className="absolute inset-0 z-0">
                    {/* Base Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black" />

                    {/* Professional Grid Boxes */}
                    <div className="absolute inset-0">
                        {/* Main Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                                `,
                                backgroundSize: '60px 60px'
                            }}
                        />

                        {/* Secondary Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(99, 102, 241, 0.2) 2px, transparent 2px),
                                    linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 2px, transparent 2px)
                                `,
                                backgroundSize: '180px 180px'
                            }}
                        />

                        {/* Accent Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `
                                    linear-gradient(45deg, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
                                    linear-gradient(-45deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: '90px 90px'
                            }}
                        />
                    </div>

                    {/* Professional Blue Lighting */}
                    <div className="absolute top-0 right-0 w-[1000px] h-[600px] bg-gradient-radial from-blue-600/20 via-blue-800/10 to-transparent blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/15 via-indigo-800/8 to-transparent blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-600/12 via-transparent to-transparent blur-[100px]" />

                    {/* Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-blue-950/50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black/60" />
                </div>

                <Container className="max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <FadeInSection>
                            <h1 className="text-4xl md:text-6xl font-normal tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '400' }}>
                                <span className="text-blue-100">Case studies that prove clarity</span>
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