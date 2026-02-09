import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const TelegramFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="https://t.me/+79244303990"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 transition-all duration-300 group relative"
      >
        <Icon name="Send" size={24} className="sm:w-7 sm:h-7" />
        
        <span className="absolute right-full mr-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hidden sm:block">
          Написать в Telegram
        </span>
        
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </Button>
    </a>
  );
};
