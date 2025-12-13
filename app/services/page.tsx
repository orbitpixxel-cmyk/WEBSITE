import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
    title: "Services · Pixxelorbit",
    description: "Our capabilities in design, automation, and growth.",
};

export default function ServicesPage() {
    return <FeaturesSection />;
}
