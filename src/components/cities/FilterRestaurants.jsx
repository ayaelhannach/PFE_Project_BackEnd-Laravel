// // import React, { useState, useEffect } from "react";
// // import restaurant1 from "../assets/restaurant1.jpg";
// // import restaurant2 from "../assets/restaurant2.jpg";
// // import restaurant3 from "../assets/restaurant3.jpg";
// // import restaurant4 from "../assets/restaurant4.jpg";
// // import restaurant5 from "../assets/restaurant5.jpg";
// // import restaurant6 from "../assets/restaurant6.jpg";
// // import restaurant7 from "../assets/restaurant7.jpg";
// // import restaurant8 from "../assets/restaurant8.jpg";
// // import restaurant9 from "../assets/restaurant9.jpg";
// // import restaurant10 from "../assets/restaurant10.jpg";
// // import restaurant11 from "../assets/restaurant11.jpg";
// // import restaurant12 from "../assets/restaurant12.jpg";
// // import restaurant13 from "../assets/restaurant13.jpg";
// // import restaurant14 from "../assets/restaurant14.jpg";
// // import restaurant15 from "../assets/restaurant15.jpg";
// // import restaurant16 from "../assets/restaurant16.jpg";
// // import restaurant17 from "../assets/restaurant17.jpg";
// // import restaurant18 from "../assets/restaurant18.jpg";
// // import restaurant19 from "../assets/restaurant19.jpg";
// // import restaurant20 from "../assets/restaurant20.jpg";
// // import restaurant21 from "../assets/restaurant21.jpg";
// // import restaurant22 from "../assets/restaurant22.jpg";
// // import restaurant23 from "../assets/restaurant23.jpg";
// // import restaurant24 from "../assets/restaurant24.jpg";
// // import restaurant25 from "../assets/restaurant25.jpg";
// // import restaurant26 from "../assets/restaurant26.jpg";
// // import restaurant27 from "../assets/restaurant27.jpg";
// // import restaurant28 from "../assets/restaurant28.jpg";
// // import restaurant29 from "../assets/restaurant29.jpg";
// // import restaurant30 from "../assets/restaurant30.jpg";


// // const COLORS = {
// //   beige: "#F8DDAC",
// //   navyBlue: "#1A365D",
// //   white: "#FFFFFF",
// //   black: "#000000",
// //   gold: "#D4AF37"
// // };

// // const FilterRestaurants = () => {
// //   // Données des restaurants
// //   const restaurantsData = [
// //     {
// //       id: 1,
// //       name: "Le Saveur Tangérois",
// //       address: "Avenue Pasteur, Tanger",
// //       phone: "+212 6 12 34 56 78",
// //       image: restaurant1,
// //       priceRange: "$$$",
// //       cuisine: "Marocaine",
// //       rating: "4.8",
// //       speciality: "Tajine",
// //       value: "best"
// //     },
// //     {
// //       id: 2,
// //       name: "La Vue",
// //       address: "Boulevard Mohammed VI, Tanger",
// //       phone: "+212 6 98 76 54 32",
// //       image: restaurant2,
// //       priceRange: "$$$$",
// //       cuisine: "Fusion",
// //       rating: "4.9",
// //       speciality: "Poisson frais",
// //       value: "best"
// //     },
// //     {
// //       id: 3,
// //       name: "Café Hafa",
// //       address: "Route de Marshan, Tanger",
// //       phone: "+212 5 39 45 78 90",
// //       image: restaurant3,
// //       priceRange: "$",
// //       cuisine: "Café",
// //       rating: "4.7",
// //       speciality: "Thé à la menthe",
// //       value: "best"
// //     },
// //     {
// //       id: 4,
// //       name: "Restaurant El Morocco Club",
// //       address: "Rue de la Liberté, Tanger",
// //       phone: "+212 6 22 33 44 55",
// //       image: restaurant4,
// //       priceRange: "$$$",
// //       cuisine: "Marocaine",
// //       rating: "4.5",
// //       speciality: "Couscous",
// //       value: "good"
// //     },
// //     {
// //       id: 5,
// //       name: "Anna e Paolo",
// //       address: "Rue Prince Héritier, Tanger",
// //       phone: "+212 6 55 44 33 22",
// //       image: restaurant5,
// //       priceRange: "$$",
// //       cuisine: "Italienne",
// //       rating: "4.6",
// //       speciality: "Pasta",
// //       value: "good"
// //     },
// //     {
// //       id: 6,
// //       name: "Le Petit Paris",
// //       address: "Avenue d'Espagne, Tanger",
// //       phone: "+212 6 88 99 77 66",
// //       image: restaurant6,
// //       priceRange: "$$",
// //       cuisine: "Française",
// //       rating: "4.4",
// //       speciality: "Steak frites",
// //       value: "good"
// //     },
// //     {
// //       id: 7,
// //       name: "Alhambra Café",
// //       address: "Place du Grand Socco, Tanger",
// //       phone: "+212 6 45 67 89 01",
// //       image: restaurant7,
// //       priceRange: "$",
// //       cuisine: "Café",
// //       rating: "4.2",
// //       speciality: "Petits déjeuners",
// //       value: "lessGood"
// //     },
// //     {
// //       id: 8,
// //       name: "Restaurant Rif Kebdani",
// //       address: "Rue de Fès, Tanger",
// //       phone: "+212 5 39 12 34 56",
// //       image: restaurant8,
// //       priceRange: "$$",
// //       cuisine: "Marocaine",
// //       rating: "4.3",
// //       speciality: "Brochettes",
// //       value: "lessGood"
// //     },
// //     {
// //       id: 9,
// //       name: "La Table du Détroit",
// //       address: "Boulevard Mohammed VI, Tanger",
// //       phone: "+212 6 98 76 54 32",
// //       image: restaurant9,
// //       priceRange: "$$$$",
// //       cuisine: "Fusion",
// //       rating: "4.9",
// //       speciality: "Poisson frais",
// //       value: "best"
// //     },
// //     {
// //       id: 10,
// //       name: "Casa Medina",
// //       address: "Rue Ibn Khaldoun, Tanger",
// //       phone: "+212 6 11 22 33 44",
// //       image: restaurant10,
// //       priceRange: "$$$",
// //       cuisine: "Marocaine",
// //       rating: "4.6",
// //       speciality: "Pastilla",
// //       value: "best"
// //     },
// //     {
// //       id: 11,
// //       name: "Fusion Zest",
// //       address: "Avenue Moulay Ismail, Tanger",
// //       phone: "+212 6 77 88 99 00",
// //       image: restaurant11,
// //       priceRange: "$$$$",
// //       cuisine: "Fusion",
// //       rating: "4.8",
// //       speciality: "Tartare de thon",
// //       value: "best"
// //     },
// //     {
// //       id: 12,
// //       name: "Bella Napoli",
// //       address: "Rue de Rome, Tanger",
// //       phone: "+212 6 66 55 44 33",
// //       image: restaurant12,
// //       priceRange: "$$",
// //       cuisine: "Italienne",
// //       rating: "4.4",
// //       speciality: "Pizza Napolitaine",
// //       value: "good"
// //     },
// //     {
// //       id: 13,
// //       name: "Le Parisien",
// //       address: "Rue de Belgique, Tanger",
// //       phone: "+212 6 77 66 55 44",
// //       image: restaurant13,
// //       priceRange: "$$$",
// //       cuisine: "Française",
// //       rating: "4.3",
// //       speciality: "Canard confit",
// //       value: "good"
// //     },
// //     {
// //       id: 14,
// //       name: "Café Ziryab",
// //       address: "Place des Nations, Tanger",
// //       phone: "+212 6 88 77 66 55",
// //       image: restaurant14,
// //       priceRange: "$",
// //       cuisine: "Café",
// //       rating: "4.1",
// //       speciality: "Viennoiseries",
// //       value: "lessGood"
// //     },
// //     {
// //       id: 15,
// //       name: "Dar Zitoun",
// //       address: "Rue d’Espagne, Tanger",
// //       phone: "+212 6 99 88 77 66",
// //       image: restaurant15,
// //       priceRange: "$$$",
// //       cuisine: "Marocaine",
// //       rating: "4.7",
// //       speciality: "Harira",
// //       value: "best"
// //     },
// //     {
// //       id: 16,
// //       name: "Fusion Botanica",
// //       address: "Boulevard Anfa, Tanger",
// //       phone: "+212 6 33 22 11 00",
// //       image: restaurant16,
// //       priceRange: "$$$$",
// //       cuisine: "Fusion",
// //       rating: "4.5",
// //       speciality: "Légumes grillés",
// //       value: "good"
// //     },
// //     {
// //       id: 17,
// //       name: "Trattoria Del Sole",
// //       address: "Rue Venezia, Tanger",
// //       phone: "+212 6 22 33 44 55",
// //       image: restaurant17,
// //       priceRange: "$$",
// //       cuisine: "Italienne",
// //       rating: "4.6",
// //       speciality: "Risotto",
// //       value: "good"
// //     },
// //     {
// //       id: 18,
// //       name: "Bistro Montmartre",
// //       address: "Rue Paris, Tanger",
// //       phone: "+212 6 44 55 66 77",
// //       image: restaurant18,
// //       priceRange: "$$",
// //       cuisine: "Française",
// //       rating: "4.3",
// //       speciality: "Soupe à l'oignon",
// //       value: "good"
// //     },
// //     
// //     
    
// //   ];

// //   // États
// //   const [restaurants, setRestaurants] = useState(restaurantsData);
// //   const [sortValue, setSortValue] = useState("best");
// //   const [selectedCuisine, setSelectedCuisine] = useState("all");
// //   const [selectedPrice, setSelectedPrice] = useState("all");
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   // Obtenir les types de cuisine uniques
// //   const cuisines = ["all", ...new Set(restaurantsData.map(restaurant => restaurant.cuisine))];
  
// //   // Obtenir les gammes de prix uniques
// //   const prices = ["all", ...new Set(restaurantsData.map(restaurant => restaurant.priceRange))];

// //   // Effet pour filtrer et trier les restaurants
// //   useEffect(() => {
// //     let filteredRestaurants = [...restaurantsData];
    
// //     // Filtrer par cuisine
// //     if (selectedCuisine !== "all") {
// //       filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.cuisine === selectedCuisine);
// //     }
    
// //     // Filtrer par prix
// //     if (selectedPrice !== "all") {
// //       filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.priceRange === selectedPrice);
// //     }
    
// //     // Trier selon la valeur
// //     if (sortValue === "best") {
// //       filteredRestaurants = filteredRestaurants.sort((a, b) => {
// //         if (a.value === "best" && b.value !== "best") return -1;
// //         if (a.value !== "best" && b.value === "best") return 1;
// //         return parseFloat(b.rating) - parseFloat(a.rating);
// //       });
// //     } else if (sortValue === "good") {
// //       filteredRestaurants = filteredRestaurants.sort((a, b) => {
// //         if (a.value === "good" && b.value !== "good") return -1;
// //         if (a.value !== "good" && b.value === "good") return 1;
// //         return parseFloat(b.rating) - parseFloat(a.rating);
// //       });
// //     } else if (sortValue === "lessGood") {
// //       filteredRestaurants = filteredRestaurants.sort((a, b) => {
// //         if (a.value === "lessGood" && b.value !== "lessGood") return -1;
// //         if (a.value !== "lessGood" && b.value === "lessGood") return 1;
// //         return a.priceRange.length - b.priceRange.length; // Tri par prix croissant
// //       });
// //     }
    
// //     setRestaurants(filteredRestaurants);
// //   }, [sortValue, selectedCuisine, selectedPrice]);

// //   // Fonction pour gérer le changement de tri
// //   const handleSortChange = (value) => {
// //     setSortValue(value);
// //     setShowDropdown(false);
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       {/* En-tête avec compteur et triage */}
// //       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
// //         <h1 className="text-2xl font-bold mb-4 md:mb-0 text-white">
// //           {restaurants.length} Restaurants à Tanger
// //         </h1>
  
// //         <div className="relative">
// //           <div className="flex items-center">
// //             <span className="mr-2 text-[#1C2541]">Trier par:</span>
// //             <div className="relative">
// //               <button
// //                 className="flex items-center justify-between w-40 px-4 py-2 text-[#1C2541] rounded"
// //                 style={{ backgroundColor: "#F8DDAC" }}
// //                 onClick={() => setShowDropdown(!showDropdown)}
// //               >
// //                 <span>
// //                   {sortValue === "best"
// //                     ? "Meilleurs"
// //                     : sortValue === "good"
// //                     ? "Bons"
// //                     : "Moins chers"}
// //                 </span>
// //                 <svg
// //                   className={`w-4 h-4 ml-2 transition-transform ${showDropdown ? "rotate-180" : ""}`}
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M19 9l-7 7-7-7"
// //                   />
// //                 </svg>
// //               </button>
  
// //               {showDropdown && (
// //                 <div className="absolute right-0 mt-1 w-40 bg-white border border-black rounded shadow-lg z-10">
// //                   <button
// //                     className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-black text-[#1C2541]"
// //                     style={{ backgroundColor: sortValue === "best" ? "#F8DDAC" : "white" }}
// //                     onClick={() => handleSortChange("best")}
// //                   >
// //                     Meilleurs
// //                   </button>
// //                   <button
// //                     className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b border-black text-[#1C2541]"
// //                     style={{ backgroundColor: sortValue === "good" ? "#F8DDAC" : "white" }}
// //                     onClick={() => handleSortChange("good")}
// //                   >
// //                     Bons
// //                   </button>
// //                   <button
// //                     className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#1C2541]"
// //                     style={{ backgroundColor: sortValue === "lessGood" ? "#F8DDAC" : "white" }}
// //                     onClick={() => handleSortChange("lessGood")}
// //                   >
// //                     Moins chers
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
  
// //       {/* Filtres */}
// //       <div className="mb-8 flex flex-wrap gap-4">
// //         <div className="w-full md:w-auto">
// //           <label className="block text-sm font-medium text-white mb-1">Type de cuisine</label>
// //           <select
// //             className="w-full md:w-48 p-2 border border-black rounded bg-[#F8DDAC] text-white hover:bg-black transition-colors"
// //             value={selectedCuisine}
// //             onChange={(e) => setSelectedCuisine(e.target.value)}
// //           >
// //             {cuisines.map((cuisine) => (
// //               <option key={cuisine} value={cuisine} className="text-black">
// //                 {cuisine === "all" ? "Toutes cuisines" : cuisine}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="w-full md:w-auto">
// //           <label className="block text-sm font-medium text-white mb-1">Fourchette de prix</label>
// //           <select
// //             className="w-full md:w-48 p-2 border border-black rounded bg-[#F8DDAC] text-white hover:bg-black transition-colors"
// //             value={selectedPrice}
// //             onChange={(e) => setSelectedPrice(e.target.value)}
// //           >
// //             {prices.map((price) => (
// //               <option key={price} value={price} className="text-black">
// //                 {price === "all" ? "Tous prix" : price === "$" ? "Économique" : price === "$$" ? "Moyen" : price === "$$$" ? "Élevé" : "Très élevé"}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       </div>
  
// //       {/* Liste des restaurants */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {restaurants.map((restaurant) => (
// //           <div
// //             key={restaurant.id}
// //             className="bg-white rounded-lg shadow-md overflow-hidden border border-black hover:shadow-lg transition-shadow"
// //           >
// //             {/* Badge de valeur */}
// //             {restaurant.value === "best" && (
// //               <div className="relative top-4 right-4 px-3 py-1 text-xs text-white font-semibold rounded bg-[#1C2541]">
// //                 BEST VALUE
// //               </div>
// //             )}
  
// //             {/* Image */}
// //             <div className="relative h-48 bg-gray-200">
// //               <img
// //                 src={restaurant.image}
// //                 alt={restaurant.name}
// //                 className="object-cover w-full h-full"
// //               />
// //             </div>
  
// //             {/* Contenu */}
// //             <div className="p-4 text-[#1C2541]">
// //               <div className="flex justify-between items-start mb-2">
// //                 <h3 className="text-lg font-semibold">{restaurant.name}</h3>
// //                 <div className="flex items-center">
// //                   <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
// //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// //                   </svg>
// //                   <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
// //                 </div>
// //               </div>
  
// //               <p className="text-xs text-[#1C2541] mb-2">{restaurant.address}</p>
// //               <p className="text-xs text-[#1C2541] mb-2">{restaurant.phone}</p>
  
// //               <div className="flex flex-wrap gap-2 mb-3">
// //                 <span className="px-2 py-1 bg-gray-100 text-xs rounded">{restaurant.cuisine}</span>
// //                 <span className="px-2 py-1 bg-gray-100 text-xs rounded">{restaurant.priceRange}</span>
// //                 <span className="px-2 py-1 bg-gray-100 text-xs rounded">{restaurant.speciality}</span>
// //               </div>
  
// //               <div className="flex justify-between items-center mt-4">
// //                 <div className="flex items-center">
// //                   {Array.from({ length: restaurant.priceRange.length }).map((_, i) => (
// //                     <span key={i} className="text-yellow-500">$</span>
// //                   ))}
// //                 </div>
  
// //                 <button
// //                   className="px-5 py-2 text-[#1C2541] rounded-2xl text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
// //                   style={{ backgroundColor: "#F8DDAC" }}
// //                   onClick={() => alert("✅ Votre réservation a été effectuée avec succès !")}
// //                 >
// //                   Réserver
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterRestaurants;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const COLORS = {
//   beige: "#F8DDAC",
//   navyBlue: "#1A365D",
//   white: "#FFFFFF",
//   black: "#000000",
//   gold: "#D4AF37"
// };

// const FilterRestaurants = () => {
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
//     axios.get('http://localhost:8000/api/Restaurants/filtered')
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
//     <div style={{ backgroundColor: COLORS.white }} className="py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-extrabold text-center mb-4" style={{ color: COLORS.navyBlue }}>
//           Restaurants à Tanger
//         </h2>
//         <p className="text-lg text-center mb-14" style={{ color: COLORS.black }}>
//           Découvrez notre sélection exclusive de restaurants à ne pas manquer.
//         </p>

//         <div className="relative">
//           {/* Bouton Précédent */}
//           <button
//             onClick={handlePrev}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#f5f5f5] border border-[#ccc] shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A365D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Cartes des restaurants */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {displayedRestaurants.map((restaurant, index) => (
//               <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
//                 <div className="h-60 w-full overflow-hidden">
//                   <img
//                     src={`http://localhost:8000${restaurant.image}`}
//                     alt={restaurant.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-[#1A365D]">{restaurant.name}</h3>
//                   <p className="text-sm text-[#555] mt-2">{restaurant.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bouton Suivant */}
//           <button
//             onClick={handleNext}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#f5f5f5] border border-[#ccc] shadow-lg w-12 h-12 rounded-full flex items-center justify-center"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A365D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Indicateurs de pagination */}
//         <div className="flex justify-center mt-12 space-x-3">
//           {Array.from({ length: Math.ceil(restaurants.length / itemsPerPage) }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setStartIndex(i * itemsPerPage)}
//               className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                 startIndex === i * itemsPerPage ? 'bg-[#1A365D] scale-125' : 'bg-[#ccc]'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterRestaurants;





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

export default FilterRestaurants;
