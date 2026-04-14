import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    name: "Legal Partner",
    role: "Duck Hawk Law Firm",
    quote: "The new website gives us a stronger and more credible digital presence. It presents our legal services clearly, making it easier for potential clients to take the next step.",
    rating: 5,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Founder",
    role: "Studio Devstag",
    quote: "They designed an experience that mirrors our creative depth. The website communicates our value with clarity, enabling us to attract higher-quality clients and establish stronger credibility.",
    rating: 5,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Director",
    role: "Ask Your Counsellor",
    quote: "They helped translate a sensitive service into a digital experience that feels safe and credible. It allows our users to engage comfortably and take the first step toward getting guidance.",
    rating: 5,
    color: "from-emerald-500/20 to-blue-500/20"
  },
  {
    name: "Product Lead",
    role: "Health Consultation Platform",
    quote: "They created a smooth, structured healthcare experience. They transformed a time-consuming offline process into a fast, digital-first platform, drastically improving accessibility.",
    rating: 5,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "CEO",
    role: "Growmint",
    quote: "The final platform positions us as a forward-thinking digital partner. Their focus on performance and precision helps us present ourselves with authority and attract the right clients.",
    rating: 5,
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div
    className="flex flex-col w-[350px] md:w-[450px] shrink-0 rounded-[2.5rem] p-8 md:p-10 mx-3 border border-slate-200/60 backdrop-blur-xl bg-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-blue-300/60 hover:bg-white/90 relative overflow-hidden group"
  >
    {/* Subtle Inner Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
    
    <div className="flex items-center justify-between mb-8 relative z-10">
      <div className="flex gap-0.5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-slate-300/30 group-hover:text-blue-500/20 transition-colors duration-500" />
    </div>

    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-10 relative z-10 flex-grow">
      &quot;{testimonial.quote}&quot;
    </p>

    <div className="flex flex-col gap-6 mt-auto relative z-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/30">
          {testimonial.name[0]}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-[16px] tracking-tight">{testimonial.name}</h4>
          <p className="text-slate-500 text-[13px] font-semibold uppercase tracking-wider">{testimonial.role}</p>
        </div>
      </div>
      
      {/* Read More Button */}
      <Link
        href={`/testimonials`}
        className="inline-flex w-fit items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-5 py-2 text-slate-700 text-sm font-semibold transition-all group-hover:border-blue-300/80 whitespace-nowrap"
      >
        Read More
      </Link>
    </div>
  </div>
);

const InfiniteMarquee = ({ items, speed = 40, direction = "left" }: { items: typeof testimonials, speed?: number, direction?: "left" | "right" }) => {
  return (
    <div 
      className="flex overflow-hidden py-10 select-none relative"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <motion.div
        animate={{
          x: direction === "left" ? [0, -items.length * 480] : [-items.length * 480, 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex shrink-0 min-w-full"
      >
        {/* Triple clone for seamless infinite feeling */}
        {[...items, ...items, ...items].map((item, index) => (
          <TestimonialCard key={index} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default function BigTestimonialSection() {
  return (
    <Section className="py-4 md:py-8 relative overflow-hidden bg-transparent">
      
      {/* Background Image Effect (Kept as requested) */}
      {/* <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/assets/dualgradiation.webp')" }}
      /> */}
      
      {/* Ambient Glows (Kept as requested) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[60%] h-[60%] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-blue-50/40 blur-[120px] pointer-events-none rounded-full" />

      <Container className="max-w-none w-full relative z-10 px-0">
        <div className="transform scale-[0.8] md:scale-[0.85] origin-top w-full -mb-24 md:-mb-32">
          <FadeInSection className="text-center mb-16 px-6 md:px-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
              TRUSTED BY <span className="text-blue-600">THE BEST</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Real stories from founders and teams who transitioned their business to the AI era with Pxo.
            </p>
          </FadeInSection>

          <div className="flex flex-col gap-2 relative">
            <InfiniteMarquee items={testimonials} speed={80} direction="left" />
          </div>
          
          {/* Subtle CTA Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-20"
          >
            <span className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.3em]">Built to scale with your ambition</span>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

