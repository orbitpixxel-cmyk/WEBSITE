import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { children, className } = props;

  return (
    <div className={cn("mx-auto max-w-7xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
