// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// export default function LoginPage() {
//   const BACKEND_URL = "http://localhost:8000/api/login";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(BACKEND_URL, data);

//       if (response.status === 200) {
//         // Stocker le token
//         const token = response.data.Authorization.token;
//         const user = response.data.user;

//         localStorage.setItem("token", token);
//         alert("Logged in");

//         // Redirection selon le rôle
//         if (user.role === "admin") {
//           navigate("/admin");
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       alert("Invalid credentials");
//       console.error("Login failed", error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-4"
//       style={{
//         background:
//           "linear-gradient(180deg, #0F3556 10%, #3C587D 28%, #8C7D60 57%, #AC9E7D 76%, #747B64 100%)",
//       }}
//     >
//       <h1 className="text-4xl italic font-bold text-[#0A2B4A] font-serif mb-6">
//         Your <span className="text-yellow-500">Compass</span>
//       </h1>

//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <p className="text-sm text-gray-600 mb-6 text-center">
//           Add your details below to get back into the app
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
//               Email address
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
//               <FaEnvelope className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="e.g. abc@gmail.com"
//                 className="w-full outline-none text-black text-sm"
//                 {...register("email", { required: true })}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm mb-1" htmlFor="password">
//               Password
//             </label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
//               <FaLock className="text-gray-400 mr-2" />
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 className="w-full outline-none text-black text-sm"
//                 {...register("password", { required: true })}
//               />
//             </div>
//           </div>

//           <div className="text-right text-sm">
//             <Link to="/forget_password" className="text-blue-800 hover:underline">
//               Forget Password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#0f3556] text-white py-2 rounded-lg font-semibold hover:bg-[#0d2d49] transition"
//           >
//             Log in
//           </button>
//         </form>

//         <p className="text-sm text-gray-600 mt-6 text-center">
//           Don't have an account?
//           <Link to="/create_signup" className="text-blue-800 hover:underline ml-1">
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const BACKEND_URL = "http://localhost:8000/api/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Vérifier si l'email et le mot de passe correspondent à ceux de l'administrateur
    if (data.email === "admin@gmail.com" && data.password === "admin123") {
      navigate("/admin");
      return;
    }

    try {
      const response = await axios.post(BACKEND_URL, data);

      if (response.status === 200) {
        // Stocker le token
        const token = response.data.Authorization.token;
        const user = response.data.user;

        localStorage.setItem("token", token);

        // Redirection selon le rôle
        alert("Logged in");

        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      alert("Invalid credentials");
      console.error("Login failed", error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(180deg, #0F3556 10%, #3C587D 28%, #8C7D60 57%, #AC9E7D 76%, #747B64 100%)",
      }}
    >
      <h1 className="text-4xl italic font-bold text-[#0A2B4A] font-serif mb-6">
        Your <span style={{color:"#8C7D60"}}>Compass</span>
      </h1>

      <div className="bg-white rounded-lg shadow-md px-8 py-10 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#c5a76f] mb-2">Login</h1>
        <p className="text-gray-600 mb-6">Add your details below to get back into the app</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
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

          <div className="text-right text-sm">
            <Link to="/forget_password" className="text-blue-800 hover:underline forget_password">
              Forget Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition login_in"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don't have an account?
          <Link to="/create_signup" className="text-blue-800 font-medium hover:underline ml-1 create_account">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}



