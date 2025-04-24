
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditCity = ({ city, onSave, onCancel }) => {
  const [updatedCity, setUpdatedCity] = useState({
    id: city.id,
    name: city.name,
    description: city.description,
    image: city.photoURL ? city.photoURL : "",
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    setUpdatedCity({
      id: city.id,
      name: city.name,
      description: city.description,
      image: city.photoURL ? city.photoURL : "",
    });
    setImageFile(null);
  }, [city]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSave = () => {
    if (imageFile) {
      
    }

    onSave(updatedCity);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
          Edit City
        </h2>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-[#4a5568]">
              City Name
            </label>
            <Input
              type="text"
              name="name"
              value={updatedCity.name}
              onChange={handleInputChange}
              className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] text-xl text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-lg font-medium text-[#4a5568]">
              Description
            </label>
            <Textarea
              name="description"
              value={updatedCity.description}
              onChange={handleInputChange}
              className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] text-xl text-black overflow-hidden"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium text-[#4a5568]">
            City Image
          </label>
          <Input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] text-xl text-black"
          />
          {imageFile && (
            <p className="text-sm text-gray-600 mt-2 text-black">
              Image sélectionnée: {imageFile.name}
            </p>
          )}
        </div>

        {updatedCity.image && !imageFile && (
          <div className="mt-4">
            <p className="text-lg font-medium text-[#4a5568]">Image actuelle :</p>
            <img
              src={`/src/assets/${updatedCity.image}`}
              alt="Ville"
              className="mt-2 w-32 h-32 object-cover rounded-lg border border-gray-300"
            />
          </div>
        )}

        <div className="flex justify-between">
          <Button
            onClick={onCancel}
            type="button"
            className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCity;
