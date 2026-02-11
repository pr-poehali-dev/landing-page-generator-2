import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PersonalDataConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PersonalDataConsentModal = ({ open, onOpenChange }: PersonalDataConsentModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Согласие на обработку персональных данных
          </DialogTitle>
          <DialogDescription>
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <p className="text-muted-foreground mb-4">
                Я, заполняя форму бронирования на сайте гостиницы для кошек "Котоняня", в соответствии 
                с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», 
                свободно, своей волей и в своем интересе даю согласие на обработку моих персональных данных.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">1. Персональные данные, на обработку которых дается согласие</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес проживания</li>
                <li>Данные о домашнем животном (кличка, порода, возраст, особенности здоровья и поведения)</li>
                <li>Фотографии домашнего животного</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">2. Цели обработки персональных данных</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Предоставление услуг по размещению и уходу за домашним животным</li>
                <li>Связь с клиентом для подтверждения бронирования и уточнения деталей</li>
                <li>Отправка фото/видеоотчетов о пребывании животного</li>
                <li>Информирование о состоянии здоровья животного</li>
                <li>Выполнение обязательств по договору оказания услуг</li>
                <li>Отправка информационных и рекламных сообщений (с возможностью отказа)</li>
                <li>Улучшение качества обслуживания</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">3. Действия с персональными данными</h3>
              <p className="text-muted-foreground mb-2">
                Оператор имеет право осуществлять следующие действия с персональными данными:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Сбор</li>
                <li>Запись</li>
                <li>Систематизация</li>
                <li>Накопление</li>
                <li>Хранение</li>
                <li>Уточнение (обновление, изменение)</li>
                <li>Извлечение</li>
                <li>Использование</li>
                <li>Передача (распространение, предоставление, доступ)</li>
                <li>Блокирование</li>
                <li>Удаление</li>
                <li>Уничтожение</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">4. Способы обработки персональных данных</h3>
              <p className="text-muted-foreground">
                Обработка персональных данных может осуществляться как с использованием средств автоматизации, 
                так и без использования таких средств (неавтоматизированная обработка).
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">5. Передача персональных данных третьим лицам</h3>
              <p className="text-muted-foreground mb-2">
                Оператор имеет право передавать персональные данные третьим лицам в следующих случаях:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Ветеринарным клиникам для оказания медицинской помощи животному</li>
                <li>Службам доставки для транспортировки животного</li>
                <li>По требованию уполномоченных государственных органов</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">6. Срок обработки персональных данных</h3>
              <p className="text-muted-foreground">
                Согласие действует с момента предоставления персональных данных и в течение 5 (пяти) лет после 
                последнего обращения за услугами. Согласие может быть отозвано субъектом персональных данных 
                путем направления письменного заявления на адрес Оператора.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">7. Права субъекта персональных данных</h3>
              <p className="text-muted-foreground mb-2">
                Я подтверждаю, что ознакомлен(а) с правами субъекта персональных данных, в том числе правом:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Получать информацию о обработке моих персональных данных</li>
                <li>Требовать уточнения, блокирования или удаления персональных данных</li>
                <li>Отзывать данное согласие</li>
                <li>Обжаловать действия Оператора в уполномоченном органе по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">8. Безопасность персональных данных</h3>
              <p className="text-muted-foreground">
                Оператор обязуется принимать необходимые правовые, организационные и технические меры для защиты 
                персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, 
                блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">9. Отзыв согласия</h3>
              <p className="text-muted-foreground">
                Для отзыва согласия на обработку персональных данных необходимо направить письменное заявление 
                на адрес: г. Владивосток, ул. Светланская, 123, или на email: info@kotnyanya.ru.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">10. Контактная информация</h3>
              <p className="text-muted-foreground">
                Оператор персональных данных:<br />
                Гостиница для кошек "Котоняня"<br />
                Адрес: г. Владивосток, ул. Светланская, 123<br />
                Email: info@kotnyanya.ru<br />
                Телефон: +7 924 430 39 90
              </p>
            </section>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
              <p className="text-sm font-semibold text-center">
                Заполняя форму бронирования, я подтверждаю, что ознакомлен(а) с настоящим согласием 
                и даю согласие на обработку моих персональных данных на указанных условиях.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
