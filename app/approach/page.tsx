import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "Approach · Pixxelorbit",
  description:
    "A calm, three-step outline of how Pixxelorbit works with teams from idea to rollout.",
};

const steps = [
  {
    label: "01",
    title: "Discover & prioritise",
    description:
      "We map your current website, workflows, and growth efforts, then agree on a focused, high-leverage scope.",
  },
  {
    label: "02",
    title: "Design & prototype",
    description:
      "We design flows, interfaces, and systems end-to-end, sharing calm check-ins instead of noisy, daily status.",
  },
  {
    label: "03",
    title: "Build, ship, refine",
    description:
      "We implement, launch, and quietly iterate based on real usage and metricswithout blowing up your ops.",
  },
];

export default function ApproachPage() {
  return (
    <Section id="approach-page">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Approach</p>
            <h1 className="text-display font-semibold">A simple rhythm for complex work.</h1>
            <p className="text-body text-muted-foreground">
              This page will eventually hold a deeper walkthrough of our process, collaboration
              rhythm, and tools. For now, heres the high-level arc.
            </p>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <FadeInSection key={step.title} delay={0.06 * index}>
                <SurfaceCard className="h-full space-y-3">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {step.label}
                  </p>
                  <h2 className="text-sm font-semibold text-foreground md:text-base">
                    {step.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
