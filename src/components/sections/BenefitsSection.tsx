import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CatCameraIcon, CatDoctorIcon, CatPlayIcon, CatSpaIcon, CatReportIcon, CatComfortIcon } from "@/components/BenefitCatIcons";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface BenefitsSectionProps {
  id?: string;
}

export const BenefitsSection = ({ id }: BenefitsSectionProps) => {
  const [flipped, setFlipped] = useState<number[]>([]);

  const benefits = [
    {
      icon: CatCameraIcon,
      title: "Видеонаблюдение 24/7",
      desc: "4K камеры в каждой комнате с защищённым приложением",
      detailedDesc: "Смотрите жизнь вашей кошки онлайн в любой момент со смартфона — полная прозрачность и спокойствие."
    },
    {
      icon: CatDoctorIcon,
      title: "Ветеринар 24/7",
      desc: "Ежедневный осмотр и премиум корм включены",
      detailedDesc: "Лицензированный ветеринар работает без выходных, готов помочь в любой момент — здоровье питомца в надёжных руках."
    },
    {
      icon: CatPlayIcon,
      title: "Игровые комнаты",
      desc: "Когтеточки, конструкции, игрушки, социализация",
      detailedDesc: "Специально оборудованные комнаты с интерактивными игрушками развивают интеллект кошки, и она вернётся домой весёлой и активной."
    },
    {
      icon: CatSpaIcon,
      title: "Груминг и спа",
      desc: "Чистка, стрижка, массаж, парфюмирование",
      detailedDesc: "Профессиональный уход дарит питомцу сияющую шёрстку, здоровые коготки и полный релакс."
    },
    {
      icon: CatReportIcon,
      title: "Ежедневные отчёты",
      desc: "Фото, видео, письма о питании и сне",
      detailedDesc: "Каждый день получаете подробный отчёт с фото и видео о жизни вашей кошки — никаких сюрпризов, только факты."
    },
    {
      icon: CatComfortIcon,
      title: "Простота и комфорт",
      desc: "Бронирование за 30 сек, доставка включена",
      detailedDesc: "Бронирование в два клика, ваша кошка получает просторную комнату и внимание опытного персонала — вы спокойны."
    }
  ];

  const toggleFlip = (idx: number) => {
    setFlipped(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const renderBenefitCard = (benefit: typeof benefits[0], idx: number) => {
    const IconComponent = benefit.icon;
    const isFlipped = flipped.includes(idx);
    return (
      <div 
        key={idx}
        className="perspective-1000 animate-fade-in cursor-pointer min-h-[280px] sm:min-h-[300px] md:min-h-[320px]"
        style={{ animationDelay: `${idx * 100}ms` }}
        onClick={() => toggleFlip(idx)}
      >
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <Card className="absolute w-full h-full backface-hidden hover:shadow-xl transition-shadow duration-300 border-2 group min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
            <CardContent className="flex flex-col items-center justify-between h-full p-4 sm:p-6 text-center min-h-[280px] sm:min-h-[300px] md:min-h-[320px] relative">
              <div className="flex-shrink-0 mx-auto mb-3 sm:mb-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 transition-transform duration-300 group-hover:scale-110">
                <IconComponent />
              </div>
              <div className="flex-grow flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">{benefit.title}</CardTitle>
              </div>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ArrowLeftRight" size={20} className="text-red-500 sm:w-6 sm:h-6 animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="absolute w-full h-full backface-hidden rotate-y-180 hover:shadow-xl transition-shadow duration-300 border-2 bg-primary text-primary-foreground min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
            <CardContent className="flex flex-col items-center justify-center h-full p-5 sm:p-6 md:p-8 text-center min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
              <CardTitle className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 leading-tight">{benefit.title}</CardTitle>
              <p className="text-base sm:text-lg leading-relaxed">
                {benefit.detailedDesc}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <section id={id} className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 md:mb-16">
          Наши преимущества
        </h2>
        
        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex-[0_0_85%] min-w-0">
                  {renderBenefitCard(benefit, idx)}
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
          
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === selectedIndex ? 'bg-primary w-6' : 'bg-primary/30'
                }`}
                onClick={() => emblaApi?.scrollTo(idx)}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => renderBenefitCard(benefit, idx))}
        </div>
      </div>
    </section>
  );
};