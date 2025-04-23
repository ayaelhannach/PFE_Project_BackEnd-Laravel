import React from 'react';
import { useParams } from 'react-router-dom';

// Importation des images
import laVueImage from '../assets/LaVue.jpg';
import cappuchinoImage from '../assets/Cappuchino.jpg';
import rrIceImage from '../assets/RR-ICE.jpg';

const foodAndDrinks = [
  {
    nom: 'Café Hafa',
    image: laVueImage,
    description: 'Café emblématique avec vue sur la mer.',
    evaluation: 5,
  },
  {
    nom: 'El Morocco Club',
    image: cappuchinoImage,
    description: 'Restaurant chic avec une cuisine raffinée.',
    evaluation: 5,
  },
  {
    nom: 'Restaurant Saveur de Poisson',
    image: rrIceImage,
    description: 'Cuisine traditionnelle de poissons et fruits de mer.',
    evaluation: 5,
  },
];

const FoodDetails = () => {
  const { nom } = useParams();
  const lieu = foodAndDrinks.find(
    (l) => l.nom.replace(/\s+/g, '-').toLowerCase() === nom
  );

  if (!lieu) {
    return (
      <h2 className="text-center text-xl text-red-600 font-semibold mt-10">
        Endroit non trouvé !
      </h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4">{lieu.nom}</h1>
      <img
        src={lieu.image}
        alt={lieu.nom}
        className="w-[300px] mx-auto rounded-lg shadow-md mb-4 object-cover"
      />
      <p className="text-gray-700 mb-4">{lieu.description}</p>
      <div className="text-yellow-400 text-2xl">
        {'⭐'.repeat(lieu.evaluation)}
      </div>
    </div>
  );
};

export default FoodDetails;
