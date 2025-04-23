// import React, { useState, useEffect } from "react";

// import car1 from "../assets/c2.jpg";
// import car2 from "../assets/c3.jpg";
// import car3 from "../assets/c1.jpg";
// import car4 from "../assets/c4.jpg";
// import car5 from "../assets/c4.jpg";
// import car6 from "../assets/c6.jpg";
// import car7 from "../assets/c7.jpg";
// import car8 from "../assets/c8.jpg";
// // had composant baki khso y t adapta ela hasab les hotels mashi les cars les infos khso ykono feh ela hsab les hotels:
// const slides = [
//     {
//         image:car1,
//         title: "Welcome to Tangier",
//         description: "Discover the vibrant soul of Tangier, where cultures meet — with Your Compass.",
//       },
//       {
//         image: car2,
//         title: "Welcome to Tangier",
//         description: "Let Your Compass guide you through Tangier’s winding medinas and seaside charm",
//       },
//       {
//         image: car3,
//         title: "Welcome to Tangier",
//         description: "Experience the mystique of Tangier, Morocco’s doorway to the world, with Your Compass.",
//       },
//       {
//         image: car4,
//         title: "Welcome to Tangier",
//         description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
//     },
//     {
//         image: car5,
//         title: "Welcome to Tangier",
//         description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
//     },
//     {
//         image: car6,
//         title: "Welcome to Tangier",
//         description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
//     },
//     {
//         image:car7,
//         title: "Welcome to Tangier",
//         description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
//     },
//     {
//         image: car8 ,
//         title: "Welcome to Tangier",
//         description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
//     },
// ];


// // Couleurs personnalisées
// const COLORS = {
//     beige: "#F8DDAC",
//     navyBlue: "#1A365D", // Bleu marine
//     white: "#FFFFFF",
//     black: "#000000"
//   };

// const CarRental = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [pickUpDate, setPickUpDate] = useState("Apr 04, 10:00 AM");
//     const [dropOffDate, setDropOffDate] = useState("Apr 06, 10:00 AM");
//     const [driverAge, setDriverAge] = useState("30+");
  
//     const nextSlide = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     };
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//       };
    
  
//     useEffect(() => {
//       const interval = setInterval(nextSlide, 3000);
//       return () => clearInterval(interval);
//     }, [currentIndex]);
  
//     return (
//         <div
//             className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
//             style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//         >
//             <div className="absolute inset-0 bg-black opacity-30"></div>
          
//             <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4">
//                 {/* Titre et description du carrousel */}
//                 <div className="mb-8 text-center">
//                     <h1 className="text-4xl font-bold text-white mb-2">{slides[currentIndex].title}</h1>
//                     <p className="text-xl text-white">{slides[currentIndex].description}</p>
//                 </div>
            
//                 {/* Form Container */}
//                 <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
//                     {/* Titre */}
//                     <h2 className="text-xl font-semibold text-gray-800 mb-6">Car Rental</h2>
              
//                     {/* Première ligne - 3 champs horizontaux */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                         {/* Pick Up Location */}
//                         <div>
//                             <label className="block text-xs text-gray-500 uppercase mb-1">Pick Up Location</label>
//                             <input
//                                 value="Tangier"
//                                 readOnly
//                                 className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-black"
//                                 style={{ color: COLORS.black }}
//                             />
//                         </div>
                
//                         {/* Pick Up Date */}
//                         <div>
//                             <label className="block text-xs text-gray-500 uppercase mb-1">Pick Up</label>
//                             <input
//                                 value={pickUpDate}
//                                 onChange={(e) => setPickUpDate(e.target.value)}
//                                 className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-black"
//                                 style={{ color: COLORS.black }}
//                             />
//                         </div>
                
//                         {/* Drop Off Date */}
//                         <div>
//                             <label className="block text-xs text-gray-500 uppercase mb-1">Drop Off</label>
//                             <input
//                                 value={dropOffDate}
//                                 onChange={(e) => setDropOffDate(e.target.value)}
//                                 className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-black"
//                                 style={{ color: COLORS.black }}
//                             />
//                         </div>
//                     </div>
              
//                     {/* Deuxième ligne - Boutons d'âge avec nouvelles couleurs */}
//                     <div className="mb-4">
//                         <label className="block text-xs text-gray-500 uppercase mb-2">Driver's age</label>
//                         <div className="flex flex-wrap gap-2">
//                             {["18-25", "25-30", "30+", "50+"].map((age) => (
//                                 <button
//                                     key={age}
//                                     onClick={() => setDriverAge(age)}
//                                     className={`px-3 py-1 text-sm rounded-full transition-colors ${
//                                         driverAge === age 
//                                             ? 'bg-indigo-900 text-white' // Bleu marine quand sélectionné
//                                             : 'bg-amber-100 text-gray-800 hover:bg-amber-200' // Beige quand non sélectionné
//                                     }`}
//                                     style={{
//                                         backgroundColor: driverAge === age ? COLORS.navyBlue : COLORS.beige,
//                                         color: driverAge === age ? COLORS.white : COLORS.black
//                                     }}
//                                 >
//                                     {age}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
              
//                     {/* Troisième ligne - Select Passengers */}
//                     <div className="mb-6">
//                         <label className="block text-xs text-gray-500 uppercase mb-1">Passengers (Optional)</label>
//                         <div className="relative">
//                             <select 
//                                 className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 appearance-none text-black"
//                                 style={{ color: COLORS.black }}
//                             >
//                                 <option>Select</option>
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                                 <option>4+</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
              
//                     {/* Bouton de recherche avec nouvelle couleur */}
//                     <button 
//                         className="w-full py-2 px-4 rounded transition-colors"
//                         style={{
//                             backgroundColor: COLORS.navyBlue,
//                             color: COLORS.white
//                         }}
//                     >
//                         Search Cars
//                     </button>
//                 </div>
            
//                 {/* Contrôles du carrousel */}
//                 <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`h-2 rounded-full transition-all ${
//                                 currentIndex === index ? "w-8 bg-white" : "w-2 bg-white opacity-50"
//                             }`}
//                         />
//                     ))}
//                 </div>
            
//                 {/* Flèches de navigation */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
//                 >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
//                 >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };
    
// export default CarRental;







import React, { useState, useEffect } from "react";

import car1 from "../assets/c2.jpg";
import car2 from "../assets/c3.jpg";
import car3 from "../assets/c1.jpg";
import car4 from "../assets/c4.jpg";
import car5 from "../assets/c4.jpg";
import car6 from "../assets/c6.jpg";
import car7 from "../assets/c7.jpg";
import car8 from "../assets/c8.jpg";

const slides = [
  {
    image: car1,
    title: "Welcome to Tangier",
    description: "Discover the vibrant soul of Tangier, where cultures meet — with Your Compass.",
  },
  {
    image: car2,
    title: "Welcome to Tangier",
    description: "Let Your Compass guide you through Tangier’s winding medinas and seaside charm",
  },
  {
    image: car3,
    title: "Welcome to Tangier",
    description: "Experience the mystique of Tangier, Morocco’s doorway to the world, with Your Compass.",
  },
  {
    image: car4,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
  {
    image: car5,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
  {
    image: car6,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
  {
    image: car7,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
  {
    image: car8,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
];

const COLORS = {
  beige: "#F8DDAC",
  navyBlue: "#1A365D",
  white: "#FFFFFF",
  black: "#000000"
};

const CarRental = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">{slides[currentIndex].title}</h1>
          <p className="text-xl text-white">{slides[currentIndex].description}</p>
        </div>

        {/* Contrôles du carrousel */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-white" : "w-2 bg-white opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Flèches de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarRental;
