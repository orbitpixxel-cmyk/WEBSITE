import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
}

export default function SurfaceCard(props: SurfaceCardProps) {
  const { children, className } = props;

  return (
    <Card className={`space-y-4 ${className ?? ""}`}>
      {children}
    </Card>
  );
}
