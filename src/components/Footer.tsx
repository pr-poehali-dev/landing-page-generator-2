import Icon from '@/components/ui/icon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* О компании */}
          <div>
            <img 
              src="https://cdn.poehali.dev/files/8dc06b31-00a0-48d2-b370-0158f31a4aa2.png"
              alt="Котоняня - гостиница для кошек"
              loading="lazy"
              width="120"
              height="48"
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mt-6">
              Премиум-гостиница для кошек во Владивостоке с видеонаблюдением и заботой 24/7
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-foreground">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+79244303990" 
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Icon name="Phone" size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+7 924 430 39 90</span>
              </a>
              <a 
                href="mailto:info@kotnyanya.ru" 
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Icon name="Mail" size={18} className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>info@kotnyanya.ru</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Icon name="MapPin" size={18} className="shrink-0 mt-0.5" />
                <span>г. Владивосток, ул. Светланская, 123</span>
              </div>
            </div>
          </div>

          {/* Режим работы */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-foreground">Режим работы</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Icon name="Clock" size={18} className="shrink-0 mt-0.5" />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </div>
              <div className="flex items-start gap-3 text-primary font-semibold">
                <Icon name="Shield" size={18} className="shrink-0 mt-0.5" />
                <span>Круглосуточный уход</span>
              </div>
              <div className="flex items-start gap-3 text-primary font-semibold">
                <Icon name="Heart" size={18} className="shrink-0 mt-0.5" />
                <span>Ветеринар 24/7</span>
              </div>
            </div>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-lg text-foreground">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} className="text-white" />
              </a>
              <a
                href="https://vk.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0077FF] hover:bg-[#0066DD] flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="VK"
              >
                <Icon name="Share2" size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-muted-foreground">
              <p>© {currentYear} Котоняня. Все права защищены.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};