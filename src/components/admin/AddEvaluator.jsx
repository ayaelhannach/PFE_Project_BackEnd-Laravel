
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
