// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import CitiesTable from "./Cities";

// export default function AddCity() {
//   const [formData, setFormData] = useState({
//     name: "",
//     region: "",
//     population: "",
//     photo: null,
//   });

//   const [showTable, setShowTable] = useState(false);
//   const [addedCity, setAddedCity] = useState(null); // pour renvoyer la ville avec photo

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, photo: file }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const cityData = {
//       ...formData,
//       photoURL: formData.photo ? URL.createObjectURL(formData.photo) : null,
//     };

//     console.log("Ville ajoutée :", cityData);
//     setAddedCity(cityData); // passer la ville avec la photo
//     setShowTable(true);
//   };

//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) return <CitiesTable newCity={addedCity} />;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-bg-[#f4f1ec] rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter une Ville</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <InputField label="Nom de la ville" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Région" name="region" value={formData.region} onChange={handleChange} />
//         <InputField label="Population" name="population" value={formData.population} onChange={handleChange} />
        
//         {/* Champ pour la photo */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-1">Photo de la ville</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoChange}
//             className="border border-gray-300 rounded-md px-4 py-2"
//           />
//           {formData.photo && (
//             <img
//               src={URL.createObjectURL(formData.photo)}
//               alt="Aperçu"
//               className="mt-4 h-40 object-cover rounded"
//             />
//           )}
//         </div>

//         <div className="flex justify-between">
//           <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">
//             Annuler
//           </Button>
//           <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
//             Ajouter
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 font-medium mb-1" htmlFor={name}>
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="border border-gray-300 rounded-md px-4 py-2"
//     />
//   </div>
// );


// import React, { useState } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import CitiesTable from "./Cities";

// export default function AddCity() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//   });

//   const [showTable, setShowTable] = useState(false);
//   const [addedCity, setAddedCity] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cityData = new FormData();
//     cityData.append("name", formData.name);
//     cityData.append("description", formData.description);
   

//     try {
//       const response = await axios.post("http://localhost:8000/api/AddCities", cityData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("Ville ajoutée :", response.data);

//       setAddedCity({
//         name: formData.name,
//         description: formData.description,

//       });

//       setShowTable(true);
//     } catch (error) {
//       console.error("Erreur lors de l'ajout de la ville :", error);
//     }
//   };

//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) return <CitiesTable newCity={addedCity} />;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-bg-[#f4f1ec] rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Ajouter une Ville</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <InputField label="Nom de la ville" name="name" value={formData.name} onChange={handleChange} />
//         <InputField
//           label="Description de la ville"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />



//         <div className="flex justify-between">
//           <Button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400">
//             Annuler
//           </Button>
//           <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
//             Ajouter
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-gray-700 font-medium mb-1" htmlFor={name}>
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="border border-gray-300 rounded-md px-4 py-2"
//     />
//   </div>
// );








import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddCity = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        image: null,
    });

    const [alertMessage, setAlertMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cityData = new FormData();
        cityData.append("name", formData.name);
        cityData.append("description", formData.description);
        cityData.append("location", formData.location);
        if (formData.image) {
            cityData.append("image", formData.image);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/AddCities', cityData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAlertMessage({ type: 'success', message: 'City added successfully' });
            setFormData({
                name: '',
                description: '',
                location: '',
                image: null,
            });
        } catch (error) {
            setAlertMessage({ type: 'error', message: 'An error occurred. Please try again.' });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
                    Add City
                </h1>
            </div>

            {alertMessage && (
                <div
                    className={`p-4 mb-6 rounded-lg text-white ${alertMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {alertMessage.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="City Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 gap-8 placeholder-[#9ca3af]">
                    <div className="flex flex-col">
                        <label htmlFor="image" className="text-lg font-medium text-[#4a5568]">
                            City Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl"
                        />
                    </div>
                </div>

                <div className="flex justify-between">
                    <Button
                        type="button"
                        onClick={() => setFormData({
                            name: '',
                            description: '',
                            location: '',
                            image: null,
                        })}
                        className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
                    >
                        Add City
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
            value={value}
            onChange={onChange}
            type={type}
            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl text-black"
        />
    </div>
);

export default AddCity;
