
import { useState } from "react";
import { FiCamera } from "react-icons/fi";

export default function AttendeeProfile() {
  const [profile, setProfile] = useState({
    firstName: "Farhan",
    lastName: "Attendee",
    phone: "090565 13532",
    email: "farhanahmad1243@gmail.com",
    instagram: "@x.farhan___",
    address: "",
    dateOfBirth: "",
    pincode: "#000",
    gender: "male"
  });

  const [notifications, setNotifications] = useState({
    featureUpdates: { email: false, push: false },
    opportunities: { email: false, push: false },
    weeklySales: { email: false, push: false }
  });

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (category, type) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: !prev[category][type]
      }
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Profile Picture Section */}
      <div className="flex items-center space-x-6 mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full flex items-center justify-center">
            <FiCamera className="w-8 h-8 text-gray-700" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Farhan Attendee</h2>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => handleProfileChange('firstName', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => handleProfileChange('lastName', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => handleProfileChange('phone', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            type="text"
            value={profile.address}
            onChange={(e) => handleProfileChange('address', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Address"
          />
        </div>
        <div>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => handleProfileChange('email', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="date"
            value={profile.dateOfBirth}
            onChange={(e) => handleProfileChange('dateOfBirth', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Date of Birth"
          />
        </div>
        <div>
          <input
            type="text"
            value={profile.instagram}
            onChange={(e) => handleProfileChange('instagram', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Instagram Handle"
          />
        </div>
        <div>
          <input
            type="text"
            value={profile.pincode}
            onChange={(e) => handleProfileChange('pincode', e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white"
            placeholder="Pincode"
          />
        </div>
      </div>

      {/* Gender Selection */}
      <div className="mb-8">
        <h3 className="text-white font-medium mb-4">Gender</h3>
        <div className="flex space-x-6">
          {['male', 'female', 'unistated'].map((gender) => (
            <label key={gender} className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={profile.gender === gender}
                onChange={(e) => handleProfileChange('gender', e.target.value)}
                className="w-4 h-4 text-white"
              />
              <span className="text-white capitalize">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Notifications Center */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h3 className="text-white font-medium mb-6">Notifications Center</h3>
        
        {Object.entries(notifications).map(([category, settings]) => (
          <div key={category} className="flex items-center justify-between mb-4">
            <span className="text-white capitalize">
              {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </span>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">On</span>
                <input
                  type="checkbox"
                  checked={settings.email}
                  onChange={() => handleNotificationChange(category, 'email')}
                  className="w-4 h-4"
                />
                <span className="text-gray-300 text-sm">Off</span>
              </label>
              <label className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">On</span>
                <input
                  type="checkbox"
                  checked={settings.push}
                  onChange={() => handleNotificationChange(category, 'push')}
                  className="w-4 h-4"
                />
                <span className="text-gray-300 text-sm">Off</span>
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-colors">
          Delete Account
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium transition-colors">
          Update
        </button>
      </div>
    </div>
  );
}
