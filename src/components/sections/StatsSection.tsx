import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    { year: 2022, cats: 120, rating: "4.2★" },
    { year: 2023, cats: 350, rating: "4.6★" },
    { year: 2024, cats: 650, rating: "4.9★" },
    { year: 2025, cats: "800+", rating: "4.9★", cert: "Pet Friendly ✅" }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Статистика доверия
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          800+ семей доверили нам своих питомцев. Динамика роста 540% за 3 года!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <Card 
              key={idx}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.year}</div>
                <div className="text-2xl font-semibold mb-1">{stat.cats}</div>
                <div className="text-sm text-muted-foreground mb-1">кошек обслужено</div>
                <div className="text-lg font-semibold text-accent">{stat.rating}</div>
                {stat.cert && (
                  <div className="text-xs mt-2 text-green-600 font-semibold">{stat.cert}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
