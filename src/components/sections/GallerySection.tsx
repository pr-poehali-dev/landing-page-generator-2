import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const GallerySection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/2419dd70-326e-47f9-a060-00a19862050f.jpg",
      alt: "Рыжик играет в гостинице",
      name: "Рыжик",
      testimonial: "Рыжик впервые остался без нас, очень переживали. Но видеонаблюдение 24/7 успокоило - видели, что он прекрасно проводит время. Теперь только сюда!",
      author: "Сергей и Мария Петровы",
      rating: 5
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/919d5031-54ca-4c63-a3ee-87d93be34ddf.jpg",
      alt: "Мурка отдыхает",
      name: "Мурка",
      testimonial: "Оставили нашу Мурку на две недели. Каждый день получали видео, как она играет и спит. Вернулась довольная и упитанная! Спасибо команде за заботу ❤️",
      author: "Елена Иванова",
      rating: 5
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/603557ff-8038-465f-b5e7-833fa3b1a1e4.jpg",
      alt: "Симба после груминга",
      name: "Симба",
      testimonial: "Это не гостиница, это спа-курорт для кошек! Симба вернулся расчесанный, довольный, даже похудел немного. Груминг на высшем уровне 👍",
      author: "Виктория Кравцова",
      rating: 5
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/31bb39c6-1283-493a-adc3-3588a6fdd6f3.jpg",
      alt: "Боня в номере",
      name: "Боня",
      testimonial: "Впервые доверили кого-то чужим рукам. Боня оказался в надёжных руках профессионалов. Ежедневные фотоотчёты и внимательное отношение - рекомендую!",
      author: "Дмитрий Соколов",
      rating: 5
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/5206530d-a986-4b08-98bb-d704b7e1e987.jpg",
      alt: "Багира кушает",
      name: "Багира",
      testimonial: "Багира очень привередливая, но здесь ей понравилось! Персонал нашёл подход, кормили только тем, что она любит. Спасибо за индивидуальный подход 🐈‍⬛",
      author: "Анна Романова",
      rating: 5
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/6959f908-7068-46bb-adf4-1132bb3648e3.jpg",
      alt: "Барсик в люксе",
      name: "Барсик",
      testimonial: "Люксовый номер превзошёл ожидания! Барсик жил как король - панорамное окно, спа-процедуры. Теперь он требует такой же сервис дома 😄",
      author: "Олег и Светлана",
      rating: 5
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Галерея счастливых котиков
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Наши пушистые гости наслаждаются комфортом, играми и заботой
        </p>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {photos.map((photo, idx) => {
                const isFlipped = flippedCards.includes(idx);
                return (
                  <div 
                    key={idx}
                    className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    style={{ perspective: '1000px' }}
                  >
                    <div 
                      className={`relative w-full transition-transform duration-700 cursor-pointer`}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                      onClick={() => toggleFlip(idx)}
                    >
                      {/* Front side - Photo */}
                      <div 
                        className="group bg-white p-4 pb-16 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="relative overflow-hidden aspect-square">
                          <img 
                            src={photo.url} 
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-primary/90 text-white rounded-full p-2 hover:scale-110 transition-transform">
                            <Icon name="RotateCw" size={18} />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <p className="text-xl font-handwriting text-black" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                            {photo.name}
                          </p>
                        </div>
                      </div>

                      {/* Back side - Testimonial */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 p-4 pb-16 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex flex-col justify-between"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="flex-1 flex flex-col justify-center space-y-3 px-2">
                          <div className="flex justify-center gap-1 mb-2">
                            {[...Array(photo.rating)].map((_, i) => (
                              <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-sm italic text-center leading-relaxed">
                            "{photo.testimonial}"
                          </p>
                          <div className="text-center">
                            <p className="text-sm font-semibold text-primary">{photo.name}</p>
                            <p className="text-xs text-muted-foreground">{photo.author}</p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-primary/90 text-white rounded-full p-2">
                          <Icon name="RotateCcw" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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