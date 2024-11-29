import React from 'react';

const offersData = [
  {
    id: 1,
    destination: 'Paris',
    price: 'R$ 3.000',
    description: 'Uma viagem romântica.',
    image: 'https://media.istockphoto.com/id/1345426734/pt/foto/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=wbF1PgvhU0FFwNac1S5123T3Aac05N0MJQzGQvRSFro=',
  },
  {
    id: 2,
    destination: 'Nova York',
    price: 'R$ 4.500',
    description: 'Explore a cidade que nunca dorme.',
    image: 'https://forbes.com.br/wp-content/uploads/2019/09/abre_lifestyle_Nova-York_200919_GettyImages.jpg',
  },
  {
    id: 3,
    destination: 'Tóquio',
    price: 'R$ 5.200',
    description: 'Cultura e tecnologia em um só lugar.',
    image: 'https://img.freepik.com/fotos-gratis/vista-aerea-da-paisagem-urbana-de-toquio-com-a-montanha-fuji-no-japao_335224-148.jpg',
  },
];

const Offers = () => {
  return (
    <section className="offers">
      <h2>Ofertas de Viagens</h2>
      <div className="offers-list">
        {offersData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={`Imagem de ${offer.destination}`} className="offer-image" />
            <h3>{offer.destination}</h3>
            <p>{offer.description}</p>
            <p className="price">{offer.price}</p>
            <button aria-label={`Reservar viagem para ${offer.destination}`}>
              Reservar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
