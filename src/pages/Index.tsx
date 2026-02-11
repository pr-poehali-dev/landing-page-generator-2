import { MousePawPrints } from "@/components/MousePawPrints";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TelegramFloatingButton } from "@/components/TelegramFloatingButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <MousePawPrints />
      <HeroSection onBookNowClick={scrollToBooking} />
      <Navigation />
      <LocationSection />
      <BenefitsSection id="benefits" />
      <PricingSection id="pricing" onBookNowClick={scrollToBooking} />
      
      <section id="booking" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gradient-to-br from-accent/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 via-[#43E3FF]/5 to-[#FF4FD8]/5 animate-pulse-gentle"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-gentle delay-100"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4">
            Онлайн бронирование
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
            Выберите даты проживания в календаре и заполните форму — мы свяжемся с вами для подтверждения
          </p>
          <BookingCalendar />
        </div>
      </section>
      
      <GallerySection />
      <TeamSection id="testimonials" />
      <FAQSection id="faq" />
      <ScrollToTop />
      <TelegramFloatingButton />
      <Footer />
    </div>
  );
};

export default Index;