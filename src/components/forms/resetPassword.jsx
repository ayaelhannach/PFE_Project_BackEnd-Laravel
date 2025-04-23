import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f3556] via-[#3d4f5a] to-[#d1b089] font-sans">
      <div className="bg-white rounded-lg shadow-md px-12 py-14 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold text-[#c5a76f] mb-6">Renitialiser Password</h2>

        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="new-password">
              New Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                placeholder="Enter your password"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
              <button type="button" onClick={togglePasswordVisibility} className="ml-2 eyes">
                {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="confirm-password">
              Password Again
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Enter your password again"
                className="w-full outline-none text-sm text-gray-700 bg-transparent"
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="ml-2 eyes">
                {showConfirmPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition reset_password_button"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
