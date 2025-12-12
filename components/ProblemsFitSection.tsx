import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const struggles = [
  "Your team wastes hours each week on manual busywork nobody really owns.",
  "Your website looks fine but does not clearly explain what you do or convert.",
  "Customer journeys live across tools that do not talk to each other.",
  "Growth comes from heroic one-off pushes, not a steady system.",
];

const fixes = [
  "We design calm workflows and AI automations that quietly handle the boring work.",
  "We build clear, conversion-focused marketing sites your team actually knows how to use.",
  "We connect your website, product, and ops tools so they act like one system.",
  "We set up steady experiments on funnels and onboarding instead of random campaigns.",
];

export default function ProblemsFitSection() {
  return (
    <Section className="border-t border-border-subtle/60">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <FadeInSection className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              If you struggle with…
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {struggles.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
                    <AlertTriangle className="h-3 w-3" />
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection className="space-y-4" delay={0.05}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              We fix it by…
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {fixes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
