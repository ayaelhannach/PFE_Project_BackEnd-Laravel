

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddService = () => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cityId, setCityId] = useState('');
  const [categoryId, setCategoryId] = useState(''); 
  const [image, setImage] = useState(null);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cities');
        setCities(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des villes:', err);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des catégories:', err);
      }
    };

    fetchCities();
    fetchCategories(); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!name.trim()) {
      alert('Le champ "Nom du service" est requis');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('website', website);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('city_id', cityId);
    formData.append('category_id', categoryId); 
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/add-services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      if (response.status === 201) {
        alert('Service ajouté avec succès');
       
        setName('');
        setSlug('');
        setDescription('');
        setAddress('');
        setWebsite('');
        setEmail('');
        setPhoneNumber('');
        setCityId('');
        setCategoryId(''); 
        setImage(null);
      } else {
        alert('Erreur: ' + response.data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du service:", error);
      alert("Une erreur s'est produite");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Ajouter un Service</h2>

      <Input label="Nom" value={name} onChange={setName} />
      <Input label="Slug" value={slug} onChange={setSlug} />
      <Textarea label="Description" value={description} onChange={setDescription} />
      <Input label="Adresse" value={address} onChange={setAddress} />
      <Input label="Site Web" value={website} onChange={setWebsite} />
      <Input label="Email" value={email} onChange={setEmail} type="email" />
      <Input label="Numéro de téléphone" value={phoneNumber} onChange={setPhoneNumber} />

      <FileInput label="Image" onChange={setImage} />

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Ville</label>
        <select
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sélectionnez une ville</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Ajout du champ pour la catégorie */}
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Catégorie</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Ajouter le Service
      </button>
    </form>
  );
};

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={`Entrez ${label.toLowerCase()}`}
    />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="border border-gray-300 rounded-md px-4 py-2 h-24 resize-none placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={`Entrez ${label.toLowerCase()}`}
    />
  </div>
);

const FileInput = ({ label, onChange }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-1">{label}</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onChange(e.target.files[0])}
      className="file:border file:border-gray-300 file:rounded-md file:px-4 file:py-1 file:bg-white file:text-sm file:text-gray-700"
    />
  </div>
);

export default AddService;

