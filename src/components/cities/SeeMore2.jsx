import React, { useState } from 'react';

// Import images
import leMirageImage from '../assets/le-mirage.jpg';
import hiltonImage from '../assets/hilton.jpg';
import nordPinusImage from '../assets/nord-pinus.jpg';
import mnarCastleImage from '../assets/mnar-castle.jpg';
import royalTulipImage from '../assets/royal-tulip.jpg';

// PlaceCard component
const PlaceCard = ({ image, title, reviews, rank, description }) => (
  <div className="flex items-center p-5 bg-gray-100 mt-5">
    <div className="flex-1 flex justify-center items-center pr-5">
      <img src={image} alt={title} className="w-full h-auto max-w-xs rounded-lg shadow-md" />
    </div>
    <div className="flex-1 pl-5">
      <h2 className="text-2xl mb-2 text-gray-800">{title}</h2>
      <p className="text-lg text-gray-600 mb-2">{reviews} reviews</p>
      <p className="text-lg text-gray-600 mb-2">{rank}</p>
      <p className="text-md text-gray-600 mb-4">{description}</p>
      <button className="inline-block p-2 px-5 bg-blue-500 text-white rounded-md transition-all hover:bg-blue-600">
        View on map
      </button>
    </div>
  </div>
);

// SeeMore2 component
const SeeMore2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Best Places');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="p-5 bg-gray-100">
      <div className="w-full">
        <img src="../assets/header-image.jpg" alt="Header" className="w-full h-auto" />
      </div>
      <div className="flex justify-around my-5">
        {smallImages.map((image, index) => (
          <img key={index} src={image} alt={`Small ${index + 1}`} className="w-24 h-auto" />
        ))}
      </div>
      <div className="flex justify-between items-center text-center my-5">
        <h2 className="m-0">104 Places to Stay in Tangier</h2>
        <select
          className="p-2 text-lg border border-gray-300 rounded-md cursor-pointer transition-all hover:border-blue-500 ml-5"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Best Places">Best Places</option>
          <option value="Traveler Ranked">Traveler Ranked</option>
          <option value="Distance to City Center">Distance to City Center</option>
        </select>
      </div>

      {/* Place cards */}
      <PlaceCard
        image={leMirageImage}
        title="Le Mirage"
        reviews="678"
        rank="#1 Best Value of 200 Places to Stay In Tangier"
        description="Le Mirage is a luxurious hotel with stunning views of the sea. It offers world-class amenities and an unforgettable stay."
      />
      <PlaceCard
        image={hiltonImage}
        title="Hilton"
        reviews="540"
        rank="#2 Best Value of 200 Places to Stay In Tangier"
        description="The Hilton is a modern hotel located in the heart of the city, offering top-notch facilities and comfortable accommodations."
      />
      <PlaceCard
        image={nordPinusImage}
        title="Hôtel Nord-Pinus"
        reviews="452"
        rank="#3 Best Value of 200 Places to Stay In Tangier"
        description="Hôtel Nord-Pinus offers a unique ambiance and personalized services, making it a favorite among travelers."
      />
      <PlaceCard
        image={mnarCastleImage}
        title="Mnar Castle"
        reviews="310"
        rank="#4 Best Value of 200 Places to Stay In Tangier"
        description="Mnar Castle is an elegant hotel with beautiful architecture and excellent services, perfect for a luxurious stay."
      />
      <PlaceCard
        image={royalTulipImage}
        title="Royal Tulip City Center"
        reviews="189"
        rank="#5 Best Value of 200 Places to Stay In Tangier"
        description="The Royal Tulip City Center is known for its excellent location and exceptional services, making it a top choice for travelers."
      />
    </div>
  );
};

export default SeeMore2;
