import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const GallerySection = () => {
  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/bd502c4a-abe5-47f8-94ef-fa9343ad1e1a.jpg",
      alt: "Рыжий котик играет с игрушками",
      name: "Рыжик"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/45ece2d9-d7ee-45a8-aa76-c5e99f0f4941.jpg",
      alt: "Серый котик отдыхает на мягкой лежанке",
      name: "Дымок"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/a7048c48-50ad-4e89-a33f-3d1cb52ff81e.jpg",
      alt: "Белый котик кушает премиум корм",
      name: "Каспер"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/035c8c87-a03e-4147-a04b-d16be02b1f93.jpg",
      alt: "Котики играют вместе на игровых конструкциях",
      name: "Кокос и Оскар"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/1efe21b4-e23b-4f06-b499-df48d629a168.jpg",
      alt: "Черный котик на груминге",
      name: "Уголёк"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/0c5526c5-b6d9-4f74-a96f-e3b3ec6c105c.jpg",
      alt: "Трехцветный котик мирно спит у окна",
      name: "Маркиза"
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
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Галерея счастливых котиков 😻
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Наши пушистые гости наслаждаются комфортом, играми и заботой
        </p>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {photos.map((photo, idx) => (
                <div 
                  key={idx}
                  className="relative flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  {/* Polaroid frame */}
                  <div className="group relative bg-white p-4 pb-16 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 rotate-0 hover:rotate-1">
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={photo.url} 
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />

                    </div>
                    {/* Handwritten name */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-xl font-handwriting text-black" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                        {photo.name}
                      </p>
                    </div>
                  </div>
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