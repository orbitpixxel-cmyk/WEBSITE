import type { Metadata } from "next";
import SystemFrameworkSection from "@/components/SystemFrameworkSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";

export const metadata: Metadata = {
    title: "Our Approach · Pixxelorbit",
    description: "How we turn chaos into calm systems.",
};

export default function ApproachPage() {
    return (
        <>
            <SystemFrameworkSection />
            <BeforeAfterSection />
        </>
    );
}
