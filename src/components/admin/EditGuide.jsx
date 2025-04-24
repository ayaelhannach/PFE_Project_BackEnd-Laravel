

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function EditGuide({ guide, onCancel, onSaved }) {
  const [formData, setFormData] = useState({
    name: guide.name || "",
    email: guide.email || "",
    address: guide.address || "",
    city_id: guide.city_id || "",
    cin: guide.cin || "",
    phone_number: guide.phone_number || "",
    photo: null,
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [type]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("address", formData.address);
    data.append("city_id", formData.city_id);
    data.append("cin", formData.cin);
    data.append("phone_number", formData.phone_number);
    if (formData.photo) data.append("photo", formData.photo);
    if (formData.cv) data.append("cv", formData.cv);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/guides/${guide.id}?_method=PUT`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onSaved(response.data);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        console.error("Validation errors:", err.response.data.errors);
        alert("Erreur de validation : " + JSON.stringify(err.response.data.errors));
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f4f1ec] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Modifier le Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
        <InputField label="Ville (ID)" name="city_id" value={formData.city_id} onChange={handleChange} />
        <InputField label="CIN" name="cin" value={formData.cin} onChange={handleChange} />
        <InputField label="Téléphone" name="phone_number" value={formData.phone_number} onChange={handleChange} />

       
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Photo du Guide</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "photo")} />
          {formData.photo ? (
            <img src={URL.createObjectURL(formData.photo)} alt="Aperçu" className="mt-4 h-40 object-cover rounded" />
          ) : guide.photo ? (
            <img src={`/storage/${guide.photo}`} alt="Aperçu" className="mt-4 h-40 object-cover rounded" />
          ) : null}
        </div>

       
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">CV du Guide (PDF)</label>
          <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e, "cv")} />
          <div className="mt-2 text-sm text-gray-500">
            {formData.cv ? `Nouveau CV : ${formData.cv.name}` : guide.cv ? `CV actuel : ${guide.cv}` : "Aucun CV"}
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400">Annuler</Button>
          <Button type="submit" className="bg-[#c5a76f] text-white">Enregistrer</Button>
        </div>
      </form>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2 text-black"
      />
    </div>
  );
}
