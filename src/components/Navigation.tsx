import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/8dc06b31-00a0-48d2-b370-0158f31a4aa2.png"
              alt="Котоняня"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('benefits')}
              className="gap-2"
            >
              <Icon name="Star" size={18} />
              Наши преимущества
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('pricing')}
              className="gap-2"
            >
              <Icon name="Tag" size={18} />
              Тарифы
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('testimonials')}
              className="gap-2"
            >
              <Icon name="MessageCircle" size={18} />
              Отзывы
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('faq')}
              className="gap-2"
            >
              <Icon name="HelpCircle" size={18} />
              Частые вопросы
            </Button>

            <Button
              onClick={() => scrollToSection('booking')}
              className="ml-4 gap-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="Calendar" size={18} />
              Бронирование
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => scrollToSection('booking')}
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};
