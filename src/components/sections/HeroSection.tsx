import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in flex items-center justify-center gap-1">
          Кот🐱няня
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in delay-100">
          Твоя кошка на каникулах, пока ты на отдыхе
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
          Премиум-гостиница для кошек во Владивостоке | 24/7 | 4.9★ |
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