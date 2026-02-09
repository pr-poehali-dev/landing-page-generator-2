import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B8D8F0] via-[#D0DEF5] to-[#E6E0F8] overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 min-h-screen">
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
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/bucket/9c87fc62-5581-492b-8b9e-abafef336bc8.png"
                  alt="Котняня"
                  className="h-[90px] sm:h-[110px] md:h-[130px] lg:h-[144px] w-auto"
                />
              </div>

              {/* Headline */}
              <h1 className="text-[#050816] font-extrabold text-[28px] sm:text-[34px] md:text-[42px] lg:text-[56px] leading-[1.1] sm:leading-[1.08] md:leading-[1.05] mb-4 sm:mb-5 md:mb-6">
                Ваш лучший друг в надежных руках
              </h1>

              {/* Subheadline */}
              <p className="text-[#2B2E3A] text-[15px] sm:text-base md:text-lg lg:text-xl leading-[1.5] sm:leading-[1.6] md:leading-relaxed mb-6 sm:mb-8 md:mb-10">
                Уютная гостиница во Владивостоке с видеонаблюдением, где заботятся о вашем питомце, пока вы в отъезде
              </p>

              {/* CTA Button */}
              <Button
                onClick={onBookNowClick}
                className="w-full sm:w-auto sm:min-w-[280px] px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-full bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300"
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