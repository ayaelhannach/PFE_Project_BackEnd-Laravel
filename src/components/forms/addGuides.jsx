// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from "react-router-dom";

// const ProfileForm = () => {
//   const {register,handleSubmit,formState: { errors },} = useForm();
//   const [cities,setCities] = useState([]);
//   const [file,setFile] = useState(null);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append('name',data.name);
//     formData.append('username',data.username);
//     formData.append('email',data.email);
//     formData.append('phone_number',data.phone_number);
//     formData.append('address',data.address);
//     formData.append('description',data.description);
//     formData.append('city_id',data.city_id);
//     formData.append('photo',file);
//     formData.append('cin',data.cin);

//       const BACKEND_URL='http://localhost:8000/api/guide';
//       const config = {
//         headers: {
//             "Accept": "application/json",
//         }
//     }
//     for (let pair of formData.entries()) {
//       console.log(`${pair[0]}:`, pair[1]);
//     }
//       const response = await axios.post(BACKEND_URL, formData,config);
//       console.log(response.data);
//       // try {
//       //   if (response.status === 200) {
//       //     alert('we receive your submissions we will review it in next days');
//       //   }
//       // } catch (error) {
//       //   alert("data not valid");
//       //   console.log("data not valid");
//       // }
//     };

//     useEffect(()=>{
//       const fetchCities =()=>{
        
//         const BACKEND_URL='http://localhost:8000/api/cities';
//         axios.get(BACKEND_URL)
//         .then((response)=>{
//           console.log(response.data)
//           setCities(response.data)
//         })
//       }
//       fetchCities();
//     },[])

//     const handleChange = (e) => {
//       if (e.target.files && e.target.files[0]) {
//           setFile(e.target.files[0]);
//       }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 w-full max-w-3xl space-y-4 border border-gray-200 rounded shadow-sm">
//         <h2 className="text-center text-lg text-[##c5a76f ]-500 font-medium mb-4"  style={{ color: '#c5a76f' }}>Add your Profile</h2>

//         {/* First Name */}
//         <div>
//           <label className="block text-sm text-gray-700">Name :</label>
//           <input {...register('name')}
//             type="text"
//             placeholder="first name"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block text-sm text-gray-700">@Username</label>
//           <input {...register('username')}
//             type="text"
//             placeholder="last name"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>
//         <div>
//           <label className="block text-sm capitalize">Select City :</label>
//           <select {...register('city_id')}
//             className="w-full p-2 rounded border border-gray-400 text-black"
//           >
            
//             {cities.map((item)=>(
//               <option value={item.id}>{item.name}</option>
//             ))}
//           </select>
//         </div>

//         {/* Date of Birthday */}
//         <div>
//           <label className="block text-sm text-gray-700">CIN</label>
//           <input {...register('cin')}
//             type="text"
//             placeholder="DD/MM/YY"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>

//         {/* Email Address */}
//         <div>
//           <label className="block text-sm text-gray-700">Email Adress</label>
//           <input {...register('email')}
//             type="email"
//             placeholder="your email"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>

//         {/* Number Phone */}
//         <div>
//           <label className="block text-sm text-gray-700">Phone Number :</label>
//           <input {...register('phone_number')}
//             type="tel"
//             placeholder="number Phone"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-sm text-gray-700">Address :</label>
//           <input {...register('address')}
//             type="text"
//             placeholder="Your adress"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           />
//         </div>

        
//         <div>
//           <label className="block text-sm text-gray-700">Image :</label>
//           <input onChange={handleChange}
//             type="file"
//             className="w-full h-12 p-2 bg-[#D9D9D9] text-sm border border-gray-300 rounded file:bg-transparent file:text-black file:border-none file:cursor-pointer"
//           />
//         </div>

//         {/* Experiences */}
//         <div>
//           <label className="block text-sm text-gray-700">Profile Description :</label>
//           <textarea {...register('description')}
//             placeholder="About You"
//             rows="2"
//             className="w-full p-2 border border-gray-300 rounded text-sm"
//           ></textarea>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-between pt-2 space-x-2">
//           <Link to="/your-cancel-destination"  className="w-1/2 text-xs px-2 py-1 text-gray-500 border border-gray-200 rounded shadow-lg hover:bg-gray-100 cancel_buss">

//             <button
//               type="reset"
//               className="w-1/2 text-xs px-2 py-1 text-gray-500 border border-gray-200 rounded shadow-lg hover:bg-gray-100 cancel_buss"
//             >
//               Cancel
//             </button>
//           </Link>
//           <button
//             type="submit"
//             className="w-1/2 text-xs px-2 py-1 bg-yellow-600 text-white rounded shadow-lg hover:bg-yellow-700"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProfileForm;







// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from "react-router-dom";

// const ProfileForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [cities, setCities] = useState([]);
//   const [file, setFile] = useState(null);

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('username', data.username);
//     formData.append('email', data.email);
//     formData.append('phone_number', data.phone_number);
//     formData.append('address', data.address);
//     formData.append('description', data.description);
//     formData.append('city_id', data.city_id);
//     formData.append('photo', file);
//     formData.append('cin', data.cin);

//     const BACKEND_URL = 'http://localhost:8000/api/guide';
//     const config = {
//       headers: { "Accept": "application/json" }
//     };

//     for (let pair of formData.entries()) {
//       console.log(`${pair[0]}:`, pair[1]);
//     }

//     const response = await axios.post(BACKEND_URL, formData, config);
//     console.log(response.data);
//   };

//   useEffect(() => {
//     const fetchCities = () => {
//       const BACKEND_URL = 'http://localhost:8000/api/cities';
//       axios.get(BACKEND_URL)
//         .then((response) => {
//           console.log(response.data);
//           setCities(response.data);
//         });
//     };
//     fetchCities();
//   }, []);

//   const handleChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
//       style={{
//         backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/formbuss.jpg')"
//       }}
//     >
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-[#1B1F26] bg-opacity-90 backdrop-blur p-8 md:p-10 rounded-xl w-full max-w-3xl text-white shadow-lg space-y-5"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-500">Add Your Profile</h2>

//         <div>
//           <input {...register('name')}
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <input {...register('username')}
//             type="text"
//             placeholder="@username"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <select {...register('city_id')}
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           >
//             <option value="">Select City</option>
//             {cities.map((item) => (
//               <option key={item.id} value={item.id}>{item.name}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <input {...register('cin')}
//             type="text"
//             placeholder="CIN"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <input {...register('email')}
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <input {...register('phone_number')}
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <input {...register('address')}
//             type="text"
//             placeholder="Address"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />
//         </div>

//         <div>
//           <input
//             onChange={handleChange}
//             type="file"
//             className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-white hover:file:bg-yellow-600 bg-[#2c2f36] text-white border border-gray-600 rounded-md"
//           />
//         </div>

//         <div>
//           <textarea {...register('description')}
//             placeholder="About you..."
//             rows="3"
//             className="w-full p-3 rounded-md bg-[#2c2f36] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           ></textarea>
//         </div>

//         <div className="flex justify-between space-x-4 pt-4">
//           <Link to="/your-cancel-destination" className="w-1/2">
//             <button
//               type="reset"
//               className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md text-gray-300 hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//           </Link>
//           <button
//             type="submit"
//             className="w-1/2 px-4 py-2 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProfileForm;











import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const ProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cities, setCities] = useState([]);
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);
    formData.append('address', data.address);
    formData.append('description', data.description);
    formData.append('city_id', data.city_id);
    formData.append('photo', file);
    formData.append('cin', data.cin);

    const BACKEND_URL = 'http://localhost:8000/api/guide';
    const config = {
      headers: { "Accept": "application/json" }
    };

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    const response = await axios.post(BACKEND_URL, formData, config);
    console.log(response.data);
  };

  useEffect(() => {
    const fetchCities = () => {
      const BACKEND_URL = 'http://localhost:8000/api/cities';
      axios.get(BACKEND_URL)
        .then((response) => {
          console.log(response.data);
          setCities(response.data);
        });
    };
    fetchCities();
  }, []);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/formbuss.jpg')"
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1B1F26] p-8 md:p-12 rounded-lg w-full max-w-3xl text-white space-y-6"
        style={{ backgroundColor: 'rgba(29, 35, 39, 0.6)' }}
      >
      <h2 className="text-4xl font-semibold text-center" style={{ color: 'wheat' }}>
  Add Your Profile
</h2>


        <div className="space-y-4">
          <input {...register('name')} type="text" placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input {...register('username')} type="text" placeholder="@username"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <select {...register('city_id')}
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select City</option>
            {cities.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>

          <input {...register('cin')} type="text" placeholder="CIN"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input {...register('email')} type="email" placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input {...register('phone_number')} type="tel" placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input {...register('address')} type="text" placeholder="Address"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            onChange={handleChange}
            type="file"
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold  file:text-white  text-white border border-gray-700 rounded-lg"
          />

          <textarea {...register('description')} placeholder="About you..." rows="4"
            className="w-full p-3 rounded-lg bg-[#2c2f36] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <div className="flex justify-between gap-4 pt-6">
          <Link to="/your-cancel-destination" className="w-1/2">
          <button
          style={{backgroundColor:"white" ,color:"wheat"}}
  type="reset"
  className="w-full py-3 text-sm bg-white text-black rounded-lg border border-gray-300 hover:shadow-md transition duration-200"
>
  Cancel
</button>


          </Link>
          <button
            type="submit"
            className="w-1/2 py-3 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
