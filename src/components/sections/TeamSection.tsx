import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "Анна Ветрова",
      role: "Главный ветеринар",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/c8ee1052-f012-49e2-bbfd-98fa6fda6fae.jpg",
      description: "15 лет опыта, специалист по кошачьему здоровью"
    },
    {
      name: "Мария Грумова",
      role: "Профессиональный грумер",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/a1318300-5d43-4305-89e9-d1cb9f3cab66.jpg",
      description: "Мастер груминга и спа-процедур для котиков"
    },
    {
      name: "Дмитрий Котов",
      role: "Кот-психолог и смотритель",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/b27bd120-98a6-4285-87c1-13ad618a8dab.jpg",
      description: "Эксперт по поведению кошек и их социализации"
    },
    {
      name: "Олеся Черешнева",
      role: "Котоняня",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/453f8830-e560-41d9-a453-14a428d1c464.jpg",
      description: "Заботливый уход и внимание каждому питомцу"
    },
    {
      name: "Наталья Никонова",
      role: "Котоняня",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/a7dbad96-fc46-474a-8cf5-40b75abf53b6.jpg",
      description: "Опытный специалист по уходу за кошками"
    },
    {
      name: "Мария Князян",
      role: "Администратор",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/af277dbf-7da8-4f3d-bf18-86751077ebe2.jpg",
      description: "Всегда на связи и поможет с бронированием"
    },
    {
      name: "Вероника Лукина",
      role: "Менеджер",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/66cc3fac-47a8-41a0-80ba-166d8db2fedc.jpg",
      description: "Организует комфортное пребывание вашего питомца"
    },
    {
      name: "Владислав Саенко",
      role: "Ветеринар и смотритель",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/e9fedca7-82c2-46bf-92d0-e8576c3f9f03.jpg",
      description: "Следит за здоровьем и безопасностью котиков"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Наша команда 👨‍⚕️
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Опытные специалисты с любовью заботятся о каждом пушистом госте
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Card 
              key={idx}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};