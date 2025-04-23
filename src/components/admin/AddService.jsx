// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import Services from "./Services";

// export default function AddService() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     address: "",
//     email: "",
//     phone_number: "",
//   });

//   const [showTable, setShowTable] = useState(false);

//   const navigate = useNavigate();

//   // Gère les changements dans les champs du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Soumission du formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Service ajouté :", formData);

//     // Réinitialiser les champs après soumission
//     setFormData({
//       name: "",
//       description: "",
//       address: "",
//       email: "",
//       phone_number: "",
//     });

//     // Afficher la liste des services après soumission
//     setShowTable(true);
//   };

//   // Annuler l'ajout et revenir à la liste des services
//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   // Si l'état `showTable` est vrai, afficher la liste des services
//   if (showTable) {
//     return <Services />;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
//           Ajouter un Service
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField
//             label="Nom du service"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Adresse"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Numéro de téléphone"
//             name="phone_number"
//             type="tel"
//             value={formData.phone_number}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="description" className="text-lg font-medium text-[#4a5568]">
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Description du service"
//             className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
//           />
//         </div>

//         <div className="flex justify-between">
//           <Button
//             type="button"
//             onClick={handleCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
//           >
//             Annuler
//           </Button>

//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
//           >
//             Ajouter Service
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // Un petit composant pour factoriser les champs
// const InputField = ({ label, name, value, onChange, type = "text" }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       type={type}
//       placeholder={label}
//       className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
//     />
//   </div>
// );













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddService = () => {
//   const [name, setName] = useState('');
//   const [slug, setSlug] = useState('');
//   const [description, setDescription] = useState('');
//   const [address, setAddress] = useState('');
//   const [website, setWebsite] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [cityId, setCityId] = useState('');
//   const [image, setImage] = useState(null);
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     // Charger les villes depuis l'API
//     const fetchCities = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/cities');
//         setCities(response.data);
//       } catch (err) {
//         console.error('Erreur lors du chargement des villes:', err);
//       }
//     };

//     fetchCities();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation du champ "Nom" (si nécessaire)
//     if (!name.trim()) {
//       alert('Le champ "Nom du service" est requis');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('slug', slug);
//     formData.append('description', description);
//     formData.append('address', address);
//     formData.append('website', website);
//     formData.append('email', email);
//     formData.append('phone_number', phoneNumber);
//     formData.append('city_id', cityId);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/api/add-services', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Important pour l'envoi de fichiers
//         },
//       });

//       if (response.status === 201) {
//         alert('Service ajouté avec succès');
//         // Réinitialisation du formulaire
//         setName('');
//         setSlug('');
//         setDescription('');
//         setAddress('');
//         setWebsite('');
//         setEmail('');
//         setPhoneNumber('');
//         setCityId('');
//         setImage(null);
//       } else {
//         alert('Erreur: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'ajout du service:", error);
//       alert("Une erreur s'est produite");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
//       <h2 className="text-2xl font-semibold text-center mb-4">Ajouter un Service</h2>

//       <Input label="Nom" value={name} onChange={setName} />
//       <Input label="Slug" value={slug} onChange={setSlug} />
//       <Textarea label="Description" value={description} onChange={setDescription} />
//       <Input label="Adresse" value={address} onChange={setAddress} />
//       <Input label="Site Web" value={website} onChange={setWebsite} />
//       <Input label="Email" value={email} onChange={setEmail} type="email" />
//       <Input label="Numéro de téléphone" value={phoneNumber} onChange={setPhoneNumber} />

//       <FileInput label="Image" onChange={setImage} />

//       <div className="flex flex-col">
//         <label className="text-gray-700 mb-1">Ville</label>
//         <select
//           value={cityId}
//           onChange={(e) => setCityId(e.target.value)}
//           required
//           className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">Sélectionnez une ville</option>
//           {cities.map((city) => (
//             <option key={city.id} value={city.id}>
//               {city.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//       >
//         Ajouter le Service
//       </button>
//     </form>
//   );
// };

// const Input = ({ label, value, onChange, type = "text" }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 mb-1">{label}</label>
//     <input
//       type={type}
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       required
//       className="border border-gray-300 rounded-md px-4 py-2 placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       placeholder={`Entrez ${label.toLowerCase()}`}
//     />
//   </div>
// );

// const Textarea = ({ label, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 mb-1">{label}</label>
//     <textarea
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       required
//       className="border border-gray-300 rounded-md px-4 py-2 h-24 resize-none placeholder-[#9ca3af] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       placeholder={`Entrez ${label.toLowerCase()}`}
//     />
//   </div>
// );

// const FileInput = ({ label, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 mb-1">{label}</label>
//     <input
//       type="file"
//       accept="image/*"
//       onChange={(e) => onChange(e.target.files[0])}
//       className="file:border file:border-gray-300 file:rounded-md file:px-4 file:py-1 file:bg-white file:text-sm file:text-gray-700"
//     />
//   </div>
// );

// export default AddService;











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
  const [categoryId, setCategoryId] = useState(''); // Ajout de l'état pour la catégorie
  const [image, setImage] = useState(null);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]); // Ajout de l'état pour les catégories

  useEffect(() => {
    // Charger les villes depuis l'API
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cities');
        setCities(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des villes:', err);
      }
    };

    // Charger les catégories depuis l'API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des catégories:', err);
      }
    };

    fetchCities();
    fetchCategories(); // Appel pour récupérer les catégories
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation du champ "Nom" (si nécessaire)
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
    formData.append('category_id', categoryId); // Ajout de category_id
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/add-services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important pour l'envoi de fichiers
        },
      });

      if (response.status === 201) {
        alert('Service ajouté avec succès');
        // Réinitialisation du formulaire
        setName('');
        setSlug('');
        setDescription('');
        setAddress('');
        setWebsite('');
        setEmail('');
        setPhoneNumber('');
        setCityId('');
        setCategoryId(''); // Réinitialisation du champ catégorie
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

