

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilterCars = () => {
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState('best');

  useEffect(() => {
    axios.get('http://localhost:8000/api/RentalCars/filtered')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des voitures :", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#0F3556]">{cars.length} Voitures à Louer</h2>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Trier par :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0F3556] text-white text-sm px-4 py-2 rounded-lg"
            >
              <option value="best">Best Value</option>
              <option value="top">Top Rated</option>
              <option value="price">Lowest Price</option>
            </select>
          </div>
        </div>

        <div className="space-y-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img
                  src={`http://localhost:8000${car.image}`}
                  alt={car.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3556]">{car.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{car.description}</p>
                  <p className="text-xs text-gray-500 mt-1">🚗 {car.views} vues</p>
                </div>

                <div className="mt-4">
                  <a
                    href={car.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-[#D4AA7D] hover:bg-[#C9A063] text-[#0F3556] font-semibold px-4 py-2 rounded-md shadow transition"
                  >
                    Show Website
                  </a>
                  <span className="text-sm text-gray-500 ml-4">
                    Cliquez pour visiter le site de l'agence
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FilterCars;

