import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format, differenceInDays, addMonths, parseISO, eachDayOfInterval } from 'date-fns';
import { ru } from 'date-fns/locale';

interface BookingFormData {
  customerName: string;
  phone: string;
  email: string;
  catName: string;
  catBreed: string;
  specialNeeds: string;
}

export const BookingCalendar = () => {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: '',
    phone: '',
    email: '',
    catName: '',
    catBreed: '',
    specialNeeds: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [isLoadingDates, setIsLoadingDates] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/bookings-dates');
        if (response.ok) {
          const data = await response.json();
          const dates: Date[] = [];
          
          data.occupiedDates?.forEach((booking: { from: string; to: string }) => {
            const from = parseISO(booking.from);
            const to = parseISO(booking.to);
            const range = eachDayOfInterval({ start: from, end: to });
            dates.push(...range);
          });
          
          setBookedDates(dates);
        }
      } catch (error) {
        console.error('Failed to load booked dates:', error);
      } finally {
        setIsLoadingDates(false);
      }
    };

    fetchBookedDates();
  }, []);

  const handleDateSelect = (range: { from: Date | undefined; to: Date | undefined } | undefined) => {
    if (range) {
      setDateRange(range);
    }
  };

  const calculatePrice = () => {
    if (!dateRange.from || !dateRange.to) return 0;
    const days = differenceInDays(dateRange.to, dateRange.from) + 1;
    const pricePerDay = 1500;
    return days * pricePerDay;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dateRange.from || !dateRange.to) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, выберите даты заезда и выезда',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          checkinDate: format(dateRange.from, 'yyyy-MM-dd'),
          checkoutDate: format(dateRange.to, 'yyyy-MM-dd'),
          tariff: `${formData.catName}${formData.catBreed ? ' (' + formData.catBreed + ')' : ''}`,
          catCount: 1,
          message: formData.specialNeeds,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Бронирование отправлено! 🎉',
          description: 'Мы свяжемся с вами в ближайшее время для подтверждения',
        });
        
        setFormData({
          customerName: '',
          phone: '',
          email: '',
          catName: '',
          catBreed: '',
          specialNeeds: '',
        });
        setDateRange({ from: undefined, to: undefined });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить бронирование. Попробуйте позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const days = dateRange.from && dateRange.to ? differenceInDays(dateRange.to, dateRange.from) + 1 : 0;
  const totalPrice = calculatePrice();

  const disabledDays = [
    { before: new Date() },
    ...bookedDates
  ];
  const currentMonth = new Date();
  const nextMonth = addMonths(currentMonth, 1);

  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <Icon name="Calendar" size={24} className="sm:w-7 sm:h-7" />
            Выберите даты
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Укажите период проживания вашего питомца. Занятые даты недоступны для выбора.
          </CardDescription>
          {isLoadingDates && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Icon name="Loader2" size={16} className="animate-spin" />
              Загружаю занятые даты...
            </div>
          )}
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          <div className="space-y-6">
            <div>
              <div className="mb-3 px-3 py-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg">
                <h3 className="text-center font-semibold text-lg">
                  {format(currentMonth, 'LLLL yyyy', { locale: ru })}
                </h3>
              </div>
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={handleDateSelect}
                month={currentMonth}
                numberOfMonths={1}
                disabled={disabledDays}
                locale={ru}
                className="rounded-md border w-full"
              />
            </div>

            <div>
              <div className="mb-3 px-3 py-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg">
                <h3 className="text-center font-semibold text-lg">
                  {format(nextMonth, 'LLLL yyyy', { locale: ru })}
                </h3>
              </div>
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={handleDateSelect}
                month={nextMonth}
                numberOfMonths={1}
                disabled={disabledDays}
                locale={ru}
                className="rounded-md border w-full"
              />
            </div>
          </div>
          
          {dateRange.from && dateRange.to && (
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 p-3 sm:p-4 bg-primary/5 rounded-lg">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Заезд</p>
                  <p className="font-semibold text-sm sm:text-base">{format(dateRange.from, 'dd MMMM yyyy', { locale: ru })}</p>
                </div>
                <Icon name="ArrowRight" size={18} className="text-muted-foreground hidden sm:block" />
                <Icon name="ArrowDown" size={18} className="text-muted-foreground sm:hidden" />
                <div className="flex-1 sm:text-right">
                  <p className="text-xs sm:text-sm text-muted-foreground">Выезд</p>
                  <p className="font-semibold text-sm sm:text-base">{format(dateRange.to, 'dd MMMM yyyy', { locale: ru })}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 sm:p-4 bg-accent/50 rounded-lg">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Количество дней</p>
                  <p className="text-xl sm:text-2xl font-bold">{days}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm text-muted-foreground">Итого к оплате</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">{totalPrice.toLocaleString()} ₽</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <Icon name="FileText" size={24} className="sm:w-7 sm:h-7" />
            Данные для бронирования
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Заполните форму и мы свяжемся с вами
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="customerName" className="text-sm sm:text-base">Ваше имя *</Label>
              <Input
                id="customerName"
                placeholder="Анна Иванова"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-sm sm:text-base">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="anna@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="border-t pt-3 sm:pt-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Icon name="Cat" size={18} className="sm:w-5 sm:h-5" />
                Информация о питомце
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="catName" className="text-sm sm:text-base">Кличка питомца *</Label>
                  <Input
                    id="catName"
                    placeholder="Мурка"
                    value={formData.catName}
                    onChange={(e) => setFormData({ ...formData, catName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="catBreed" className="text-sm sm:text-base">Порода</Label>
                  <Input
                    id="catBreed"
                    placeholder="Британская короткошёрстная"
                    value={formData.catBreed}
                    onChange={(e) => setFormData({ ...formData, catBreed: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="specialNeeds" className="text-sm sm:text-base">Особые пожелания</Label>
                  <Textarea
                    id="specialNeeds"
                    placeholder="Особенности ухода, диета, лекарства..."
                    value={formData.specialNeeds}
                    onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full text-base sm:text-lg py-5 sm:py-6"
              disabled={isSubmitting || !dateRange.from || !dateRange.to}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};