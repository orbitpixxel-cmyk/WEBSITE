import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pixxelorbit · Digital product and growth studio",
  description:
    "Pixxelorbit partners with modern brands to design, build, and grow calm, high-performing digital experiences.",
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={sans.className + " bg-background text-foreground antialiased"}>
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
          {/* Blue corner glow background, fixed behind all content */}
          <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
              backgroundImage: `
                radial-gradient(circle 520px at 0% 160px, rgba(37, 99, 235, 0.45), transparent),
                radial-gradient(circle 520px at 100% 160px, rgba(37, 99, 235, 0.45), transparent),
                radial-gradient(circle 640px at 50% -140px, rgba(219, 234, 254, 0.6), transparent)
              `,
            }}
          />

          {/* Site content */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}