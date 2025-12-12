import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";

const items = [
  "SaaS founders",
  "Ops-heavy teams",
  "Growth-stage startups",
  "Internal product teams",
];

export default function TrustedByStrip() {
  return (
    <Section className="border-t border-border-subtle/60">
      <Container>
        <FadeInSection className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="text-[0.75rem] font-medium tracking-[0.12em] uppercase text-muted-foreground">
            Trusted by product and operations teams.
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <FadeInSection
                key={item}
                delay={0.05 * index}
                className="inline-flex items-center rounded-full border border-border-subtle/80 bg-background/80 px-3 py-1 text-[0.7rem]"
              >
                {item}
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
