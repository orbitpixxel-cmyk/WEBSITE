import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { faqs } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ · Pixxelorbit",
  description:
    "More detail on timelines, fit, and practicalities for working with Pixxelorbit.",
};

export default function FAQPage() {
  return (
    <Section id="faq-page" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">FAQ</p>
            <h1 className="text-display font-semibold">Practical details in one place.</h1>
            <p className="text-body text-muted-foreground">
              A slightly fuller set of questions and answers. If something still isnt covered,
              send a quick note and well respond within one business day.
            </p>
          </FadeInSection>

          <div className="space-y-7">
            {faqs.map((item, index) => (
              <FadeInSection
                key={item.question}
                delay={0.05 * index}
                className="space-y-2 border-b border-border-subtle/60 pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="text-sm font-semibold text-foreground md:text-base">
                  {item.question}
                </h2>
                <p className="text-sm leading-loose text-muted-foreground">{item.answer}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
