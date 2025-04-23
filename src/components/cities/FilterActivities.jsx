// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FilterActivities = () => {
//   const [places, setPlaces] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 3;

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + itemsPerPage) % places.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - itemsPerPage + places.length) % places.length);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/Activities/filtered')
//       .then(response => {
//         console.log("Lieux récupérés :", response.data);
//         setPlaces(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors du chargement des lieux :', error);
//       });
//   }, []);

//   const displayedPlaces = places.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white py-20">
//       <div className="w-full max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-[#0F3556] mb-4 text-center">Lieux à Tanger</h2>
//         <p className="text-lg text-[#7B5E57] mb-14 text-center">
//           Découvrez notre sélection de lieux emblématiques filtrés pour vous.
//         </p>

//         <div className="relative">
//           <button
//             onClick={handlePrev}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[-10deg]"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedPlaces.map((place, index) => (
//               <div key={index}
//                 className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full">
//                 <img
//                   src={`http://localhost:8000${place.image}`}
//                   alt={place.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F3556]/80 to-transparent text-white px-5 py-6">
//                   <h3 className="text-xl font-bold">{place.name}</h3>
//                   <p className="text-sm opacity-80">{place.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handleNext}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#0F3556]/90 hover:bg-[#0F3556] border border-[#D7CCC8] shadow-lg w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-[10deg]"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex justify-center mt-12 space-x-3">
//           {Array.from({ length: Math.ceil(places.length / itemsPerPage) }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setStartIndex(i * itemsPerPage)}
//               className={`w-4 h-4 rounded-full transition-transform duration-300 ${
//                 startIndex === i * itemsPerPage ? 'bg-[#0F3556] scale-125' : 'bg-[#BCAAA4]'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterActivities;










import React, { useEffect, useState } from 'react';
import axios from 'axios';

const COLORS = {
  beige: "#F8DDAC",
  navyBlue: "#1A365D",
  white: "#FFFFFF",
  black: "#000000",
  gold: "#D4AF37"
};

const FilterActivities = () => {
  const [activities, setActivities] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % activities.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - itemsPerPage + activities.length) % activities.length);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/Activities/filtered')
      .then(response => {
        console.log("Activités récupérées :", response.data);
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des activités :', error);
      });
  }, []);

  const displayedActivities = activities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: COLORS.white }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#0F3556]">{activities.length} Activités à découvrir</h2>

        <div className="space-y-8 mt-8">
          {displayedActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img
                  src={`http://localhost:8000${activity.image}`}
                  alt={activity.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F3556]">{activity.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{activity.description}</p>
                </div>

                <div className="mt-4 flex items-center">
                  <a
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4AA7D] hover:bg-[#C9A063] text-[#0F3556] font-semibold px-4 py-2 rounded-md shadow transition"
                  >
                    Show Website
                  </a>
                  <span className="text-sm text-gray-500 ml-4">
                    Cliquez pour visiter le site de l'activité
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
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

export default FilterActivities;
