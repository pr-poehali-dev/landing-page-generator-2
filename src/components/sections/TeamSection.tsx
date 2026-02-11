import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TeamSectionProps {
  id?: string;
}

export const TeamSection = ({ id }: TeamSectionProps) => {
  const team = [
    {
      name: "Ирина Вертушенко",
      role: "Главный ветеринар",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/bucket/f0491738-0e37-47de-b533-d1cd98deb2e7.jpeg",
      description: "15 лет опыта, специалист по кошачьему здоровью"
    },
    {
      name: "Мартынова Олеся",
      role: "Профессиональный грумер",
      photo: "https://cdn.poehali.dev/files/06b96703-a248-4030-9fb6-a6affb3b728b.jpeg",
      description: "Мастер груминга и спа-процедур для котиков"
    },
    {
      name: "Александр Литвинов",
      role: "Зоопсихолог",
      photo: "https://cdn.poehali.dev/files/47b29564-a2c0-4437-9ab3-0718d6c2b551.jpeg",
      description: "Эксперт по поведению кошек и их социализации"
    },
    {
      name: "Олеся Черешнева",
      role: "Котоняня",
      photo: "https://cdn.poehali.dev/files/c3a16c2e-0872-4049-8c34-323d73fc8906.jpeg",
      description: "Заботливый уход и внимание каждому питомцу"
    },
    {
      name: "Наталья Никонова",
      role: "Котоняня",
      photo: "https://cdn.poehali.dev/files/7904b37b-a583-4479-b904-1601562fd986.jpeg",
      description: "Опытный специалист по уходу за кошками"
    },
    {
      name: "Мария Князян",
      role: "Администратор",
      photo: "https://cdn.poehali.dev/files/f3a74a1b-a352-4698-a7c5-d340c6c2eb8f.jpeg",
      description: "Всегда на связи и поможет с бронированием"
    },
    {
      name: "Вероника Лукина",
      role: "Менеджер",
      photo: "https://cdn.poehali.dev/files/ac89ab95-1170-47da-970e-b534ca0d1f39.jpeg",
      description: "Организует комфортное пребывание вашего питомца"
    },
    {
      name: "Владислав Саенко",
      role: "Ветеринар и смотритель",
      photo: "https://cdn.poehali.dev/files/a41b6b17-02f2-4a8f-8da9-c4b69c779bb5.jpeg",
      description: "Следит за здоровьем и безопасностью котиков"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id={id} className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Наша команда
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Опытные специалисты с любовью заботятся о каждом пушистом госте
        </p>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {team.map((member, idx) => (
                <div 
                  key={idx}
                  className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 h-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-heading font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-xl"
            onClick={scrollPrev}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-xl"
            onClick={scrollNext}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => scrollTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};