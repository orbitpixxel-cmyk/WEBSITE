import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <Section className="py-6 md:py-10 border-t border-slate-100/50 bg-white">
      <Container className="max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-3 shrink-0">
            <Link href="/" className="inline-block text-base font-semibold tracking-wide text-black uppercase">
              PIXXELORBIT
            </Link>
            <p className="text-sm text-black/50 max-w-xs leading-relaxed">
              Calm systems. Better flow. Smarter growth.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-16 md:gap-24">
            <div className="space-y-3">
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-black/40">Pages</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/services" className="text-sm text-black/50 hover:text-black transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-sm text-black/50 hover:text-black transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/approach" className="text-sm text-black/50 hover:text-black transition-colors">
                    Approach
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-black/40">Socials</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link href="https://twitter.com" target="_blank" className="text-sm text-black/50 hover:text-black transition-colors">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" target="_blank" className="text-sm text-black/50 hover:text-black transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" target="_blank" className="text-sm text-black/50 hover:text-black transition-colors">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>© 2025 Pixxelorbit</span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=orbitpixxel@gmail.com" target="_blank" className="hover:text-slate-600 transition-colors">orbitpixxel@gmail.com</a>
          <span className="opacity-50">Built remotely worldwide.</span>
        </div>
      </Container>
    </Section>
  );
}
