import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card(props: CardProps) {
  const { children, className } = props;

  return (
    <div className={`rounded-2xl border border-border-subtle/60 bg-surface/95 p-6 transform transition-transform transition-shadow duration-200 hover:-translate-y-[2px] hover:shadow-soft ${className ?? ""}`}>
      {children}
    </div>
  );
}
