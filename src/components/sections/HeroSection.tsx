import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 overflow-hidden">
      <div className="absolute top-10 right-10 text-9xl opacity-10 animate-pulse-gentle">😸</div>
      <div className="absolute bottom-10 left-10 text-7xl opacity-10 animate-pulse-gentle delay-100">🐱</div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
          😸 Кошачьи каникулы
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
