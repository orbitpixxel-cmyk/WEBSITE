import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import {
  TestimonialCard,
  TestimonialCardAccent,
  TestimonialCardContent,
  TestimonialCardAvatar,
  TestimonialCardQuote,
  TestimonialCardRating,
  TestimonialCardAuthor
} from "@/components/ui/testimonial-card";
import { Star } from "lucide-react";

export default function BigTestimonialSection() {
  return (
    <Section className="py-24 md:py-32 bg-white">
      <Container className="max-w-6xl">
        <FadeInSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight text-balance mb-4">
            Trusted by modern teams
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
            Join the companies building faster with Pixxelorbit.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center">

          {/* Testimonial 1 - Elena */}
          <FadeInSection delay={0.1} className="w-full max-w-md">
            <TestimonialCard className="mt-8">
              <TestimonialCardAccent className="bg-blue-500/10 -rotate-1" />
              <TestimonialCardAvatar
                fallback="EF"
                className="-top-8 -right-6 md:-right-8"
              />
              <TestimonialCardContent>
                <TestimonialCardRating>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </TestimonialCardRating>
                <TestimonialCardQuote className="text-slate-700 font-medium">
                  “Once everything was in one calm system—website, onboarding, ops, and reporting—we stopped chasing tools and finally focused on the work.”
                </TestimonialCardQuote>
                <TestimonialCardAuthor>
                  <div className="font-semibold text-slate-900">Elena, Founder</div>
                  <div className="text-slate-500 text-xs mt-0.5">Series A SaaS — Product-led growth</div>
                </TestimonialCardAuthor>
              </TestimonialCardContent>
            </TestimonialCard>
          </FadeInSection>

          {/* Testimonial 2 - Rahul */}
          <FadeInSection delay={0.2} className="w-full max-w-md">
            <TestimonialCard className="mt-8">
              <TestimonialCardAccent className="bg-emerald-500/10 rotate-1" />
              <TestimonialCardAvatar
                fallback="R"
                className="-top-8 -right-6 md:-right-8 bg-emerald-100 text-emerald-700"
              />
              <TestimonialCardContent>
                <TestimonialCardRating>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </TestimonialCardRating>
                <TestimonialCardQuote className="text-slate-700 font-medium">
                  “The new onboarding flow and automations paid for themselves in the first quarter. Our team feels calmer, too.”
                </TestimonialCardQuote>
                <TestimonialCardAuthor>
                  <div className="font-semibold text-slate-900">Rahul, Operations lead</div>
                  <div className="text-slate-500 text-xs mt-0.5">Growth-stage marketplace</div>
                </TestimonialCardAuthor>
              </TestimonialCardContent>
            </TestimonialCard>
          </FadeInSection>

          {/* Testimonial 3 - Maya */}
          <FadeInSection delay={0.3} className="w-full max-w-md">
            <TestimonialCard className="mt-8">
              <TestimonialCardAccent className="bg-purple-500/10 -rotate-1" />
              <TestimonialCardAvatar
                fallback="M"
                className="-top-8 -right-6 md:-right-8 bg-purple-100 text-purple-700"
              />
              <TestimonialCardContent>
                <TestimonialCardRating>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                  ))}
                </TestimonialCardRating>
                <TestimonialCardQuote className="text-slate-700 font-medium">
                  “We finally have one place to see website, product, and ops performance without chasing spreadsheets.”
                </TestimonialCardQuote>
                <TestimonialCardAuthor>
                  <div className="font-semibold text-slate-900">Maya, Product lead</div>
                  <div className="text-slate-500 text-xs mt-0.5">Remote-first SaaS team</div>
                </TestimonialCardAuthor>
              </TestimonialCardContent>
            </TestimonialCard>
          </FadeInSection>

        </div>
      </Container>
    </Section>
  );
}
