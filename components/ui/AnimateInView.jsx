"use client";

import React from "react";
import { useInViewClass } from "@/lib/useInView";

export default function AnimateInView({ children, className, style }) {
  const ref = useInViewClass();
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
