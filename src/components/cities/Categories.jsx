import React from 'react';

const Categories = () => {
  return (
    <div className="py-8 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="flex justify-around flex-wrap gap-4">
        <div className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm">Hotels</div>
        <div className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm">Activities</div>
        <div className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm">Restaurants</div>
        <div className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm">Rental Cars</div>
      </div>
    </div>
  );
};

export default Categories;
