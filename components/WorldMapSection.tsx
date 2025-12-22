"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import WorldMap from "@/components/ui/world-map";

export default function WorldMapSection() {
  return (
    <Section className="bg-white pt-32 md:pt-40 pb-20 md:pb-24">
      <Container className="max-w-6xl">
        <div className="space-y-20 text-center">
          <FadeInSection className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight text-balance">
              Built remotely, worldwide.
            </h2>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed text-balance">
              Working async with founders across time zones.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <WorldMap
              lineColor="#2563EB"
              dots={[
                {
                  start: { lat: 51.5074, lng: -0.1278 },
                  end: { lat: 40.7128, lng: -74.006 },
                },
                {
                  start: { lat: 40.7128, lng: -74.006 },
                  end: { lat: 28.6139, lng: 77.209 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 },
                  end: { lat: -33.8688, lng: 151.2093 },
                },
                {
                  start: { lat: 37.7749, lng: -122.4194 },
                  end: { lat: -1.2921, lng: 36.8219 },
                },
              ]}
            />
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
