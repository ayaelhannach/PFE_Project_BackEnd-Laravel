import React from 'react';
import { useParams } from 'react-router-dom';

// Importation des images
import leMirageImage from '../assets/le-mirage.jpg';
import hiltonImage from '../assets/hilton.jpg';
import nordPinusImage from '../assets/nord-pinus.jpg';

const hotels = [
  {
    nom: 'Le Mirage',
    image: leMirageImage,
    description: 'Hôtel luxueux avec vue sur la mer.',
    evaluation: 5,
  },
  {
    nom: 'Hilton',
    image: hiltonImage,
    description: 'Hôtel moderne en plein centre-ville.',
    evaluation: 5,
  },
  {
    nom: 'Hôtel Nord-Pinus',
    image: nordPinusImage,
    description: 'Hôtel avec une ambiance unique.',
    evaluation: 5,
  },
];

const HotelDetails = () => {
  const { nom } = useParams();
  const hotel = hotels.find(h => h.nom.replace(/\s+/g, '-').toLowerCase() === nom);

  if (!hotel) {
    return <h2 className="text-xl font-semibold text-center">Hôtel non trouvé !</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{hotel.nom}</h1>
      <img src={hotel.image} alt={hotel.nom} className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg" />
      <p className="text-lg text-center mb-4">{hotel.description}</p>
      <div className="text-center text-yellow-500 text-2xl">
        {'⭐'.repeat(hotel.evaluation)}
      </div>
    </div>
  );
};

export default HotelDetails;
