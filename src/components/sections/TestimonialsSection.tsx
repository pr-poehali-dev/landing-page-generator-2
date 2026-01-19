import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
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

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          Отзывы наших клиентов
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="text-4xl mb-4 opacity-50">💬</div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm text-muted-foreground font-semibold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
