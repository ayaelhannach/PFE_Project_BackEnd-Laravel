// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Pencil, Trash2 } from "lucide-react";
// import AddService from "./AddService";

// export default function Services() {
//   const [services, setServices] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [selectedAddress, setSelectedAddress] = useState("");
//   const [selectedDescription, setSelectedDescription] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     axios.get("http://localhost:8000/services") // change si ton API est ailleurs
//       .then((response) => {
//         setServices(response.data);
//       })
//       .catch((error) => {
//         console.error("Erreur de chargement des services :", error);
//       });
//   }, []);

//   const addresses = [...new Set(services.map((s) => s.address))];
//   const descriptions = [...new Set(services.map((s) => s.description))];

//   const filteredServices = services.filter((service) => {
//     const matchSearch = service.name?.toLowerCase().includes(searchText.toLowerCase());
//     const matchAddress = selectedAddress ? service.address === selectedAddress : true;
//     const matchDescription = selectedDescription ? service.description === selectedDescription : true;
//     return matchSearch && matchAddress && matchDescription;
//   });

//   if (showForm) {
//     return <AddService setShowForm={setShowForm} />;
//   }

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-black">Services</h1>
//       </div>

//       <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center mb-6">
//         <div className="flex flex-wrap md:flex-nowrap gap-3 flex-grow">
//           <Input
//             placeholder="Rechercher par nom"
//             className="w-full md:w-1/3 text-black"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />

//           <select
//             className="w-full md:w-40 p-2 border border-gray-300 rounded text-black"
//             value={selectedAddress}
//             onChange={(e) => setSelectedAddress(e.target.value)}
//           >
//             <option value="">Toutes les villes</option>
//             {addresses.map((address, index) => (
//               <option key={index} value={address}>{address}</option>
//             ))}
//           </select>

//           <select
//             className="w-full md:w-52 p-2 border border-gray-300 rounded text-black"
//             value={selectedDescription}
//             onChange={(e) => setSelectedDescription(e.target.value)}
//           >
//             <option value="">Tous les types</option>
//             {descriptions.map((desc, index) => (
//               <option key={index} value={desc}>{desc}</option>
//             ))}
//           </select>
//         </div>

//         <Button
//           className="bg-[#0f3556] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#b89e65] transition"
//           onClick={() => setShowForm(true)}
//         >
//           + Ajouter un service
//         </Button>
//       </div>

//       <div className="shadow-lg rounded-lg">
//         <div className="p-4 overflow-x-auto">
//           <table className="min-w-full text-sm text-left border-collapse">
//             <thead className="bg-gray-100 text-gray-600">
//               <tr>
//                 <th className="px-4 py-2 font-medium text-black">Image</th>
//                 <th className="px-4 py-2 font-medium text-black">Nom</th>
//                 <th className="px-4 py-2 font-medium text-black">Description</th>
//                 <th className="px-4 py-2 font-medium text-black">Website</th>
//                 <th className="px-4 py-2 font-medium text-black">Adresse</th>
//                 <th className="px-4 py-2 font-medium text-black">Email</th>
//                 <th className="px-4 py-2 font-medium text-black">Ville</th>
//                 <th className="px-4 py-2 font-medium text-black">Catégorie</th>
//                 <th className="px-4 py-2 font-medium text-black">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredServices.length > 0 ? (
//                 filteredServices.map((service) => (
//                   <tr key={service.id} className="border-t hover:bg-gray-50">
//                     <td className="px-4 py-2">
//                       {service.image ? (
//                         <img src={`http://localhost:8000${service.image}`} alt={service.name} className="w-12 h-12 object-cover rounded" />
//                       ) : (
//                         <span className="text-gray-400">Aucune image</span>
//                       )}
//                     </td>
//                     <td className="px-4 py-2 text-black">{service.name}</td>
//                     <td className="px-4 py-2 text-black">{service.description}</td>
//                     <td className="px-4 py-2 text-blue-700 underline">
//                       <a href={service.website} target="_blank" rel="noreferrer">
//                         {service.website}
//                       </a>
//                     </td>
//                     <td className="px-4 py-2 text-black">{service.address}</td>
//                     <td className="px-4 py-2 text-black">{service.email}</td>
//                     <td className="px-4 py-2 text-black">{service.city?.name}</td>
//                     <td className="px-4 py-2 text-black">{service.category?.name}</td>
//                     <td className="px-4 py-2 text-black flex gap-3">
//                       <button className="text-white"><Pencil size={18} /></button>
//                       <button className="text-white"><Trash2 size={18} /></button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="9" className="p-4 text-center text-gray-500">
//                     Aucun résultat trouvé.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import AddService from "./AddService";
import EditService from "./EditService";

export default function Services() {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios.get("http://localhost:8000/services")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Erreur de chargement des services :", error));
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce service ?")) {
      axios.delete(`http://localhost:8000/api/services/${id}`)
        .then(() => {
          setServices((prevServices) =>
            prevServices.filter((service) => service.id !== id)
          );
        })
        .catch((error) => console.error("Erreur lors de la suppression :", error));
    }
  };

  const addresses = [...new Set(services.map((s) => s.address))];
  const descriptions = [...new Set(services.map((s) => s.description))];

  const filteredServices = services.filter((service) => {
    const matchSearch = service.name?.toLowerCase().includes(searchText.toLowerCase());
    const matchAddress = selectedAddress ? service.address === selectedAddress : true;
    const matchDescription = selectedDescription ? service.description === selectedDescription : true;
    return matchSearch && matchAddress && matchDescription;
  });

  const handleEditService = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  if (showForm) {
    return editingService ? (
      <EditService service={editingService} setShowForm={setShowForm} />
    ) : (
      <AddService setShowForm={setShowForm} />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Services</h1>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center mb-6">
        <div className="flex flex-wrap md:flex-nowrap gap-3 flex-grow">
          <Input
            placeholder="Rechercher par nom"
            className="w-full md:w-1/3 text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            className="w-full md:w-40 p-2 border border-gray-300 rounded text-black"
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
          >
            <option value="">Toutes les villes</option>
            {addresses.map((address, index) => (
              <option key={index} value={address}>{address}</option>
            ))}
          </select>

          <select
            className="w-full md:w-52 p-2 border border-gray-300 rounded text-black"
            value={selectedDescription}
            onChange={(e) => setSelectedDescription(e.target.value)}
          >
            <option value="">Tous les types</option>
            {descriptions.map((desc, index) => (
              <option key={index} value={desc}>{desc}</option>
            ))}
          </select>
        </div>

        <Button
          className="bg-[#0f3556] text-white px-4 py-2 rounded hover:bg-[#b89e65] transition"
          onClick={() => {
            setEditingService(null); // Reset edition
            setShowForm(true);
          }}
        >
          + Ajouter un service
        </Button>
      </div>

      <div className="shadow-lg rounded-lg">
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 font-medium text-black">Image</th>
                <th className="px-4 py-2 font-medium text-black">Nom</th>
                
                <th className="px-4 py-2 font-medium text-black">Website</th>
                <th className="px-4 py-2 font-medium text-black">Adresse</th>
                <th className="px-4 py-2 font-medium text-black">Email</th>
                <th className="px-4 py-2 font-medium text-black">Ville</th>
                <th className="px-4 py-2 font-medium text-black">Catégorie</th>
                <th className="px-4 py-2 font-medium text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <tr key={service.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">
                      {service.image ? (
                        <img src={`http://localhost:8000${service.image}`} alt={service.name} className="w-12 h-12 object-cover rounded" />
                      ) : (
                        <span className="text-gray-400">Aucune image</span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-black">{service.name}</td>
                    
                    <td className="px-4 py-2 text-blue-700 underline">
                      <a href={service.website} target="_blank" rel="noreferrer">
                        {service.website}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-black">{service.address}</td>
                    <td className="px-4 py-2 text-black">{service.email}</td>
                    <td className="px-4 py-2 text-black">{service.city?.name}</td>
                    <td className="px-4 py-2 text-black">{service.category?.name}</td>
                    <td className="px-4 py-2 text-black flex gap-3">
                      <button
                        className="text-white"
                        onClick={() => handleEditService(service)}
                        title="Éditer"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="text-white"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    Aucun résultat trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

