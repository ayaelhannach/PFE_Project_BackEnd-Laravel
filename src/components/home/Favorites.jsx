import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./menu";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [userId] = useState(1); 

  useEffect(() => {
    fetchFavorites();
  }, [userId]);

  const fetchFavorites = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/favorites/${userId}`);
      setFavorites(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des favoris", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/favorites/${id}`);
      fetchFavorites(); 
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="px-6 py-20 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black">Vos Favoris</h2>

        {favorites.length === 0 ? (
          <p className="text-gray-600 text-lg">Aucun service ajouté aux favoris.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden border"
              >
                <img
                  src={`http://localhost:8000${fav.service.image}`}
                  alt={fav.service.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {fav.service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {fav.service.description?.substring(0, 80)}...
                  </p>
                  <button
                    onClick={() => handleDelete(fav.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
