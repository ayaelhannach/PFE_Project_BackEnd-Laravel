// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { SearchIcon } from "lucide-react";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import AddEvaluator from "./AddEvaluator";

// const EvaluatorsTable = () => {
//   const [searchText, setSearchText] = useState("");
//   const [evaluators, setEvaluators] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       username: "johnny",
//       email: "john.doe@example.com",
//       role: "admin",
//       nationality: "Moroccan",
//       birth_date: "2000-01-01",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       username: "jane_smith",
//       email: "jane.smith@example.com",
//       role: "editor",
//       nationality: "French",
//       birth_date: "1998-05-10",
//     },
//     {
//       id: 3,
//       name: "Samuel Green",
//       username: "sam_green",
//       email: "samuel.green@example.com",
//       role: "viewer",
//       nationality: "Spanish",
//       birth_date: "1995-11-22",
//     },
//   ]);
//   const [showForm, setShowForm] = useState(false);

//   const handleDelete = (id) => {
//     setEvaluators(evaluators.filter((evaluator) => evaluator.id !== id));
//   };

//   const handleEdit = (id) => {
//     console.log("Editing evaluator with ID:", id);
//   };

//   const addEvaluator = (newEvaluator) => {
//     setEvaluators((prevEvaluators) => [
//       ...prevEvaluators,
//       { id: prevEvaluators.length + 1, ...newEvaluator },
//     ]);
//   };

//   const filteredEvaluators = evaluators.filter((evaluator) =>
//     [evaluator.name, evaluator.username, evaluator.email]
//       .join(" ")
//       .toLowerCase()
//       .includes(searchText.toLowerCase())
//   );

//   return (
//     <div className="space-y-4">
//       {!showForm && (
//         <>
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-semibold text-black">Evaluators</h1>
//           </div>

//           <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center mb-6">
//             <div className="flex flex-wrap md:flex-nowrap gap-3 flex-grow">
//               <div className="relative flex-1">
//                 <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search by name, username or email"
//                   className="pl-10 pr-4 py-2 w-full md:w-1/3 bg-white border border-gray-300 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                 />
//               </div>
//             </div>

//             <Button
//               onClick={() => setShowForm(true)}
//               className="bg-[#0f3556] text-[#FFFFFF] px-4 py-2 rounded hover:bg-[#b89e65] transition"
//             >
//               Add New Evaluator
//             </Button>
//           </div>

//           <div className="shadow-lg rounded-lg">
//             <div className="p-4 overflow-x-auto">
//               <table className="min-w-full text-sm text-left border-collapse">
//                 <thead className="bg-gray-100 text-gray-600">
//                   <tr>
//                     <th className="px-4 py-2 font-medium text-black">Name</th>
//                     <th className="px-4 py-2 font-medium text-black">Username</th>
//                     <th className="px-4 py-2 font-medium text-black">Email</th>
//                     <th className="px-4 py-2 font-medium text-black">Role</th>
//                     <th className="px-4 py-2 font-medium text-black">Nationality</th>
//                     <th className="px-4 py-2 font-medium text-black">Birth Date</th>
//                     <th className="px-4 py-2 font-medium text-black">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredEvaluators.length > 0 ? (
//                     filteredEvaluators.map((evaluator) => (
//                       <tr key={evaluator.id} className="border-t hover:bg-gray-50">
//                         <td className="px-4 py-2 text-black">{evaluator.name}</td>
//                         <td className="px-4 py-2 text-black">{evaluator.username}</td>
//                         <td className="px-4 py-2 text-black">{evaluator.email}</td>
//                         <td className="px-4 py-2 text-black">{evaluator.role}</td>
//                         <td className="px-4 py-2 text-black">{evaluator.nationality}</td>
//                         <td className="px-4 py-2 text-black">{evaluator.birth_date}</td>
//                         <td className="px-4 py-2 text-black flex gap-3">
//                           <button
//                             onClick={() => handleEdit(evaluator.id)}
//                             className="text-white"
//                             title="Edit"
//                           >
//                             <FaEdit />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(evaluator.id)}
//                             className="text-white"
//                             title="Delete"
//                           >
//                             <FaTrashAlt />
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="7" className="p-4 text-center text-gray-500">
//                         No evaluators found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Display the AddEvaluator form */}
//       {showForm && <AddEvaluator setShowForm={setShowForm} addEvaluator={addEvaluator} />}
//     </div>
//   );
// };

// export default EvaluatorsTable;








import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AddEvaluator from "./AddEvaluator";
import EditEvaluator from "./EditEvaluator";

const EvaluatorsTable = () => {
  const [searchText, setSearchText] = useState("");
  const [evaluators, setEvaluators] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEvaluator, setEditingEvaluator] = useState(null);

  useEffect(() => {
    fetchEvaluators();
  }, []);

  const fetchEvaluators = async () => {
    try {
      const response = await axios.get("http://localhost:8000/evaluators");
      setEvaluators(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des évaluateurs :", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this evaluator?")) return;

    try {
      const response = await axios.delete(`http://localhost:8000/api/evaluators/${id}`);
      console.log("Deleted successfully", response.data);
      setEvaluators((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error.response?.data || error.message);
    }
  };

  const handleEdit = (evaluator) => {
    setEditingEvaluator(evaluator);
  };

  const handleUpdateEvaluator = (updatedEvaluator) => {
    setEvaluators((prev) =>
      prev.map((e) => (e.id === updatedEvaluator.id ? updatedEvaluator : e))
    );
    setEditingEvaluator(null);
  };

  const addEvaluator = (newEvaluator) => {
    setEvaluators((prev) => [...prev, newEvaluator]);
    setShowForm(false);
  };

  const filteredEvaluators = evaluators.filter((evaluator) =>
    [evaluator.name, evaluator.username, evaluator.email]
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {!showForm && !editingEvaluator && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-black">Evaluators</h1>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 items-center mb-6">
            <div className="flex flex-wrap md:flex-nowrap gap-3 flex-grow">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, username or email"
                  className="pl-10 pr-4 py-2 w-full md:w-1/3 bg-white border border-gray-300 rounded-full shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-[#c5a76f]"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#0f3556] text-white px-4 py-2 rounded hover:bg-[#b89e65] transition"
            >
              Add New Evaluator
            </Button>
          </div>

          <div className="shadow-lg rounded-lg">
            <div className="p-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-2 font-medium text-black">Name</th>
                    <th className="px-4 py-2 font-medium text-black">Username</th>
                    <th className="px-4 py-2 font-medium text-black">Email</th>
                    <th className="px-4 py-2 font-medium text-black">Role</th>
                    <th className="px-4 py-2 font-medium text-black">Nationality</th>
                    <th className="px-4 py-2 font-medium text-black">Birth Date</th>
                    <th className="px-4 py-2 font-medium text-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvaluators.length > 0 ? (
                    filteredEvaluators.map((evaluator) => (
                      <tr key={evaluator.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2 text-black">{evaluator.name}</td>
                        <td className="px-4 py-2 text-black">{evaluator.username}</td>
                        <td className="px-4 py-2 text-black">{evaluator.email}</td>
                        <td className="px-4 py-2 text-black">{evaluator.role}</td>
                        <td className="px-4 py-2 text-black">{evaluator.nationality}</td>
                        <td className="px-4 py-2 text-black">{evaluator.birth_date}</td>
                        <td className="px-4 py-2 text-black flex gap-3">
                          <button onClick={() => handleEdit(evaluator)} title="Edit">
                            <FaEdit className="text-[#0f3556]" />
                          </button>
                          <button onClick={() => handleDelete(evaluator.id)} title="Delete">
                            <FaTrashAlt className="text-red-600" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="p-4 text-center text-gray-500">
                        No evaluators found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {showForm && (
        <AddEvaluator setShowForm={setShowForm} addEvaluator={addEvaluator} />
      )}

      {editingEvaluator && (
        <EditEvaluator
          evaluator={editingEvaluator}
          onCancel={() => setEditingEvaluator(null)}
          onUpdate={handleUpdateEvaluator}
        />
      )}
    </div>
  );
};

export default EvaluatorsTable;

