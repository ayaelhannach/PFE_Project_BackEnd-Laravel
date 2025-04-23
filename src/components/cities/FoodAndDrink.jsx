// import React from 'react';
// import { Link } from 'react-router-dom';

// // Importation des images
// import laVueImage from '../assets/LaVue.jpg';
// import cappuchinoImage from '../assets/Cappuchino.jpg';
// import saveurDePoissonImage from '../assets/RR-ICE.jpg';

// const foodAndDrinks = [
//   {
//     nom: 'Café Hafa',
//     image: laVueImage,
//     description: 'Café emblématique avec vue sur la mer.',
//     evaluation: 5,
//   },
//   {
//     nom: 'El Morocco Club',
//     image: cappuchinoImage,
//     description: 'Restaurant chic avec une cuisine raffinée.',
//     evaluation: 5,
//   },
//   {
//     nom: 'Restaurant Saveur de Poisson',
//     image: saveurDePoissonImage,
//     description: 'Cuisine traditionnelle de poissons et fruits de mer.',
//     evaluation: 5,
//   },
// ];

// const FoodAndDrink = () => (



//   <div className="bg-white py-10 px-5">
//     <h4 className="text-3xl font-bold text-[#0F3556] text-center mb-10">
//       Food and Drink
//     </h4>

//     <div className="bg-white py-10 px-5">
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {foodAndDrinks.map((lieu, index) => (
//           <Link key={index} to={`/food-and-drink/${lieu.nom.replace(/\s+/g, '-').toLowerCase()}`}>
//             <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-[#E6ECF2]">
//               <div className="relative h-52">
//                 <img
//                   src={lieu.image}
//                   alt={lieu.nom}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F3556]/40 to-transparent" />
//               </div>
//               <div className="p-5 text-center">
//                 <h3 className="text-xl font-bold text-[#0F3556]">{lieu.nom}</h3>
//                 <p className="text-[#0F3556] mt-2 text-sm">{lieu.description}</p>
//                 <div className="text-[#F8DDAC] text-2xl mt-3">
//                   {'⭐'.repeat(lieu.evaluation)}
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>

//     <div className="text-center mt-10">
//       <Link
//         to="/seemore3"
//         className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
//       >
//         Voir plus de restaurants
//       </Link>
//     </div>
//   </div>
// );

// export default FoodAndDrink;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FoodAndDrink = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 3;

//   const handleNext = () => {
//     setStartIndex((prev) => (prev + itemsPerPage) % restaurants.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - itemsPerPage + restaurants.length) % restaurants.length);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:8000/Restaurants/filtered')
//       .then(response => {
//         console.log("Restaurants récupérés :", response.data);
//         setRestaurants(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors du chargement des restaurants :', error);
//       });
//   }, []);

//   const displayedRestaurants = restaurants.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white py-20"> {/* Correction ici */}
//       <div className="w-full max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-[#0F3556] mb-4 text-center">Restaurants à Tanger</h2>
//         <p className="text-lg text-[#7B5E57] mb-14 text-center">
//           Découvrez notre sélection de restaurants filtrés selon vos préférences.
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
//             {displayedRestaurants.map((restaurant, index) => (
//               <div key={index} 
//               className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full">
//                   <img
//                     src={`http://localhost:8000${restaurant.image}`}
//                     alt={restaurant.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F3556]/80 to-transparent text-white px-5 py-6">
//                     <h3 className="text-xl font-bold">{restaurant.name}</h3>
//                     <p className="text-sm opacity-80">{restaurant.description}</p>
                    
                   
//                     </div>
//                   </div>
            
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
//           {Array.from({ length: Math.ceil(restaurants.length / itemsPerPage) }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setStartIndex(i * itemsPerPage)}
//               className={`w-4 h-4 rounded-full transition-transform duration-300 ${
//                 startIndex === i * itemsPerPage ? 'bg-[#0F3556] scale-125' : 'bg-[#BCAAA4]'
//               }`}
//             />
//           ))}
//         </div>

//         {/* <div className="text-center mt-10">
//           <Link
//             to="/seemore3"
//             className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
//           >
//             Voir plus de restaurants
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default FoodAndDrink;












import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodAndDrink = () => {
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
    <div className="bg-white py-20"> {/* Correction ici */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-[#0F3556] mb-4 text-center">Restaurants à Tanger</h2>
        <p className="text-lg text-[#7B5E57] mb-14 text-center">
          Découvrez notre sélection de restaurants filtrés selon vos préférences.
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
            {displayedRestaurants.map((restaurant, index) => (
              <div key={index} 
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-[26rem] w-full">
                  <img
                    src={`http://localhost:8000${restaurant.image}`}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F3556]/80 to-transparent text-white px-5 py-6">
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                    <p className="text-sm opacity-80">{restaurant.description}</p>
                    
                   
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
          {Array.from({ length: Math.ceil(restaurants.length / itemsPerPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * itemsPerPage)}
              className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                startIndex === i * itemsPerPage ? 'bg-[#0F3556] scale-125' : 'bg-[#BCAAA4]'
              }`}
            />
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <Link
            to="/seemore3"
            className="inline-block px-6 py-3 bg-[#0F3556] text-white text-sm font-medium rounded-full hover:bg-[#F8DDAC] hover:text-[#0F3556] transition-all duration-300"
          >
            Voir plus de restaurants
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FoodAndDrink;

