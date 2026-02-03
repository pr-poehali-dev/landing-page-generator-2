import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in flex items-center justify-center gap-1">
          Кот🐱няня
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in delay-100">
          Где котоняни и ветеринары заботятся о вашем питомце
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
          Гостиница для кошек во Владивостоке, когда вы в отъезде | 24/7 | 4.9★
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-300">
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
          
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
            asChild
          >
            <a href="tel:+74235555555" className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              +7 (423) 555-55-55
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};