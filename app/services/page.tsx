import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FeatureIcon from "@/components/ui/feature-icon";
import FadeInSection from "@/components/ui/FadeInSection";
import Button from "@/components/ui/Button";
import { Monitor, Bot, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services · Pixxelorbit",
  description:
    "A calm overview of Pixxelorbit services across websites, automations, and growth support.",
};

const services = [
  {
    title: "Websites",
    description: "Marketing sites, landing pages, and simple product shells that are easy to evolve.",
    Icon: Monitor,
  },
  {
    title: "Automations",
    description: "Quiet workflows and AI-powered helpers that remove repetitive operational work.",
    Icon: Bot,
  },
  {
    title: "Growth & optimisation",
    description: "Steady experiments across funnels, onboarding, and retention—without the chaos.",
    Icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <Section id="services-page">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Services</p>
            <h1 className="text-display font-semibold">
              Design, build, and automation in one calm studio.
            </h1>
            <p className="text-body text-muted-foreground">
              A simple overview for now. Well expand this page with detailed packages,
              timelines, and pricing as the case studies and offers mature.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={0.06 * index}>
                <SurfaceCard className="h-full">
                  <div className="flex gap-3">
                    <FeatureIcon icon={service.Icon} className="mt-1" />
                    <div>
                      <h2 className="text-sm font-semibold text-foreground md:text-base">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection
            delay={0.18}
            className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle/60 pt-6 text-xs text-muted-foreground"
          >
            <p>
              Want to talk through where your needs fit? Well map work into a simple, fixed
              engagement.
            </p>
            <Link href="/#contact" className="inline-flex">
              <Button>Book intro call</Button>
            </Link>
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
