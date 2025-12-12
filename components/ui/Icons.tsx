import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

function iconClass(base?: string, extra?: string) {
  return `${base ?? "h-4 w-4"} text-accent ${extra ?? ""}`.trim();
}

export function IconBuild(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <rect x="4" y="5" width="16" height="6" rx="2" />
      <rect x="4" y="13" width="8" height="6" rx="2" />
      <path d="M14 16h6" />
    </svg>
  );
}

export function IconAutomate(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <circle cx="6" cy="8" r="2.25" />
      <circle cx="18" cy="8" r="2.25" />
      <circle cx="12" cy="17" r="2.25" />
      <path d="M8.5 9.5 11 12m2 0 2.5-2.5" />
      <path d="M12 14.8V11" />
    </svg>
  );
}

export function IconGrow(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <path d="M4 18 10 12.5 14 16l6-10" />
      <path d="M15.5 6H20v4.5" />
    </svg>
  );
}

export function IconWebsites(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M7 7h2" />
      <path d="M11 7h2" />
    </svg>
  );
}

export function IconProductApps(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <path d="M13 16h4" />
      <path d="M13 19h5" />
    </svg>
  );
}

export function IconAutomations(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <circle cx="8" cy="8" r="2.25" />
      <circle cx="16" cy="16" r="2.25" />
      <path d="M10 8h4l2.5-2.5" />
      <path d="M14 16H9.5L7 18.5" />
    </svg>
  );
}

export function IconGrowthMarketing(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-4 w-4", className)}
      aria-hidden="true"
      {...rest}
    >
      <path d="M4 18h16" />
      <path d="M6 16l4-5 3 3 5-7" />
      <path d="M15 5h3v3" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass("h-3 w-3", className)}
      aria-hidden="true"
      {...rest}
    >
      <path d="M5 12.5 9 16l10-10" />
    </svg>
  );
}
