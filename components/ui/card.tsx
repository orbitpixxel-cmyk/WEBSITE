import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const ScrollStack = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
}
ScrollStack.displayName = "ScrollStack"

const ScrollStackItem = ({
  children,
  className,
  index,
  total,
  targetScale = 1 - (total - index) * 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
  total: number;
  targetScale?: number;
}) => {
  const container = React.useRef(null)
  
  // Track scroll progress of this specific item's scroll area
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"], // animation happens while card is pinned
  })

  // Scale down as we scroll deeper into this card's track
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={container}
      className="relative h-screen flex flex-col items-center justify-start py-[10vh]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${index * 25}px)`,
        }}
        className={cn(
          "sticky w-full rounded-[2.5rem] origin-top will-change-transform shadow-2xl overflow-hidden",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  )
}
ScrollStackItem.displayName = "ScrollStackItem"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ScrollStack,
  ScrollStackItem,
}

