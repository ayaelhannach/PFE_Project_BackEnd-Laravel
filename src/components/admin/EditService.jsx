// import React, { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const EditService = ({ service, onSave, onCancel, setShowForm, setEditingService }) => {
//   const [editedService, setEditedService] = useState(service);

//   useEffect(() => {
//     setEditedService(service);
//   }, [service]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedService((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(editedService);
//     setShowForm(false); // Close the form after save
//     setEditingService(null); // Set editingService back to null to show the list
//   };

//   const handleCancel = () => {
//     setShowForm(false); // Close the form
//     setEditingService(null); // Set editingService back to null to show the list
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modifier un Service
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Nom du service" name="name" value={editedService.name} onChange={handleChange} />
//           <InputField label="Description" name="description" value={editedService.description} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Adresse" name="address" value={editedService.address} onChange={handleChange} />
//           <InputField label="Email" name="email" value={editedService.email} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Téléphone" name="phone_number" value={editedService.phone_number} onChange={handleChange} />
//         </div>

//         <div className="flex justify-between">
//           <Button
//             type="button"
//             onClick={handleCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] text-xl"
//           >
//             Annuler
//           </Button>
//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] text-xl"
//           >
//             Sauvegarder
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl text-black"
//     />
//   </div>
// );

// export default EditService;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const EditService = ({ service, setShowForm }) => {
//   const [editedService, setEditedService] = useState({ ...service });
//   const [imageFile, setImageFile] = useState(null);

//   useEffect(() => {
//     setEditedService({ ...service });
//     setImageFile(null); // reset image input
//   }, [service]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedService((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("name", editedService.name || "");
//       formData.append("description", editedService.description || "");
//       formData.append("address", editedService.address || "");
//       formData.append("email", editedService.email || "");
//       formData.append("phone_number", editedService.phone_number || "");
//       formData.append("website", editedService.website || "");
//       formData.append("city_id", editedService.city_id || "");
//       formData.append("category_id", editedService.category_id || "");

//       if (imageFile) {
//         formData.append("image", imageFile);
//       }

//       await axios.put(`http://localhost:8000/api/services/${editedService.id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setShowForm(false); // Fermer le formulaire après sauvegarde
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour :", error);
//     }
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modifier un Service
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Nom du service" name="name" value={editedService.name} onChange={handleChange} />
//           <InputField label="Description" name="description" value={editedService.description} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Adresse" name="address" value={editedService.address} onChange={handleChange} />
//           <InputField label="Email" name="email" value={editedService.email} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Téléphone" name="phone_number" value={editedService.phone_number} onChange={handleChange} />
//           <InputField label="Website" name="website" value={editedService.website} onChange={handleChange} />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-medium text-[#4a5568] mb-2">Image</label>
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="bg-white text-black border rounded-lg p-2"
//           />
//           {editedService.image && (
//             <img
//               src={`http://localhost:8000/storage/${editedService.image}`}
//               alt="Service actuel"
//               className="w-32 h-32 object-cover mt-4 rounded"
//             />
//           )}
//         </div>

//         <div className="flex justify-between">
//           <Button
//             type="button"
//             onClick={handleCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] text-xl"
//           >
//             Annuler
//           </Button>
//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] text-xl"
//           >
//             Sauvegarder
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
//       {label}
//     </label>
//     <Input
//       id={name}
//       name={name}
//       value={value || ""}
//       onChange={onChange}
//       className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl text-black"
//     />
//   </div>
// );

// export default EditService;






import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditService = ({ service, setShowForm }) => {
  const [editedService, setEditedService] = useState({ ...service });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    setEditedService({ ...service });
    setImageFile(null); // réinitialiser l'image du fichier
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", editedService.name || "");
      formData.append("description", editedService.description || "");
      formData.append("address", editedService.address || "");
      formData.append("email", editedService.email || "");
      formData.append("phone_number", editedService.phone_number || "");
      formData.append("website", editedService.website || "");
      formData.append("city_id", editedService.city_id || "");
      formData.append("category_id", editedService.category_id || "");

      // Ajouter l'image au formData si un fichier a été sélectionné
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await axios.put(
        `http://localhost:8000/api/services/${editedService.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Réponse de l'API : ", response.data); // Log la réponse pour déboguer

      if (response.status === 200) {
        setShowForm(false); // Fermer le formulaire après la mise à jour réussie
      } else {
        console.error("Erreur côté serveur :", response.data);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      if (error.response) {
        console.error("Détails de l'erreur : ", error.response.data);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier un Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nom du service" name="name" value={editedService.name} onChange={handleChange} />
          <InputField label="Description" name="description" value={editedService.description} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Adresse" name="address" value={editedService.address} onChange={handleChange} />
          <InputField label="Email" name="email" value={editedService.email} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Téléphone" name="phone_number" value={editedService.phone_number} onChange={handleChange} />
          <InputField label="Website" name="website" value={editedService.website} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-[#4a5568] mb-2">Image</label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-white text-black border rounded-lg p-2"
          />
          {editedService.image && (
            <img
              src={`http://localhost:8000/storage/${editedService.image}`}
              alt="Service actuel"
              className="w-32 h-32 object-cover mt-4 rounded"
            />
          )}
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
      value={value || ""}
      onChange={onChange}
      className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl text-black"
    />
  </div>
);

export default EditService;
