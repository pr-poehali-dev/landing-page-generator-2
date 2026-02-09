import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Icon from "@/components/ui/icon";

interface TestimonialsSectionProps {
  id?: string;
}

export const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      text: "Оставили нашу Мурку на две недели. Каждый день получали видео, как она играет и спит. Вернулась довольная и упитанная! Спасибо команде за заботу ❤️",
      author: "Елена Иванова",
      catName: "Мурка",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/919d5031-54ca-4c63-a3ee-87d93be34ddf.jpg"
    },
    {
      text: "Рыжик впервые остался без нас, очень переживали. Но видеонаблюдение 24/7 успокоило - видели, что он прекрасно проводит время. Теперь только сюда!",
      author: "Сергей и Мария Петровы",
      catName: "Рыжик",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/2419dd70-326e-47f9-a060-00a19862050f.jpg"
    },
    {
      text: "Это не гостиница, это спа-курорт для кошек! Симба вернулся расчесанный, довольный, даже похудел немного. Груминг на высшем уровне 👍",
      author: "Виктория Кравцова",
      catName: "Симба",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/603557ff-8038-465f-b5e7-833fa3b1a1e4.jpg"
    },
    {
      text: "Впервые доверили кого-то чужим рукам. Боня оказался в надёжных руках профессионалов. Ежедневные фотоотчёты и внимательное отношение - рекомендую!",
      author: "Дмитрий Соколов",
      catName: "Боня",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/31bb39c6-1283-493a-adc3-3588a6fdd6f3.jpg"
    },
    {
      text: "Багира очень привередливая, но здесь ей понравилось! Персонал нашёл подход, кормили только тем, что она любит. Спасибо за индивидуальный подход 🐈‍⬛",
      author: "Анна Романова",
      catName: "Багира",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/5206530d-a986-4b08-98bb-d704b7e1e987.jpg"
    },
    {
      text: "Люксовый номер превзошёл ожидания! Барсик жил как король - панорамное окно, спа-процедуры. Теперь он требует такой же сервис дома 😄",
      author: "Олег и Светлана",
      catName: "Барсик",
      rating: 5,
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/6959f908-7068-46bb-adf4-1132bb3648e3.jpg"
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
    <section id={id} className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Реальные истории от хозяев счастливых котиков
        </p>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.catName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <p className="font-semibold text-lg text-primary mb-1">{testimonial.catName}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                      </div>
                      
                      <p className="text-sm leading-relaxed mb-4 flex-1 italic text-muted-foreground">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span>Проверенный отзыв</span>
                      </div>
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