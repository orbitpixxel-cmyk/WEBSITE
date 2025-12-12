import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { children, className } = props;

  return (
    <div className={`mx-auto max-w-5xl px-4 sm:px-6 md:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
