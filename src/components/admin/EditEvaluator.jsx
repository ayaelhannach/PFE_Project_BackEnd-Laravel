// import React, { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// const EditEvaluator = ({ evaluator, onCancel, onUpdate }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     nationality: "",
//     birthDate: "",
//   });


//   const [error, setError] = useState(""); // Ajout pour gérer les erreurs
//   const [token, setToken] = useState(""); // Token d'authentification

//   // Charger les données de l'évaluateur à éditer si elles existent
//   useEffect(() => {
//     if (evaluator) {
//       setFormData({
//         name: evaluator.name || "",
//         username: evaluator.username || "",
//         email: evaluator.email || "",
//         role: evaluator.role || "",
//         nationality: evaluator.nationality || "",
//         birthDate: evaluator.birth_date || "",
//       });
//     }

//     // Si le token est déjà disponible, tu peux le récupérer depuis localStorage ou autre
//     setToken(localStorage.getItem("authToken") || "");
//   }, [evaluator]);

//   // Gestion des changements dans les champs du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Soumettre les données mises à jour
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Réinitialiser l'erreur avant chaque soumission

//     try {
//       if (!evaluator || !evaluator.id) {
//         throw new Error("Evaluateur introuvable");
//       }

//       // Log pour vérifier les données avant l'envoi
//       console.log("Données envoyées :", formData);
      
//       const response = await axios.put(
//         `http://localhost:8000/utilisateurs/${evaluator.id}`, // Utilisation de l'URL correcte
//         formData,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,  // Authentification (ajoute un token si nécessaire)
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       // Log de la réponse de l'API pour mieux comprendre le problème
//       console.log("Réponse de l'API :", response);

//       if (response.status === 200) {
//         onUpdate(response.data); // Met à jour la liste des utilisateurs dans le parent
//         alert("Utilisateur mis à jour avec succès !");
//       } else {
//         throw new Error("Erreur lors de la mise à jour de l'évaluateur.");
//       }
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour de l'évaluateur :", error);
//       setError(`Erreur lors de la mise à jour : ${error.message}`); // Afficher un message d'erreur détaillé
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
//         Modifier un Évaluateur
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {error && <div className="text-red-500 text-center">{error}</div>} {/* Afficher les erreurs */}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
//           <InputField label="Nom d'utilisateur" name="username" value={formData.username} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
//           <InputField label="Rôle" name="role" value={formData.role} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <InputField label="Nationalité" name="nationality" value={formData.nationality} onChange={handleChange} />
//           <div className="flex flex-col">
//             <label htmlFor="birthDate" className="text-lg font-medium text-[#4a5568]">Date de naissance</label>
//             <Input
//               type="date"
//               id="birthDate"
//               name="birthDate"
//               value={formData.birthDate}
//               onChange={handleChange}
//               className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl"
//             />
//           </div>
//         </div>

//         <div className="flex justify-between">
//           <Button
//             type="button"
//             onClick={onCancel}
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

// export default EditEvaluator;





import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const EditEvaluator = ({ evaluator, onCancel, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    nationality: "",
    birthDate: "",
  });

  const [error, setError] = useState(""); // Pour gérer les erreurs

  // Charger les données de l'évaluateur à éditer si elles existent
  useEffect(() => {
    if (evaluator) {
      setFormData({
        name: evaluator.name || "",
        username: evaluator.username || "",
        email: evaluator.email || "",
        role: evaluator.role || "",
        nationality: evaluator.nationality || "",
        birthDate: evaluator.birth_date || "",
      });
    }
  }, [evaluator]);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation des données avant soumission
  const validateForm = () => {
    if (!formData.name || !formData.username || !formData.email) {
      setError("Tous les champs doivent être remplis.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("L'email est invalide.");
      return false;
    }
    return true;
  };

  // Soumettre les données mises à jour
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialiser l'erreur avant chaque soumission

    // Valider les données avant envoi
    if (!validateForm()) {
      return;
    }

    if (!evaluator || !evaluator.id) {
      setError("Evaluateur introuvable");
      return;
    }

    try {
      // Log pour vérifier les données avant l'envoi
      console.log("Données envoyées :", formData);
      
      const response = await axios.put(
        `http://localhost:8000/api/utilisateurs/${evaluator.id}`, // Utilisation de l'URL correcte
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Log de la réponse de l'API
      console.log("Réponse de l'API :", response);

      if (response.status === 200) {
        onUpdate(response.data); // Met à jour la liste des utilisateurs dans le parent
        alert("Utilisateur mis à jour avec succès !");
      } else {
        throw new Error("Erreur lors de la mise à jour de l'évaluateur.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'évaluateur :", error);
      setError(`Erreur lors de la mise à jour : ${error.message}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
      <h2 className="text-center text-4xl font-semibold text-[#2d3748] mb-6">
        Modifier un Évaluateur
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {error && <div className="text-red-500 text-center">{error}</div>} {/* Afficher les erreurs */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nom" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Nom d'utilisateur" name="username" value={formData.username} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="Rôle" name="role" value={formData.role} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField label="Nationalité" name="nationality" value={formData.nationality} onChange={handleChange} />
          <div className="flex flex-col">
            <label htmlFor="birthDate" className="text-lg font-medium text-[#4a5568]">Date de naissance</label>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] text-xl"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={onCancel}
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

export default EditEvaluator;

