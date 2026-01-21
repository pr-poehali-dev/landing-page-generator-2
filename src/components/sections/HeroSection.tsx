import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  const pawPrints = [
    { left: '10%', bottom: '15%', opacity: 0.3, rotation: 45 },
    { left: '20%', bottom: '30%', opacity: 0.25, rotation: 50 },
    { left: '30%', bottom: '45%', opacity: 0.2, rotation: 40 },
    { left: '40%', bottom: '60%', opacity: 0.15, rotation: 48 },
    { left: '50%', bottom: '75%', opacity: 0.1, rotation: 42 },
    { left: '65%', top: '30%', opacity: 0.08, rotation: 45 },
    { left: '75%', top: '20%', opacity: 0.05, rotation: 50 },
    { left: '85%', top: '10%', opacity: 0.03, rotation: 43 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 overflow-hidden">
      {pawPrints.map((paw, index) => (
        <div
          key={index}
          className="absolute text-primary/50"
          style={{
            left: paw.left,
            bottom: paw.bottom,
            top: paw.top,
            opacity: paw.opacity,
            transform: `rotate(${paw.rotation}deg)`,
            fontSize: '2rem',
          }}
        >
          🐾
        </div>
      ))}
      
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