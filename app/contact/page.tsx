import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact · Pixxelorbit",
  description: "A calm way to start a conversation with Pixxelorbit.",
};

export default function ContactPage() {
  return (
    <Section id="contact-page">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <FadeInSection className="space-y-3">
            <p className="text-label uppercase text-muted-foreground">Contact</p>
            <h1 className="text-display font-semibold">Share what you're building.</h1>
            <p className="text-body text-muted-foreground">
              A short note is enough. We'll reply with a practical next step, or a simple "no" if we're not the right fit.
            </p>
            <p className="text-sm text-muted-foreground">
              Prefer email? Write to <span className="font-medium text-foreground">hello@pixxelorbit.studio</span>
              and include any Looms, docs, or links that help.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.05} className="rounded-2xl border border-border-subtle/60 bg-background/80 p-6 shadow-soft">
            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-border-subtle/60 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-border-subtle/60 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="context" className="text-xs font-medium text-muted-foreground">
                  What should we know?
                </label>
                <textarea
                  id="context"
                  name="context"
                  rows={4}
                  className="w-full rounded-xl border border-border-subtle/60 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder="A few lines about your product, current site, and what feels unclear."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="timeline" className="text-xs font-medium text-muted-foreground">
                  Rough timeline (optional)
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="w-full rounded-xl border border-border-subtle/60 bg-background px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/40"
                  placeholder="For example: aiming for Q1 launch"
                />
              </div>

              <div className="pt-2">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
