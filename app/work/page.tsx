import type { Metadata } from "next";
import WorkSection from "@/components/WorkSection";

export const metadata: Metadata = {
    title: "Selected Work · Pixxelorbit",
    description: "Recent systems, automations, and growth projects.",
};

export default function WorkPage() {
    return <WorkSection />;
}
