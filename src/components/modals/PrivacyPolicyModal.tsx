import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Политика конфиденциальности</DialogTitle>
          <DialogDescription>
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h3 className="font-bold text-lg mb-3">1. Общие положения</h3>
              <p className="text-muted-foreground">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
                которую гостиница для кошек "Котоняня" (далее — Оператор) может получить о Пользователе во время использования 
                сайта и оказания услуг по размещению домашних животных.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">2. Собираемая информация</h3>
              <p className="text-muted-foreground mb-2">
                Оператор собирает и обрабатывает следующие персональные данные:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес проживания</li>
                <li>Информация о домашнем животном (кличка, возраст, особенности)</li>
                <li>Данные о посещениях сайта и действиях пользователя</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">3. Цели обработки персональных данных</h3>
              <p className="text-muted-foreground mb-2">
                Персональные данные используются для:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Предоставления услуг по размещению домашних животных</li>
                <li>Связи с клиентами для уточнения деталей бронирования</li>
                <li>Отправки информационных сообщений и фото/видеоотчетов</li>
                <li>Улучшения качества обслуживания</li>
                <li>Проведения маркетинговых исследований</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">4. Защита персональных данных</h3>
              <p className="text-muted-foreground">
                Оператор принимает все необходимые меры для защиты персональных данных от несанкционированного доступа, 
                изменения, раскрытия или уничтожения. Доступ к персональным данным имеют только уполномоченные сотрудники, 
                которые обязаны соблюдать конфиденциальность.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">5. Права субъекта персональных данных</h3>
              <p className="text-muted-foreground mb-2">
                Вы имеете право:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Получать информацию о обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Оператора в уполномоченном органе</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">6. Файлы cookie</h3>
              <p className="text-muted-foreground">
                Сайт использует файлы cookie для улучшения работы и анализа посещаемости. 
                Вы можете настроить свой браузер для отказа от cookie, однако это может ограничить 
                функциональность сайта.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">7. Изменение Политики</h3>
              <p className="text-muted-foreground">
                Оператор имеет право вносить изменения в настоящую Политику. Новая редакция вступает в силу 
                с момента размещения на сайте. Продолжение использования сайта после внесения изменений означает 
                согласие с новой редакцией Политики.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-3">8. Контактная информация</h3>
              <p className="text-muted-foreground">
                По вопросам, связанным с обработкой персональных данных, вы можете обратиться:<br />
                Email: info@kotnyanya.ru<br />
                Телефон: +7 924 430 39 90<br />
                Адрес: г. Владивосток, ул. Светланская, 123
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
