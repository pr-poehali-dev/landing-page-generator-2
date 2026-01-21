import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-pulse-gentle">
        <img 
          src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/d25784f1-b437-4ae9-8f16-91ea7f71a626.jpg"
          alt="Декор"
          className="w-full h-full object-contain"
          style={{mixBlendMode: 'multiply'}}
        />
      </div>
      <div className="absolute bottom-10 left-10 w-28 h-28 opacity-20 animate-pulse-gentle delay-100">
        <img 
          src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/05869095-6b17-42cc-816d-c8f012fd31bd.jpg"
          alt="Декор"
          className="w-full h-full object-contain"
          style={{mixBlendMode: 'multiply'}}
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in flex items-center justify-center gap-3">
          <div className="w-12 h-12">
            <img 
              src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/a1285794-166d-4acb-b588-05358ee51713.jpg"
              alt="Котик"
              className="w-full h-full object-contain"
              style={{mixBlendMode: 'multiply'}}
            />
          </div>
          Кошачьи каникулы
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in delay-100">
          🎉 Оставь кошку на выходных и не волнуйся — она будет счастливее, чем дома
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
          Премиум гостиница с видеонаблюдением 24/7 | 800+ кошек | 4.9★ | Pet Friendly ✅
        </p>
        
        <div className="mb-8 animate-scale-in delay-300">
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              playSound('meow');
              onBookNowClick();
            }}
          >
            ЗАБРОНИРОВАТЬ СЕЙЧАС
          </Button>
        </div>
        
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full animate-pulse-gentle shadow-lg">
          <Icon name="AlertCircle" size={20} />
          <span className="font-semibold">Осталось 4 свободных места в январе</span>
        </div>
      </div>
    </section>
  );
};