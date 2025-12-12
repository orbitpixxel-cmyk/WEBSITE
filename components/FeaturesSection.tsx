import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FeatureIcon from "@/components/ui/feature-icon";
import FadeInSection from "@/components/ui/FadeInSection";
import { BarChart3, Bot, Monitor } from "lucide-react";

const services = [
  {
    title: "Websites",
    description: "Calm, conversion-focused marketing sites that are easy to update.",
    Icon: Monitor
  },
  {
    title: "Automations",
    description: "Quiet AI workflows and bots that remove repetitive work.",
    Icon: Bot
  },
  {
    title: "Growth & optimisation",
    description: "Steady experiments on funnels, onboarding, and retention.",
    Icon: BarChart3
  }
];

export default function FeaturesSection() {
  return (
    <Section id="services" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Services</p>
            <h2 className="text-heading font-semibold">
              Three ways we help you ship calm systems.
            </h2>
            <p className="text-body text-muted-foreground">
              A quick overview of where we plug in. For full details, timelines, and pricing, see the services page.
            </p>
          </FadeInSection>
          
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={0.06 * index}>
                <SurfaceCard className="h-full">
                  <div className="flex gap-3">
                    <FeatureIcon icon={service.Icon} className="mt-1" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground md:text-base">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>Want the full breakdown with pricing, timelines, and stack?</p>
            <Link
              className="inline-flex items-center gap-1 text-xs font-medium text-foreground underline-offset-4 hover:underline"
              href="/services"
            >
              View full services →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
