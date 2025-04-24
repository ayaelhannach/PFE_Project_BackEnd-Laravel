

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const EditCategory = ({ category, onSave, onCancel }) => {
  const [editedCategory, setEditedCategory] = useState(category);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

 
    const updatedCategory = { ...editedCategory, image };
    onSave(updatedCategory); 
  };

 
  useEffect(() => {
    setEditedCategory(category);
    setImage(null); 
    setImagePreview(""); 
  }, [category]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier la catégorie
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
       
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-[#4a5568] mb-1">
            Nom de la catégorie
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={editedCategory.name}
            onChange={handleChange}
            placeholder="Nom de la catégorie"
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
        </div>

       
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-[#4a5568] mb-1">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={editedCategory.description}
            onChange={handleChange}
            placeholder="Entrez la description de la catégorie"
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
        </div>

      
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium text-[#4a5568] mb-1">
            Image de la catégorie
          </label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
         
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Prévisualisation"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            onClick={onCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
          >
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
