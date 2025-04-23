// import { FaUser, FaFlag, FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";



// export default function SignUp() {
//   const BACKEND_URL = 'http://localhost:8000/register'
  
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit =async data => {
//     try{
//       console.log(data)

//       const response =await axios.post(BACKEND_URL,data);
//       if(response.status === 200){
//         alert('signed in');
//         console.log(response.data.Authorization.token)
//         navigate('/login');
//       }
//       console.log(response)
//     }catch(error){
//       console.log('data not valide')

//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f3556] via-[#3d4f5a] to-[#d1b089] font-sans">
//       <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold text-[#c5a76f] mb-2">Sign Up</h1>
//         <p className="text-gray-600 mb-6">
//           Add your details below to create a new account
//         </p>

//         <form className="space-y-4 text-left" onSubmit={handleSubmit(onSubmit)}>
//         <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="username">
//               Name
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaUser className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="e.g. alex123"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("name",{required:true})}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="username">
//               Username
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaUser className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="e.g. alex123"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("username",{required:true})}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="nationality">
//               Nationality
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaFlag className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 id="nationality"
//                 placeholder="e.g. Moroccan"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("nationality",{required:true})}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="username">
//               Date
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaUser className="text-gray-400 mr-2" />
//               <input
//                 type="date"
//                 id="name"
//                 placeholder="e.g. alex123"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("birth_date",{required:true})}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
//               Email address
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaEnvelope className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="e.g. alex@email.com"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("email",{required:true})}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="password">
//               Password
//             </label>
//             <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
//               <FaLock className="text-gray-400 mr-2" />
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                 {...register("password",{required:true})}
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition sign_up_button"
//           >
//             Sign up
//           </button>
//         </form>

//         <p className="text-sm text-gray-600 mt-6">
//           Already have an account?
//           <Link to="/signup_login" className="text-blue-800 font-medium hover:underline ml-1 login_link login_signin">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import { FaUser, FaFlag, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const BACKEND_URL = 'http://localhost:8000/api/register';

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Submitting...");
    try {
      const response = await axios.post(BACKEND_URL, data);
      if (response.status === 201 || response.status === 200) {
        alert('Signed in');
        console.log(response.data.Authorization.token);
        navigate('/login');
      }
    } catch (error) {
      console.log('Data not valid', error.response?.data || error.message);

      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        let message = "Registration failed:\n";

        for (const key in errors) {
          message += `${errors[key][0]}\n`;
        }

        alert(message);
      } else {
        alert('Registration failed. Please check your info or try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f3556] via-[#3d4f5a] to-[#d1b089] font-sans">
      <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#c5a76f] mb-2">Sign Up</h1>
        <p className="text-gray-600 mb-6">
          Add your details below to create a new account
        </p>

        <form className="space-y-4 text-left" onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">
              Name
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="name"
                placeholder="e.g. Alex"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="username"
                placeholder="e.g. alex123"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("username", { required: true })}
              />
            </div>
            {errors.username && <p className="text-red-500 text-sm">Username is required</p>}
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="nationality">
              Nationality
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaFlag className="text-gray-400 mr-2" />
              <input
                type="text"
                id="nationality"
                placeholder="e.g. Moroccan"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("nationality", { required: true })}
              />
            </div>
            {errors.nationality && <p className="text-red-500 text-sm">Nationality is required</p>}
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="birth_date">
              Birth Date
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="date"
                id="birth_date"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("birth_date", { required: true })}
              />
            </div>
            {errors.birth_date && <p className="text-red-500 text-sm">Birth date is required</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="e.g. alex@email.com"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition sign_up_button"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Already have an account?
          <Link to="/signup_login" className="text-blue-800 font-medium hover:underline ml-1 login_link login_signin">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}





