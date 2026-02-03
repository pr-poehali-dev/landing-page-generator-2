import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (window.scrollY / scrollHeight) * 100;
      
      if (scrolledPercentage >= 75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-60 hover:opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      } bg-primary hover:bg-primary/90 animate-bounce`}
      aria-label="Наверх"
    >
      <Icon name="ArrowUp" size={24} />
    </Button>
  );
};