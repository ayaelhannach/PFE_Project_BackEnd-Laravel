import React, { useState } from 'react';
import NavbarSecondary from './NavbarSecondary';
// Importation des images
import headerImage from '../assets/header-image.jpg';
import capSpartelImage from '../assets/cap-spartel.jpg';
import rmilatImage from '../assets/rmilat.jpg';
import grotteImage from '../assets/grotte-d-hercule.jpg';
import kasbahImage from '../assets/kasbah.jpg';
import malabataImage from '../assets/malabata.jpg';
import smallImage1 from '../assets/small-image1.jpg';
import smallImage2 from '../assets/small-image2.jpg';
import smallImage3 from '../assets/small-image3.jpg';

const SeeMore1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Best Places');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <div><NavbarSecondary />

    <div className="p-5 bg-gray-100">
  {/* Header Image */}
  <div className="relative w-full h-72 md:h-96 mb-5">
    <img src={headerImage} alt="Header" className="w-full h-full object-cover rounded-lg shadow-md" />
  </div>
  
  {/* Small Images Row */}
  <div className="flex justify-between gap-6 mb-5 w-full">
  {[smallImage1, smallImage2, smallImage3].map((image, index) => (
    <div key={index} className="w-1/3">
      <img
        src={image}
        alt={`Small ${index + 1}`}
        className="w-full h-64 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105"
      />
    </div>
  ))}
</div> 



{/* select w 104 places ... */}
<div className="places-section flex justify-between items-center text-center mb-5">
  <h2 className="text-3xl font-semibold text-[#0F3556] m-0">104 Places in Tangier</h2>
  <select 
    className="p-3 text-lg border-2 border-[#0F3556] rounded-md cursor-pointer ml-5 transition-all hover:border-[#0F3556] focus:outline-none focus:ring-2 focus:ring-[#0F3556] text-[#0F3556] bg-white"
    value={selectedCategory} 
    onChange={handleCategoryChange}
  >
    <option value="Best Places" className="text-[#0F3556] bg-white">Best Places</option>
    <option value="Traveler Ranked" className="text-[#0F3556] bg-white">Traveler Ranked</option>
    <option value="Distance to City Center" className="text-[#0F3556] bg-white">Distance to City Center</option>
  </select>
</div>




<div className="your-component flex items-center bg-white p-8 mt-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
  {/* Section image */}
  <div className="image-section flex justify-center items-center pr-5 w-full md:w-1/3">
    <img
      src={capSpartelImage}
      alt="Cap Spartel"
      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-3"
    />
  </div>

  {/* Section texte */}
  <div className="text-section flex-1 pl-5">
    <h2 className="text-3xl font-semibold mb-3 text-[#0F3556] hover:text-[#0C2D3E] transition-colors duration-300">
      Cap Spartel
    </h2>
    <p className="text-gray-600 mb-2 text-lg font-medium">678 reviews</p>
    <p className="text-gray-600 mb-2 text-lg font-medium">#1 Best Value of 200 Places In Tangier</p>
    <p className="text-gray-600 mb-6 text-lg">
      Cap Spartel, located at the northwestern tip of Tangier, is where the Atlantic Ocean meets the Mediterranean Sea.
      The site offers breathtaking views and is home to an iconic lighthouse. It's a popular spot for scenic walks and enjoying nature's beauty.
    </p>
    <button className="view-on-map p-4 bg-[#0F3556] text-white rounded-md hover:bg-[#0C2D3E] transition-colors duration-300 shadow-lg hover:shadow-xl">
      View on map
    </button>
  </div>
</div>

{/* Rmilat Section */}
<div className="your-component flex items-center bg-white p-8 mt-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="image-section flex justify-center items-center pr-5 w-full md:w-1/3">
    <img
      src={rmilatImage}
      alt="Rmilat"
      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-3"
    />
  </div>
  <div className="text-section flex-1 pl-5">
    <h2 className="text-3xl font-semibold mb-3 text-[#0F3556] hover:text-[#0C2D3E] transition-colors duration-300">
      Rmilat
    </h2>
    <p className="text-[#0F3556] mb-2 text-lg font-medium">234 reviews</p> {/* Bleu marin ici */}
    <p className="text-[#0F3556] mb-2 text-lg font-medium">#2 Best Value of 200 Places In Tangier</p> {/* Bleu marin ici */}
    <p className="text-gray-600 mb-6 text-lg">
      Rmilat is a wooded area ideal for picnics and nature walks. The lush greenery and serene environment make it a perfect getaway from the bustling city life.
    </p>
    <button className="view-on-map p-4 bg-[#0F3556] text-white rounded-md hover:bg-[#0C2D3E] transition-colors duration-300 shadow-lg hover:shadow-xl">
      View on map
    </button>
  </div>
</div>

{/* Grotte d'Hercule Section */}
<div className="your-component flex items-center bg-white p-8 mt-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="image-section flex justify-center items-center pr-5 w-full md:w-1/3">
    <img
      src={grotteImage}
      alt="Grotte d'Hercule"
      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-3"
    />
  </div>
  <div className="text-section flex-1 pl-5">
    <h2 className="text-3xl font-semibold mb-3 text-[#0F3556] hover:text-[#0C2D3E] transition-colors duration-300">
      Grotte d'Hercule
    </h2>
    <p className="text-[#0F3556] mb-2 text-lg font-medium">452 reviews</p> {/* Bleu marin ici */}
    <p className="text-[#0F3556] mb-2 text-lg font-medium">#3 Best Value of 200 Places In Tangier</p> {/* Bleu marin ici */}
    <p className="text-gray-600 mb-6 text-lg">
      Grotte d'Hercule is a natural cave with a view of the sea. It's named after the legendary hero Hercules and offers a unique and mystical experience to visitors.
    </p>
    <button className="view-on-map p-4 bg-[#0F3556] text-white rounded-md hover:bg-[#0C2D3E] transition-colors duration-300 shadow-lg hover:shadow-xl">
      View on map
    </button>
  </div>
</div>

{/* Kasbah Section */}
<div className="your-component flex items-center bg-white p-8 mt-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="image-section flex justify-center items-center pr-5 w-full md:w-1/3">
    <img
      src={kasbahImage}
      alt="Kasbah"
      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-3"
    />
  </div>
  <div className="text-section flex-1 pl-5">
    <h2 className="text-3xl font-semibold mb-3 text-[#0F3556] hover:text-[#0C2D3E] transition-colors duration-300">
      Kasbah
    </h2>
    <p className="text-[#0F3556] mb-2 text-lg font-medium">310 reviews</p> {/* Bleu marin ici */}
    <p className="text-[#0F3556] mb-2 text-lg font-medium">#4 Best Value of 200 Places In Tangier</p> {/* Bleu marin ici */}
    <p className="text-gray-600 mb-6 text-lg">
      The Kasbah is a historic fortress offering a glimpse into Tangier's rich history and architecture. The area is filled with charming streets, beautiful gardens, and historical monuments.
    </p>
    <button className="view-on-map p-4 bg-[#0F3556] text-white rounded-md hover:bg-[#0C2D3E] transition-colors duration-300 shadow-lg hover:shadow-xl">
      View on map
    </button>
  </div>
</div>

{/* Malabata Section */}
<div className="your-component flex items-center bg-white p-8 mt-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="image-section flex justify-center items-center pr-5 w-full md:w-1/3">
    <img
      src={malabataImage}
      alt="Malabata"
      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-3"
    />
  </div>
  <div className="text-section flex-1 pl-5">
    <h2 className="text-3xl font-semibold mb-3 text-[#0F3556] hover:text-[#0C2D3E] transition-colors duration-300">
      Malabata
    </h2>
    <p className="text-[#0F3556] mb-2 text-lg font-medium">189 reviews</p> {/* Bleu marin ici */}
    <p className="text-[#0F3556] mb-2 text-lg font-medium">#5 Best Value of 200 Places In Tangier</p> {/* Bleu marin ici */}
    <p className="text-gray-600 mb-6 text-lg">
      Malabata is a scenic area along the coast, known for its beautiful beaches and vibrant atmosphere. It's a perfect spot for relaxing and enjoying the ocean breeze.
    </p>
    <button className="view-on-map p-4 bg-[#0F3556] text-white rounded-md hover:bg-[#0C2D3E] transition-colors duration-300 shadow-lg hover:shadow-xl">
      View on map
    </button>
  </div>
</div>

</div>
</div>

  );
};

export default SeeMore1;
