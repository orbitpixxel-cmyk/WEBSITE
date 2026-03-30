import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

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

          {/* Links Columns */}
          <div className="flex gap-16 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">Pages</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    Approach
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">Socials</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="https://twitter.com" target="_blank" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" target="_blank" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" target="_blank" className="text-sm text-white/50 hover:text-[#32C864] transition-colors">
                    Instagram
                  </Link>
                </li>
              </ul>
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
