import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";
import FeatureIcon from "@/components/ui/feature-icon";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    label: "Build",
    title: "Clear, focused experiences",
    body: "Launch-ready pages that feel effortless.",
    Icon: LayoutDashboard
  },
  {
    label: "Automate",
    title: "Automate the busywork",
    body: "Workflows that run quietly in the background.",
    Icon: Sparkles
  },
  {
    label: "Grow",
    title: "Grow with steady systems",
    body: "Funnels and onboarding that compound over time.",
    Icon: TrendingUp
  }
];

const BenefitsSection = () => {
  return (
    <Section className="bg-white">
      <Container className="max-w-5xl">
        <div className="space-y-20">
          <FadeInSection className="max-w-3xl space-y-4 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight text-balance">
              A calm partner for your next chapter.
            </h2>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
              We design and refine the systems your business runs on—across product, automation, and growth.
            </p>
          </FadeInSection>

          <div className="grid gap-12 md:gap-16 md:grid-cols-3 text-center md:text-left">
            {benefits.map((item, index) => (
              <FadeInSection key={item.label} delay={0.06 * index}>
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl mb-2">
                    <item.Icon className="w-6 h-6 text-black/70" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-base text-black/70 leading-relaxed text-balance">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BenefitsSection;
