import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";

const ExperienceSection = () => {
  const scrollRef = useRef(null);
  const [experiences, setExperiences] = useState([]);
  const [userId] = useState(1); 

  useEffect(() => {
    axios.get("http://localhost:8000/services")
      .then(res => setExperiences(res.data))
      .catch(err => console.error("Erreur lors du chargement des services", err));
  }, []);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleFavorite = async (experienceId) => {
    try {
      await axios.post("http://localhost:8000/api/favorites", {
        utilisateur_id: userId,
        service_id: experienceId,
      });
      alert("Ajouté aux favoris !");
    } catch (error) {
      const message = error.response?.data?.message || "Une erreur s'est produite";
      alert("Erreur lors de l'ajout : " + message);
    }
  };

  return (
    <div className="px-6 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-black">Top Experiences</h2>
      <p className="text-gray-600 mb-8">Experience the best of Morocco</p>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronLeft className="text-gray-700" size={26} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth w-full no-scrollbar"
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex-shrink-0 bg-white rounded-2xl overflow-hidden w-80 h-96 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`http://localhost:8000${exp.image}`} // Assurez-vous que le champ 'image' contient /storage/services/xxx.jpg
                alt={exp.name}
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => handleFavorite(exp.id)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-105 transition"
              >
                <Heart className="text-gray-700" size={20} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <h3 className="font-semibold text-lg text-white">{exp.name}</h3>
                <div className="flex items-center justify-center mt-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-white">{exp.votes || 0}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <ChevronRight className="text-gray-700" size={26} />
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
