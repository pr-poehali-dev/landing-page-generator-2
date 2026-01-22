export const GallerySection = () => {
  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/bd502c4a-abe5-47f8-94ef-fa9343ad1e1a.jpg",
      alt: "Рыжий котик играет с игрушками"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/be3412d8-d84c-458f-a67d-b39a10c8b861.jpg",
      alt: "Серый котик отдыхает на мягкой лежанке"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/15c0aab2-2952-4f72-9ab3-1d1bcadd69c1.jpg",
      alt: "Белый котик кушает премиум корм"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/035c8c87-a03e-4147-a04b-d16be02b1f93.jpg",
      alt: "Котики играют вместе на игровых конструкциях"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/1efe21b4-e23b-4f06-b499-df48d629a168.jpg",
      alt: "Черный котик на груминге"
    },
    {
      url: "https://cdn.poehali.dev/projects/ca3db9f9-0ce2-4601-97bd-22400ea91d8a/files/0c5526c5-b6d9-4f74-a96f-e3b3ec6c105c.jpg",
      alt: "Трехцветный котик мирно спит у окна"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Галерея счастливых котиков 😻
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Наши пушистые гости наслаждаются комфортом, играми и заботой
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
