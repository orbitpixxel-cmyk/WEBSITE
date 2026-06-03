"use client";
import { motion } from "framer-motion";
import { Phone, BrainCircuit, Zap, Mail, CalendarDays } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import HeroSection from "@/components/hero2";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import BigTestimonialSection from "@/components/BigTestimonialSection";
import AISection from "@/components/ui/AI_SECTION";
import RightBox from "@/components/ui/rightBox";


export default function HeroFlow() {
  return (
    <div>
      <SmoothScrolling>
        <div className="relative z-20">
          <HeroSection />
        </div>
        <div className="relative z-10 -mt-20">
          <AISection>
            <RightBox />
          </AISection>
        </div>
        <BigTestimonialSection />
      </SmoothScrolling>

    </div>

  );
}