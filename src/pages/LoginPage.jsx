import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { loginUser } from "../store/slices/authSlice";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    role: "attendee",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (role) => {
    setCredentials((prev) => ({ ...prev, role }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit click: ");

    // Dispatch login action to Redux store
    dispatch(
      loginUser({
        user: credentials,
        token: `token_${Date.now()}`, // Generate a mock token
      })
    );
    toast.success("Login successfully!");
    if (credentials.role === "organizer") {
      navigate("/organizer");
    } else {
      navigate("/attendee-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-xl shadow-2xl border border-slate-300/20 bg-white/5 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login
        </h2>

        {/* Role Selector */}
        <div className="flex justify-between mb-6 bg-slate-800/50 border border-slate-400 rounded-lg p-1">
          {["attendee", "organizer"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleSelect(role)}
              className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                credentials.role === role
                  ? "bg-slate-100 text-slate-800 shadow"
                  : "text-slate-400 hover:bg-slate-700"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        {/* Email Input */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <div className="flex items-center border border-slate-400 rounded-md px-3 py-2 bg-slate-800/40">
            <HiOutlineMail className="text-slate-400 mr-2 text-lg" />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full text-sm text-white bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Password Input with Eye Toggle */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Password
          </label>
          <div className="flex items-center border border-slate-400 rounded-md px-3 py-2 bg-slate-800/40">
            <RiLockPasswordLine className="text-slate-400 mr-2 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full text-sm text-white bg-transparent pr-8 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 text-slate-400 hover:text-slate-200"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-2 rounded-md font-medium hover:bg-slate-800 transition-colors duration-200"
        >
          Log In
        </button>

        {/* Links */}
        <div className="mt-4 text-sm text-center text-slate-400">
          <p className="mb-2">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-slate-200 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <p>
            Forgot your password?{" "}
            <Link
              to="/reset-password"
              className="text-slate-200 font-medium hover:underline"
            >
              Reset
            </Link>
          </p>
        </div>
      </motion.form>
    </div>
  );
}
