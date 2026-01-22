import { MousePawPrints } from "@/components/MousePawPrints";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingSection } from "@/components/sections/BookingSection";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <MousePawPrints />
      <HeroSection onBookNowClick={scrollToBooking} />
      <LocationSection />
      <BenefitsSection />
      <PricingSection onBookNowClick={scrollToBooking} />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
    </div>
  );
};

export default Index;