import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
}

export default function SurfaceCard(props: SurfaceCardProps) {
  const { children, className } = props;

  return (
    <Card className={`space-y-4 relative ${className ?? ""}`}>
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      {children}
    </Card>
  );
}
