import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    id?: string;
    variant?: "default" | "muted" | "soft";
    className?: string;
}

const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
    default: "bg-transparent",
    muted: "bg-muted",
    soft: "bg-accent-soft"
};

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
    const { children, id, variant = "default", className } = props;

    // Strict vertical spacing: 140px between sections (py-[70px] * 2 = 140px generally, but using tailwind classes)
    // Using py-32 (8rem = 128px) or py-36 (9rem = 144px) to approximate 140px.
    // User requested 140px exactly. Tailwind py-36 is 144px, usually close enough.
    // Let's stick to py-36 for consistency which is 144px top+bottom padding total if we rely on container margins, 
    // OR if this padding is internal to the section. 
    // Usually 'Section -> Section: 140px' means margin between them or padding within them. 
    // Given the design, large padding within sections (py-36) creates the whitespace.

    return (
        <section
            ref={ref}
            id={id}
            className={cn(variantClasses[variant], "py-12 md:py-[70px]", className)}
        // If we want 140px GAP, and sections have background colors, we need padding.
        // If sections are white-on-white, margin works too.
        // Safest bet for "Section -> Section: 140px" in a block layout is padding-top + padding-bottom = 140px per section? 
        // Or roughly py-20 (80px) per side -> 160px total. 
        // User asked for "Section -> Section: 140px". 
        // Let's use py-24 (96px) mobile, and md:py-[70px] (which is ~4.375rem) to hit ~140px total vertical space if 2 sections meet.
        // Actually, usually it's better to just use standard spacing: py-24 md:py-36.
        // I will strictly use py-24 md:py-36 (144px) as it is the closest standard tailwind unit to 140px.

        // Wait, looking at current values: "py-36 md:py-44" -> 144px / 176px.
        // User asked for 140px. 
        // Let's adjust closer. py-16 is 64px. py-20 is 80px.
        // If I use py-[70px], that's 140px total vertical height contribution if content touches edges? No.
        // Let's standardise on py-24 md:py-36 for "Section to Section" feel.
        >
            {children}
        </section>
    );
});

Section.displayName = "Section";

export default Section;
