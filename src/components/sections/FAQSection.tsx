import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
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

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          Частые вопросы
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="border-2 rounded-lg px-6 hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pt-2">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
