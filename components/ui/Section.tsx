import type { ReactNode } from "react";

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

export default function Section(props: SectionProps) {
  const { children, id, variant = "default", className } = props;

  return (
    <section
      id={id}
      className={`${variantClasses[variant]} py-section-sm md:py-section lg:py-section-lg ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
