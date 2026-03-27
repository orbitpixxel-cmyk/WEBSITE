import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Timer, Zap, Wallet, TrendingDown, PhoneIncoming, Brain } from "lucide-react";

export default function BigTestimonialSection() {
  const impactStats = [
    {
      icon: <Timer className="w-6 h-6 text-blue-600" />,
      title: "Time Saved",
      stat: "Up to 20–30 hrs saved per week",
      description: "By automating lead handling, internal workflows, and follow-ups, teams reclaim hours that were previously lost to manual work."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Faster Execution",
      stat: "40–60% faster go-to-market",
      description: "Clean design systems and reusable workflows help teams launch new pages, campaigns, and features without starting from scratch."
    },
    {
      icon: <Wallet className="w-6 h-6 text-emerald-600" />,
      title: "Revenue Efficiency",
      stat: "15–35% increase in conversion efficiency",
      description: "Conversion-focused layouts, structured funnels, and analytics-driven decisions turn existing traffic into measurable revenue."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-rose-500" />,
      title: "Reduced Ops Cost",
      stat: "25–45% reduction in operational overhead",
      description: "Fewer tools, fewer handoffs, and fewer manual processes — all connected into a single, reliable system."
    },
    {
      icon: <PhoneIncoming className="w-6 h-6 text-indigo-500" />,
      title: "Fewer Missed Leads",
      stat: "60–80% fewer dropped or untracked leads",
      description: "Automated intake, CRM syncing, and follow-ups ensure no opportunity slips through the cracks."
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: "Founder Sanity",
      stat: "Less chaos, more clarity",
      description: "Clear systems replace constant firefighting, giving founders visibility into what’s working and what needs attention."
    }
  ];

  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container className="max-w-6xl">
        <FadeInSection className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight text-balance mb-6">
            Section Subheading
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed text-balance">
            We don’t just design websites or automations — we build systems that remove friction, reduce manual work, and compound results over time.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {impactStats.map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index} className="h-full">
              <div className="flex flex-col h-full bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-slate-900 text-lg">
                    {item.title}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="inline-block py-1 px-3 bg-white rounded-md text-sm font-semibold text-slate-800 border border-slate-200 shadow-sm">
                    {item.stat}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed text-[15px]">
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
