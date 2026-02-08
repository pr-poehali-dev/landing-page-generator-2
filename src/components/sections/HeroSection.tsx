import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3F3FF] via-[#EDEBFF] to-[#F9E0FF] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 min-h-screen">
          {/* Left Column - Image */}
          <div className="relative h-[220px] lg:h-auto order-2 lg:order-1">
            <img
              src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/19f647d6-2546-4471-9ccc-d7ca21f6f925.jpg"
              alt="Довольный пушистый кот на мягком пледе"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center px-5 md:px-20 py-8 md:py-16 lg:py-0 order-1 lg:order-2">
            <div className="max-w-[480px]">
              {/* Logo */}
              <div className="text-[#050816] font-bold text-base md:text-xl mb-6 tracking-wide">
                Кот🐱няня
              </div>

              {/* Headline */}
              <h1 className="text-[#050816] font-extrabold text-[32px] md:text-[40px] lg:text-[56px] leading-[1.05] mb-6">
                Ваш кот<br />в надёжных лапах!
              </h1>

              {/* Subheadline */}
              <p className="text-[#2B2E3A] text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-[460px]">
                Профессиональный уход и любовь, когда вас нет. Счастливый питомец, спокойный хозяин.
              </p>

              {/* CTA Button */}
              <Button
                onClick={onBookNowClick}
                className="w-full lg:w-auto px-12 md:px-20 py-5 text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Заказать няню
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
