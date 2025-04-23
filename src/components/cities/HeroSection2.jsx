import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";

import hotel1 from "../assets/h1.jpeg";
import hotel2 from "../assets/h2.jpeg";
import hotel3 from "../assets/h3.jpeg";
import hotel4 from "../assets/h4.jpeg";
//hadi dyal hotel

const slides = [
  {
    image: hotel1,
    title: "Welcome to Tangier",
    description: "Discover the vibrant soul of Tangier, where cultures meet — with Your Compass.",
  },
  {
    image: hotel2,
    title: "Welcome to Tangier",
    description: "Let Your Compass guide you through Tangier’s winding medinas and seaside charm",
  },
  {
    image:  hotel3,
    title: "Welcome to Tangier",
    description: "Experience the mystique of Tangier, Morocco’s doorway to the world, with Your Compass.",
  },
  {
    image:  hotel4,
    title: "Welcome to Tangier",
    description: "From the Kasbah to the coast, explore Tangier’s hidden gems with Your Compass",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);




  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
<div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-white space-y-6">

        {/* Zone de recherche */}
        <div className="relative w-1/4 mb-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 text-black bg-white rounded-3xl border-2 border-gray-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg">
            <i className="fas fa-search"></i>
          </span>
        </div>

        {/* Composant DateSelector */}
      

        {/* Texte slide */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold transition-all duration-700">
            {slides[currentIndex].title}
          </h1>
          <p className="mt-2 text-lg transition-all duration-700">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* Flèches */}
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

        {/* Points indicateurs */}
        <div className="absolute bottom-4 flex items-center justify-center w-full space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"} transition-all duration-500`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;