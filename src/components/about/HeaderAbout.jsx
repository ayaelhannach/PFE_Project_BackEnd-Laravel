import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "images/aboutFirst.jpg",
    title: "Welcome to Morocco",
    description: "Your Compass, your gateway to discovering Morocco's magic.",
  },
  {
    image: "images/chefchaouen.png",
    title: "Welcome to Chefchaouen",
    description: "Experience the enchanting blue city of Chefchaouen with Your Compass.",
  },
  {
    image: "images/merra.png",
    title: "Welcome to Marrakech",
    description: "Discover the magic of Marrakech with Your Compass.",
  },
  {
    image: "images/tanger.png",
    title: "Welcome to Tangier",
    description: "Explore the vibrant beauty of Tangier with Your Compass.",
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
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-700"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-white">
        <div className="relative w-1/4 mb-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 text-black bg-white rounded-3xl border-2 border-gray-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <h1 className="text-4xl font-bold transition-all duration-700">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-2 text-lg transition-all duration-700">
          {slides[currentIndex].description}
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
      </div>
    </div>
  );
};

export default Carousel;
