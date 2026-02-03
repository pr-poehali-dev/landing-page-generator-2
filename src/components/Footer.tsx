import Icon from '@/components/ui/icon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              Кот🐱няня
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Премиум-гостиница для кошек во Владивостоке с видеонаблюдением и заботой 24/7
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+74235555555" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={16} />
                +7 (423) 555-55-55
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
                <span>г. Владивосток, ул. Светланская, 100</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Режим работы</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Пн-Вс: 9:00 - 21:00</p>
              <p className="text-primary font-semibold">Круглосуточный уход</p>
              <p className="text-primary font-semibold">Ветеринар 24/7</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-lg">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={18} className="text-white" />
              </a>
              <a
                href="https://vk.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077FF] hover:bg-[#0066DD] flex items-center justify-center transition-colors"
                aria-label="VK"
              >
                <Icon name="Share2" size={18} className="text-white" />
              </a>
              <a
                href="https://instagram.com/kotnyanya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Кот🐱няня. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
