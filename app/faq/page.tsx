import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FinalCTASection from "@/components/FinalCTASection";
import FadeInSection from "@/components/ui/FadeInSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "FAQ · Pixxelorbit",
  description: "Frequently asked questions about working with Pixxelorbit.",
};

const faqs = [
  {
    question: "Who is Pixxelorbit best suited for?",
    answer: "We specialize in working with fast-moving, early to medium-stage startups (Seed to Series B). If your team is struggling with manual bottlenecks, fuzzy design, or slow landing page turnarounds, we’re built for you."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard 'Launch Pad' website or workflow setup typically takes 7–10 days. More complex scaling systems or full product designs usually fall into 3–5 week sprints."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. Our 'Scaling System' partners get a priority support channel for ongoing tuning, bug fixes, and feature additions. We don't just ship and disappear."
  },
  {
    question: "What is your primary tech stack?",
    answer: "We build for performance and longevity. Our primary stack includes React (Next.js), Tailwind CSS, and Framer Motion for the frontend, with headless CMS and automated middleware (like Zapier or Make) for the backend."
  },
  {
    question: "How do we get started?",
    answer: "The first step is always a 30-minute Clarity Call. We’ll discuss your current bottlenecks and tell you honestly if we’re the right fit for your specific problem."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      <Section className="mt-32 md:mt-48 pt-0 pb-32 md:pb-48">
        <Container className="max-w-4xl">
          <div className="text-center space-y-6 mb-20">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
                Common <span className="text-blue-600">Questions.</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
                Everything you need to know about how we turn complexity into calm.
              </p>
            </FadeInSection>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <Card className="border-slate-100 shadow-sm">
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-xl font-bold text-black">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTASection />
    </div>
  );
}

