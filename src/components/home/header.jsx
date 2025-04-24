

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importer useTranslation

const slides = [
  {
    image: "images/pict.png",
    titleKey: "welcomeToMorocco", // Utiliser la clé de traduction
    descriptionKey: "yourCompass", // Utiliser la clé de traduction
  },
  {
    image: "images/chefch.png",
    titleKey: "welcomeToChefchaouen", // Utiliser la clé de traduction
    descriptionKey: "experienceChefchaouen", // Utiliser la clé de traduction
  },
  {
    image: "images/merr.png",
    titleKey: "welcomeToMarrakech", // Utiliser la clé de traduction
    descriptionKey: "discoverMarrakech", // Utiliser la clé de traduction
  },
  {
    image: "images/pict2.jpg",
    titleKey: "welcomeToTangier", // Utiliser la clé de traduction
    descriptionKey: "exploreTangier", // Utiliser la clé de traduction
  },
];

const Carousel = () => {
  const { t, i18n } = useTranslation(); // Utiliser i18n pour changer la langue
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-white">
        <div className="relative w-1/4 mb-20">
          <input
            type="text"
            placeholder={t("search")} 
            className="w-full p-2 pl-10 text-black bg-white rounded-3xl border-2 border-gray-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <h1 className="text-4xl font-bold transition-all duration-700">
          {t(slides[currentIndex].titleKey)} 
        </h1>
        <p className="mt-2 text-lg transition-all duration-700">
          {t(slides[currentIndex].descriptionKey)} 
        </p>
        <button
          className="flech-btn absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0F3556] text-white rounded-full shadow-lg text-3xl"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
        >
          {'←'}
        </button>
        <button
          className="flech-btn absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0F3556] text-white rounded-full shadow-lg text-3xl"
          onClick={nextSlide}
        >
          {'→'}
        </button>
        <div className="absolute bottom-4 flex items-center justify-center w-full space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              } transition-all duration-500`}
            ></div>
          ))}
        </div>
        
        <div className="absolute top-5 right-5">
          <button onClick={() => changeLanguage("en")} className="text-white">EN</button>
          <button onClick={() => changeLanguage("fr")} className="ml-2 text-white">FR</button>
          <button onClick={() => changeLanguage("ar")} className="ml-2 text-white">AR</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
