import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";

export const faqs = [
  {
    question: "Who is Pixxelorbit a good fit for?",
    answer:
      "SaaS, product-led, and operations-heavy teams who care more about clarity and long-term profit than quick hacks. From early founders to growth-stage product teams."
  },
  {
    question: "What are typical timelines?",
    answer:
      "A focused landing page or small site takes 3–5 weeks. A larger product, automation, or multi-page site takes 6–10 weeks."
  },
  {
    question: "How do you price projects?",
    answer:
      "We work on fixed projects or a monthly studio retainer for ongoing design, build, and optimisation."
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Yes. We often plug into existing product, design, or growth teams as a focused extension for specific initiatives."
  }
];

export default function FAQSection() {
  return (
    <Section id="faq" className="border-t border-border-subtle/60">
      <Container>
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FadeInSection className="space-y-3">
            <p className="text-label uppercase text-muted-foreground">FAQ</p>
            <h2 className="text-heading font-semibold">
              A few practical details.
            </h2>
            <p className="text-body text-muted-foreground">
              If something is not covered here, send a quick note and we will respond within one business day.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 text-xs font-medium text-foreground underline-offset-4 hover:underline"
            >
              View more →
            </Link>
          </FadeInSection>

          <div className="space-y-7">
            {faqs.slice(0, 3).map((item, index) => (
              <FadeInSection
                key={item.question}
                delay={0.05 * index}
                className="space-y-2 border-b border-border-subtle/60 pb-6 last:border-b-0 last:pb-0"
              >
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  {item.question}
                </h3>
                <p className="text-sm leading-loose text-muted-foreground">
                  {item.answer}
                </p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
