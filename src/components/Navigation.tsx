import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/8dc06b31-00a0-48d2-b370-0158f31a4aa2.png"
              alt="Котоняня"
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('benefits')}
              className="gap-1 text-sm lg:text-base px-2 lg:px-4"
            >
              <Icon name="Star" size={16} className="lg:w-[18px] lg:h-[18px]" />
              <span className="hidden lg:inline">Наши преимущества</span>
              <span className="lg:hidden">Преимущества</span>
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('pricing')}
              className="gap-1 text-sm lg:text-base px-2 lg:px-4"
            >
              <Icon name="Tag" size={16} className="lg:w-[18px] lg:h-[18px]" />
              Тарифы
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('testimonials')}
              className="gap-1 text-sm lg:text-base px-2 lg:px-4"
            >
              <Icon name="MessageCircle" size={16} className="lg:w-[18px] lg:h-[18px]" />
              Отзывы
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('faq')}
              className="gap-1 text-sm lg:text-base px-2 lg:px-4"
            >
              <Icon name="HelpCircle" size={16} className="lg:w-[18px] lg:h-[18px]" />
              <span className="hidden lg:inline">Частые вопросы</span>
              <span className="lg:hidden">FAQ</span>
            </Button>

            <Button
              onClick={() => scrollToSection('booking')}
              className="ml-2 lg:ml-4 gap-1 text-sm lg:text-base px-3 lg:px-4 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold hover:shadow-lg transition-all"
            >
              <Icon name="Calendar" size={16} className="lg:w-[18px] lg:h-[18px]" />
              <span className="hidden lg:inline">Бронирование</span>
              <span className="lg:hidden">Бронь</span>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              size="sm"
              className="gap-1.5 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold px-3 py-2 text-sm"
              onClick={() => scrollToSection('booking')}
            >
              <Icon name="Calendar" size={16} />
              Бронь
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: isScrolled ? '52px' : '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('benefits')}
            className="w-full max-w-xs gap-3 text-lg py-6 justify-start"
          >
            <Icon name="Star" size={24} />
            Наши преимущества
          </Button>

          <Button
            variant="ghost"
            onClick={() => scrollToSection('pricing')}
            className="w-full max-w-xs gap-3 text-lg py-6 justify-start"
          >
            <Icon name="Tag" size={24} />
            Тарифы
          </Button>

          <Button
            variant="ghost"
            onClick={() => scrollToSection('testimonials')}
            className="w-full max-w-xs gap-3 text-lg py-6 justify-start"
          >
            <Icon name="MessageCircle" size={24} />
            Отзывы
          </Button>

          <Button
            variant="ghost"
            onClick={() => scrollToSection('faq')}
            className="w-full max-w-xs gap-3 text-lg py-6 justify-start"
          >
            <Icon name="HelpCircle" size={24} />
            Частые вопросы
          </Button>

          <div className="h-px w-full max-w-xs bg-border my-2"></div>

          <Button
            onClick={() => scrollToSection('booking')}
            className="w-full max-w-xs gap-3 text-lg py-6 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold hover:shadow-lg transition-all"
          >
            <Icon name="Calendar" size={24} />
            Забронировать
          </Button>
        </div>
      </div>
    </nav>
  );
};