

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
