"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

const steps = [
  {
    title: "01 · Discovery sprint",
    body: "We align on goals, constraints, and what 'done' really means."
  },
  {
    title: "02 · Design & build",
    body: "We move from flows to design and implementation in short, reviewable cycles."
  },
  {
    title: "03 · Launch & refine",
    body: "We launch, add automations, and improve results based on real numbers."
  }
];

export default function CoverageSection() {
  return (
    <Section id="approach" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">How we work</p>
            <h2 className="text-heading font-semibold">
              A simple three-phase rhythm.
            </h2>
            <p className="text-body text-muted-foreground">
              We move from clarity, to automation, to growth without handing you between separate teams.
            </p>
          </FadeInSection>

          <div className="space-y-7">
            {steps.map((step, index) => {
              const [rawNumber, rawLabel] = step.title.split("·");
              const stepNumber = rawNumber?.trim() ?? step.title;
              const stepLabel = rawLabel?.trim() ?? "";

              return (
                <FadeInSection
                  key={step.title}
                  delay={0.06 * index}
                  direction="left"
                  className="flex flex-col gap-3 border-l border-border-subtle/60 pl-5 md:flex-row md:items-baseline md:gap-6"
                >
                  <motion.div
                    initial={{ opacity: 0.85 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.4 }}
                    className="flex items-baseline gap-3 md:min-w-[11rem]"
                  >
                    <motion.span
                      initial={{ backgroundColor: "rgba(37, 99, 235, 0.12)", color: "rgb(37, 99, 235)" }}
                      whileInView={{
                        backgroundColor: "rgba(37, 99, 235, 0.22)",
                        color: "rgb(15, 23, 42)",
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      viewport={{ amount: 0.4 }}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[0.68rem] font-semibold tracking-[0.12em]"
                    >
                      {stepNumber}
                    </motion.span>
                    <motion.h3
                      initial={{ color: "rgb(15, 23, 42)" }}
                      whileInView={{ color: "rgb(15, 23, 42)" }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      viewport={{ amount: 0.4 }}
                      className="text-sm font-semibold"
                    >
                      {stepLabel || step.title}
                    </motion.h3>
                  </motion.div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
