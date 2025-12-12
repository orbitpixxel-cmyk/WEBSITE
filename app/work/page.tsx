import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import WorkPreviewSection from "@/components/WorkPreviewSection";

export const metadata: Metadata = {
  title: "Work · Pixxelorbit",
  description: "A light preview of the kinds of systems and projects Pixxelorbit ships.",
};

export default function WorkPage() {
  return (
    <>
      <Section id="work-page">
        <Container>
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Work</p>
            <h1 className="text-display font-semibold">Selected work & systems.</h1>
            <p className="text-body text-muted-foreground">
              This page will host detailed case studies, metrics, and walkthroughs. For now, a
              simple preview of the types of outcomes we focus on.
            </p>
          </FadeInSection>
        </Container>
      </Section>
      <WorkPreviewSection />
    </>
  );
}
