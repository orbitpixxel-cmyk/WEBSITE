import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className, type = "button", ...rest } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transform transition-colors transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-60 disabled:cursor-not-allowed";

  const variantClasses =
    variant === "primary"
      ? "bg-accent text-accent-foreground px-5 py-2.5 shadow-soft hover:bg-accent/90 hover:shadow-soft hover:-translate-y-0.5"
      : "bg-transparent text-foreground px-4 py-2 hover:bg-muted hover:-translate-y-0.5";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
