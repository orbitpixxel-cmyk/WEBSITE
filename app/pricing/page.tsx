import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing · Pixxelorbit",
  description: "Transparent, startup-friendly pricing starting from $299.",
};

export default function PricingPage() {
  return (
    <Section className="mt-32 md:mt-48 pt-0 pb-32 md:pb-48 bg-white overflow-hidden">
      <Container className="max-w-6xl">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
            Simple pricing for <span className="text-blue-600">fast-moving</span> teams.
          </h1>
          <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
            We built Pixxelorbit to help small to medium startups get high-end systems without the enterprise overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Starter Card */}
          <Card className="relative flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="p-8 pb-0">
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold w-fit mb-4">
                Starter
              </div>
              <CardTitle className="text-2xl font-bold text-black">The Launch Pad</CardTitle>
              <CardDescription className="text-slate-500 mt-2">
                Perfect for validation and early-stage momentum.
              </CardDescription>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-black">$299</span>
                <span className="text-slate-500 text-sm">onward</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-4 flex-grow">
              <div className="space-y-3">
                {[
                  "Single system setup (CRM or Web)",
                  "Pixel-perfect responsive design",
                  "Essential workflow automation",
                  "7-day standard delivery",
                  "1 round of refinement"
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/contact" className="w-full">
                <Button className="w-full h-12 bg-black hover:bg-black/90 text-white rounded-xl transition-all">
                  Get started
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Growth Card */}
          <Card className="relative flex flex-col border-blue-600 shadow-xl shadow-blue-500/10 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Most Popular
            </div>
            <CardHeader className="p-8 pb-0">
              <div className="inline-flex px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold w-fit mb-4">
                Growth
              </div>
              <CardTitle className="text-2xl font-bold text-black">Scaling System</CardTitle>
              <CardDescription className="text-slate-500 mt-2">
                Full-stack digital partner for growing businesses.
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-black">Custom</span>
                <p className="text-sm text-slate-400 mt-1">Starting from $899+ with addons</p>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-4 flex-grow">
              <div className="space-y-3">
                {[
                  "Unified Design + Workflow System",
                  "Advanced Multi-step Automations",
                  "Analytics & Conversion Tracking",
                  "Priority support channel",
                  "Continuous system tuning"
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Popular Addons</p>
                <div className="flex flex-wrap gap-2">
                  {["SEO Bundle", "Custom CMS", "API Integrations", "Video Assets"].map(addon => (
                    <span key={addon} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">+{addon}</span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Link href="/contact" className="w-full">
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all">
                  Let’s talk scaling
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Trust Footer */}
        <div className="mt-24 text-center">
          <p className="text-sm text-slate-400 mb-2">Flexible payments for startups available.</p>
          <Link href="mailto:hello@pixxelorbit.studio" className="text-blue-600 font-medium hover:underline">
            Need a custom quote? Email us →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

