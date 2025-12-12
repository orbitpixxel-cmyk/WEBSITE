import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const models = [
  {
    title: "Launch project",
    body: [
      "Best for new product, rebrand, or major launch.",
      "Scope: Website, product UX, and core automations as one system.",
      "Typical length: 6–10 weeks.",
    ],
  },
  {
    title: "Automation sprint",
    body: [
      "Best for teams drowning in manual work.",
      "Scope: Map workflows, design AI automations, ship quiet bots that run in your existing tools.",
      "Typical length: 3–6 weeks.",
    ],
  },
  {
    title: "Ongoing optimisation",
    body: [
      "Best for product teams that want steady improvement.",
      "Scope: Regular experiments on funnels, onboarding, and operations.",
      "Rhythm: Monthly or quarterly.",
    ],
  },
];

export default function EngagementModelsSection() {
  return (
    <Section id="pricing" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Engagement models</p>
            <h2 className="text-heading font-semibold">How you can work with us.</h2>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {models.map((model, index) => (
              <FadeInSection key={model.title} delay={0.06 * index}>
                <SurfaceCard className="h-full">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {model.title}
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {model.body.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
