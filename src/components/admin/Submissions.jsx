// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import AddSubmission from "./AddSubmission";
// import EditSubmission from "./EditSubmission";

// const SubmissionsTable = () => {
//   const [search, setSearch] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [editingSubmission, setEditingSubmission] = useState(null);
//   const [submissions, setSubmissions] = useState([]);

//   // Fetching data from the backend using axios
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/submissions")
//       .then((response) => {
//         setSubmissions(response.data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des soumissions", error);
//       });
//   }, []);

//   const filteredSubmissions = submissions.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.city.toLowerCase().includes(search.toLowerCase());
//     return matchesSearch;
//   });

//   const statusColor = {
//     Approved: "bg-green-100 text-green-700",
//     Pending: "bg-yellow-100 text-yellow-700",
//     Rejected: "bg-red-100 text-red-700",
//   };

//   const handleAddSubmission = () => {
//     setShowForm(true);
//     setEditingSubmission(null);
//   };

//   const handleEditClick = (submission) => {
//     setEditingSubmission(submission);
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setEditingSubmission(null);
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8000/submissions/${id}`)
//       .then(() => {
//         setSubmissions(submissions.filter((submission) => submission.id !== id));
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la suppression de la soumission", error);
//       });
//   };

//   const handleAddOrEditSubmission = (data) => {
//     if (editingSubmission) {
//       // Update existing submission
//       axios
//         .put(`http://localhost:8000/submissions/${editingSubmission.id}`, data)
//         .then((response) => {
//           setSubmissions(
//             submissions.map((submission) =>
//               submission.id === editingSubmission.id ? response.data : submission
//             )
//           );
//           handleCancel();
//         })
//         .catch((error) => {
//           console.error("Erreur lors de la mise à jour de la soumission", error);
//         });
//     } else {
//       // Add new submission
//       axios
//         .post("http://localhost:8000/submissions", data)
//         .then((response) => {
//           setSubmissions([...submissions, response.data]);
//           handleCancel();
//         })
//         .catch((error) => {
//           console.error("Erreur lors de l'ajout de la soumission", error);
//         });
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {!showForm && (
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-black">Soumissions</h1>
//         </div>
//       )}

//       <Card className="shadow-lg rounded-lg">
//         <CardContent className="p-4">
//           {showForm ? (
//             editingSubmission ? (
//               <EditSubmission
//                 submission={editingSubmission}
//                 onSubmit={handleAddOrEditSubmission}
//                 onCancel={handleCancel}
//               />
//             ) : (
//               <AddSubmission onSubmit={handleAddOrEditSubmission} onCancel={handleCancel} />
//             )
//           ) : (
//             <div>
//               {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//                 <Input
//                   placeholder="Rechercher par nom ou ville..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full sm:max-w-sm"
//                 />
//                 <Button
//                   onClick={handleAddSubmission}
//                   className="bg-[#0f3556] text-white hover:bg-[#b89e65] transition"
//                 >
//                   + Ajouter une Soumission
//                 </Button>
//               </div> */}

//               <div className="overflow-x-auto">
//                 <table className="min-w-full text-sm text-left border-collapse">
//                   <thead className="bg-gray-100 text-gray-600">
//                     <tr>
//                       <th className="px-4 py-2">Nom</th>
//                       <th className="px-4 py-2">Catégorie</th>
//                       <th className="px-4 py-2">Ville</th>
//                       <th className="px-4 py-2">Propriétaire</th>
//                       <th className="px-4 py-2">Adresse</th>
//                       <th className="px-4 py-2">Site Web</th>
//                       <th className="px-4 py-2">Email</th>
//                       <th className="px-4 py-2">Téléphone</th>
//                       <th className="px-4 py-2">Date</th>
//                       <th className="px-4 py-2">Statut</th>
//                       <th className="px-4 py-2 text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredSubmissions.map((item, idx) => (
//                       <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
//                         <td className="px-4 py-2">{item.name}</td>
//                         <td className="px-4 py-2">{item.category}</td>
//                         <td className="px-4 py-2">{item.city}</td>
//                         <td className="px-4 py-2">{item.owner}</td>
//                         <td className="px-4 py-2">{item.address}</td>
//                         <td className="px-4 py-2">
//                           <a
//                             href={item.website}
//                             className="text-blue-600 underline"
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             {item.website}
//                           </a>
//                         </td>
//                         <td className="px-4 py-2">{item.email}</td>
//                         <td className="px-4 py-2">{item.phone_number}</td>
//                         <td className="px-4 py-2">{item.date}</td>
//                         <td className="px-4 py-2">
//                           <span className={`px-2 py-1 text-xs rounded font-medium ${statusColor[item.status]}`}>
//                             {item.status}
//                           </span>
//                         </td>
//                         <td className="px-4 py-2 flex justify-center gap-2">
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="text-blue-600 border-blue-600 hover:bg-blue-100 flex items-center gap-1"
//                             onClick={() => handleEditClick(item)}
//                           >
//                             Refuser
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="text-red-600 border-red-600 hover:bg-red-100 flex items-center gap-1"
//                             onClick={() => handleDelete(item.id)}
//                           >
//                             Analyser
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                     {filteredSubmissions.length === 0 && (
//                       <tr>
//                         <td colSpan="11" className="text-center py-6 text-gray-500">
//                           Aucune soumission trouvée.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SubmissionsTable;






// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import axios from "axios";
// import AddSubmission from "./AddSubmission";
// import EditSubmission from "./EditSubmission";

// const SubmissionsTable = () => {
//   const [search, setSearch] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [editingSubmission, setEditingSubmission] = useState(null);
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/submissions")
//       .then((response) => {
//         setSubmissions(response.data);
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération des soumissions", error);
//       });
//   }, []);

//   const filteredSubmissions = submissions.filter((item) => {
//     const matchesSearch =
//       item.name.toLowerCase().includes(search.toLowerCase()) ||
//       item.city.toLowerCase().includes(search.toLowerCase());
//     return matchesSearch;
//   });

//   const statusColor = {
//     Approved: "bg-green-100 text-green-700",
//     Pending: "bg-yellow-100 text-yellow-700",
//     Rejected: "bg-red-100 text-red-700",
//   };

//   const handleAddSubmission = () => {
//     setShowForm(true);
//     setEditingSubmission(null);
//   };

//   const handleEditClick = (submission) => {
//     setEditingSubmission(submission);
//     setShowForm(true);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setEditingSubmission(null);
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8000/submissions/${id}`)
//       .then(() => {
//         setSubmissions(submissions.filter((submission) => submission.id !== id));
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la suppression de la soumission", error);
//       });
//   };

//   const handleAddOrEditSubmission = (data) => {
//     if (editingSubmission) {
//       axios
//         .put(`http://localhost:8000/submissions/${editingSubmission.id}`, data)
//         .then((response) => {
//           setSubmissions(
//             submissions.map((submission) =>
//               submission.id === editingSubmission.id ? response.data : submission
//             )
//           );
//           handleCancel();
//         })
//         .catch((error) => {
//           console.error("Erreur lors de la mise à jour de la soumission", error);
//         });
//     } else {
//       axios
//         .post("http://localhost:8000/submissions", data)
//         .then((response) => {
//           setSubmissions([...submissions, response.data]);
//           handleCancel();
//         })
//         .catch((error) => {
//           console.error("Erreur lors de l'ajout de la soumission", error);
//         });
//     }
//   };

//   return (
//     <div className="space-y-6 bg-white">
//       <Card className="bg-white shadow-xl rounded-2xl">
//         <CardContent className="p-6 space-y-6">
//           {!showForm && (
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <h1 className="text-2xl font-bold text-gray-800">Soumissions</h1>
//               <div className="flex gap-2">
//                 <Input
//                   placeholder="Rechercher par nom ou ville..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full sm:w-64 border border-gray-300 rounded-lg"
//                 />
//                 <Button
//                   onClick={handleAddSubmission}
//                   className="bg-[#0f3556] text-white hover:bg-[#b89e65] rounded-lg"
//                 >
//                   + Ajouter
//                 </Button>
//               </div>
//             </div>
//           )}

//           {showForm ? (
//             editingSubmission ? (
//               <EditSubmission
//                 submission={editingSubmission}
//                 onSubmit={handleAddOrEditSubmission}
//                 onCancel={handleCancel}
//               />
//             ) : (
//               <AddSubmission onSubmit={handleAddOrEditSubmission} onCancel={handleCancel} />
//             )
//           ) : (
//             <div className="overflow-auto rounded-lg border border-gray-200">
//               <table className="min-w-full text-sm text-left">
//                 <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
//                   <tr>
//                     <th className="px-4 py-3">Nom</th>
//                     <th className="px-4 py-3">Catégorie</th>
//                     <th className="px-4 py-3">Ville</th>
//                     <th className="px-4 py-3">Propriétaire</th>
//                     <th className="px-4 py-3">Adresse</th>
//                     <th className="px-4 py-3">Site Web</th>
//                     <th className="px-4 py-3">Email</th>
//                     <th className="px-4 py-3">Téléphone</th>
//                     <th className="px-4 py-3">Date</th>
//                     <th className="px-4 py-3">Statut</th>
//                     <th className="px-4 py-3 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredSubmissions.map((item, idx) => (
//                     <tr key={idx} className="border-t hover:bg-gray-50 transition-all">
//                       <td className="px-4 py-3">{item.name}</td>
//                       <td className="px-4 py-3">{item.category}</td>
//                       <td className="px-4 py-3">{item.city}</td>
//                       <td className="px-4 py-3">{item.owner}</td>
//                       <td className="px-4 py-3">{item.address}</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href={item.website}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-blue-600 underline"
//                         >
//                           {item.website}
//                         </a>
//                       </td>
//                       <td className="px-4 py-3">{item.email}</td>
//                       <td className="px-4 py-3">{item.phone_number}</td>
//                       <td className="px-4 py-3">{item.date}</td>
//                       <td className="px-4 py-3">
//                         <span className={`px-2 py-1 text-xs rounded-full font-semibold ${statusColor[item.status]}`}>
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 flex justify-center gap-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="text-blue-600 border-blue-600 hover:bg-blue-100 rounded-md"
//                           onClick={() => handleEditClick(item)}
//                         >
//                           Refuser
//                         </Button>
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="text-red-600 border-red-600 hover:bg-red-100 rounded-md"
//                           onClick={() => handleDelete(item.id)}
//                         >
//                           Analyser
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                   {filteredSubmissions.length === 0 && (
//                     <tr>
//                       <td colSpan="11" className="text-center py-6 text-gray-500">
//                         Aucune soumission trouvée.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SubmissionsTable;






import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import AddSubmission from "./AddSubmission";
import EditSubmission from "./EditSubmission";

const SubmissionsTable = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingSubmission, setEditingSubmission] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/submissions")
      .then((response) => {
        setSubmissions(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des soumissions", error);
      });
  }, []);

  const filteredSubmissions = submissions.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const statusColor = {
    Approved: { backgroundColor: "#dcfce7", color: "#15803d" },
    Pending: { backgroundColor: "#fef9c3", color: "#92400e" },
    Rejected: { backgroundColor: "#fee2e2", color: "#b91c1c" },
  };

  const handleAddSubmission = () => {
    setShowForm(true);
    setEditingSubmission(null);
  };

  const handleEditClick = (submission) => {
    setEditingSubmission(submission);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingSubmission(null);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/submissions/${id}`)
      .then(() => {
        setSubmissions(submissions.filter((submission) => submission.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la soumission", error);
      });
  };

  const handleAddOrEditSubmission = (data) => {
    if (editingSubmission) {
      axios
        .put(`http://localhost:8000/submissions/${editingSubmission.id}`, data)
        .then((response) => {
          setSubmissions(
            submissions.map((submission) =>
              submission.id === editingSubmission.id ? response.data : submission
            )
          );
          handleCancel();
        })
        .catch((error) => {
          console.error("Erreur lors de la mise à jour de la soumission", error);
        });
    } else {
      axios
        .post("http://localhost:8000/submissions", data)
        .then((response) => {
          setSubmissions([...submissions, response.data]);
          handleCancel();
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout de la soumission", error);
        });
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    padding: "2rem",
    backgroundImage: "linear-gradient(rgba(15,53,86,0.9), rgba(184,158,101,0.7)), url('/images')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#1f2937",
  };

  const searchContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "white", marginBottom: "2rem" }}>
        Liste des soumissions
      </h1>

      <Card style={{ backgroundColor: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", borderRadius: "1rem" }}>
        <CardContent style={{ padding: "2rem" }}>
          

          {showForm ? (
            editingSubmission ? (
              <EditSubmission
                submission={editingSubmission}
                onSubmit={handleAddOrEditSubmission}
                onCancel={handleCancel}
              />
            ) : (
              <AddSubmission onSubmit={handleAddOrEditSubmission} onCancel={handleCancel} />
            )
          ) : (
            <div style={{ overflowX: "auto", border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
              <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#f9fafb", textTransform: "uppercase", fontSize: "0.75rem", color: "#6b7280" }}>
                  <tr>
                    <th style={{ padding: "0.75rem" }}>Nom</th>


                    <th style={{ padding: "0.75rem" }}>Adresse</th>
                    <th style={{ padding: "0.75rem" }}>Site Web</th>
                    <th style={{ padding: "0.75rem" }}>Email</th>
                    <th style={{ padding: "0.75rem" }}>Téléphone</th>
                    <th style={{ padding: "0.75rem" }}>Date</th>
                    <th style={{ padding: "0.75rem" }}>Statut</th>
                    <th style={{ padding: "0.75rem", textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((item, idx) => (
                    <tr key={idx} style={{ borderTop: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "0.75rem" ,color:"white" }}>{item.name}</td>
                     

                      <td style={{ padding: "0.75rem" ,color:"white" }}>{item.address}</td>
                      <td style={{ padding: "0.75rem" }}>
                        <a href={item.website} target="_blank" rel="noreferrer" style={{  color:"white", textDecoration: "underline" }}>
                          {item.website}
                        </a>
                      </td>
                      <td style={{ padding: "0.75rem" ,color:"white"}}>{item.email}</td>
                      <td style={{ padding: "0.75rem" ,color:"white"}}>{item.phone_number}</td>
                      <td style={{ padding: "0.75rem" ,color:"white"}}>{item.date}</td>
                      <td style={{ padding: "0.75rem" ,color:"white"}}>
                        <span
                          style={{
                            ...statusColor[item.status],
                            padding: "0.25rem 0.5rem",
                            fontSize: "0.75rem",
                            borderRadius: "9999px",
                            fontWeight: "600",
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td style={{ padding: "0.75rem", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                        <Button
                           type="button"
                           onClick={() => {
                          if (window.confirm("Es-tu sûr de vouloir supprimer cette soumission ?")) {
                             handleDelete(item.id);
                                }
                              }}
                              style={{ border: "1px solid #dc2626", color: "#dc2626" }}
                                        >
                              Supprimer
                                </Button>

                          <Button
                
                            style={{ border: "1px solid #dc2626", color: "#dc2626" }}
                          >
                            Analyser
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredSubmissions.length === 0 && (
                    <tr>
                      <td colSpan="11" style={{ textAlign: "center", padding: "2rem", color: "#6b7280" }}>
                        Aucune soumission trouvée.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmissionsTable;
