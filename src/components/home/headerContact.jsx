import React, { useState } from "react";

const slides = [
  {
    image: "images/contactus.jpg",
    title: "Contact us ",
    description: "Your Compass, your gateway to discovering Morocco's magic.",
  },
  
];

const Carousel = () => {
  const [currentIndex] = useState(0); // Always show the first image

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-white">
        
        <h1 className="text-4xl font-bold transition-all duration-700">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-2 text-lg transition-all duration-700">
          {slides[currentIndex].description}
        </p>
        {/* No navigation buttons as you're displaying a single image */}
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
