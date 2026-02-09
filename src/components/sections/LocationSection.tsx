import { MapPin, Phone, Clock } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Наша гостиница во Владивостоке
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Современная кошачья гостиница в самом сердце Владивостока. Удобное расположение, 
              тихий район и профессиональный уход за вашими питомцами.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Владивосток, ул. Светланская, 123
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 924 430 39 90
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/bucket/e7477d05-20a5-4308-9e5c-5b3726368f2b.jpeg" 
                alt="Кошачья гостиница КОТ🐱НЯНЯ во Владивостоке"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};