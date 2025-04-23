// import React from 'react';

// const TourGuides = () => {
//   return (
//     <div className="p-8 bg-white mt-24">
//       <div className="mb">
//         <h1 className="text-2xl font-bold mb-4 text-left text-black">Tour Guides</h1> {/* العنوان باللون الأسود */}
//         <h2 className="text-lg mb-8 text-left text-black"> {/* النص باللون الأسود */}
//           Connect with tourists and grow your business by joining our platform as a tour guide.
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* بطاقة الدليل السياحي */}
//         {[
//           { name: "Guide Name 1", expertise: "Expertise Area 1", img: "images/gui1.jpeg" },
//           { name: "Guide Name 2", expertise: "Expertise Area 2", img: "images/gui2.jpeg" },
//           { name: "Guide Name 3", expertise: "Expertise Area 3", img: "images/gui3.jpeg" }
//         ].map((guide, index) => (
//           <div key={index} className="relative rounded-lg shadow-lg overflow-hidden group">
//             {/* الصورة */}
//             <img
//               src={guide.img}
//               alt={guide.name}
//               className="w-full h-96 object-cover"
//             />

//             {/* النص على الصورة من الأسفل */}
//             <div className="absolute inset-x-0 bottom-0 bg-black/50 flex justify-between items-center p-6">
//               {/* النص من اليسار */}
//               <div className="text-left text-white">
//                 <h3 className="text-xl font-bold">{guide.name}</h3>
//                 <p className="text-gray-300">{guide.expertise}</p>
//               </div>

//               {/* الزر على اليمين */}
//               <div className="flex justify-end">
//                 <button className="seeMore-btn bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md 
//                                    hover:bg-yellow-600 transition duration-300">
//                   See more
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TourGuides;


import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';




export default function TourGuides() {

  
  const { t } = useTranslation();
  const [guides, setGuides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3;

  useEffect(() => {
    axios.get("http://localhost:8000/guides")
      .then(response => {
        console.log("Guide Response :", response.data); // Pour debug
        if (Array.isArray(response.data.guides)) {
          setGuides(response.data.guides);
        } else {
          console.error("La réponse n'est pas un tableau :", response.data);
          setGuides([]); // pour éviter les erreurs si ce n'est pas un tableau
        }
      })
      .catch(error => {
        console.error("Erreur lors du chargement des guides touristiques :", error);
      });
  }, []);

  const totalSlides = Math.ceil(guides.length / itemsPerSlide);

  const nextGuides = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevGuides = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleGuides = guides.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="max-w-full mx-auto py-10 px-4 mt-24 bg-white">
      <div className="mb-6">
      <h2 className="text-3xl font-bold text-black">
        {t("tourGuides.title")}
      </h2>
      <p className="text-gray-600 mb-10">
        {t("tourGuides.description")}
      </p>
    </div>

      <div className="relative w-full pl-16">
        <button
          onClick={prevGuides}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {visibleGuides.map((guide, index) => (
            <div
              key={index}
              className="relative min-w-[30%] h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={`http://localhost:8000${guide.photo}`} 
                alt={guide.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/50 flex justify-between items-center p-4">
                <div className="text-left text-white">
                  <h3 className="text-xl font-bold">{guide.name}</h3>
               
                </div>
                <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                  <a href={guide.email}>Contact</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextGuides}
          disabled={currentIndex >= totalSlides - 1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
