import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format, differenceInDays, addMonths, parseISO, eachDayOfInterval } from 'date-fns';
import { ru } from 'date-fns/locale';
import confetti from 'canvas-confetti';
import { PrivacyPolicyModal } from '@/components/modals/PrivacyPolicyModal';
import { OfferAgreementModal } from '@/components/modals/OfferAgreementModal';
import { PersonalDataConsentModal } from '@/components/modals/PersonalDataConsentModal';

interface BookingFormData {
  customerName: string;
  phone: string;
  email: string;
  catName: string;
  catBreed: string;
  specialNeeds: string;
  tariff: string;
}

const TARIFFS = [
  { id: 'standard', name: 'Стандартный', price: 600, description: 'Уютный номер с базовыми удобствами' },
  { id: 'comfort', name: 'Комфорт ⭐', price: 900, description: 'Просторный номер с дополнительными игрушками' },
  { id: 'luxury', name: 'Люкс 💎', price: 1400, description: 'Премиум номер с панорамными окнами' },
];

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
    tariff: 'comfort',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [isLoadingDates, setIsLoadingDates] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);
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
    const selectedTariff = TARIFFS.find(t => t.id === formData.tariff);
    const pricePerDay = selectedTariff?.price || 900;
    let totalPrice = days * pricePerDay;
    
    // Скидки за длительное проживание
    if (days >= 14) {
      totalPrice *= 0.85; // -15% от 14 дней
    } else if (days >= 7) {
      totalPrice *= 0.90; // -10% от 7 дней
    }
    
    return Math.round(totalPrice);
  };

  const getDiscountInfo = () => {
    if (!dateRange.from || !dateRange.to) return null;
    const days = differenceInDays(dateRange.to, dateRange.from) + 1;
    
    if (days >= 14) {
      return { percent: 15, text: 'Скидка 15% за проживание от 14 дней' };
    } else if (days >= 7) {
      return { percent: 10, text: 'Скидка 10% за проживание от 7 дней' };
    }
    return null;
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

    if (!agreedToTerms) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласиться с условиями обработки данных',
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
          tariff: formData.tariff,
          catCount: 1,
          message: `Питомец: ${formData.catName}${formData.catBreed ? ' (' + formData.catBreed + ')' : ''}. ${formData.specialNeeds}`,
          catInfo: {
            name: formData.catName,
            breed: formData.catBreed,
            specialNeeds: formData.specialNeeds
          },
        }),
      });

      if (response.ok) {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#43E3FF', '#FF4FD8', '#B8D8F0']
        });
        
        setShowSuccessMessage(true);
        
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 4000);
        
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
          tariff: 'comfort',
        });
        setDateRange({ from: undefined, to: undefined });
        setAgreedToTerms(false);
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
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto relative">
      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] px-8 py-6 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle2" size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Заявка успешно отправлена!</h3>
                <p className="text-lg opacity-90">Мы свяжемся с вами в ближайшее время</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Card className="shadow-xl">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
            <Icon name="Calendar" size={24} className="sm:w-7 sm:h-7" />
            Выберите даты
          </CardTitle>
          <CardDescription className="space-y-3">
            <div>
              <Label htmlFor="tariff" className="text-base font-semibold mb-2 block">Выберите тариф проживания</Label>
              <Select value={formData.tariff} onValueChange={(value) => setFormData({ ...formData, tariff: value })}>
                <SelectTrigger id="tariff" className="w-full">
                  <SelectValue placeholder="Выберите тариф" />
                </SelectTrigger>
                <SelectContent>
                  {TARIFFS.map(tariff => (
                    <SelectItem key={tariff.id} value={tariff.id}>
                      <div className="flex flex-col">
                        <span className="font-semibold">{tariff.name} — {tariff.price} ₽/день</span>
                        <span className="text-xs text-muted-foreground">{tariff.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
              
              {getDiscountInfo() && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Icon name="BadgePercent" size={20} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    {getDiscountInfo()?.text}
                  </span>
                </div>
              )}

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
            <div className="space-y-1.5 sm:space-y-2 p-3 bg-primary/5 rounded-lg border-2 border-primary/20">
              <Label htmlFor="customerName" className="text-sm sm:text-base font-semibold">Ваше имя *</Label>
              <Input
                id="customerName"
                placeholder="Анна Иванова"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2 p-3 bg-primary/5 rounded-lg border-2 border-primary/20">
              <Label htmlFor="phone" className="text-sm sm:text-base font-semibold">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-white"
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
                <div className="space-y-1.5 sm:space-y-2 p-3 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <Label htmlFor="catName" className="text-sm sm:text-base font-semibold">Кличка питомца *</Label>
                  <Input
                    id="catName"
                    placeholder="Мурка"
                    value={formData.catName}
                    onChange={(e) => setFormData({ ...formData, catName: e.target.value })}
                    required
                    className="bg-white"
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

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border-2 border-border">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-xs sm:text-sm leading-relaxed cursor-pointer">
                Я согласен(на) с{' '}
                <button
                  type="button"
                  onClick={() => setOfferOpen(true)}
                  className="text-primary hover:underline font-semibold"
                >
                  договором оферты
                </button>
                ,{' '}
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-primary hover:underline font-semibold"
                >
                  политикой конфиденциальности
                </button>
                {' '}и даю{' '}
                <button
                  type="button"
                  onClick={() => setConsentOpen(true)}
                  className="text-primary hover:underline font-semibold"
                >
                  согласие на обработку персональных данных
                </button>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full text-base sm:text-lg py-5 sm:py-6 bg-gradient-to-r from-[#00F0FF] via-[#43E3FF] to-[#FF4FD8] text-[#050816] font-semibold shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              disabled={isSubmitting || !dateRange.from || !dateRange.to || !agreedToTerms}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Отправка...
                </>
              ) : (
                'Отправить заявку'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <OfferAgreementModal open={offerOpen} onOpenChange={setOfferOpen} />
      <PersonalDataConsentModal open={consentOpen} onOpenChange={setConsentOpen} />
    </div>
  );
};