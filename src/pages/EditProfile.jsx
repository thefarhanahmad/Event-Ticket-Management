
<FiCamera, FiUpload, FiSave, FiArrowLeft, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EditProfile() {
  const [profileForm, setProfileForm] = useState({
    firstName: "Farhan",
    lastName: "Akhtar",
    contactNumber: "",
    location: "",
    organizationName: "Farhan's Organization",
    email: "akhtarfarhan281@gmail.com",
    instagramUsername: "",
    profileColor: "#3B82F6"
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving profile:", profileForm);
  };

  const handlePasswordUpdate = () => {
    console.log("Updating password:", passwordForm);
    setShowPasswordModal(false);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/organizer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FiArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-white">EDIT PROFILE</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowPasswordModal(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              CHANGE PASSWORD
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors duration-200 text-sm"
            >
              SAVE
            </button>
          </div>
        </div>
      </header>

      <div className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-12">
            {/* Profile Picture Section */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white cursor-pointer"
                  style={{ backgroundColor: profileForm.profileColor }}
                >
                  F
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <FiCamera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Farhan Akhtar</h2>
                <div className="flex space-x-8">
                  <button className="text-white border-b-2 border-white pb-1 text-sm">
                    Change Password
                  </button>
                  <button className="text-gray-400 pb-1 text-sm">
                    Delete
                  </button>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileForm.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileForm.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Contact Number
                    </label>
                    <div className="flex">
                      <span className="text-gray-400 mr-2">🇺🇸 USA</span>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={profileForm.contactNumber}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profileForm.location}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={profileForm.organizationName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileForm.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Instagram Username
                    </label>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">@</span>
                      <input
                        type="text"
                        name="instagramUsername"
                        value={profileForm.instagramUsername}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Profile Color
                    </label>
                    <input
                      type="color"
                      name="profileColor"
                      value={profileForm.profileColor}
                      onChange={handleInputChange}
                      className="w-full h-10 bg-transparent border border-gray-600 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Change Your Password</h2>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); handlePasswordUpdate(); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordInputChange}
                  placeholder="Current Password"
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordInputChange}
                  placeholder="New Password"
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordInputChange}
                  placeholder="Confirm New Password"
                  required
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded font-medium transition-colors duration-200 mt-6"
              >
                UPDATE PASSWORD
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
