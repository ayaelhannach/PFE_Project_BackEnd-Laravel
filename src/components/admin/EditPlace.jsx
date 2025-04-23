import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditPlace = ({ place, setShowForm, onSave, setEditingPlace }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    localisation: "",
    category: "",
    photo: null,
  });

  useEffect(() => {
    if (place) {
      setFormData({
        name: place.name || "",
        description: place.description || "",
        localisation: place.localisation || "",
        category: place.category || "",
        photo: place.photo || null,
      });
    }
  }, [place]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setShowForm(false); // Close the form
    setEditingPlace(null); // Set editingPlace back to null to show the list
  };

  const handleCancel = () => {
    setShowForm(false); // Close the form
    setEditingPlace(null); // Set editingPlace back to null to show the list
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier un Lieu
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nom du lieu" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Description" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Localisation" name="localisation" value={formData.localisation} onChange={handleChange} />
          <InputField label="Catégorie" name="category" value={formData.category} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="photo" className="block text-lg font-medium text-[#4a5568]">
            Photo
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            onChange={handleFileChange}
            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl"
          />
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] text-xl"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] text-xl"
          >
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl text-black"
    />
  </div>
);

export default EditPlace;
