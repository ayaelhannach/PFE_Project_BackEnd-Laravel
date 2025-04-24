


import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CategoriesPage from "./categories"; // Liste des catégories

const AddCategory = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
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

        const categoryData = new FormData();
        categoryData.append("name", formData.name);
        categoryData.append("description", formData.description);
        if (formData.image) {
            categoryData.append("image", formData.image);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/add-cat', categoryData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAlertMessage({ type: 'success', message: 'Catégorie ajoutée avec succès' });
            setFormData({
                name: '',
                description: '',
                image: null,
            });
        } catch (error) {
            setAlertMessage({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-[#f4f1ec] rounded-xl shadow-xl space-y-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-semibold text-[#2d3748] tracking-tight">
                    Ajouter une Catégorie
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
                <div className="grid grid-cols-1 gap-8 placeholder-[#9ca3af]">
                    <InputField
                        label="Nom de la catégorie"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextareaField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <div className="flex flex-col">
                        <label htmlFor="image" className="text-lg font-medium text-[#4a5568]">
                            Image de la catégorie
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
                        onClick={() => setFormData({ name: '', description: '', image: null })}
                        className="bg-[#e2e8f0] text-[#4a5568] px-8 py-4 rounded-xl hover:bg-[#d1d5db] transition-all duration-200 text-xl"
                    >
                        Annuler
                    </Button>

                    <Button
                        type="submit"
                        className="bg-[#4a90e2] text-white px-8 py-4 rounded-xl hover:bg-[#357ab7] transition-all duration-200 text-xl"
                    >
                        Ajouter Catégorie
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

const TextareaField = ({ label, name, value, onChange }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-lg font-medium text-[#4a5568]">
            {label}
        </label>
        <Textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full py-4 px-5 mt-2 rounded-lg border-2 border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] placeholder-[#9ca3af] text-xl text-black"
        />
    </div>
);

export default AddCategory;

