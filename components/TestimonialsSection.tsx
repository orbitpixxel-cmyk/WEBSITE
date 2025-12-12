import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const testimonials = [
  {
    quote:
      "Pixxelorbit helped us cut through months of vague ideas and launch a site that finally matches the product.",
    name: "Elena, SaaS founder",
    meta: "Series A · B2B product"
  },
  {
    quote:
      "The new onboarding flow and automations paid for themselves in the first quarter. Our team feels calmer, too.",
    name: "Rahul, Operations lead",
    meta: "Growth-stage marketplace"
  },
  {
    quote:
      "We finally have one place to see website, product, and ops performance without chasing spreadsheets.",
    name: "Maya, Product lead",
    meta: "Remote-first SaaS team"
  }
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="soft" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Testimonials</p>
            <h2 className="text-heading font-semibold">
              Partners who like quiet, compounding progress.
            </h2>
            <p className="text-body text-muted-foreground">
              What founders say after working with us.
            </p>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeInSection key={item.name} delay={0.06 * index}>
                <SurfaceCard className="flex h-full flex-col bg-surface/80">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-accent text-[0.7rem] font-semibold text-white">
                      <span>{item.name.charAt(0)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p>{item.meta}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    “{item.quote}”
                  </p>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
