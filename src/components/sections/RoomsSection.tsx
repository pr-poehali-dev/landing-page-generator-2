import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { playSound } from "@/utils/sounds";

interface RoomsSectionProps {
  onBookNowClick: () => void;
}

export const RoomsSection = ({ onBookNowClick }: RoomsSectionProps) => {
  const rooms = [
    {
      name: "Стандартный",
      price: "600 ₽/день",
      popular: false,
      features: ["Номер 3,5 кв.м", "Премиум корм", "Уборка", "Осмотр ветеринара", "Фотоотчет"]
    },
    {
      name: "Комфорт",
      price: "900 ₽/день",
      popular: true,
      features: ["Номер 5 кв.м", "Видео 24/7", "Игровая 2+ часа", "Груминг", "Социализация"]
    },
    {
      name: "Люкс",
      price: "1400 ₽/день",
      popular: false,
      features: ["Номер 8 кв.м", "Видеозвонки", "Неограниченный доступ", "Спа", "Кейс-менеджер"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Тарифы
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Скидки: от 7 дней = -10%, от 14 дней = -15%, 2+ кошки = -20%
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, idx) => (
            <Card 
              key={idx}
              className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                room.popular ? 'border-primary border-4 shadow-xl' : 'border-2'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {room.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="text-sm px-4 py-1 bg-primary text-primary-foreground shadow-lg">
                    ⭐ ПОПУЛЯРНЫЙ
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl mb-2">{room.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  {room.price}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {room.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6"
                  variant={room.popular ? "default" : "outline"}
                  onClick={() => {
                    playSound('meow');
                    onBookNowClick();
                  }}
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
