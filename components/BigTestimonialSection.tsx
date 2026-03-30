import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Timer, Zap, Wallet, TrendingDown, PhoneIncoming, Brain } from "lucide-react";

export default function BigTestimonialSection() {
  const impactStats = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Time Saved",
      stat: "Up to 20–30 hrs saved per week",
      description: "By automating lead handling, internal workflows, and follow-ups, teams reclaim hours that were previously lost to manual work."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster Execution",
      stat: "40–60% faster go-to-market",
      description: "Clean design systems and reusable workflows help teams launch new pages, campaigns, and features without starting from scratch."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Revenue Efficiency",
      stat: "15–35% increase in conversion efficiency",
      description: "Conversion-focused layouts, structured funnels, and analytics-driven decisions turn existing traffic into measurable revenue."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Reduced Ops Cost",
      stat: "25–45% reduction in operational overhead",
      description: "Fewer tools, fewer handoffs, and fewer manual processes — all connected into a single, reliable system."
    },
    {
      icon: <PhoneIncoming className="w-6 h-6" />,
      title: "Fewer Missed Leads",
      stat: "60–80% fewer dropped or untracked leads",
      description: "Automated intake, CRM syncing, and follow-ups ensure no opportunity slips through the cracks."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Founder Sanity",
      stat: "Less chaos, more clarity",
      description: "Clear systems replace constant firefighting, giving founders visibility into what’s working and what needs attention."
    }
  ];

  return (
    <Section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Image Effect */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/assets/dualgradiation.webp')" }}
      />
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 blur-[120px] pointer-events-none rounded-full" />

      <Container className="max-w-none w-full px-6 md:px-12 lg:px-24 relative z-10">
        <FadeInSection className="text-center mb-20 px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8">
            Removing friction, <span className="text-purple-400">compounding results</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We don’t just design websites or automations — we build systems that remove friction, reduce manual work, and compound results over time.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {impactStats.map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index} className="h-full">
              <div
                className="flex flex-col h-full rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 group"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 10, 50, 0.45) 0%, rgba(15, 5, 25, 0.35) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-500/10 p-3 rounded-2xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <span className="text-purple-400">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-xl">
                    {item.title}
                  </h3>
                </div>

                <div className="mb-5">
                  <span
                    className="inline-block py-1.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase border"
                    style={{
                      background: "rgba(168, 85, 247, 0.1)",
                      borderColor: "rgba(168, 85, 247, 0.2)",
                      color: "#E9D5FF"
                    }}
                  >
                    {item.stat}
                  </span>
                </div>

                <p className="text-white/50 leading-relaxed text-[15px] group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
