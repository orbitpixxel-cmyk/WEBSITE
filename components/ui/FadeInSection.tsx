"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface FadeInSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
}

export default function FadeInSection(props: FadeInSectionProps) {
  const { children, className, delay = 0, direction = "up", ...rest } = props;

  const distance = 16;
  let initialX = 0;
  let initialY = 0;

  if (direction === "up") {
    initialY = distance;
  } else if (direction === "down") {
    initialY = -distance;
  } else if (direction === "left") {
    initialX = distance;
  } else if (direction === "right") {
    initialX = -distance;
  }

  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
    </>
  );
}
