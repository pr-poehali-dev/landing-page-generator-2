import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "Анна Ветрова",
      role: "Главный ветеринар",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/c557501a-e87d-4744-813b-d8ff02ffdc95.jpg",
      description: "15 лет опыта, специалист по кошачьему здоровью"
    },
    {
      name: "Мария Грумова",
      role: "Профессиональный грумер",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/7f170553-f820-47c6-bbd2-9d69c09fc3a0.jpg",
      description: "Мастер груминга и спа-процедур для котиков"
    },
    {
      name: "Дмитрий Котов",
      role: "Кот-психолог и смотритель",
      photo: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/639fee94-3540-440a-a522-a3687d0b4213.jpg",
      description: "Эксперт по поведению кошек и их социализации"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Команда профессионалов 👨‍⚕️
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Опытные специалисты с любовью заботятся о каждом пушистом госте
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
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
