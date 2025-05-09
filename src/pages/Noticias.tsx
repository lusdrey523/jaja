import React from 'react';
import OfficialNewsCard from "../components/OfficialNewsCard";

const Noticias = () => {
  const fakeNews = [
    {
      id: 1,
      title: "La Fusión lanza su nueva hamburguesa secreta",
      date: "2025-05-08",
      image: "https://source.unsplash.com/random/800x600?burger",
      description: "Descubre la nueva creación legendaria de La Fusión que mezcla sabores únicos en una experiencia brutal."
    },
    {
      id: 2,
      title: "Promo especial de fin de semana",
      date: "2025-05-07",
      image: "https://source.unsplash.com/random/800x600?food",
      description: "Este fin de semana, aprovecha nuestras promociones exclusivas solo en el local principal."
    }
  ];

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Últimas Noticias</h1>
      {fakeNews.map((news) => (
        <OfficialNewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default Noticias;
