
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function AttendeeDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("my-bookings");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const tabs = [
    { id: "my-bookings", label: "MY BOOKINGS", path: "/attendee-dashboard/my-bookings" },
    { id: "payment-details", label: "PAYMENT DETAILS", path: "/attendee-dashboard/payment-details" },
    { id: "my-reservations", label: "MY RESERVATIONS", path: "/attendee-dashboard/my-reservations" },
  ];

  const currentTab = location.pathname.split('/').pop() || "my-bookings";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-white font-bold text-xl">FLITE</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
              ABOUT US
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              EVENTS
            </Link>
            <Link to="/attendee-dashboard" className="text-white text-sm font-medium">
              MY TICKETS
            </Link>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded">
              <FiUser className="w-4 h-4" />
              <span className="text-sm">Farhan Attendee</span>
            </div>
          </div>
        </div>
      </header>

      <div className="px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">WELCOME BACK, FARHAN</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-0 bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === tab.id
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiUser className="w-4 h-4" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiLogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
