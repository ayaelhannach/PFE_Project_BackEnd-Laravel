// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";

// // const EditCity = ({ cityId, onSave, onCancel }) => {
// //   const [city, setCity] = useState({
// //     id: cityId,
// //     name: "",
// //     description: "",
// //     image: null,
// //   });

// //   useEffect(() => {
// //     const fetchCity = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8000/cities/${cityId}`);
// //         const data = response.data;
// //         setCity({
// //           id: data.id,
// //           name: data.name,
// //           description: data.description,
// //           photo: null, // Ne pas charger l'image ici, on la change manuellement
// //         });
// //       } catch (error) {
// //         console.error("Erreur lors du chargement de la ville :", error);
// //       }
// //     };

// //     fetchCity();
// //   }, [cityId]);

// //   const handleFileChange = (e) => {
// //     setCity({ ...city, photo: e.target.files[0] });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Créez un FormData pour inclure l'image et les autres champs
// //     const formData = new FormData();
// //     formData.append("name", city.name);
// //     formData.append("description", city.description);
// //     if (city.photo) {
// //       formData.append("photo", city.photo); // Ajoutez l'image si elle a été sélectionnée
// //     }

// //     try {
// //       // Effectuez l'appel PUT pour mettre à jour la ville dans la base de données
// //       const response = await axios.put(
// //         `http://localhost:8000/api/cities/${city.id}`,
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data", // Spécifiez le type de contenu pour l'upload de fichiers
// //           },
// //         }
// //       );
// //       // Si la mise à jour réussit, appelez la fonction de rappel onSave
// //       onSave(response.data);
// //     } catch (error) {
// //       console.error("Erreur lors de la mise à jour de la ville :", error);
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
// //       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
// //         Modifier la Ville
// //       </h2>

// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         {/* Nom de la ville */}
// //         <InputField
// //           label="Nom de la ville"
// //           name="name"
// //           placeholder="Ex : Casablanca"
// //           value={city.name}
// //           onChange={(e) => setCity({ ...city, name: e.target.value })}
// //         />

// //         {/* Description */}
// //         <InputField
// //           label="Description"
// //           name="description"
// //           placeholder="Entrez une description courte de la ville"
// //           value={city.description}
// //           onChange={(e) => setCity({ ...city, description: e.target.value })}
// //         />

// //         {/* Image */}
// //         <div className="flex flex-col ">
// //           <label htmlFor="photo" className="text-lg font-medium text-[#4a5568] mb-1">
// //             Image
// //           </label>
// //           <Input
// //             id="photo"
// //             name="photo"
// //             type="file"
// //             accept="image/*"
// //             onChange={handleFileChange}
// //             className="w-full rounded-lg border-2 border-[#e2e8f0] py-2 px-4 text-lg"
// //           />
// //         </div>

// //         {/* Boutons */}
// //         <div className="flex justify-between mt-8">
// //           <Button
// //             type="button"
// //             onClick={onCancel}
// //             className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
// //           >
// //             Annuler
// //           </Button>
// //           <Button
// //             type="submit"
// //             className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
// //           >
// //             Sauvegarder
// //           </Button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
// //   <div className="flex flex-col">
// //     <label htmlFor={name} className="text-lg font-medium text-[#4a5568] mb-1">
// //       {label}
// //     </label>
// //     <Input
// //       id={name}
// //       name={name}
// //       type={type}
// //       placeholder={placeholder}
// //       value={value}
// //       onChange={onChange}
// //       className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
// //     />
// //   </div>
// // );

// // export default EditCity;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const EditCity = ({ cityId, onSave, onCancel }) => {
//   const [city, setCity] = useState({
//     id: cityId,
//     name: "",
//     description: "",
//     photo: null,
//   });

//   useEffect(() => {
//     const fetchCity = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/cities/${cityId}`);
//         const data = response.data;
//         setCity({
//           id: data.id,
//           name: data.name,
//           description: data.description,
//           photo: null, // Do not load the image here, it will be changed manually
//         });
//       } catch (error) {
//         console.error("Error loading city data:", error);
//       }
//     };

//     fetchCity();
//   }, [cityId]);

//   const handleFileChange = (e) => {
//     setCity({ ...city, photo: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData to include the image and other fields
//     const formData = new FormData();
//     formData.append("name", city.name);
//     formData.append("description", city.description);
//     if (city.photo) {
//       formData.append("photo", city.photo); // Add the image if selected
//     }

//     try {
//       // Make a PUT request to update the city in the database
//       const response = await axios.put(
//         `http://localhost:8000/api/cities/${city.id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Specify content type for file upload
//           },
//         }
//       );
//       // Call onSave callback if the update is successful
//       onSave(response.data);
//     } catch (error) {
//       console.error("Error updating city:", error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modify City
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* City Name */}
//         <InputField
//           label="City Name"
//           name="name"
//           placeholder="e.g., Casablanca"
//           value={city.name}
//           onChange={(e) => setCity({ ...city, name: e.target.value })}
//         />

//         {/* City Description */}
//         <InputField
//           label="Description"
//           name="description"
//           placeholder="Enter a short description of the city"
//           value={city.description}
//           onChange={(e) => setCity({ ...city, description: e.target.value })}
//         />

//         {/* City Image */}
//         <div className="flex flex-col">
//           <label htmlFor="photo" className="text-lg font-medium text-[#4a5568] mb-1">
//             Image
//           </label>
//           <Input
//             id="photo"
//             name="photo"
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full rounded-lg border-2 border-[#e2e8f0] py-2 px-4 text-lg"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between mt-8">
//           <Button
//             type="button"
//             onClick={onCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
//           >
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
//           >
//             Save
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568] mb-1">
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//     />
//   </div>
// );

// export default EditCity;











// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const EditCity = ({ city, onSave, onCancel }) => {
//   const [updatedCity, setUpdatedCity] = useState({
//     id: city.id,
//     name: city.name,
//     description: city.description,
//     image: city.photoURL ? city.photoURL : "", // Initialiser avec l'ancienne image si disponible
//   });

//   const [imageFile, setImageFile] = useState(null);

//   useEffect(() => {
//     setUpdatedCity({
//       id: city.id,
//       name: city.name,
//       description: city.description,
//       image: city.photoURL ? city.photoURL : "",
//     });
//     setImageFile(null); // Réinitialiser le fichier image lorsque l'édition commence
//   }, [city]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedCity((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const handleSave = () => {
//     if (imageFile) {
//       // Vous pouvez utiliser FormData pour envoyer le fichier image vers le backend
//       // Exemple : formData.append('image', imageFile);
//     }

//     onSave(updatedCity); // Passez la ville mise à jour au parent
//   };

//   return (
//     <div className="space-y-4 p-4">
//       <h2 className="text-2xl font-bold text-black">Modifier la ville</h2>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Nom de la ville</label>
//         <Input
//           type="text"
//           name="name"
//           value={updatedCity.name}
//           onChange={handleInputChange}
//           className="mt-2 text-black"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <Textarea
//           name="description"
//           value={updatedCity.description}
//           onChange={handleInputChange}
//           className="mt-2 text-black"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Image</label>
//         <Input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           className="mt-2 text-black"
//         />
//         {imageFile && <p className="text-sm text-gray-600 mt-2 text-black">Image sélectionnée: {imageFile.name}</p>}
//       </div>

//       {updatedCity.image && !imageFile && (
//         <div className="mt-4">
//           <p>Image actuelle :</p>
//           <img
//             src={`/src/assets/${updatedCity.image}`}
//             alt="Ville"
//             className="mt-2 w-32 h-32 object-cover"
//           />
//         </div>
//       )}

//       <div className="flex justify-between mt-4">
//         <Button onClick={onCancel} variant="outline" size="sm">
//           Annuler
//         </Button>
//         <Button
//           onClick={handleSave}
//           className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
//         >
//           Sauvegarder
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditCity;













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
      // Préparation de l'image avec FormData peut être faite ici
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
