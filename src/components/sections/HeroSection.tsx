import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B8D8F0] via-[#D0DEF5] to-[#E6E0F8] overflow-hidden">
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center justify-evenly flex-1 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-3xl">
              <button
                onClick={() => scrollToSection('benefits')}
                className="flex items-center gap-2 text-sm sm:text-base text-[#050816] hover:text-primary transition-colors font-medium"
              >
                <Icon name="Star" size={18} />
                <span>Преимущества</span>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="flex items-center gap-2 text-sm sm:text-base text-[#050816] hover:text-primary transition-colors font-medium"
              >
                <Icon name="DollarSign" size={18} />
                <span>Тарифы</span>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center gap-2 text-sm sm:text-base text-[#050816] hover:text-primary transition-colors font-medium"
              >
                <Icon name="MessageSquare" size={18} />
                <span>Отзывы</span>
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="flex items-center gap-2 text-sm sm:text-base text-[#050816] hover:text-primary transition-colors font-medium"
              >
                <Icon name="HelpCircle" size={18} />
                <span>Вопросы</span>
              </button>
            </div>
            <Button
              onClick={onBookNowClick}
              className="ml-4 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Бронь
            </Button>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-0 min-h-screen">
          {/* Left Column - Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-auto order-2 lg:order-1">
            <img
              src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/19f647d6-2546-4471-9ccc-d7ca21f6f925.jpg"
              alt="Довольный пушистый кот на мягком пледе"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-6 sm:py-8 md:py-12 lg:py-0 order-1 lg:order-2">
            <div className="max-w-[480px] mx-auto lg:mx-0">
              {/* Logo */}
              <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/bucket/9c87fc62-5581-492b-8b9e-abafef336bc8.png"
                  alt="Котняня"
                  className="h-[104px] sm:h-[127px] md:h-[150px] lg:h-[166px] w-auto"
                />
              </div>

              {/* Headline */}
              <h1 className="text-[#050816] font-extrabold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] leading-[1.2] sm:leading-[1.15] md:leading-[1.08] mb-4 sm:mb-5 md:mb-6">
                Ваш лучший друг в надежных руках
              </h1>

              {/* Subheadline */}
              <p className="text-[#2B2E3A] text-[16px] sm:text-[18px] md:text-lg lg:text-xl leading-[1.65] sm:leading-[1.7] md:leading-relaxed mb-6 sm:mb-8 md:mb-10">
                Уютная гостиница во Владивостоке с видеонаблюдением, где заботятся о вашем питомце, пока вы в отъезде
              </p>

              {/* CTA Button */}
              <Button
                onClick={onBookNowClick}
                className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-12 md:px-16 lg:px-20 py-5 sm:py-5 text-[15px] sm:text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 min-h-[56px]"
              >
                Забронировать номер
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};