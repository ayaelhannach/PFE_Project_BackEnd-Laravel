import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Places from "./Places"; 

const AddPlace = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    city: "",
    localisation: "",
    category: "",
  });

  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file), 
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New place added:", formData);
    

    setFormData({
      name: "",
      description: "",
      photo: "",
      city: "",
      localisation: "",
      category: "",
    });
    setShowTable(true); 
  };

  const handleCancel = () => {
    setShowTable(true); 
  };

  if (showTable) {
    return <Places />;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-lg space-y-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-[#2d3748]">Ajouter un lieu touristique</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Nom du lieu" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
          <InputField label="Catégorie" name="category" value={formData.category} onChange={handleChange} />
          <InputField label="Localisation" name="localisation" value={formData.localisation} onChange={handleChange} />
          {/* Change photo input to file input */}
          <div className="flex flex-col">
            <label htmlFor="photo" className="mb-1 text-[#4a5568] font-medium">URL de la photo</label>
            <input
              id="photo"
              name="photo"
              type="file"
              onChange={handleFileChange}
              className="py-3 px-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a76f] focus:border-[#c5a76f] text-black"
            />
            {formData.photo && (
              <div className="mt-4">
                <img src={formData.photo} alt="Selected" className="w-32 h-32 object-cover rounded-md" />
              </div>
            )}
          </div>
        </div>
        
        <TextareaField label="Description" name="description" value={formData.description} onChange={handleChange} />

        <div className="flex justify-between">
          <Button type="button" onClick={handleCancel} className="bg-gray-300 text-black px-6 py-3 rounded-xl hover:bg-gray-400">
            Annuler
          </Button>
          <Button type="submit" className="bg-[#c5a76f] text-white px-6 py-3 rounded-xl hover:bg-[#b18c56]">
            Ajouter le lieu
          </Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-[#4a5568] font-medium">{label}</label>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="py-3 px-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a76f] focus:border-[#c5a76f] text-black"
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-[#4a5568] font-medium">{label}</label>
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="py-3 px-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a76f] focus:border-[#c5a76f] text-black"
    />
  </div>
);

export default AddPlace;
