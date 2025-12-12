import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/feature-icon";
import FadeInSection from "@/components/ui/FadeInSection";
import { Clock3, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "6–8 weeks",
    label: "Typical window from brief to a calm, original system shipped.",
    Icon: Clock3,
  },
  {
    value: "120+ hours / month",
    label: "Busywork removed through AI workflows and quiet bots.",
    Icon: Sparkles,
  },
  {
    value: "+37% conversion lift",
    label: "Typical improvement in a key metric after a focused relaunch.",
    Icon: TrendingUp,
  },
];

export default function OutcomeStatsSection() {
  return (
    <Section className="border-t border-border-subtle/60">
      <Container>
        <FadeInSection className="rounded-2xl border border-border-subtle/70 bg-background/80 px-4 py-4 shadow-soft/40 md:px-8 md:py-5">
          <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
            {stats.map((stat, index) => (
              <FadeInSection key={stat.value} delay={0.05 * index} className="flex items-start gap-3">
                <FeatureIcon icon={stat.Icon} className="mt-0.5 h-8 w-8" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
