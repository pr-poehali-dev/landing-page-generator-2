import Icon from '@/components/ui/icon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <img 
              src="https://cdn.poehali.dev/files/8dc06b31-00a0-48d2-b370-0158f31a4aa2.png"
              alt="Котоняня"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4"
            />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Премиум-гостиница для кошек во Владивостоке с видеонаблюдением и заботой 24/7
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Контакты</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <a 
                href="tel:+79244303990" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={16} />
                +7 924 430 39 90
              </a>
              <a 
                href="mailto:info@kotnyanya.ru" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={16} />
                info@kotnyanya.ru
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>г. Владивосток, ул. Светланская, 123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Режим работы</h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <p>Пн-Вс: 9:00 - 21:00</p>
              <p className="text-primary font-semibold">Круглосуточный уход</p>
              <p className="text-primary font-semibold">Ветеринар 24/7</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 sm:mb-4 text-base sm:text-lg">Мы в соцсетях</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://t.me/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://vk.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0077FF] hover:bg-[#0066DD] flex items-center justify-center transition-colors"
                aria-label="VK"
              >
                <Icon name="Share2" size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://instagram.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/8dc06b31-00a0-48d2-b370-0158f31a4aa2.png"
                alt="Котоняня"
                className="h-5 sm:h-6 w-auto"
              />
              <p>© {currentYear} Все права защищены.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};