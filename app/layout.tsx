import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Pixxelorbit · Digital product and growth studio",
    description:
        "Pixxelorbit partners with modern brands to design, build, and grow calm, high-performing digital experiences.",
};

export default function RootLayout(props: { children: ReactNode }) {
    const { children } = props;

    return (
        <html lang="en" className={montserrat.variable}>
            <body className="bg-background text-foreground antialiased font-sans">
                <SmoothScrolling>
                    <div className="relative min-h-screen w-full overflow-hidden bg-background">
                        {/* Blue gradient background shades are commented out to keep the background pure white */}
                        {/* 
                    <div
                        className="pointer-events-none fixed inset-0 z-0"
                        style={{
                            background:
                                "radial-gradient(ellipse at 15% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 40%), radial-gradient(ellipse at 85% 75%, rgba(59, 130, 246, 0.10) 0%, transparent 45%), radial-gradient(ellipse at 50% 95%, rgba(37, 99, 235, 0.08) 0%, transparent 35%), linear-gradient(145deg, #fafbfc 0%, #f1f5f9 20%, #e2e8f0 40%, #f0f9ff 65%, #f8fafc 85%, #ffffff 100%)",
                        }}
                    />

                    <div
                        className="pointer-events-none fixed inset-0 z-0 opacity-70"
                        style={{
                            background:
                                "radial-gradient(circle at 5% 5%, rgba(37, 99, 235, 0.3) 0%, transparent 60%), radial-gradient(circle at 95% 5%, rgba(37, 99, 235, 0.3) 0%, transparent 60%), radial-gradient(circle at 50% 15%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)",
                        }}
                    /> 
                    */}

                        {/* Site content */}
                        <div className="relative z-10 flex min-h-screen flex-col">
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </div>
                </SmoothScrolling>
            </body>
        </html>
    );
}