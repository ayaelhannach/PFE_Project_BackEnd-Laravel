

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Destinations() {
  const [cities, setCities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const itemsPerSlide = 3;

  useEffect(() => {
    axios.get("http://localhost:8000/cities")
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des villes :", error);
      });
  }, []);

  const totalSlides = Math.ceil(cities.length / itemsPerSlide);

  const nextDestinations = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevDestinations = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleCities = cities.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="max-w-full mx-auto py-10 px-4">
      {/* <div className="mb-6">
        <h2 className="text-3xl font-bold text-black">The best destinations for your next vacation</h2>
        <p className="text-gray-600 mb-10">Here's where other travelers are going</p>
      </div> */}



    <div className={`mb-6 ${isRTL ? "text-right" : "text-left"}`} dir={isRTL ? "rtl" : "ltr"}>
      <h2 className="text-3xl font-bold text-black">
        {t("destinationSection.title")}
      </h2>
      <p className="text-gray-600 mb-10">
        {t("destinationSection.subtitle")}
      </p>
    </div>


      <div className="relative w-full pl-16">
        <button
          onClick={prevDestinations}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

        <div className="flex gap-8 transition-transform duration-500 ease-in-out">
          {visibleCities.map((city, index) => (
            <div
              key={index}
              className="relative min-w-[30%] h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={`http://localhost:8000${city.image}`} // Ex: /images/cities/tanger.jpg
                alt={city.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="absolute bottom-8 left-4 text-white font-bold text-4xl drop-shadow-lg">
                {city.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={nextDestinations}
          disabled={currentIndex >= totalSlides - 1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-md z-10 disabled:bg-gray-300"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
