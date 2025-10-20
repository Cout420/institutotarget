import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { ContactSection } from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
