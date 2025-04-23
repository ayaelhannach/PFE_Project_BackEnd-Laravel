import React from 'react';
import { FaHotel, FaMapMarkerAlt, FaConciergeBell, FaUtensils, FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarSecondary = () => {
  return (
    <nav className="bg-white py-3 px-6 shadow-sm sticky top-0 z-50 mt-[80px]"> {/* Marge de 80px */}
      <div className="flex justify-center items-center space-x-12">
        {/* Tangier Location */}
        <div className="flex items-center group">
          <FaMapMarkerAlt className="text-gray-700 mr-2 group-hover:text-amber-600 transition-colors" />
          <span className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
            Tangier
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/hotels"
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
          >
            <FaHotel className="text-gray-600 mr-2 group-hover:text-amber-600 transition-colors" />
            <span className="text-gray-700 font-medium">Hotels</span>
          </Link>

          <Link 
            to="/activities"
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
          >
            <FaConciergeBell className="text-gray-600 mr-2 group-hover:text-amber-600 transition-colors" />
            <span className="text-gray-700 font-medium">Activities</span>
          </Link>

          <Link 
            to="/restaurants"
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
          >
            <FaUtensils className="text-gray-600 mr-2 group-hover:text-amber-600 transition-colors" />
            <span className="text-gray-700 font-medium">Restaurants</span>
          </Link>

          <Link 
            to="/rental-cars"
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
          >
            <FaCar className="text-gray-600 mr-2 group-hover:text-amber-600 transition-colors" />
            <span className="text-gray-700 font-medium">Rental Cars</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecondary;
