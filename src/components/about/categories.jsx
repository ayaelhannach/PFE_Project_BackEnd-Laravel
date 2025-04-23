import axios from "axios";
import { useEffect, useState } from "react";

export default function ExperienceGrid() {

const [categories,setCategories] = useState([]);
  useEffect(()=>{
    const fetchCategories =()=>{

      const BACKEND_URL='http://localhost:8000/categories';
      axios.get(BACKEND_URL)
      .then((response)=>{
        console.log(response.data)
        setCategories(response.data)
      })
    }
    fetchCategories();
  },[])
  
    return (
      <div className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {categories.map((item, index) => (
      <div
        key={index}
        className="relative rounded-2xl overflow-hidden shadow-lg group h-80 cursor-pointer"
      >
        <img
          src={`http://localhost:8000${item.image}`}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4">
          <h2 className="text-white text-xl font-bold">{item.name}</h2>
        </div>
      </div>
    ))}
  </div>
</div>

    );
  }
  