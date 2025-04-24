import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import AddCity from "./addCity";
import EditCity from "./EditCity";

const CitiesTable = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCity, setEditingCity] = useState(null);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cities");
      const loadedCities = response.data.map((city) => ({
        id: city.id,
        name: city.name,
        description: city.description,
        photoURL: city.image ? `http://localhost:8000${city.image}` : "/images/default-city.jpg",
      }));
      setCities(loadedCities);
    } catch (error) {
      console.error("Erreur lors du chargement des villes :", error);
    }
  };

  const handleEdit = (city) => {
    setEditingCity(city);
    setShowAddForm(false);
  };

  const handleUpdateCity = (updatedCity) => {
    const updatedList = cities.map((city) =>
      city.id === updatedCity.id ? updatedCity : city
    );
    setCities(updatedList);
    setEditingCity(null);
  };

  const handleCancelEdit = () => {
    setEditingCity(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette ville ?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/cities/${id}`);
      setCities((prevCities) => prevCities.filter((city) => city.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de la ville :", error.response?.data || error.message);
    }
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Villes</h1>
        {!editingCity && (
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
          >
            + Ajouter une ville
          </Button>
        )}
      </div>

      {editingCity ? (
        <EditCity
          city={editingCity}
          onSave={handleUpdateCity}
          onCancel={handleCancelEdit}
        />
      ) : showAddForm ? (
        <AddCity onCityAdded={fetchCities} />
      ) : (
        <>
          <Input
            placeholder="Rechercher une ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-sm text-black placeholder-black"
          />

          <Card className="shadow-lg rounded-lg">
            <CardContent className="p-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCities.map((city) => (
                    <tr key={city.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-2">
                        <img
                          src={city.photoURL}
                          alt={city.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2">{city.name}</td>
                      <td className="px-4 py-2">{city.description}</td>
                      <td className="px-4 py-2 flex justify-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(city)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-600 hover:bg-red-100"
                          onClick={() => handleDelete(city.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {filteredCities.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center py-6 text-gray-500">
                        Aucune ville trouvée.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default CitiesTable;

