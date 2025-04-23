// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Select } from "@/components/ui/select";
// import EvaluatorsTable from "./users";

// const AddEvaluator = ({ setShowForm }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     nationality: "",
//     birthDate: "",
//   });
//   const [showTable, setShowTable] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Evaluator:", formData);

//     setFormData({
//       name: "",
//       username: "",
//       email: "",
//       role: "",
//       nationality: "",
//       birthDate: "",
//       password:""
//     });

//     setShowTable(true);
//   };

//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) {
//     return <EvaluatorsTable />;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
//           Ajouter un Évaluateur
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <InputField
//             label="password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Nationality"
//             name="nationality"
//             value={formData.nationality}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="birthdate"
//             name="birthDate"
//             value={formData.birthDate}
//             onChange={handleChange}
//             type="date"
//             placeholder="jj/mm/aaaa"
//           />
//           <SelectField
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
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
//             Ajouter Évaluateur
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
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
//       placeholder={placeholder || label}
//       className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl"
//     />
//   </div>
// );

// const SelectField = ({ label, value, onChange, name }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
//       {label}
//     </label>
//     <select
//       id={name}
//       value={value}
//       onChange={onChange}
//       name={name}
//       className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl"
//     >
//       <option value="" className="text-[#9ca3af]">Sélectionnez un rôle</option>
//       <option value="evaluator" className="text-[#9ca3af]">Evaluateur</option>
//       <option value="admin" className="text-[#9ca3af]">Administrateur</option>
//       <option value="manager" className="text-[#9ca3af]">Manager</option>
//     </select>
//   </div>
// );

// export default AddEvaluator;




// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import EvaluatorsTable from "./users";
// import axios from "axios";

// const AddEvaluator = ({ setShowForm }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     role: "",
//     nationality: "",
//     birthDate: "",  // Assurez-vous que c'est une chaîne vide, pas undefined ou null
//     password: "",
//   });
  
  
//   const [errors, setErrors] = useState({});
//   const [showTable, setShowTable] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Exemple de validation côté client
//     if (!formData.name || !formData.username || !formData.email || !formData.password) {
//       alert("Tous les champs sont obligatoires !");
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:8000/api/addUser', formData);
//       alert("Utilisateur ajouté !");
//     } catch (error) {
//       if (error.response && error.response.status === 422) {
//         // Afficher les erreurs de validation retournées par Laravel
//         setErrors(error.response.data.errors || {});
//       } else {
//         console.error("Erreur lors de l'envoi de la requête:", error);
//       }
//     }
//   };
  
//   const handleCancel = () => {
//     setShowTable(true);
//   };

//   if (showTable) {
//     return <EvaluatorsTable />;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
//           Add User
//         </h1>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             error={errors.name}
//           />
//           <InputField
//             label="Username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             error={errors.username}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             error={errors.email}
//           />
//           <InputField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             error={errors.password}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <InputField
//             label="Nationality"
//             name="nationality"
//             value={formData.nationality}
//             onChange={handleChange}
//             error={errors.nationality}
//           />
//           <InputField
//             label="Birthdate"
//             name="birthDate"
//             type="date"
//             value={formData.birthDate}
//             onChange={handleChange}
//             error={errors.birth_date}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
//           <SelectField
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             error={errors.role}
//           />
//         </div>

//         <div className="flex justify-between">
//           <Button
//             type="button"
//             onClick={handleCancel}
//             className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
//           >
//             Cancel
//           </Button>

//           <Button
//             type="submit"
//             className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
//           >
//             Add User
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange, type = "text", error }) => (
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
//       className={`w-full py-4 px-5 mt-2 rounded-lg border-2 ${
//         error ? "border-red-500" : "border-[#e2e8f0]"
//       } focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl`}
//     />
//     {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
//   </div>
// );

// const SelectField = ({ label, value, onChange, name, error }) => (
//   <div className="flex flex-col">
//     <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
//       {label}
//     </label>
//     <select
//       id={name}
//       value={value}
//       onChange={onChange}
//       name={name}
//       className={`w-full py-4 px-5 mt-2 rounded-lg border-2 ${
//         error ? "border-red-500" : "border-[#e2e8f0]"
//       } focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl`}
//     >
//       <option value="" className="text-[#9ca3af]">Select a role</option>
//       <option value="evaluator">Evaluator</option>
//       <option value="admin">Administrator</option>
//       <option value="manager">Manager</option>
//     </select>
//     {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
//   </div>
// );

// export default AddEvaluator;







import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddEvaluator = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: '',
        nationality: '',
        birth_date: ''
    });

    const [errors, setErrors] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/add-user', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    // Si vous utilisez un token d'authentification (JWT), ajoutez-le ici.
                    // 'Authorization': 'Bearer ' + token
                }
            });
            alert('User added successfully');
            setFormData({
                name: '',
                username: '',
                email: '',
                password: '',
                role: '',
                nationality: '',
                birth_date: ''
            });
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
                    Add Evaluator
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors?.name}
                    />
                    <InputField
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors?.username}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors?.email}
                    />
                    <InputField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors?.password}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        error={errors?.role}
                    />
                    <InputField
                        label="Nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        error={errors?.nationality}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="Birth Date"
                        name="birth_date"
                        type="date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        error={errors?.birth_date}
                    />
                </div>

                <div className="flex justify-between">
                    <Button
                        type="button"
                        onClick={() => setFormData({
                            name: '',
                            username: '',
                            email: '',
                            password: '',
                            role: '',
                            nationality: '',
                            birth_date: ''
                        })}
                        className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
                    >
                        Add Evaluator
                    </Button>
                </div>
            </form>
        </div>
    );
};

const InputField = ({ label, name, value, onChange, type = "text", error }) => (
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
            className={`w-full py-4 px-5 mt-2 rounded-lg border-2 ${
                error ? "border-red-500" : "border-[#e2e8f0]"
            } focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] transition-all text-xl text-black`}
        />
        {error && <span className="text-red-500 text-sm mt-2">{error[0]}</span>}
    </div>
);

export default AddEvaluator;
