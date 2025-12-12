import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing · Pixxelorbit",
  description: "Simple, transparent ways to work with Pixxelorbit without pricing clutter.",
};

const tiers = [
  {
    label: "Project",
    title: "Focused build",
    summary: "For a clear website, system, or automation project.",
    details: ["Fixed scope", "Clear timeline", "One calm launch"],
  },
  {
    label: "Studio retainer",
    title: "Ongoing partnership",
    summary: "For teams who want steady design, build, and optimisation.",
    details: ["Monthly rhythm", "Prioritised roadmap", "Experiments & refinements"],
  },
  {
    label: "Advisory",
    title: "Systems guidance",
    summary: "For founders and leads who want a second brain on systems.",
    details: ["Strategy sessions", "Reviews & feedback", "Light async support"],
  },
];

export default function PricingPage() {
  return (
    <Section id="pricing-page">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Pricing</p>
            <h1 className="text-display font-semibold">Calm, transparent ways to work together.</h1>
            <p className="text-body text-muted-foreground">
              Three simple modes. We9ll map your needs to one of these rather than forcing a template.
            </p>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <FadeInSection key={tier.label} delay={0.06 * index}>
                <SurfaceCard className="flex h-full flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {tier.label}
                    </p>
                    <h2 className="text-sm font-semibold text-foreground md:text-base">{tier.title}</h2>
                    <p className="text-sm text-muted-foreground">{tier.summary}</p>
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    {tier.details.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection
            delay={0.18}
            className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle/60 pt-6 text-xs text-muted-foreground"
          >
            <p>Every project starts with a short intro call and a simple written proposal.</p>
            <Link href="/contact" className="inline-flex">
              <Button>Discuss a project</Button>
            </Link>
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
