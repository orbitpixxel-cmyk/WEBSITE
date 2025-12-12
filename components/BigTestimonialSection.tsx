import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

export default function BigTestimonialSection() {
  return (
    <Section variant="soft" className="border-t border-border-subtle/60">
      <Container>
        <FadeInSection className="flex flex-col items-center text-center gap-10 md:gap-12 py-6 md:py-8">
          <div className="space-y-2 max-w-xl">
            <p className="text-label uppercase text-muted-foreground">Client story</p>
            <p className="text-body text-muted-foreground">
              A calm, premium system in practice.
            </p>
          </div>

          <div className="relative w-full max-w-3xl">
            <div className="pointer-events-none absolute -inset-x-6 -top-10 h-40 rounded-[2.5rem] bg-gradient-to-b from-accent-soft/60 via-accent-soft/20 to-transparent blur-3xl" />

            <SurfaceCard className="relative mx-auto max-w-3xl border border-border-subtle/70 bg-gradient-to-br from-background/90 via-surface/95 to-accent-soft/40 px-6 py-8 md:px-10 md:py-10 shadow-[0_28px_90px_rgba(15,23,42,0.55)]">
              <div className="absolute -top-8 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-3xl font-serif text-accent-foreground shadow-[0_18px_60px_rgba(15,23,42,0.45)] md:h-14 md:w-14">
                “
              </div>

              <div className="flex flex-col items-center gap-6 md:gap-8">
                <p className="max-w-2xl text-balance text-lg leading-relaxed text-foreground md:text-xl">
                  “Once everything was in one calm system — website, onboarding, ops, and reporting — we stopped chasing tools and finally focused on the work.”
                </p>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-accent text-[0.8rem] font-semibold text-white md:h-11 md:w-11">
                      <span>EF</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">Elena, Founder</p>
                      <p>Series A SaaS — Product-led growth</p>
                    </div>
                  </div>
                  <p className="text-[0.7rem] text-muted-foreground">
                    Snapshot from a recent rebuild combining website, automations, and growth systems.
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
