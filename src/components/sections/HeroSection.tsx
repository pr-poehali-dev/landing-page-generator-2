import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection = ({ onBookNowClick }: HeroSectionProps) => {
  const stats = [
    { icon: "Heart", value: "3000+", label: "Довольных котиков" },
    { icon: "Star", value: "4.9", label: "Рейтинг на Яндекс" },
    { icon: "Clock", value: "24/7", label: "Ветеринар на месте" },
    { icon: "Award", value: "0", label: "Побегов за 3 года" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb),0.1),transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
              <Icon name="Sparkles" size={18} />
              <span className="text-sm font-semibold">Премиум гостиница #1 во Владивостоке</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Кот🐱няня
              <span className="block text-primary mt-2">для вашей кошки</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Уезжаете в отпуск? Командировка? Ремонт дома? <br />
              <span className="text-foreground font-semibold">Мы позаботимся о вашем питомце как о родном!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                onClick={() => {
                  playSound('meow');
                  onBookNowClick();
                }}
              >
                <Icon name="Calendar" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Забронировать номер
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 group"
                asChild
              >
                <a href="tel:+74235555555" className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="group-hover:rotate-12 transition-transform" />
                  +7 (423) 555-55-55
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-orange-500/10 border-2 border-orange-500/30 rounded-xl animate-pulse-gentle">
              <Icon name="Clock" size={24} className="text-orange-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-orange-900 dark:text-orange-100">🔥 Только 4 места в январе!</p>
                <p className="text-sm text-orange-800 dark:text-orange-200">Бронируйте сейчас, чтобы не остаться без места</p>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in delay-200">
            {stats.map((stat, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={stat.icon} size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold font-heading text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Large feature card */}
            <Card className="col-span-2 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Video" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Видео онлайн 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Смотрите за своим питомцем в любое время через мобильное приложение или веб-камеру
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in delay-300">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={20} />
            <span className="text-sm font-medium">Застрахованы</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="BadgeCheck" size={20} />
            <span className="text-sm font-medium">Лицензия ветеринара</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            <span className="text-sm font-medium">15+ лет опыта</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={20} />
            <span className="text-sm font-medium">Владивосток, центр</span>
          </div>
        </div>
      </div>
    </section>
  );
};