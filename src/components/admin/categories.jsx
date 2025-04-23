







// import React, { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import axios from "axios";

// const CategoriesPage = ({ newCategory }) => {
//   const [searchText, setSearchText] = useState("");
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/categories");
//         const loadedCategories = response.data.map((category) => ({
//           id: category.id,
//           name: category.name,
//           description: category.description,
//           photoURL: category.image
//             ? `http://localhost:8000${category.image}`
//             : "/images/default-category.jpg",
//         }));

//         if (newCategory) {
//           setCategories([...loadedCategories, newCategory]);
//         } else {
//           setCategories(loadedCategories);
//         }
//       } catch (error) {
//         console.error("Erreur lors du chargement des catégories :", error);
//       }
//     };

//     fetchCategories();
//   }, [newCategory]);

//   // 👉 Fonction de suppression
//   const handleDeleteCategory = async (id) => {
//     if (window.confirm("Voulez-vous vraiment supprimer cette catégorie ?")) {
//       try {
//         await axios.delete(`http://localhost:8000/api/categories/${id}`);
//         setCategories(categories.filter((category) => category.id !== id));
//       } catch (error) {
//         console.error("Erreur lors de la suppression :", error);
//       }
//     }
//   };

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-black">Catégories</h1>
//         <Button
//           variant="primary"
//           size="sm"
//           className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
//         >
//           + Ajouter une Catégorie
//         </Button>
//       </div>

//       <Card className="shadow-lg rounded-lg mt-4">
//         <CardContent className="p-4">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//             <Input
//               placeholder="Rechercher une catégorie"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               className="w-full sm:max-w-sm"
//             />
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-left border-collapse">
//               <thead className="bg-gray-100 text-gray-600">
//                 <tr>
//                   <th className="px-4 py-2">Photo</th>
//                   <th className="px-4 py-2">Nom</th>
//                   <th className="px-4 py-2">Description</th>
//                   <th className="px-4 py-2 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCategories.map((category) => (
//                   <tr
//                     key={category.id}
//                     className="border-t hover:bg-gray-50 transition-all"
//                   >
//                     <td className="px-4 py-2">
//                       <img
//                         src={category.photoURL}
//                         alt={category.name}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     </td>
//                     <td className="px-4 py-2">{category.name}</td>
//                     <td className="px-4 py-2">{category.description}</td>
//                     <td className="px-4 py-2 flex justify-center gap-2">
//                       <Button variant="outline" size="sm">
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="text-red-600 border-red-600 hover:bg-red-100"
//                         onClick={() => handleDeleteCategory(category.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//                 {filteredCategories.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="text-center py-6 text-gray-500">
//                       Aucune catégorie trouvée.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CategoriesPage;









import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import AddCategory from "./AddCategoryPage";
import EditCategory from "./EditCategory";

const CategoriesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories");
      const loadedCategories = response.data.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        photoURL: category.image
          ? `http://localhost:8000${category.image}`
          : "/images/default-category.jpg",
      }));
      setCategories(loadedCategories);
    } catch (error) {
      console.error("Erreur lors du chargement des catégories :", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette catégorie ?")) {
      try {
        await axios.delete(`http://localhost:8000/api/categories/${id}`);
        setCategories(categories.filter((category) => category.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };

  const handleEditClick = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
    setEditCategoryId(categoryId);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setSelectedCategory(null);
    setEditCategoryId(null);
    setIsEditing(false);
    setShowForm(false);
  };

  const handleSaveCategory = (updatedCategory) => {
    const updatedCategories = categories.map((category) =>
      category.id === updatedCategory.id ? updatedCategory : category
    );
    setCategories(updatedCategories);
    handleCancelEdit();
  };

  const handleAddCategorySuccess = () => {
    fetchCategories();
    setShowForm(false);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Catégories</h1>
        <Button
          onClick={() => {
            setShowForm(!showForm);
            if (isEditing) handleCancelEdit();
          }}
          variant="primary"
          size="sm"
          className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
        >
          {showForm ? "Fermer le formulaire" : "+ Ajouter une Catégorie"}
        </Button>
      </div>

      {showForm && (
        <div className="my-4">
          {isEditing && selectedCategory ? (
            <EditCategory
              category={selectedCategory}
              onSave={handleSaveCategory}
              onCancel={handleCancelEdit}
            />
          ) : (
            <AddCategory onCategoryAdded={handleAddCategorySuccess} />
          )}
        </div>
      )}

      <Card className="shadow-lg rounded-lg mt-4">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Input
              placeholder="Rechercher une catégorie"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full sm:max-w-sm"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Photo</th>
                  <th className="px-4 py-2">Nom</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-t hover:bg-gray-50 transition-all"
                  >
                    <td className="px-4 py-2">
                      <img
                        src={category.photoURL}
                        alt={category.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{category.name}</td>
                    <td className="px-4 py-2">{category.description}</td>
                    <td className="px-4 py-2 flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditClick(category.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-100"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {filteredCategories.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                      Aucune catégorie trouvée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesPage;

