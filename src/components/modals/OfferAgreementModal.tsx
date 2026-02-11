import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OfferAgreementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const OfferAgreementModal = ({ open, onOpenChange }: OfferAgreementModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Договор публичной оферты</DialogTitle>
          <DialogDescription>
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="font-bold text-lg mb-3">1. Общие положения</h3>
              <p className="text-muted-foreground">
                Настоящий документ является официальным предложением (публичной офертой) гостиницы для кошек "Котоняня" 
                (далее — Исполнитель) заключить договор на оказание услуг по временному размещению и уходу за домашними 
                животными (кошками). Акцептом настоящей оферты является внесение предоплаты или оплаты услуг.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">2. Предмет договора</h3>
              <p className="text-muted-foreground mb-2">
                2.1. Исполнитель обязуется оказать Заказчику услуги по временному размещению и уходу за домашним 
                животным (кошкой) в соответствии с выбранным тарифом.
              </p>
              <p className="text-muted-foreground mb-2">
                2.2. Услуги включают в себя:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Предоставление номера для размещения животного</li>
                <li>Кормление животного согласно выбранному тарифу</li>
                <li>Ежедневная уборка помещения</li>
                <li>Доступ к игровой зоне</li>
                <li>Ветеринарный осмотр и наблюдение</li>
                <li>Отправка фото/видеоотчетов владельцу</li>
                <li>Дополнительные услуги согласно тарифу</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">3. Стоимость услуг и порядок оплаты</h3>
              <p className="text-muted-foreground mb-2">
                3.1. Стоимость услуг определяется действующими тарифами, размещенными на сайте.
              </p>
              <p className="text-muted-foreground mb-2">
                3.2. Оплата услуг производится:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>100% предоплата при бронировании на срок до 7 дней</li>
                <li>50% предоплата при бронировании на срок от 7 дней</li>
                <li>Окончательный расчет производится в день выезда животного</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                3.3. При бронировании от 7 дней предоставляется скидка 10%, от 14 дней — 15%. 
                При размещении 2-х и более животных — скидка 20%.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">4. Обязанности Заказчика</h3>
              <p className="text-muted-foreground mb-2">
                4.1. Заказчик обязуется:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Предоставить достоверную информацию о животном</li>
                <li>Передать здоровое животное (без признаков инфекционных заболеваний)</li>
                <li>Предоставить ветеринарный паспорт с отметками о вакцинации</li>
                <li>Сообщить об особенностях поведения и питания животного</li>
                <li>Оплатить услуги в установленные сроки</li>
                <li>Забрать животное в согласованный срок</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">5. Обязанности Исполнителя</h3>
              <p className="text-muted-foreground mb-2">
                5.1. Исполнитель обязуется:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Обеспечить надлежащий уход за животным</li>
                <li>Соблюдать санитарные нормы и правила содержания</li>
                <li>Обеспечить безопасность животного</li>
                <li>Оказать первую ветеринарную помощь при необходимости</li>
                <li>Информировать Заказчика о состоянии животного</li>
                <li>Предоставлять фото/видеоотчеты согласно тарифу</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">6. Ответственность сторон</h3>
              <p className="text-muted-foreground mb-2">
                6.1. Исполнитель не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Обострение хронических заболеваний животного</li>
                <li>Травмы, полученные животным во время игр</li>
                <li>Стресс животного от нахождения вне привычной среды</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                6.2. Заказчик несет ответственность за достоверность предоставленной информации о животном.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">7. Условия отмены бронирования</h3>
              <p className="text-muted-foreground mb-2">
                7.1. Бесплатная отмена возможна не позднее чем за 48 часов до заезда.
              </p>
              <p className="text-muted-foreground mb-2">
                7.2. При отмене менее чем за 48 часов — удерживается 50% предоплаты.
              </p>
              <p className="text-muted-foreground">
                7.3. При отмене в день заезда или неявке — предоплата не возвращается.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">8. Форс-мажор</h3>
              <p className="text-muted-foreground">
                Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств 
                по договору, если это неисполнение явилось следствием обстоятельств непреодолимой силы 
                (стихийные бедствия, военные действия, изменения законодательства и т.п.).
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">9. Срок действия договора</h3>
              <p className="text-muted-foreground">
                Договор вступает в силу с момента внесения предоплаты и действует до полного исполнения 
                обязательств сторонами.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">10. Реквизиты Исполнителя</h3>
              <p className="text-muted-foreground">
                Гостиница для кошек "Котоняня"<br />
                Адрес: г. Владивосток, ул. Светланская, 123<br />
                Email: info@kotnyanya.ru<br />
                Телефон: +7 924 430 39 90
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
