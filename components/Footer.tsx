import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 bg-background py-6 text-xs text-muted-foreground">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Pixxelorbit. All rights reserved.</p>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <div className="flex gap-4">
            <Link href="#hero" className="hover:text-foreground">
              Back to top
            </Link>
            <Link href="mailto:hello@pixxelorbit.studio" className="hover:text-foreground">
              hello@pixxelorbit.studio
            </Link>
          </div>
          <p>We usually respond within one business day.</p>
          <p>Built remotely, working with teams worldwide.</p>
        </div>
      </Container>
    </footer>
  );
}
