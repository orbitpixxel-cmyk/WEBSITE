import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function FeatureIcon(props: FeatureIconProps) {
  const { icon: Icon, className } = props;

  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-muted-foreground",
        className,
      )}
    >
      <Icon className="h-4 w-4" strokeWidth={1.7} />
    </span>
  );
}
