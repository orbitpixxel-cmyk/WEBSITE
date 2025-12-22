import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export default function FinalCTASection() {
  return (
    <Section className="py-24 md:py-40 bg-white border-t border-slate-100">
      <Container className="max-w-6xl">
        <FadeInSection className="text-center space-y-10 max-w-xl mx-auto">
          {/* Headlines */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight text-balance">
              Share the next chapter when you are ready.
            </h2>
            <p className="text-base text-black/60 leading-relaxed mx-auto text-balance">
              When it is helpful, send a short note about your product and where things feel unclear. We will respond with a calm, practical next step.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-6">
            <Link
              href="mailto:hello@pixxelorbit.studio"
              className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600/90 hover:bg-blue-600 px-8 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
            >
              Email the studio
            </Link>

            <p className="text-sm text-slate-400">
              Prefer async? Include Looms, docs, or links and we will review before our call.
            </p>
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
