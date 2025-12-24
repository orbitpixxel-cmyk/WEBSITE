import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact · Pixxelorbit",
  description: "Get in touch for a calm, practical next step for your startup.",
};

export default function ContactPage() {
  return (
    <Section className="pt-32 md:pt-48 pb-24 md:pb-36 bg-white min-h-screen">
      <Container className="max-w-6xl">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
            Let’s turn <span className="text-blue-600">chaos</span> into calm.
          </h1>
          <p className="text-lg md:text-xl text-black/60 leading-relaxed balance">
            Whether you have a specific project in mind or just feel like your systems are slipping, we&apos;re here to help. No sales pressure, just practical next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Email/Async Path */}
          <Card className="p-2 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="p-8">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-black">Send a note</CardTitle>
              <CardDescription className="text-slate-500 mt-2 text-base">
                Ideal for async founders. Send us links, Looms, or docs and we’ll review them within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Video className="h-3 w-3 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">Loom videos are highly encouraged.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="h-3 w-3 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">Practical reply, no automated spam.</p>
                </div>
              </div>

              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=orbitpixxel@gmail.com" target="_blank" className="block">
                <Button className="w-full h-14 text-base bg-black hover:bg-black/90 text-white rounded-2xl transition-all">
                  Email the studio
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Booking Path */}
          <Card className="p-2 border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="p-8">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-black">Talk to us</CardTitle>
              <CardDescription className="text-slate-500 mt-2 text-base">
                Book a 30-minute clarity call to discuss your bottleneck and find a way out of the complexity.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-sm font-bold text-black">Clarity Call</p>
                    <p className="text-xs text-slate-500">Free · 30 Mins · Video Call</p>
                  </div>
                </div>
              </div>

              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=orbitpixxel@gmail.com" target="_blank" className="block">
                <Button className="w-full h-14 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-500/10 transition-all">
                  Book intro call
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Global Presence Note */}
        <div className="mt-24 text-center border-t border-slate-100 pt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Availability</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-slate-600 font-medium">Currently taking new projects</span>
            </div>
            <div className="text-sm text-slate-400">
              Working async with founders worldwide.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

