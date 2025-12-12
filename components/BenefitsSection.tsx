import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";
import FeatureIcon from "@/components/ui/feature-icon";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    label: "Build",
    title: "Build clear, focused experiences.",
    body: "We ship websites and product surfaces that are simple to use and easy to trust.",
    Icon: LayoutDashboard
  },
  {
    label: "Automate",
    title: "Automate the busywork.",
    body: "We design AI workflows that quietly handle repeatable tasks behind the scenes.",
    Icon: Sparkles
  },
  {
    label: "Grow",
    title: "Grow with steady systems.",
    body: "We tune funnels and onboarding so growth is steady instead of spiky.",
    Icon: TrendingUp
  }
];

export default function BenefitsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Why Pixxelorbit</p>
            <h2 className="text-heading font-semibold">
              A calm partner for your next chapter.
            </h2>
            <p className="text-body text-muted-foreground">
              We design, build, and refine the systems your business runs onproduct, automation, and growthso you do not have to manage multiple vendors or disconnected tools.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item, index) => (
              <FadeInSection key={item.label} delay={0.06 * index}>
                <SurfaceCard className="h-full">
                  <div className="flex items-center gap-2">
                    <FeatureIcon icon={item.Icon} />
                    <p className="text-label uppercase text-muted-foreground">{item.label}</p>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
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
