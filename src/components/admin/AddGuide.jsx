

import React, { useState, useEffect } from 'react';

const AddGuide = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [cin, setCin] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [cityId, setCityId] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    
    const fetchCities = async () => {
      try {
        const response = await fetch('http://localhost:8000/cities');
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.error('Erreur lors du chargement des villes:', err);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!username.trim()) {
      alert('Le champ "Nom d\'utilisateur" est requis');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username); 
    formData.append('description', description);
    formData.append('cin', cin);
    formData.append('address', address);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('photo', photo);
    formData.append('city_id', cityId); 

    try {
      const response = await fetch('http://localhost:8000/api/AddGuides', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Guide ajouté avec succès');
      
        setName('');
        setUsername('');
        setDescription('');
        setCin('');
        setAddress('');
        setEmail('');
        setPhoneNumber('');
        setPhoto(null);
        setCityId('');
      } else {
        alert('Erreur: ' + result.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du guide:", error);
      alert("Une erreur s'est produite");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Ajouter un Guide</h2>

      <Input label="Nom" value={name} onChange={setName} />
      <Input label="Nom d'utilisateur" value={username} onChange={setUsername} />
      <Textarea label="Description" value={description} onChange={setDescription} />
      <Input label="CIN" value={cin} onChange={setCin} />
      <Input label="Adresse" value={address} onChange={setAddress} />
      <Input label="Email" value={email} onChange={setEmail} type="email" />
      <Input label="Numéro de téléphone" value={phoneNumber} onChange={setPhoneNumber} />
      <FileInput label="Photo" onChange={setPhoto} />

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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Ajouter le Guide
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

export default AddGuide;
