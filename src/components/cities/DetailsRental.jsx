import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Importation des images
import yoursImage from '../assets/yours.jpg';
import caliRentalImage from '../assets/CaliRental.jpg';
import kefaloniaImage from '../assets/Kefalonia.jpg';

const rentalCars = [
  {
    nom: 'Toyota Yaris',
    image: yoursImage,
    description: 'Voiture compacte et économique.',
    prix: '30€/jour',
    carburant: 'Essence',
    transmission: 'Automatique',
    annee: 2020,
    moteur: '1.2L',
    places: 5,
    couleur: 'Blanc',
  },
  {
    nom: 'Mercedes-Benz E-Class',
    image: caliRentalImage,
    description: 'Voiture de luxe avec toutes les options.',
    prix: '80€/jour',
    carburant: 'Diesel',
    transmission: 'Automatique',
    annee: 2022,
    moteur: '2.0L',
    places: 5,
    couleur: 'Noir',
  },
  {
    nom: 'Renault Duster',
    image: kefaloniaImage,
    description: 'SUV robuste et spacieux.',
    prix: '50€/jour',
    carburant: 'Diesel',
    transmission: 'Manuelle',
    annee: 2019,
    moteur: '1.5L',
    places: 5,
    couleur: 'Gris',
  },
];

const DetailsRental = () => {
  const { nom } = useParams();
  const navigate = useNavigate(); // Fonction de navigation
  const car = rentalCars.find(
    (c) => c.nom.replace(/\s+/g, '-').toLowerCase() === nom
  );

  if (!car) {
    return (
      <h2 className="text-center text-2xl text-red-600 font-semibold mt-10">
        Voiture non trouvée !
      </h2>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg mt-8 font-sans">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#0F3556]">
          {car.nom}
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start shadow-md hover:shadow-xl transition-all duration-300">
          {/* Image */}
          <img
            src={car.image}
            alt={car.nom}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />

          {/* Infos */}
          <div className="flex-1 space-y-4 p-6">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Description :</span>{' '}
              {car.description}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Prix :</span> {car.prix}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Carburant :</span>{' '}
              {car.carburant}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Transmission :</span>{' '}
              {car.transmission}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Année :</span> {car.annee}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Moteur :</span> {car.moteur}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Places :</span> {car.places}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#0F3556]">Couleur :</span> {car.couleur}
            </p>
          </div>
        </div>

        {/* Button de réservation */}
        <div className="mt-8 text-center">
          <button className="bg-[#0F3556] text-white text-lg font-semibold py-3 px-6 rounded-md transform transition-all hover:bg-[#0C2D3E] hover:scale-105 hover:shadow-xl">
            Réserver maintenant
          </button>
        </div>

        {/* Bouton Retour */}
      </div>
      <div className="mt-8 text-center">
        <button
          className="bg-white text-[#0F3556] text-lg font-semibold py-3 px-6 rounded-md transform transition-all hover:bg-[#0F3556] hover:text-white hover:scale-105 hover:shadow-xl"
          onClick={() => navigate('/components/pageD/Home')} // Naviguer vers la page Home
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default DetailsRental;
