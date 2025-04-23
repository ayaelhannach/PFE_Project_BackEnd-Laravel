// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// const EditCategory = ({ category, onSave, onCancel }) => {
//   const [editedCategory, setEditedCategory] = useState(category);
//   const [error, setError] = useState("");
//   const [image, setImage] = useState(null); // Pour stocker l'image sélectionnée

//   // Met à jour l'état des champs lorsqu'ils sont modifiés
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCategory({ ...editedCategory, [name]: value });
//   };

//   // Gère le changement d'image
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Enregistrer l'image sélectionnée
//     }
//   };

//   // Soumet les données du formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Réinitialiser le message d'erreur avant l'envoi de la requête

//     // Crée un FormData pour envoyer les données, y compris l'image
//     const formData = new FormData();
//     formData.append("name", editedCategory.name);
//     formData.append("description", editedCategory.description);
//     if (image) {
//       formData.append("image", image); // Ajouter l'image aux données du formulaire
//     }

//     // Récupérer le CSRF token depuis la balise <meta> dans le DOM
//     const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

//     if (!csrfToken) {
//       setError("Token CSRF introuvable.");
//       return; // Empêche l'envoi de la requête si le token est manquant
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:8000/api/categories/${editedCategory.id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Pour gérer les fichiers
//             "X-CSRF-TOKEN": csrfToken, // Ajouter le token CSRF dans les en-têtes
//           },
//         }
//       );

//       // On appelle la fonction onSave après une mise à jour réussie
//       onSave(response.data);
//     } catch (error) {
//       setError("Erreur lors de la mise à jour de la catégorie.");
//       console.error("Erreur lors de la mise à jour de la catégorie :", error);
//     }
//   };

//   // Réinitialise le formulaire si la catégorie change
//   useEffect(() => {
//     setEditedCategory(category);
//   }, [category]);

//   return (
//     <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modifier la catégorie
//       </h2>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Champ pour le nom de la catégorie */}
//         <div className="flex flex-col">
//           <label htmlFor="name" className="text-lg font-medium text-[#4a5568] mb-1">
//             Nom de la catégorie
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={editedCategory.name}
//             onChange={handleChange}
//             placeholder="Nom de la catégorie"
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Champ pour la description de la catégorie */}
//         <div className="flex flex-col">
//           <label htmlFor="description" className="text-lg font-medium text-[#4a5568] mb-1">
//             Description
//           </label>
//           <input
//             id="description"
//             name="description"
//             type="text"
//             value={editedCategory.description}
//             onChange={handleChange}
//             placeholder="Entrez la description de la catégorie"
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Champ pour télécharger l'image */}
//         <div className="flex flex-col">
//           <label htmlFor="image" className="text-lg font-medium text-[#4a5568] mb-1">
//             Image de la catégorie
//           </label>
//           <input
//             id="image"
//             name="image"
//             type="file"
//             onChange={handleImageChange}
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Boutons de soumission et d'annulation */}
//         <div className="flex justify-between mt-8">
//           <Button
//             type="button"
//             onClick={onCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
//           >
//             Annuler
//           </Button>
//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
//           >
//             Sauvegarder
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditCategory;









// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// const EditCategory = ({ category, onSave, onCancel }) => {
//   const [editedCategory, setEditedCategory] = useState(category);
//   const [error, setError] = useState("");
//   const [image, setImage] = useState(null); // Pour stocker l'image sélectionnée

//   // Met à jour l'état des champs lorsqu'ils sont modifiés
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCategory({ ...editedCategory, [name]: value });
//   };

//   // Gère le changement d'image
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Enregistrer l'image sélectionnée
//     }
//   };

//   // Soumet les données du formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Réinitialiser le message d'erreur avant l'envoi de la requête

//     // Crée un FormData pour envoyer les données, y compris l'image
//     const formData = new FormData();
//     formData.append("name", editedCategory.name);
//     formData.append("description", editedCategory.description);
//     if (image) {
//       formData.append("image", image); // Ajouter l'image aux données du formulaire
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:8000/api/categories/${editedCategory.id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Pour gérer les fichiers
//           },
//         }
//       );

//       // Appeler la fonction onSave après une mise à jour réussie
//       onSave(response.data);
//     } catch (error) {
//       setError("Erreur lors de la mise à jour de la catégorie.");
//       console.error("Erreur lors de la mise à jour de la catégorie :", error);
//     }
//   };

//   // Réinitialise le formulaire si la catégorie change
//   useEffect(() => {
//     setEditedCategory(category);
//   }, [category]);

//   return (
//     <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modifier la catégorie
//       </h2>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Champ pour le nom de la catégorie */}
//         <div className="flex flex-col">
//           <label htmlFor="name" className="text-lg font-medium text-[#4a5568] mb-1">
//             Nom de la catégorie
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={editedCategory.name}
//             onChange={handleChange}
//             placeholder="Nom de la catégorie"
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Champ pour la description de la catégorie */}
//         <div className="flex flex-col">
//           <label htmlFor="description" className="text-lg font-medium text-[#4a5568] mb-1">
//             Description
//           </label>
//           <input
//             id="description"
//             name="description"
//             type="text"
//             value={editedCategory.description}
//             onChange={handleChange}
//             placeholder="Entrez la description de la catégorie"
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Champ pour télécharger l'image */}
//         <div className="flex flex-col">
//           <label htmlFor="image" className="text-lg font-medium text-[#4a5568] mb-1">
//             Image de la catégorie
//           </label>
//           <input
//             id="image"
//             name="image"
//             type="file"
//             onChange={handleImageChange}
//             className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
//           />
//         </div>

//         {/* Boutons de soumission et d'annulation */}
//         <div className="flex justify-between mt-8">
//           <Button
//             type="button"
//             onClick={onCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
//           >
//             Annuler
//           </Button>
//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
//           >
//             Sauvegarder
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditCategory;





import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const EditCategory = ({ category, onSave, onCancel }) => {
  const [editedCategory, setEditedCategory] = useState(category);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null); // Pour stocker l'image sélectionnée
  const [imagePreview, setImagePreview] = useState(""); // Pour stocker la prévisualisation de l'image

  // Met à jour l'état des champs lorsqu'ils sont modifiés
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory({ ...editedCategory, [name]: value });
  };

  // Gère le changement d'image et met à jour la prévisualisation
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Enregistrer l'image sélectionnée
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Mettre à jour la prévisualisation de l'image
      };
      reader.readAsDataURL(file); // Lire l'image et obtenir l'URL pour prévisualisation
    }
  };

  // Soumet les données du formulaire (modification statique)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Réinitialiser le message d'erreur avant l'envoi de la requête

    // Simuler la mise à jour de la catégorie localement
    const updatedCategory = { ...editedCategory, image };
    onSave(updatedCategory); // Appeler onSave avec la catégorie mise à jour localement
  };

  // Réinitialise le formulaire si la catégorie change
  useEffect(() => {
    setEditedCategory(category);
    setImage(null); // Réinitialiser l'image à chaque changement de catégorie
    setImagePreview(""); // Réinitialiser la prévisualisation
  }, [category]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier la catégorie
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ pour le nom de la catégorie */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-[#4a5568] mb-1">
            Nom de la catégorie
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={editedCategory.name}
            onChange={handleChange}
            placeholder="Nom de la catégorie"
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
        </div>

        {/* Champ pour la description de la catégorie */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-[#4a5568] mb-1">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={editedCategory.description}
            onChange={handleChange}
            placeholder="Entrez la description de la catégorie"
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
        </div>

        {/* Champ pour télécharger l'image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium text-[#4a5568] mb-1">
            Image de la catégorie
          </label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
            className="w-full py-3 px-4 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-lg text-black"
          />
          {/* Prévisualisation de l'image sélectionnée */}
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Prévisualisation"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Boutons de soumission et d'annulation */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            onClick={onCancel}
            className="bg-[#e2e8f0] text-[#4a5568] px-6 py-3 rounded-xl hover:bg-[#d1d5db] text-lg"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="bg-[#4a90e2] text-white px-6 py-3 rounded-xl hover:bg-[#357ab7] text-lg"
          >
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
