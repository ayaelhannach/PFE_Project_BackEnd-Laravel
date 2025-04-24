

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const COLORS = {
  beige: "#F8DDAC",
  navyBlue: "#1A365D",
  white: "#FFFFFF",
  black: "#000000",
  gold: "#D4AF37"
};

const FilterRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % restaurants.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - itemsPerPage + restaurants.length) % restaurants.length);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/Restaurants/filtered')
      .then(response => {
        console.log("Restaurants récupérés :", response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des restaurants :', error);
      });
  }, []);

  const displayedRestaurants = restaurants.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: COLORS.white }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#0F3556]">{restaurants.length} Restaurants à découvrir</h2>
        
        <div className="space-y-8 mt-8">
          {displayedRestaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img
                  src={`http://localhost:8000${restaurant.image}`}
                  alt={restaurant.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3556]">{restaurant.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{restaurant.description}</p>
                  <p className="text-xs text-gray-500 mt-1">🍴 {restaurant.views} vues</p>
                </div>

                <div className="mt-4 flex items-center">
                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4AA7D] hover:bg-[#C9A063] text-[#0F3556] font-semibold px-4 py-2 rounded-md shadow transition"
                  >
                    Show Website
                  </a>
                  <span className="text-sm text-gray-500 ml-4">
                    Cliquez pour visiter le site du restaurant
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center mt-12 space-x-3">
          <button
            onClick={handlePrev}
            className="bg-white hover:bg-[#f5f5f5] border border-[#ccc] shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A365D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-white hover:bg-[#f5f5f5] border border-[#ccc] shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A365D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterRestaurants;
