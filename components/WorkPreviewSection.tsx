import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const projects = [
  {
    title: "Calm SaaS marketing site",
    summary: "Homepage, pricing, and onboarding flow for a B2B product.",
  },
  {
    title: "Automation console for ops",
    summary: "A control center to see workflows, handoffs, and alerts.",
  },
  {
    title: "Launch system for new products",
    summary: "Reusable launch funnel instead of one-off campaigns.",
  },
];

export default function WorkPreviewSection() {
  return (
    <Section id="work" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-6">
          <FadeInSection className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div className="space-y-2">
              <p className="text-label uppercase text-muted-foreground">Recent work</p>
              <h2 className="text-heading font-semibold">A glimpse at the kinds of systems we ship.</h2>
            </div>
            <p className="max-w-xs text-xs text-muted-foreground">
              Placeholders for now &mdash; real case studies and visuals will drop in here.
            </p>
          </FadeInSection>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <FadeInSection key={project.title} delay={0.05 * index}>
                <SurfaceCard className="h-full space-y-3 bg-surface/95">
                  <div className="relative overflow-hidden rounded-2xl border border-border-subtle/60 bg-gradient-to-br from-background/60 via-surface to-accent-soft/40 pb-[60%] shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
                    {/* Placeholder visual frame; replace with real mockup later */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.4),transparent),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.2),transparent)] mix-blend-soft-light opacity-80" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
