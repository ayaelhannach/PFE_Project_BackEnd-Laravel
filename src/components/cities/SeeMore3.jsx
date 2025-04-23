import React, { useState } from 'react';
// Import images
import headerImage from '../assets/header-image.jpg';
import laVueImage from '../assets/la-vue.jpg';
import cappuccinoImage from '../assets/cappuccino.jpg';
import riceImage from '../assets/rice2.jpg';
import leGourmetImage from '../assets/le-gourmet.jpg';
import oceanBreezeImage from '../assets/ocean-breeze.jpg';
import smallImage1 from '../assets/small-image1.jpg';
import smallImage2 from '../assets/small-image2.jpg';
import smallImage3 from '../assets/small-image3.jpg';

const SeeMore3 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Best Places');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="p-5 bg-gray-50">
      <div className="w-full">
        <img src={headerImage} alt="Header" className="w-full h-auto" />
      </div>
      <div className="flex justify-around my-5">
        {[smallImage1, smallImage2, smallImage3].map((image, index) => (
          <img key={index} src={image} alt={`Small ${index + 1}`} className="w-24 h-auto" />
        ))}
      </div>
      <div className="flex justify-between items-center text-center my-5">
        <h2 className="m-0">104 Food and Drinks in Tangier</h2>
        <select
          className="p-2 text-lg border border-gray-300 rounded-lg cursor-pointer transition-colors duration-300 focus:border-blue-500 ml-5"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Best Places">Best Places</option>
          <option value="Traveler Ranked">Traveler Ranked</option>
          <option value="Distance to City Center">Distance to City Center</option>
        </select>
      </div>

      {/* La Vue Section */}
      <div className="flex items-center p-5 bg-gray-50 mt-5">
        <div className="flex-1 flex justify-center items-center pr-5">
          <img src={laVueImage} alt="La Vue" className="w-full h-auto max-w-[400px] rounded-lg shadow-md" />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-3 text-gray-800">La Vue</h2>
          <p className="text-lg text-gray-600 mb-3">524 reviews</p>
          <p className="text-gray-600 mb-3">#1 Best Value of 100 Food and Drinks in Tangier</p>
          <p className="text-gray-600 mb-3">La Vue offers an exquisite dining experience with a stunning view of the city. The restaurant is known for its exceptional cuisine and elegant ambiance.</p>
          <button className="inline-block p-3 px-5 bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-400">View on map</button>
        </div>
      </div>

      {/* Cappuccino Section */}
      <div className="flex items-center p-5 bg-gray-50 mt-5">
        <div className="flex-1 flex justify-center items-center pr-5">
          <img src={cappuccinoImage} alt="Cappuccino" className="w-full h-auto max-w-[400px] rounded-lg shadow-md" />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-3 text-gray-800">Cappuccino</h2>
          <p className="text-lg text-gray-600 mb-3">412 reviews</p>
          <p className="text-gray-600 mb-3">#2 Best Value of 100 Food and Drinks in Tangier</p>
          <p className="text-gray-600 mb-3">Cappuccino is a cozy café offering a variety of coffee and pastries. It's a perfect spot for a relaxing break with friends or family.</p>
          <button className="inline-block p-3 px-5 bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-400">View on map</button>
        </div>
      </div>

      {/* RR Ice Section */}
      <div className="flex items-center p-5 bg-gray-50 mt-5">
        <div className="flex-1 flex justify-center items-center pr-5">
          <img src={riceImage} alt="RR Ice" className="w-full h-auto max-w-[400px] rounded-lg shadow-md" />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-3 text-gray-800">RR Ice</h2>
          <p className="text-lg text-gray-600 mb-3">368 reviews</p>
          <p className="text-gray-600 mb-3">#3 Best Value of 100 Food and Drinks in Tangier</p>
          <p className="text-gray-600 mb-3">RR Ice is an ice cream parlor offering a wide range of flavors. It's a favorite among locals and tourists alike for its delicious ice cream and friendly atmosphere.</p>
          <button className="inline-block p-3 px-5 bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-400">View on map</button>
        </div>
      </div>

      {/* Le Gourmet Section */}
      <div className="flex items-center p-5 bg-gray-50 mt-5">
        <div className="flex-1 flex justify-center items-center pr-5">
          <img src={leGourmetImage} alt="Le Gourmet" className="w-full h-auto max-w-[400px] rounded-lg shadow-md" />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-3 text-gray-800">Le Gourmet</h2>
          <p className="text-lg text-gray-600 mb-3">290 reviews</p>
          <p className="text-gray-600 mb-3">#4 Best Value of 100 Food and Drinks in Tangier</p>
          <p className="text-gray-600 mb-3">Le Gourmet offers a fine dining experience with an extensive menu of gourmet dishes. The restaurant is known for its excellent service and sophisticated atmosphere.</p>
          <button className="inline-block p-3 px-5 bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-400">View on map</button>
        </div>
      </div>

      {/* Ocean Breeze Section */}
      <div className="flex items-center p-5 bg-gray-50 mt-5">
        <div className="flex-1 flex justify-center items-center pr-5">
          <img src={oceanBreezeImage} alt="Ocean Breeze" className="w-full h-auto max-w-[400px] rounded-lg shadow-md" />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-3 text-gray-800">Ocean Breeze</h2>
          <p className="text-lg text-gray-600 mb-3">254 reviews</p>
          <p className="text-gray-600 mb-3">#5 Best Value of 100 Food and Drinks in Tangier</p>
          <p className="text-gray-600 mb-3">Ocean Breeze is a seaside restaurant offering fresh seafood and stunning ocean views. It's a great place to enjoy a meal while watching the waves.</p>
          <button className="inline-block p-3 px-5 bg-blue-500 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-400">View on map</button>
        </div>
      </div>
    </div>
  );
};

export default SeeMore3;
