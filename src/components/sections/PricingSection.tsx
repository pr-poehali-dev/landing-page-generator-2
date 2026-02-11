import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PricingSectionProps {
  id?: string;
  onBookNowClick: () => void;
}

const getFeatureIcon = (feature: string): { icon: string; color: string } => {
  if (feature.includes('Номер') || feature.includes('кв.м')) return { icon: 'Home', color: 'text-blue-600' };
  if (feature.includes('Видеонаблюдение')) return { icon: 'Video', color: 'text-purple-600' };
  if (feature.includes('игровой')) return { icon: 'Gamepad2', color: 'text-pink-600' };
  if (feature.includes('груминг') || feature.includes('спа')) return { icon: 'Scissors', color: 'text-indigo-600' };
  if (feature.includes('котоняня')) return { icon: 'UserRound', color: 'text-orange-600' };
  if (feature.includes('уборка')) return { icon: 'Sparkles', color: 'text-yellow-600' };
  if (feature.includes('Ветеринар')) return { icon: 'Stethoscope', color: 'text-red-600' };
  if (feature.includes('фото') || feature.includes('видео')) return { icon: 'Camera', color: 'text-cyan-600' };
  if (feature.includes('доставка')) return { icon: 'Car', color: 'text-green-600' };
  if (feature.includes('Питание')) return { icon: 'UtensilsCrossed', color: 'text-amber-600' };
  return { icon: 'Check', color: 'text-green-600' };
};

export const PricingSection = ({ id, onBookNowClick }: PricingSectionProps) => {
  const allPlans = [
    {
      name: "Стандарт",
      price: "600",
      period: "день",
      popular: false,
      description: "Базовый комфорт для вашего котика",
      features: [
        "Номер 3,5 кв.м с лежанкой",
        "Питание по вашему расписанию",
        "Ежедневные фото/видео отчеты",
        "Ветеринар на связи",
        "Доступ к игровой зоне",
        "Ежедневная уборка"
      ],
      icon: "Home"
    },
    {
      name: "Комфорт",
      price: "900",
      period: "день",
      popular: true,
      description: "Оптимальный выбор большинства",
      features: [
        "Номер 5 кв.м с лежанкой и гамаком",
        "Видеонаблюдение 24/7",
        "Доступ к игровой зоне",
        "Базовый груминг (расчесывание)",
        "Игры с котоняней по желанию",
        "Ежедневная уборка",
        "Ветеринар на связи",
        "Ежедневные фото/видео отчеты"
      ],
      icon: "Star"
    },
    {
      name: "Люкс",
      price: "1400",
      period: "день",
      popular: false,
      description: "Максимальный комфорт и внимание",
      features: [
        "Номер 8 кв.м с панорамным окном, лежанкой и гамаком",
        "Видеонаблюдение 24/7",
        "Неограниченный доступ к игровой",
        "Полный спа-комплекс (груминг, стрижка когтей,массаж)",
        "Персональная котоняня",
        "Ежедневная уборка",
        "Ветеринар на связи",
        "Ежедневные фото/видео отчеты",
        "VIP доставка домой в комфортабельной переноске"
      ],
      icon: "Crown"
    }
  ];

  const plans = allPlans;
  const mobilePlans = [allPlans[1], allPlans[0], allPlans[2]];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
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

  const renderPricingCard = (plan: typeof allPlans[0], idx: number) => (
    <Card 
      key={idx}
      className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col ${
        plan.popular ? 'border-primary border-4 shadow-xl sm:scale-105' : 'border-2'
      }`}
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Badge className="text-sm px-6 py-1.5 bg-primary text-primary-foreground shadow-lg">
            <span className="inline-block animate-[starShimmer_2s_ease-in-out_infinite]">⭐</span>
            <span className="inline-block animate-[starShimmer_2s_ease-in-out_infinite_0.2s]">⭐</span>
            <span className="inline-block animate-[starShimmer_2s_ease-in-out_infinite_0.4s]">⭐</span>
            <span className="inline-block animate-[starShimmer_2s_ease-in-out_infinite_0.6s]">⭐</span>
            <span className="inline-block animate-[starShimmer_2s_ease-in-out_infinite_0.8s]">⭐</span>
            <span className="ml-1">ПОПУЛЯРНЫЙ</span>
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pt-8 pb-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name={plan.icon} size={32} className="text-primary" />
        </div>
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl mb-2">{plan.name}</CardTitle>
        <CardDescription className="text-xs sm:text-sm mb-4 min-h-[40px] leading-relaxed px-2">
          {plan.description}
        </CardDescription>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl sm:text-5xl font-bold text-primary">{plan.price}</span>
          <span className="text-lg sm:text-xl text-muted-foreground">₽</span>
          <span className="text-base sm:text-lg text-muted-foreground">/{plan.period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {plan.features.map((feature, fidx) => {
            const { icon, color } = getFeatureIcon(feature);
            return (
              <li key={fidx} className="flex items-start gap-2 sm:gap-3">
                <Icon name={icon} size={18} className={`${color} flex-shrink-0 mt-0.5`} />
                <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
              </li>
            );
          })}
        </ul>
        
        <Button 
          className={`w-full mt-4 ${plan.popular ? 'bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold hover:shadow-lg animate-pulse' : ''}`}
          size="lg"
          variant={plan.popular ? "default" : "outline"}
          onClick={onBookNowClick}
        >
          {plan.popular ? "Забронировать сейчас" : "Выбрать тариф"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id={id} aria-label="Тарифы и цены" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-3 sm:mb-4">
          Тарифы и цены
        </h2>
        <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2">
          Выберите подходящий вариант для вашего пушистого друга
        </p>
        
        <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-4 sm:p-5 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <p className="text-center font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
            🎁 Специальные скидки: от 7 дней = -10% | от 14 дней = -15% | 2+ кошки = -20%
          </p>
        </div>
        
        {/* Mobile carousel */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {mobilePlans.map((plan, idx) => (
                <div key={idx} className="flex-[0_0_90%] min-w-0">
                  {renderPricingCard(plan, idx)}
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
            {mobilePlans.map((_, idx) => (
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
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, idx) => renderPricingCard(plan, idx))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 sm:mt-12 text-xs sm:text-sm px-4 leading-relaxed">
          * Все цены указаны за одного котика. При бронировании от 7 дней скидки применяются автоматически.
        </p>
      </div>
    </section>
  );
};