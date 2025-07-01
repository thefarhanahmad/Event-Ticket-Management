
import { useState } from "react";
import { FiCamera, FiUpload, FiSave, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EditProfile() {
  const [profileForm, setProfileForm] = useState({
    firstName: "Farhan",
    lastName: "Akhtar",
    email: "akhtarfarhan281@gmail.com",
    phone: "",
    bio: "",
    website: "",
    location: "",
    instagram: "",
    twitter: "",
    linkedin: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving profile:", profileForm);
    // Add your save logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/organizer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FiArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Edit Profile</h1>
              <p className="text-gray-400 text-sm">
                Update your profile information
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <FiSave className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </header>

      <div className="px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture Section */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Profile Picture</h3>
                
                <div className="space-y-4">
                  <div className="relative group mx-auto w-32 h-32">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                      <span className="text-white text-3xl font-bold">F</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                      <FiCamera className="w-8 h-8 text-white" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mx-auto"
                    >
                      <FiUpload className="w-4 h-4" />
                      <span>Upload Photo</span>
                    </button>
                    <p className="text-gray-400 text-xs mt-2">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileForm.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileForm.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={profileForm.bio}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself"
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profileForm.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={profileForm.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Instagram
                      </label>
                      <div className="flex">
                        <span className="bg-gray-700 border border-r-0 border-gray-600 rounded-l-lg px-3 py-3 text-gray-300 text-sm">
                          @
                        </span>
                        <input
                          type="text"
                          name="instagram"
                          value={profileForm.instagram}
                          onChange={handleInputChange}
                          placeholder="username"
                          className="flex-1 bg-gray-800 border border-gray-600 rounded-r-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Twitter
                      </label>
                      <div className="flex">
                        <span className="bg-gray-700 border border-r-0 border-gray-600 rounded-l-lg px-3 py-3 text-gray-300 text-sm">
                          @
                        </span>
                        <input
                          type="text"
                          name="twitter"
                          value={profileForm.twitter}
                          onChange={handleInputChange}
                          placeholder="username"
                          className="flex-1 bg-gray-800 border border-gray-600 rounded-r-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        value={profileForm.linkedin}
                        onChange={handleInputChange}
                        placeholder="linkedin.com/in/username"
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
