import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { MouseToyIcon, CatBowlIcon } from "@/components/DecorationIcons";
import { playSound, playMeowSequence } from "@/utils/sounds";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export const BookingSection = () => {
  const { toast } = useToast();
  const today = new Date().toISOString().split('T')[0];
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0];

  const [bookingData, setBookingData] = useState({
    roomType: "comfort",
    checkIn: "",
    checkOut: "",
    catsCount: "1",
    name: "",
    phone: "",
    email: "",
    agreeToTerms: false
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

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const total = calculateTotal();
    
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.name || !bookingData.phone) {
      playSound('meow');
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите даты, имя и телефон",
        variant: "destructive"
      });
      return;
    }
    
    if (!bookingData.agreeToTerms) {
      playSound('meow');
      toast({
        title: "Необходимо согласие",
        description: "Пожалуйста, примите условия соглашения",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const response = await fetch('https://functions.poehali.dev/936d3ae8-073f-4ab4-baab-23c075a0b731', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          checkinDate: bookingData.checkIn,
          checkoutDate: bookingData.checkOut,
          tariff: bookingData.roomType,
          catCount: parseInt(bookingData.catsCount),
          message: ''
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        playMeowSequence();
        toast({
          title: "Бронирование отправлено! 🎉",
          description: `Итого: ${total}₽. Мы свяжемся с вами в течение часа!`,
        });
        
        setBookingData({
          roomType: "comfort",
          checkIn: "",
          checkOut: "",
          catsCount: "1",
          name: "",
          phone: "",
          email: "",
          agreeToTerms: false
        });
      } else {
        throw new Error(data.error || 'Ошибка сервера');
      }
    } catch (error) {
      playSound('meow');
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или позвоните нам",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-pulse-gentle">
        <MouseToyIcon />
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20 animate-pulse-gentle delay-100">
        <CatBowlIcon />
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Забронировать номер
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Заполните форму за 30 секунд — мы перезвоним в течение часа
        </p>
        
        <Card className="border-4 shadow-2xl">
          <CardContent className="pt-6">
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <Label className="text-lg font-semibold mb-4 block">Выберите тариф</Label>
                <RadioGroup 
                  value={bookingData.roomType}
                  onValueChange={(value) => setBookingData({...bookingData, roomType: value})}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Стандартный</div>
                      <div className="text-sm text-muted-foreground">600 ₽/день</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer border-primary bg-primary/5">
                    <RadioGroupItem value="comfort" id="comfort" />
                    <Label htmlFor="comfort" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Комфорт ⭐</div>
                      <div className="text-sm text-muted-foreground">900 ₽/день</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="luxury" id="luxury" />
                    <Label htmlFor="luxury" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Люкс</div>
                      <div className="text-sm text-muted-foreground">1400 ₽/день</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn">Дата заезда</Label>
                  <Input 
                    id="checkIn"
                    type="date" 
                    min={today}
                    max={nextMonth}
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="checkOut">Дата выезда</Label>
                  <Input 
                    id="checkOut"
                    type="date" 
                    min={today}
                    max={nextMonth}
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="catsCount">Количество кошек</Label>
                <Input 
                  id="catsCount"
                  type="number" 
                  min="1"
                  max="10"
                  value={bookingData.catsCount}
                  onChange={(e) => setBookingData({...bookingData, catsCount: e.target.value})}
                  className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                />
              </div>

              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Иван Иванов"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="+7 (999) 123-45-67"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email (необязательно)</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="example@mail.ru"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  className="mt-2 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold placeholder:text-[#050816]/70 border-2 border-transparent focus:border-[#050816]"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={bookingData.agreeToTerms}
                  onCheckedChange={(checked) => setBookingData({...bookingData, agreeToTerms: checked as boolean})}
                />
                <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Я согласен с{" "}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="text-primary underline hover:no-underline">
                        условиями обслуживания
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Условия обслуживания в гостинице "Кошачьи каникулы"</DialogTitle>
                        <DialogDescription>
                          Пожалуйста, ознакомьтесь с условиями обслуживания
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 text-sm">
                        <p><strong>1. Общие положения</strong></p>
                        <p>Настоящие условия регулируют предоставление услуг временного содержания кошек в гостинице "Кошачьи каникулы".</p>
                        
                        <p><strong>2. Требования к питомцу</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Кошка должна быть вакцинирована (прививки от бешенства и панлейкопении не старше 1 года)</li>
                          <li>Питомец должен быть обработан от блох и глистов (не более 30 дней назад)</li>
                          <li>При наличии хронических заболеваний необходимо предоставить справку от ветеринара</li>
                        </ul>
                        
                        <p><strong>3. Услуги гостиницы</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Индивидуальный номер с климат-контролем</li>
                          <li>Двухразовое кормление премиум кормом (или своим)</li>
                          <li>Ежедневная уборка и смена наполнителя</li>
                          <li>Видеонаблюдение 24/7 (доступ через приложение)</li>
                          <li>Ежедневный осмотр ветеринаром</li>
                          <li>Ежедневные фото-видео отчёты</li>
                        </ul>
                        
                        <p><strong>4. Оплата услуг</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Оплата производится при заезде за весь период проживания</li>
                          <li>При досрочном выезде оплата не возвращается</li>
                          <li>Дополнительные услуги (груминг, спа) оплачиваются отдельно</li>
                        </ul>
                        
                        <p><strong>5. Ответственность</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Гостиница несёт полную ответственность за здоровье и безопасность питомца</li>
                          <li>При возникновении проблем со здоровьем владелец информируется немедленно</li>
                          <li>Экстренная ветеринарная помощь оказывается за счёт гостиницы</li>
                          <li>Гостиница застрахована (страховка до 100 000 ₽)</li>
                        </ul>
                        
                        <p><strong>6. Отмена бронирования</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Отмена за 7+ дней до заезда — возврат 100%</li>
                          <li>Отмена за 3-6 дней до заезда — возврат 50%</li>
                          <li>Отмена менее чем за 3 дня — без возврата</li>
                        </ul>
                        
                        <p className="text-muted-foreground italic">
                          Принимая данные условия, вы подтверждаете, что ознакомились со всеми положениями и согласны с ними.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </label>
              </div>

              {calculateTotal() > 0 && (
                <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 text-center animate-scale-in">
                  <div className="text-lg mb-2">Итоговая стоимость:</div>
                  <div className="text-4xl font-bold text-primary">{calculateTotal()} ₽</div>
                  {bookingData.checkIn && bookingData.checkOut && (
                    <div className="text-sm text-muted-foreground mt-2">
                      {Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24))} дней проживания
                    </div>
                  )}
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-xl py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                ЗАБРОНИРОВАТЬ СЕЙЧАС
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};