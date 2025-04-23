import React, { useState } from 'react';

// Import images directly at the top
import headerImage from '../assets/header-image.jpg';
import smallImage1 from '../assets/small-image1.jpg';
import smallImage2 from '../assets/small-image2.jpg';
import smallImage3 from '../assets/small-image3.jpg';
import yarisImage from '../assets/yaris.jpg';
import mercedesImage from '../assets/mercedes.jpg';
import dusterImage from '../assets/duster.jpg';
import mustangImage from '../assets/mustang.jpg';
import civicImage from '../assets/civic.jpg';

const SeeMore4 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Most Popular');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="p-5 bg-gray-100">
      <div className="w-full">
        <img src={headerImage} alt="Header" className="w-full h-auto" />
      </div>
      <div className="flex justify-around my-5">
        {smallImages.map((image, index) => (
          <img key={index} src={image} alt={`Small ${index + 1}`} className="w-24 h-auto" />
        ))}
      </div>
      <div className="flex justify-between items-center text-center my-5">
        <h2 className="m-0">5 Rental Cars Available</h2>
        <select
          className="p-2 text-base border border-gray-300 rounded-lg cursor-pointer transition-all duration-300 ml-5 hover:border-blue-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Most Popular">Most Popular</option>
          <option value="Economical">Economical</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Rental Car Sections */}
      {rentalCars.map((car, index) => (
        <div key={index} className="flex items-center p-5 bg-white my-5 shadow-md">
          <div className="flex-1 flex justify-center items-center pr-5">
            <img src={car.image} alt={car.name} className="w-full h-auto max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="flex-1 pl-5">
            <h2 className="text-2xl mb-2 text-gray-800">{car.name}</h2>
            <p className="text-gray-600 mb-2">{car.reviews} reviews</p>
            <p className="text-gray-600 mb-2">#{index + 1} {car.category}</p>
            <p className="text-gray-600 mb-4">{car.description}</p>
            <button className="inline-block p-2 px-5 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-600">
              View on map
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Use the imported images in the array
const smallImages = [
  smallImage1,
  smallImage2,
  smallImage3,
];

const rentalCars = [
  {
    name: 'Toyota Yaris',
    image: yarisImage,
    reviews: 300,
    category: 'Most Popular Rental Car',
    description: 'The Toyota Yaris is a compact and economical car, perfect for city driving and short trips.',
  },
  {
    name: 'Mercedes-Benz E-Class',
    image: mercedesImage,
    reviews: 250,
    category: 'Most Popular Rental Car',
    description: 'The Mercedes-Benz E-Class is a luxurious car with all the options for a comfortable ride.',
  },
  {
    name: 'Renault Duster',
    image: dusterImage,
    reviews: 200,
    category: 'Most Popular Rental Car',
    description: 'The Renault Duster is a robust and spacious SUV, ideal for families and long journeys.',
  },
  {
    name: 'Ford Mustang',
    image: mustangImage,
    reviews: 150,
    category: 'Most Popular Rental Car',
    description: 'The Ford Mustang is a stylish and sporty car, perfect for those who love to drive with flair.',
  },
  {
    name: 'Honda Civic',
    image: civicImage,
    reviews: 120,
    category: 'Most Popular Rental Car',
    description: 'The Honda Civic is a reliable and efficient car, perfect for everyday use.',
  },
];

export default SeeMore4;
