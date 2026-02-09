import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CatCameraIcon, CatDoctorIcon, CatPlayIcon, CatSpaIcon, CatReportIcon, CatComfortIcon } from "@/components/BenefitCatIcons";
import Icon from "@/components/ui/icon";

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

  return (
    <section id={id} className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          6 преимуществ Кот🐱няни
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
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
                        <CardTitle className="text-base sm:text-lg md:text-xl leading-tight">{benefit.title}</CardTitle>
                      </div>
                      
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ArrowLeftRight" size={20} className="text-red-500 sm:w-6 sm:h-6 animate-pulse" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="absolute w-full h-full backface-hidden rotate-y-180 hover:shadow-xl transition-shadow duration-300 border-2 bg-primary text-primary-foreground min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                    <CardContent className="flex flex-col items-center justify-center h-full p-5 sm:p-6 md:p-8 text-center min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                      <CardTitle className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-tight">{benefit.title}</CardTitle>
                      <p className="text-sm sm:text-base leading-relaxed">
                        {benefit.detailedDesc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};