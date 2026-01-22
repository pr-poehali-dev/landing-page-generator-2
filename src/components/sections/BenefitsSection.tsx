import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CatCameraIcon, CatDoctorIcon, CatPlayIcon, CatSpaIcon, CatReportIcon, CatComfortIcon } from "@/components/BenefitCatIcons";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: CatCameraIcon,
      title: "Видеонаблюдение 24/7",
      desc: "4K камеры в каждой комнате с защищённым приложением"
    },
    {
      icon: CatDoctorIcon,
      title: "Ветеринар 24/7",
      desc: "Ежедневный осмотр и премиум корм включены"
    },
    {
      icon: CatPlayIcon,
      title: "Игровые комнаты",
      desc: "Когтеточки, конструкции, игрушки, социализация"
    },
    {
      icon: CatSpaIcon,
      title: "Груминг и спа",
      desc: "Чистка, стрижка, массаж, парфюмирование"
    },
    {
      icon: CatReportIcon,
      title: "Ежедневные отчёты",
      desc: "Фото, видео, письма о питании и сне"
    },
    {
      icon: CatComfortIcon,
      title: "Простота и комфорт",
      desc: "Бронирование за 30 сек, доставка включена"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          6 преимуществ Кот🐱няни
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {benefit.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};