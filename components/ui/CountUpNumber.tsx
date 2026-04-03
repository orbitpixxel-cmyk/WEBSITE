"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CountUpNumberProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export function CountUpNumber({
    value,
    duration = 2,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
}: CountUpNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) =>
        decimals > 0
            ? current.toFixed(decimals)
            : Math.round(current).toString()
    );

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated, spring, value]);

    useEffect(() => {
        const unsubscribe = display.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [display]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}

export default CountUpNumber;