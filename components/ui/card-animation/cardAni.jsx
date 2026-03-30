"use client";
import { useRef, forwardRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
    introHeading = "Creating standout brands for startups that bring joy and leave lasting impressions.",
    outroHeading = "Let’s build a brand that leaves a mark.",
    marqueeHeading = "Our Work & Collaborations",
    cards = [
        {
            title: "Brand Foundation",
            copy:
                " The heart of your company’s story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every, interaction.",
        },
        {
            title: "Design Identity",
            copy:
                "Your brand's visual fingerprint. It crafts a distinctive look that sparks recognition and builds emotional connections with your audience.",
        },
        {
            title: "Digital Presence",
            copy:
                "Our web solutions combine cutting-edge design and seamless functionality to create experiences that captivate and inspire your audience.",
        },
        {
            title: "Product Design",
            copy:
                "We craft user-first products that are both functional and visually appealing, delivering solutions that leave a lasting impression.",
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
                    className={styles.intro + " text-black relative overflow-hidden"}
                    style={{ backgroundColor: "transparent" }}
                >
                    {/* Local purple glow like About section (amped) */}
                    <h1 className={styles.heading1 + " text-black"}>{introHeading}</h1>
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
                    <h1 className={styles.heading1 + " text-black"}>{outroHeading}</h1>
                </section>
            </div>

            {/* Scoped styles for marquee */}
        </>
    );

    // Themed background wrapper: black base with violet-ish gradient and subtle glows
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

    return withLenis ? <ReactLenis root>{Wrapped}</ReactLenis> : Wrapped;
}