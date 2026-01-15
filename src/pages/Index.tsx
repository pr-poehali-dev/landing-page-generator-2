import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [bookingData, setBookingData] = useState({
    roomType: "comfort",
    checkIn: "",
    checkOut: "",
    catsCount: "1",
    name: "",
    phone: "",
    email: ""
  });

  const roomPrices: Record<string, number> = {
    standard: 600,
    comfort: 900,
    luxury: 1400
  };

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const start = new Date(bookingData.checkIn);
    const end = new Date(bookingData.checkOut);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (days <= 0) return 0;
    
    let basePrice = roomPrices[bookingData.roomType] * days;
    const catsCount = parseInt(bookingData.catsCount);
    
    if (catsCount > 1) basePrice *= catsCount * 0.8;
    if (days >= 14) basePrice *= 0.85;
    else if (days >= 7) basePrice *= 0.9;
    
    return Math.round(basePrice);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculateTotal();
    
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.name || !bookingData.phone) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите даты, имя и телефон",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Бронирование отправлено! 🎉",
      description: `Итого: ${total}₽. Мы свяжемся с вами в течение часа!`,
    });
  };
  const benefits = [
    {
      emoji: "🔒",
      title: "Видеонаблюдение 24/7",
      desc: "4K камеры в каждой комнате с защищённым приложением"
    },
    {
      emoji: "❤️",
      title: "Ветеринар 24/7",
      desc: "Ежедневный осмотр и премиум корм включены"
    },
    {
      emoji: "🎾",
      title: "Игровые комнаты",
      desc: "Когтеточки, конструкции, игрушки, социализация"
    },
    {
      emoji: "✨",
      title: "Груминг и спа",
      desc: "Чистка, стрижка, массаж, парфюмирование"
    },
    {
      emoji: "💚",
      title: "Ежедневные отчёты",
      desc: "Фото, видео, письма о питании и сне"
    },
    {
      emoji: "📱",
      title: "Простота и комфорт",
      desc: "Бронирование за 30 сек, доставка включена"
    }
  ];

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

  const stats = [
    { year: 2022, cats: 120, rating: "4.2★" },
    { year: 2023, cats: 350, rating: "4.6★" },
    { year: 2024, cats: 650, rating: "4.9★" },
    { year: 2025, cats: "800+", rating: "4.9★", cert: "Pet Friendly ✅" }
  ];

  const testimonials = [
    {
      text: "Кошка вернулась счастливей. Видеосвязь спасала отпуск!",
      author: "Елена И."
    },
    {
      text: "Фотоотчеты каждый день успокаивали. Спасибо!",
      author: "Сергей и Мария"
    },
    {
      text: "Это спа-салон для кошек! Рекомендуем всем.",
      author: "Виктория К."
    }
  ];

  const faqItems = [
    {
      q: "Моя кошка боится незнакомцев. Адаптируется?",
      a: "Да, за 1-2 дня! Персонал 15+ лет опыта, техники спокойствия, отдельные номера. Гарантия: вернём домой если некомфортно."
    },
    {
      q: "Что если кошке нужно лекарство?",
      a: "Ветеринар 24/7 на месте. Даём лекарства по расписанию, специальная диета, мониторинг."
    },
    {
      q: "Почему дороже чем передержка?",
      a: "Видео 24/7 + ветеринар + развлечения + гарантия качества. Это инвестиция в здоровье кошки."
    },
    {
      q: "Гарантия безопасности?",
      a: "100%! За 3+ года = 0 побегов. Герметичные номера, двойные двери, видео, страховка."
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 overflow-hidden">
        <div className="absolute top-10 right-10 text-9xl opacity-10 animate-pulse-gentle">😸</div>
        <div className="absolute bottom-10 left-10 text-7xl opacity-10 animate-pulse-gentle delay-100">🐱</div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            😸 Кошачьи каникулы
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in delay-100">
            🎉 Оставь кошку на выходных и не волнуйся — она будет счастливее, чем дома
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
            Премиум гостиница с видеонаблюдением 24/7 | 800+ кошек | 4.9★ | Pet Friendly ✅
          </p>
          
          <div className="mb-8 animate-scale-in delay-300">
            <Button 
              size="lg" 
              className="text-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={scrollToBooking}
            >
              ЗАБРОНИРОВАТЬ СЕЙЧАС
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full animate-pulse-gentle shadow-lg">
            <Icon name="AlertCircle" size={20} />
            <span className="font-semibold">Осталось 4 свободных места в январе</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            6 преимуществ "Кошачьих каникул"
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{benefit.emoji}</div>
                  <CardTitle className="text-xl font-heading">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            💰 Типы номеров и цены
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {rooms.map((room, idx) => (
              <Card 
                key={idx}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  room.popular ? 'border-4 border-accent shadow-xl scale-105' : 'border-2'
                }`}
              >
                {room.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1 text-sm">
                    Популярный
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading mb-2">{room.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{room.price}</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {room.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant={room.popular ? "default" : "outline"}
                    onClick={scrollToBooking}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center text-lg font-semibold text-muted-foreground">
            7 дн: -10% | 14 дн: -15% | 2 кошки: -20% | Постоянные: -20%
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            📈 Цифры растущей популярности
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card 
                key={idx} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <CardHeader>
                  <CardTitle className="text-3xl font-heading font-bold text-primary">
                    {stat.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{stat.cats}</div>
                  <div className="text-xl text-secondary font-semibold mb-2">{stat.rating}</div>
                  {stat.cert && (
                    <Badge className="bg-secondary text-secondary-foreground">{stat.cert}</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            💬 Отзывы клиентов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">⭐</div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            ❓ Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Card className="mt-12 bg-secondary/10 border-2 border-secondary">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✅</div>
                <p className="text-lg">
                  <strong>100% возврат денег</strong> если кошке некомфортно в 1-й день. 
                  Практика: 92% адаптируются за 4-8 часов, 98% счастливы, 67% не хотят уходить!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-accent/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-10 left-10 text-8xl opacity-10 animate-pulse-gentle">🔥</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10 animate-pulse-gentle delay-100">🎯</div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
            🔥 Январь-февраль заполняются быстро
          </h2>
          
          <div className="bg-card border-2 border-accent rounded-2xl p-8 mb-8 shadow-xl text-center">
            <p className="text-xl mb-4 font-semibold">
              8 из 10 дат заняты
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              Сейчас: <span className="text-2xl font-bold text-primary">900₽</span> → 
              Завтра: <span className="line-through">950₽</span> → 
              Неделя: <span className="line-through">1100₽</span>
            </p>
          </div>
          
          <Card className="border-4 border-primary shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading">Форма бронирования</CardTitle>
              <CardDescription className="text-lg">Заполните форму за 30 секунд</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-3 block">Тип номера</Label>
                  <RadioGroup 
                    value={bookingData.roomType} 
                    onValueChange={(value) => setBookingData({...bookingData, roomType: value})}
                    className="grid md:grid-cols-3 gap-4"
                  >
                    <Label 
                      htmlFor="standard" 
                      className="flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer hover:border-primary transition-all"
                    >
                      <RadioGroupItem value="standard" id="standard" />
                      <div>
                        <div className="font-semibold">Стандартный</div>
                        <div className="text-sm text-muted-foreground">600₽/день</div>
                      </div>
                    </Label>
                    <Label 
                      htmlFor="comfort" 
                      className="flex items-center space-x-3 border-2 border-accent rounded-lg p-4 cursor-pointer hover:border-primary transition-all bg-accent/5"
                    >
                      <RadioGroupItem value="comfort" id="comfort" />
                      <div>
                        <div className="font-semibold">Комфорт ⭐</div>
                        <div className="text-sm text-muted-foreground">900₽/день</div>
                      </div>
                    </Label>
                    <Label 
                      htmlFor="luxury" 
                      className="flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer hover:border-primary transition-all"
                    >
                      <RadioGroupItem value="luxury" id="luxury" />
                      <div>
                        <div className="font-semibold">Люкс</div>
                        <div className="text-sm text-muted-foreground">1400₽/день</div>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="checkIn" className="text-base font-semibold">Дата заезда</Label>
                    <Input 
                      id="checkIn"
                      type="date" 
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      className="mt-2 text-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-base font-semibold">Дата выезда</Label>
                    <Input 
                      id="checkOut"
                      type="date" 
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      className="mt-2 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="catsCount" className="text-base font-semibold">Количество кошек</Label>
                  <RadioGroup 
                    value={bookingData.catsCount} 
                    onValueChange={(value) => setBookingData({...bookingData, catsCount: value})}
                    className="flex gap-4 mt-2"
                  >
                    {["1", "2", "3", "4"].map(num => (
                      <Label 
                        key={num}
                        htmlFor={`cats-${num}`} 
                        className="flex items-center space-x-2 border-2 rounded-lg px-4 py-2 cursor-pointer hover:border-primary transition-all"
                      >
                        <RadioGroupItem value={num} id={`cats-${num}`} />
                        <span className="font-semibold">{num}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                  {parseInt(bookingData.catsCount) > 1 && (
                    <p className="text-sm text-secondary mt-2 font-semibold">✅ Скидка 20% на 2+ кошек!</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">Ваше имя</Label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Иван Иванов"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="mt-2 text-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="+7 999 123-45-67"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="mt-2 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email (опционально)</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="ivan@example.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="mt-2 text-lg"
                  />
                </div>

                {calculateTotal() > 0 && (
                  <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-6 text-center animate-scale-in">
                    <p className="text-lg mb-2">Итоговая стоимость:</p>
                    <p className="text-4xl font-bold text-primary">{calculateTotal()}₽</p>
                    {bookingData.checkIn && bookingData.checkOut && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24))} дней • {parseInt(bookingData.catsCount)} кошек
                      </p>
                    )}
                  </div>
                )}

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full text-xl py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  ЗАБРОНИРОВАТЬ СЕЙЧАС 🎉
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Контакты</h3>
              <p className="mb-2">Владивосток</p>
              <p className="mb-2">📞 +7-949-XXXX-XXX</p>
              <p>📧 info@koshachi-kanikuly-vl.ru</p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Часы работы</h3>
              <p className="mb-2">Пн-Сб: 9:00-21:00</p>
              <p className="mb-2">Вс: 10:00-19:00</p>
              <p>Консультация: WhatsApp/Telegram</p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Соцсети</h3>
              <p className="mb-2">Instagram | VK</p>
              <p>YouTube | TikTok</p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-primary-foreground/20">
            <p>© 2025 Кошачьи каникулы Владивостока | SSL ✅ | Pet Friendly ✅</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;