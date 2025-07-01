import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [role, setRole] = useState("attendee");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currency: "",
    dateOfBirth: "",
    phone: "",
    organizationName: "",
    instagramHandle: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Please accept the Terms and Privacy Policy.");
      return;
    }
    
    // Store user data and trigger state change
    const userData = { role, ...formData };
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Dispatch custom event to notify navbar of user state change
    window.dispatchEvent(new Event('userStateChange'));
    
    console.log("Signup Data:", userData);
  };

  // ✅ EyeToggle inner component for reuse
  const EyeToggle = ({ visible, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
    >
      {visible ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-8 rounded-xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-md"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          Flite | OS for Creators to Grow Their Brands
        </h1>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {["attendee", "organizer"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                role === r
                  ? "bg-white text-gray-900 border-white"
                  : "text-white border-white hover:bg-white/10"
              }`}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
          />
          {role === "organizer" && (
            <input
              name="currency"
              placeholder="US Dollars $"
              onChange={handleChange}
              className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
            />
          )}
          <input
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            required
            className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
          />
          {role === "attendee" && (
            <input
              name="instagramHandle"
              placeholder="Instagram Handle"
              onChange={handleChange}
              className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
            />
          )}
          {role === "organizer" && (
            <input
              name="organizationName"
              placeholder="Organization Name"
              onChange={handleChange}
              className="w-full border border-white text-white text-sm px-3 py-2 rounded-md bg-transparent focus:outline-none"
            />
          )}
        </div>

        {/* Password Fields (both with their own toggles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full border border-white text-white text-sm px-3 py-2 pr-10 rounded-md bg-transparent focus:outline-none"
            />
            <EyeToggle
              visible={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
              className="w-full border border-white text-white text-sm px-3 py-2 pr-10 rounded-md bg-transparent focus:outline-none"
            />
            <EyeToggle
              visible={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-center text-white text-sm mb-6">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="mr-2"
          />
          I accept{" "}
          <a
            href="https://www.flite.city/TermsAndConditions"
            className="underline mx-1"
            target="_blank"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://www.flite.city/PrivacyPolicy"
            className="underline ml-1"
            target="_blank"
          >
            Privacy Policy
          </a>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-gray-900 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          TAKEOFF ON FLITE
        </button>

        {/* Footer */}
        <div className="mt-6 text-center text-white text-sm">
          Already have an account?{" "}
          <a href="/login" className="underline font-medium">
            Login
          </a>
          <p className="mt-2 text-xs opacity-50">© Flite City Corporation</p>
        </div>
      </form>
    </div>
  );
}
