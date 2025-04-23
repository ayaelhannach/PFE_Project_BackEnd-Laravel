// import React from 'react';
// import { Link } from 'react-router-dom';

// // Importation des images
// import leMirageImage from '../assets/le-mirage.jpg';
// import hiltonImage from '../assets/hilton.jpg';
// import nordPinusImage from '../assets/nord-pinus.jpg';

// const hotels = [
//   {
//     nom: 'Le Mirage',
//     image: leMirageImage,
//     description: 'Hôtel luxueux avec vue sur la mer.',
//     evaluation: 5,
//   },
//   {
//     nom: 'Hilton',
//     image: hiltonImage,
//     description: 'Hôtel moderne en plein centre-ville.',
//     evaluation: 5,
//   },
//   {
//     nom: 'Hôtel Nord-Pinus',
//     image: nordPinusImage,
//     description: 'Hôtel avec une ambiance unique.',
//     evaluation: 5,
//   },
// ];

// const PlacesToStay = () => (
//   <div className="bg-white py-10 px-5">
//     <h4 className="text-3xl font-bold text-[#0F3556] text-center mb-10">
//       Où séjourner à Tanger ?
//     </h4>

//     <div className="bg-white py-10 px-5">
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {hotels.map((hotel, index) => (
//           <Link key={index} to={`/hotel/${encodeURIComponent(hotel.nom)}`}>
//             <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#E6ECF2]">
//               <div className="relative h-52">
//                 <img
//                   src={hotel.image}
//                   alt={hotel.nom}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F3556]/40 to-transparent" />
//               </div>
//               <div className="p-5 text-center">
//                 <h3 className="text-xl font-bold text-[#0F3556]">{hotel.nom}</h3>
//                 <p className="text-[#0F3556] mt-2 text-sm">{hotel.description}</p>
//                 <div className="text-[#F8DDAC] text-2xl mt-3">
//                   {'⭐'.repeat(hotel.evaluation)}
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>

//     <div className="text-center mt-10">
//       <Link
//         to="/seemore2"
//         className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
//       >
//         Voir plus d'hôtels
//       </Link>
//     </div>
//   </div>
// );

// export default PlacesToStay;












// src/components/FilteredServices.jsx

// 















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
