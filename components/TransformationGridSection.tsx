import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";

const rows = [
  {
    label: "Website",
    before: "Random pages, inconsistent messaging, hard to update.",
    after: "A calm, focused marketing site your team actually knows how to use.",
  },
  {
    label: "Operations / automations",
    before: "Manual handoffs, copy-pasted docs, nobody sure what is done.",
    after: "Quiet workflows and bots doing the boring stuff inside the tools you already use.",
  },
  {
    label: "Growth",
    before: "Spiky campaigns, no idea which experiments actually worked.",
    after: "Steady experiments on funnels and onboarding that compound over time.",
  },
];

export default function TransformationGridSection() {
  return (
    <Section className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-8">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Before and after</p>
            <h2 className="text-heading font-semibold">What changes when we work together.</h2>
          </FadeInSection>

          <div className="space-y-4">
            {rows.map((row, index) => (
              <FadeInSection key={row.label} delay={0.05 * index} className="rounded-2xl border border-border-subtle/60 bg-surface/90 px-4 py-4 md:px-6 md:py-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2 md:max-w-[48%]">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-border-subtle/70 bg-muted/70 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        Before
                      </span>
                      <span className="text-xs text-muted-foreground">{row.label}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {row.before}
                    </p>
                  </div>
                  <div className="space-y-2 md:max-w-[48%]">
                    <div className="flex items-center gap-2 justify-start md:justify-end">
                      <span className="text-xs text-muted-foreground">{row.label}</span>
                      <span className="inline-flex items-center rounded-full border border-transparent bg-accent-soft px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground">
                        After
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {row.after}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
