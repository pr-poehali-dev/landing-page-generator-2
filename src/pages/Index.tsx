import { MousePawPrints } from "@/components/MousePawPrints";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <MousePawPrints />
      <Navigation />
      <HeroSection onBookNowClick={scrollToBooking} />
      <LocationSection />
      <BenefitsSection id="benefits" />
      <PricingSection id="pricing" onBookNowClick={scrollToBooking} />
      
      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Онлайн бронирование
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Выберите даты проживания в календаре и заполните форму — мы свяжемся с вами для подтверждения
          </p>
          <BookingCalendar />
        </div>
      </section>
      
      <GallerySection />
      <TeamSection />
      <TestimonialsSection id="testimonials" />
      <FAQSection id="faq" />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;