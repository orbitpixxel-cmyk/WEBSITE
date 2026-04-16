import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <Section className="py-12 md:py-20 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Background Texture/Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/grid.svg')] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />

      <Container className="max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-3 shrink-0">
            <Link href="/" className="inline-block text-xl font-bold tracking-[0.2em] textured-text uppercase">
              PIXXELORBIT
            </Link>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed font-light">
              Calm systems. Better flow. Smarter growth.
            </p>
          </div>

          {/* Socials Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">Socials</h4>
            <div className="flex gap-4">
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-[#32C864] hover:border-[#32C864]/30 hover:bg-[#32C864]/10 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-[#32C864] hover:border-[#32C864]/30 hover:bg-[#32C864]/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-[#32C864] hover:border-[#32C864]/30 hover:bg-[#32C864]/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2025 Pixxelorbit</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=orbitpixxel@gmail.com" target="_blank" className="hover:text-white transition-colors">orbitpixxel@gmail.com</a>
          <span className="opacity-50">Built remotely worldwide.</span>
        </div>
      </Container>
    </Section>
  );
}
