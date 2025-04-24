


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlacesToStay = () => {
  //1
  const [services, setServices] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const imagesToShow = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + imagesToShow) % services.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - imagesToShow + services.length) % services.length);
  };


  //2

  useEffect(() => {
    axios.get('http://localhost:8000/api/hotels/filtered')
      .then(response => {
        console.log("Services récupérés :", response.data); // Pour debug
        setServices(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des services :', error);
      });
  }, []);





  const displayedServices = services.slice(startIndex, startIndex + imagesToShow);

  return (
    <div className="min-h-screen bg-white flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#0F3556] mb-4">Hôtels à Tanger</h2>
        <p className="text-lg text-[#7B5E57] mb-14">
          Découvrez notre sélection d'hôtels à Tanger filtrés selon vos préférences.
        </p>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[-10deg]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full"
              >
                <img
                  src={`http://localhost:8000${service.image}`}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F3556]/80 to-transparent text-white px-5 py-6">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-sm opacity-80">{service.description}</p>
                 
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[10deg]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: Math.ceil(services.length / imagesToShow) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * imagesToShow)}
              className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                startIndex === i * imagesToShow ? 'bg-[#0F3556] scale-125' : 'bg-[#BCAAA4]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacesToStay;
