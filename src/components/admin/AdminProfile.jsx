// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminProfile = () => {
//   const [adminData, setAdminData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });

//   useEffect(() => {
//     // Fetching the admin profile data
//     axios
//       .get('/api/admin/profile')
//       .then((response) => {
//         setAdminData(response.data.admin);
//         setFormData({
//           name: response.data.admin.name,
//           email: response.data.admin.email
//         });
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the admin data!', error);
//       });
//   }, []);

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put('/api/admin/profile', formData)
//       .then((response) => {
//         setAdminData(response.data.admin);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Error updating admin data', error);
//       });
//   };

//   return (
//     <div className="admin-profile-page min-h-screen bg-gray-50">
//       <div className="container mx-auto py-12 px-6 sm:px-8 lg:px-10">
//         <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto transition-all duration-300 ease-in-out hover:scale-105">
//           <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10 tracking-wide">Admin Profile</h1>

//           {adminData ? (
//             <div className="space-y-10">
//               <div className="flex items-center justify-center space-x-6">
//                 <img
//                   src="/images/admin.png"
//                   alt="Admin"
//                   className="w-28 h-28 rounded-full border-4 border-[#c5a76f] shadow-lg transform transition duration-300 hover:scale-105"
//                 />
//                 <div>
//                   <h2 className="text-3xl font-semibold text-gray-800">{adminData.name}</h2>
//                   <p className="text-gray-600 text-sm">{adminData.last_connection}</p>
//                 </div>
//               </div>

//               <div className="space-y-6 text-lg">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-700 font-medium">Email:</span>
//                   <span className="text-gray-600">{adminData.email}</span>
//                 </div>
//               </div>

//               <div className="text-center mt-6">
//                 <button
//                   onClick={handleEditToggle}
//                   className="text-white hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
//                 >
//                   {isEditing ? 'Cancel Editing' : 'Edit Profile'}
//                 </button>
//               </div>

//               {isEditing && (
//                 <form onSubmit={handleSubmit} className="space-y-8 mt-8">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     <div className="flex flex-col space-y-4">
//                       <label className="text-gray-700 font-medium">Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300 hover:shadow-lg text-black"
//                       />
//                     </div>

//                     <div className="flex flex-col space-y-4">
//                       <label className="text-gray-700 font-medium">Email</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300 hover:shadow-lg text-black"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex justify-center mt-8">
//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;









import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Fetching the admin profile data
    axios
      .get('/api/admin/profile')
      .then((response) => {
        setAdminData(response.data.admin);
        setFormData({
          name: response.data.admin.name,
          email: response.data.admin.email
        });
      })
      .catch((error) => {
        console.error('There was an error fetching the admin data!', error);
      });
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('/api/admin/profile', formData)
      .then((response) => {
        setAdminData(response.data.admin);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating admin data', error);
      });
  };

  return (
    <div className="admin-profile-page min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-6 sm:px-8 lg:px-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto transition-all duration-300 ease-in-out hover:scale-105">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10 tracking-wide">Admin Profile</h1>

          {adminData ? (
            <div className="space-y-10">
              {/* Profile Section */}
              <div className="flex items-center justify-center space-x-6 border-b border-gray-300 pb-6">
                <img
                  src="/images/admin.png"
                  alt="Admin"
                  className="w-28 h-28 rounded-full border-4 border-[#c5a76f] shadow-lg transform transition duration-300 hover:scale-105"
                />
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800">{adminData.name}</h2>
                  <p className="text-gray-600 text-sm">Last connection: {adminData.last_connection}</p>
                </div>
              </div>

              {/* Email Section */}
              <div className=" items-center py-4">
                <h3 className="text-3xl font-semibold text-gray-800">{adminData.name}</h3>
                <h3 className="text-gray-700 font-large">Email: {adminData.email}</h3>
               
              </div>

              {/* Edit Button */}
              <div className="text-center mt-4">
                <button
                  onClick={handleEditToggle}
                  className="text-blue-600 hover:text-black-800 font-semibold transition-all duration-300 transform hover:scale-105 text-white"
                >
                  {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </button>
              </div>

              {/* Edit Profile Form */}
              {isEditing && (
                <form onSubmit={handleSubmit} className="space-y-8 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-4">
                      <label className="text-gray-700 font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300 hover:shadow-lg text-black"
                      />
                    </div>

                    <div className="flex flex-col space-y-4">
                      <label className="text-gray-700 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300 hover:shadow-lg text-black"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-600">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

