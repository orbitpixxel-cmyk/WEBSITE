"use client";
import { useRef, forwardRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import styles from "@/styles/rough.module.css";

gsap.registerPlugin(useGSAP);

const Card = forwardRef(({ title, copy, index }, ref) => {
    return (
        <div ref={ref} className={`${styles.card} ${styles[`card${index + 1}`]}`}>
            <div
                className={styles.cardInner + " text-white"}
                style={{
                    background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                }}
            >
                <div className={styles.cardContent}>
                    <h1 className={styles.heading1 + " text-gray-900"}>{title}</h1>
                    <p className={styles.paragraph} style={{ color: "#4B5563" }}>
                        {copy}
                    </p>
                </div>
                <div className={styles.cardImg}>
                    <Image
                        src={`/assets/card-${index + 1}.jpeg`}
                        alt={title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
});
Card.displayName = "Card";

export default function SlackSection({
    heroImage = "/assets/hero.jpeg",
    introHeading = "We turn complex business challenges into intelligent AI-driven solutions.",
    outroHeading = "Ready to eliminate inefficiency? Let's build your AI advantage.",
    marqueeHeading = "Our Work & Collaborations",
    cards = [
        {
            title: "Intelligent Automation",
            copy:
                "We analyze your operations end-to-end and deploy AI agents that handle repetitive, high-volume tasks — freeing your team to focus on strategy and growth.",
        },
        {
            title: "Predictive Analytics",
            copy:
                "Our models turn raw data into actionable foresight — helping you anticipate demand, reduce churn, and make decisions with confidence.",
        },
        {
            title: "Custom AI Products",
            copy:
                "From conversational interfaces to recommendation engines, we design and ship AI-native products tailored to your industry and user base.",
        },
        {
            title: "AI Strategy & Consulting",
            copy:
                "Not sure where AI fits? We audit your workflows, identify high-impact opportunities, and build a roadmap that delivers ROI from day one.",
        },
    ],
    withLenis = false,
}) {
    const container = useRef(null);
    const cardRefs = useRef([]);
    cardRefs.current = [];

    // Marquee images from public/assets

    useGSAP(
        () => {
            const { ScrollTrigger } = require("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            const cardElements = cardRefs.current;

            ScrollTrigger.create({
                trigger: cardElements[0],
                start: "top 35%",
                endTrigger: cardElements[cardElements.length - 1],
                end: "top 30%",
                pin: `.${styles.intro}`,
                pinSpacing: false,
            });

            cardElements.forEach((card, index) => {
                const isLastCard = index === cardElements.length - 1;
                const cardInner = card.querySelector(`.${styles.cardInner}`);

                if (!isLastCard) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top 35%",
                        endTrigger: `.${styles.outro}`,
                        end: "top 65%",
                        pin: true,
                        pinSpacing: false,
                    });

                    gsap.to(cardInner, {
                        y: `-${(cardElements.length - index) * 14}vh`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 35%",
                            endTrigger: `.${styles.outro}`,
                            end: "top 65%",
                            scrub: true,
                        },
                    });
                }
            });

            return () => {
                ScrollTrigger.getAll().forEach((t) => t.kill());
            };
        },
        { scope: container }
    );

    const SectionMarkup = (
        <>
            <div className={styles.app} ref={container}>
                <section
                    className={styles.intro + " text-black relative overflow-hidden h-fit py-32"}
                    style={{ backgroundColor: "transparent" }}
                >
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col">
                            <h1 className={styles.heading1 + " text-black mb-8"}>{introHeading}</h1>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {["Workflow Automation", "Predictive Models", "Custom LLM Apps", "Data Pipelines"].map((tag) => (
                                    <div key={tag} className="px-5 py-2 bg-gray-100/80 backdrop-blur-sm rounded-full text-sm font-semibold text-zinc-600 border border-gray-200/50">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
                        >
                            <Image
                                src="/assets/20260403_1345_Image Generation_remix_01kn96geb4esvsds28322f1a1t.png"
                                alt="AI Intelligence Visualization"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </section>

                <section className={styles.cards}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            index={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                        />
                    ))}
                </section>

                <section
                    className={styles.outro + " text-black"}
                    style={{ backgroundColor: "transparent" }}
                >
                    <div className="max-w-5xl px-6 mx-auto">
                        <h1 className={styles.heading1 + " text-black"}>{outroHeading}</h1>
                        <div className="-mt-8 flex flex-col sm:flex-row gap-6 items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#3b82f6] animate-pulse"></div>
                                <span className="text-gray-500 font-medium text-sm">Trusted by 40+ enterprises worldwide</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-gray-500 font-medium text-sm">Average 3.2x ROI in first quarter</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Scoped styles for marquee */}
        </>
    );

    // Themed background wrapper: white base with minimal elements
    const Wrapped = (
        <section className="relative bg-white overflow-hidden py-12 sm:py-16">
            {/* Minimal background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]" />
            </div>

            <div className="relative z-10">
                {SectionMarkup}
            </div>
        </section>
    );

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.02,
                duration: 2.5,
                smoothWheel: true,
                wheelMultiplier: 0.5,
            }}
        >
            {Wrapped}
        </ReactLenis>
    );
}