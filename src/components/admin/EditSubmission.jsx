import React, { useState, useEffect } from "react";
import axios from "axios"; // Assurez-vous d'importer axios
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditSubmission = ({ submission, onCancel, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: submission?.name || "",
    category: submission?.category || "",
    city: submission?.city || "",
    owner: submission?.owner || "",
    address: submission?.address || "",
    website: submission?.website || "",
    email: submission?.email || "",
    phone_number: submission?.phone_number || "",
    date: submission?.date || "",
    status: submission?.status || "Pending",
  });

  // Mise à jour des données lorsque 'submission' change
  useEffect(() => {
    if (submission) {
      setFormData({
        name: submission.name || "",
        category: submission.category || "",
        city: submission.city || "",
        owner: submission.owner || "",
        address: submission.address || "",
        website: submission.website || "",
        email: submission.email || "",
        phone_number: submission.phone_number || "",
        date: submission.date || "",
        status: submission.status || "Pending",
      });
    }
  }, [submission]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/submissions/${submission.id}`, // Remplace cette URL par ton endpoint Laravel
        formData
      );

      // Vérifie la réponse dans la console pour le débogage
      console.log("Réponse de l'API:", response);

      if (response.status === 200) {
        // Mise à jour réussie, appelle la fonction onUpdate
        onUpdate(response.data); // Assurez-vous que la réponse contient les données mises à jour
      } else {
        alert("Erreur lors de la mise à jour, veuillez réessayer.");
      }

    } catch (error) {
      console.error("Erreur lors de la mise à jour de la soumission:", error);

      if (error.response) {
        // Afficher les erreurs du serveur si elles existent
        alert(`Erreur lors de la mise à jour: ${error.response.data.message || error.response.data}`);
      } else {
        alert("Erreur inconnue, veuillez réessayer.");
      }
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier une Soumission
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nom de l'établissement" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Catégorie" name="category" value={formData.category} onChange={handleChange} />
          <InputField label="Ville" name="city" value={formData.city} onChange={handleChange} />
          <InputField label="Propriétaire" name="owner" value={formData.owner} onChange={handleChange} />
          <InputField label="Adresse" name="address" value={formData.address} onChange={handleChange} />
          <InputField label="Site Web" name="website" value={formData.website} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Téléphone" name="phone_number" value={formData.phone_number} onChange={handleChange} />

          <div className="flex flex-col">
            <label htmlFor="date" className="text-lg font-medium text-[#4a5568]">
              Date
            </label>
            <Input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-lg font-medium text-[#4a5568]">
              Statut
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl bg-[#f4f1ec]"
            >
              <option value="Approved">Approuvée</option>
              <option value="Pending">En attente</option>
              <option value="Rejected">Rejetée</option>
            </select>
          </div>
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
            Enregistrer
          </Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
      {label}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl text-black"
    />
  </div>
);

export default EditSubmission;
