import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const workItems = [
  {
    label: "SaaS onboarding",
    clientType: "B2B SaaS, Series A",
    outcome: "New onboarding and handoffs that feel calm instead of chaotic.",
    tags: ["Website", "Onboarding", "Funnels"],
  },
  {
    label: "Ops control center",
    clientType: "Operations-heavy marketplace",
    outcome: "One quiet place to see status, handoffs, and automations.",
    tags: ["Internal tools", "Automations", "Ops"],
  },
  {
    label: "Launch campaign system",
    clientType: "Early-stage founder",
    outcome: "A simple launch funnel we can reuse instead of re-inventing.",
    tags: ["Launch", "Website", "Email"],
  },
];

export default function SelectedWorkSection() {
  return (
    <Section className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-6">
          <FadeInSection className="max-w-2xl space-y-2">
            <p className="text-label uppercase text-muted-foreground">Selected work</p>
            <p className="text-body text-muted-foreground">
              A few recent systems where we combined websites, automations, and growth.
            </p>
          </FadeInSection>
          
          <div className="grid gap-5 md:grid-cols-3">
            {workItems.map((item, index) => (
              <FadeInSection key={item.label} delay={0.05 * index}>
                <SurfaceCard className="h-full bg-gradient-to-br from-background/70 via-surface/95 to-accent-soft/40 border-border-subtle/70">
                  <div className="space-y-3">
                    <div className="h-32 rounded-2xl bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-accent-soft/60 p-3">
                      {index === 0 && (
                        <div className="flex h-full gap-2">
                          <div className="flex w-[30%] flex-col gap-1.5">
                            <div className="h-2 w-10 rounded-full bg-slate-700/80" />
                            <div className="h-2 w-8 rounded-full bg-slate-800/80" />
                            <div className="mt-1 h-2 w-9 rounded-full bg-slate-800/80" />
                            <div className="mt-2 h-10 rounded-xl bg-slate-900/80" />
                          </div>
                          <div className="flex-1 space-y-1.5 rounded-xl bg-slate-950/40 p-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="h-2 flex-1 rounded-full bg-slate-700/80" />
                              <span className="h-2 w-10 rounded-full bg-accent/70" />
                            </div>
                            <div className="grid grid-cols-3 gap-1.5 pt-1.5">
                              <div className="h-8 rounded-lg bg-slate-800/80" />
                              <div className="h-8 rounded-lg bg-slate-800/60" />
                              <div className="h-8 rounded-lg bg-slate-800/40" />
                            </div>
                            <div className="mt-1 h-2 w-16 rounded-full bg-slate-700/80" />
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex h-full flex-col justify-between">
                          <div className="flex items-center justify-center gap-3">
                            <div className="relative h-7 w-7 rounded-full bg-emerald-400/80 shadow-[0_10px_30px_rgba(16,185,129,0.45)]" />
                            <div className="relative h-7 w-7 rounded-full bg-sky-400/80 shadow-[0_10px_30px_rgba(56,189,248,0.45)]" />
                            <div className="relative h-7 w-7 rounded-full bg-indigo-400/80 shadow-[0_10px_30px_rgba(129,140,248,0.45)]" />
                          </div>
                          <div className="mx-auto h-px w-1/2 rounded-full bg-emerald-200/70" />
                          <div className="flex items-center justify-between text-[0.6rem] text-slate-200/80">
                            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span>Intake</span>
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                              <span>Ops</span>
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                              <span>Notify</span>
                            </span>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex h-full flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-12 rounded-full bg-slate-700/90" />
                              <span className="h-2 w-6 rounded-full bg-slate-600/80" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-16 rounded-full bg-slate-700/90" />
                              <span className="h-2 w-8 rounded-full bg-slate-600/80" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-10 rounded-full bg-slate-700/90" />
                              <span className="h-2 w-5 rounded-full bg-slate-600/80" />
                            </div>
                          </div>
                          <div className="mt-2 flex items-end gap-1.5">
                            {[9, 14, 11, 17].map((height) => (
                              <div key={height} className="flex-1">
                                <div
                                  className="mx-auto w-full rounded-full bg-accent/15"
                                  style={{ height: `${height}px` }}
                                >
                                  <div className="h-1/2 w-full rounded-full bg-accent" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.clientType}</p>
                    </div>
                    <p className="text-sm text-foreground">
                      {item.outcome}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-border-subtle/70 bg-background/80 px-3 py-0.5 text-[0.7rem] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
