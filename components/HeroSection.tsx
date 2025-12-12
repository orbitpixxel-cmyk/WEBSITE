import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInSection from "@/components/ui/FadeInSection";

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 md:min-h-[82vh]"
    >
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
          <div className="space-y-8">
            <FadeInSection className="space-y-5">
              <p className="text-label uppercase text-muted-foreground">
                Where your website, workflow, and growth system become one.
              </p>
              <h1 className="text-display font-semibold">
                Calm systems for profitable digital growth.
              </h1>
              <p className="max-w-xl text-body text-muted-foreground">
                We design your website, automate busywork, and improve your growth systems—bringing scattered tools into one clear, scalable setup.
              </p>
              <p className="max-w-xl text-sm text-muted-foreground">
                For SaaS founders and operations-heavy teams who want fewer tools, less chaos, and steady growth.
              </p>
              <p className="text-xs text-muted-foreground">
                Trusted by SaaS founders & operations teams.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.05} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button>
                  Book intro call
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                30 min clarity call. No sales pressure.
              </p>
            </FadeInSection>
          </div>

          <div className="relative hidden md:block">
            {/* Decorative blurred shapes behind the mockup */}
            <div className="pointer-events-none absolute -top-10 -right-6 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-3rem] left-[-2rem] h-44 w-44 rounded-[999px] bg-gradient-to-tr from-slate-900/50 via-slate-900/10 to-accent-soft/60 blur-2xl" />

            <FadeInSection delay={0.08} className="relative">
              <div className="relative h-full overflow-visible">
                <div className="flex items-center justify-between text-[0.7rem] text-muted-foreground">
                  <span>Website, automations & growth in one view</span>
                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    {/* Laptop mockup */}
                    <div className="relative mx-auto w-full max-w-sm -rotate-2 rounded-2xl bg-background/95 shadow-[0_28px_80px_rgba(15,23,42,0.35)]">
                      <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </div>
                        <span className="text-[0.65rem] text-muted-foreground">launch.pxxl.studio</span>
                      </div>
                      <div className="grid gap-4 px-4 py-4">
                        {/* Headline + subline (real text) */}
                        <div className="space-y-1.5 text-[0.72rem] text-muted-foreground">
                          <p className="text-[0.74rem] font-medium text-foreground">
                            One calm place for website, automations, and growth.
                          </p>
                          <p className="text-[0.7rem]">
                            See whats live, whats automated, and whats improving without chasing tools.
                          </p>
                        </div>

                        {/* Small stats row under the headline */}
                        <div className="flex items-center gap-3 text-[0.65rem] text-muted-foreground">
                          <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-2 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="h-2 w-14 rounded-full bg-slate-100" />
                          </div>
                          <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-2 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                            <span className="h-2 w-12 rounded-full bg-slate-100" />
                          </div>
                          <div className="hidden items-center gap-1.5 rounded-full bg-slate-50 px-2 py-1 md:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            <span className="h-2 w-10 rounded-full bg-slate-100" />
                          </div>
                        </div>

                        {/* Three-column system summary */}
                        <div className="grid grid-cols-3 gap-3 text-[0.7rem] text-muted-foreground">
                          <div className="space-y-2">
                            <div className="relative h-16 overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-50">
                              <div className="absolute inset-3 flex flex-col justify-between text-[0.68rem] text-slate-500">
                                <p className="font-medium text-slate-600">Website</p>
                                <p className="text-[0.64rem]">Pages, pricing, signup.</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span className="h-2 w-16 rounded-full bg-slate-100" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="relative h-16 overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-50">
                              <div className="absolute inset-3 flex flex-col justify-between text-[0.68rem] text-slate-500">
                                <p className="font-medium text-slate-600">Automations</p>
                                <p className="text-[0.64rem]">Intake, handoffs, follow-ups.</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                              <span className="h-2 w-20 rounded-full bg-slate-100" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="relative h-16 overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-50">
                              <div className="absolute inset-3 flex flex-col justify-between text-[0.68rem] text-slate-500">
                                <p className="font-medium text-slate-600">Growth</p>
                                <p className="text-[0.64rem]">Funnels and experiments.</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                              <span className="h-2 w-14 rounded-full bg-slate-100" />
                            </div>
                          </div>
                        </div>

                        {/* Calm mini chart band + scattered dots */}
                        <div className="mt-1 flex items-end justify-between gap-3">
                          <div className="flex flex-1 items-end gap-1.5">
                            {[10, 16, 13, 19, 17].map((height, index) => (
                              <div key={height} className="flex-1">
                                <div
                                  className="mx-auto w-full max-w-[8px] rounded-full bg-accent/20"
                                  style={{ height: `${height}px`, opacity: 0.8 - index * 0.08 }}
                                >
                                  <div className="h-1/2 w-full rounded-full bg-accent" />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="hidden gap-1.5 md:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone mockup overlapping */}
                    <div className="absolute -bottom-6 right-2 w-28 rotate-3 rounded-2xl bg-background/95 shadow-[0_22px_60px_rgba(15,23,42,0.36)]">
                      <div className="flex items-center justify-between px-3 py-1.5">
                        <span className="h-1.5 w-10 rounded-full bg-slate-200" />
                        <span className="h-2 w-4 rounded-full bg-slate-200" />
                      </div>
                      <div className="space-y-1.5 px-3 py-2">
                        {[
                          "Trigger",
                          "Action",
                          "Outcome",
                        ].map((label, index) => (
                          <div
                            key={label}
                            className="flex items-center gap-1.5"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span className="h-3 flex-1 rounded-full bg-slate-100" />
                            {index < 2 && (
                              <span className="h-px w-3 rounded-full bg-slate-200" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating metric cards */}
                    <div className="pointer-events-none absolute -left-4 -bottom-4 flex flex-col gap-2">
                      <div className="pointer-events-auto rounded-2xl bg-background/95 px-3 py-2 text-[0.7rem] text-muted-foreground shadow-[0_18px_50px_rgba(15,23,42,0.28)]">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Automation running quietly</span>
                        </div>
                      </div>
                      <div className="pointer-events-auto rounded-2xl bg-background/95 px-3 py-2 text-[0.7rem] text-muted-foreground shadow-[0_18px_50px_rgba(15,23,42,0.24)]">
                        <div className="flex items-center justify-between gap-4">
                          <span>+32% conversion lift</span>
                          <span className="flex items-end gap-0.5">
                            <span className="h-2 w-1 rounded-full bg-accent/50" />
                            <span className="h-3 w-1 rounded-full bg-accent/70" />
                            <span className="h-4 w-1 rounded-full bg-accent" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute -top-4 left-8">
                      <div className="pointer-events-auto rounded-full bg-background/95 px-3 py-1.5 text-[0.7rem] text-muted-foreground shadow-[0_16px_40px_rgba(15,23,42,0.22)]">
                        Launch-ready website
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection delay={0.06} className="mt-8">
          <div className="flex justify-center overflow-x-auto pb-3">
            <div className="flex min-w-max items-center justify-center gap-6 md:gap-10 lg:gap-12 px-4 md:px-0">
              <Image
                src="/tech-stack-logos/Next.js.png"
                alt="Next.js"
                width={80}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <Image
                src="/tech-stack-logos/React.png"
                alt="React"
                width={32}
                height={28}
                className="h-7 w-auto object-contain md:h-8"
              />
              <Image
                src="/tech-stack-logos/Node.js.png"
                alt="Node.js"
                width={72}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <Image
                src="/tech-stack-logos/Tailwind-CSS.png"
                alt="Tailwind CSS"
                width={110}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <span className="text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground/70 uppercase">
                Motion
              </span>
              <Image
                src="/tech-stack-logos/Figma.png"
                alt="Figma"
                width={70}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <Image
                src="/tech-stack-logos/Sanity.png"
                alt="Sanity"
                width={70}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <Image
                src="/tech-stack-logos/Vercel.png"
                alt="Vercel"
                width={70}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
              <Image
                src="/tech-stack-logos/AWS.png"
                alt="AWS"
                width={70}
                height={28}
                className="h-6 w-auto object-contain md:h-7"
              />
            </div>
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
