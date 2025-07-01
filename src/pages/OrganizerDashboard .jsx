import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLayers,
  FiLogOut,
  FiChevronRight,
  FiChevronDown,
  FiSearch,
  FiPlus,
  FiX,
  FiUpload,
  FiChevronUp,
} from "react-icons/fi";

const navItems = [
  {
    to: "/organizer",
    label: "Home",
    icon: <FiHome />,
    exact: true,
  },
  {
    to: "/organizer/events",
    label: "My Events",
    icon: <FiCalendar />,
  },
  {
    label: "Marketing",
    icon: <FiUsers />,
    hasDropdown: true,
    subItems: [
      {
        to: "/organizer/marketing",
        label: "Marketing",
      },
      {
        to: "/organizer/audience",
        label: "Audience",
      },
      {
        to: "/organizer/launch-ad",
        label: "Launch Ad",
        badge: "NEW",
      },
    ],
  },
  {
    label: "Finances",
    icon: <FiDollarSign />,
    hasDropdown: true,
    subItems: [
      {
        to: "/organizer/payouts",
        label: "Payouts",
      },
      {
        to: "/organizer/disputes",
        label: "Disputes",
      },
      {
        to: "/organizer/finances",
        label: "Finances",
        badge: "NEW",
      },
    ],
  },
  {
    label: "Manage Organization",
    icon: <FiSettings />,
    hasDropdown: true,
    subItems: [
      {
        to: "/organizer/members",
        label: "Members",
      },
      {
        to: "/organizer/edit-org",
        label: "Edit Org",
      },
    ],
  },
  {
    label: "Management",
    icon: <FiLayers />,
    hasDropdown: true,
    subItems: [
      {
        to: "/organizer/management",
        label: "My Team",
      },
      {
        to: "/organizer/analytics",
        label: "Analytics",
      },
      {
        to: "/organizer/support-center",
        label: "Support Center",
        badge: "NEW",
      },
    ],
  },
];

const OrganizerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [marketingDropdownOpen, setMarketingDropdownOpen] = useState(false);
  const [financesDropdownOpen, setFinancesDropdownOpen] = useState(false);
  const [organizationDropdownOpen, setOrganizationDropdownOpen] =
    useState(false);
  const [managementDropdownOpen, setManagementDropdownOpen] = useState(false);

  // Organization selector states
  const [orgSelectorOpen, setOrgSelectorOpen] = useState(false);

  // User profile popup states
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const userProfileRef = useRef(null);
  const [createOrgModalOpen, setCreateOrgModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const orgSelectorRef = useRef(null);

  // Sample organizations data
  const [organizations] = useState([
    {
      id: 1,
      name: `${user?.name || user?.email?.split("@")[0] || "User"}'s Organization`,
      email: user?.email || "user@example.com",
      current: true,
    },
  ]);

  // Create organization form state
  const [newOrgForm, setNewOrgForm] = useState({
    name: "",
    email: "",
    customDomain: "",
    currency: "",
    country: "",
    instagram: "",
    description: "",
    location: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    // Dispatch custom event to notify navbar of user state change
    window.dispatchEvent(new Event('userStateChange'));
    navigate("/login");
  };

  // Handle clicking outside dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        orgSelectorRef.current &&
        !orgSelectorRef.current.contains(event.target)
      ) {
        setOrgSelectorOpen(false);
      }
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target)
      ) {
        setUserProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter organizations based on search term
  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle new organization form change
  const handleNewOrgFormChange = (e) => {
    const { name, value } = e.target;
    setNewOrgForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle create organization form submit
  const handleCreateOrganization = (e) => {
    e.preventDefault();
    console.log("Creating organization:", newOrgForm);
    // Add your organization creation logic here
    setCreateOrgModalOpen(false);
    setNewOrgForm({
      name: "",
      email: "",
      customDomain: "",
      currency: "",
      country: "",
      instagram: "",
      description: "",
      location: "",
    });
  };

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar - Fixed Height */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen">
        {/* Logo Section - Fixed */}
        <div className="flex-shrink-0 p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">F</span>
            </div>
            <span className="text-white font-bold text-xl">FLITE</span>
          </div>

          <div className="relative" ref={orgSelectorRef}>
            <button
              onClick={() => setOrgSelectorOpen(!orgSelectorOpen)}
              className="w-full flex items-center justify-between space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">F</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    Farhans Organization
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {user?.email || "akhtarfahraan281@gmail.com"}
                  </p>
                </div>
              </div>
              {orgSelectorOpen ? (
                <FiChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <FiChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {/* Organization Selector Popup */}
            {orgSelectorOpen && (
              <div className="absolute left-full top-0 ml-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                <div className="p-4 border-b border-gray-700">
                  <h3 className="text-white font-semibold mb-3">
                    Organizations
                  </h3>

                  {/* Search Input */}
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search Organizations"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="max-h-60 overflow-y-auto">
                  {/* Organizations List */}
                  {filteredOrganizations.map((org) => (
                    <button
                      key={org.id}
                      className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800 transition-colors duration-200 text-left"
                    >
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">
                          {org.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {org.name}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {org.email}
                        </p>
                      </div>
                      {org.current && (
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      )}
                    </button>
                  ))}

                  {/* Create Organization Button */}
                  <button
                    onClick={() => {
                      setCreateOrgModalOpen(true);
                      setOrgSelectorOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800 transition-colors duration-200 text-left border-t border-gray-700"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <FiPlus className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        Create Organization
                      </p>
                      <p className="text-gray-400 text-xs">
                        Start since day day started.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Navigation - Scrollable */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                if (item.hasDropdown) {
                  let isActive = false;
                  let dropdownOpen = false;
                  let setDropdownOpen = null;

                  if (item.label === "Marketing") {
                    isActive =
                      location.pathname.startsWith("/organizer/marketing") ||
                      location.pathname.startsWith("/organizer/audience") ||
                      location.pathname.startsWith("/organizer/launch-ad");
                    dropdownOpen = marketingDropdownOpen;
                    setDropdownOpen = setMarketingDropdownOpen;
                  } else if (item.label === "Finances") {
                    isActive =
                      location.pathname.startsWith("/organizer/payouts") ||
                      location.pathname.startsWith("/organizer/disputes") ||
                      location.pathname === "/organizer/finances";
                    dropdownOpen = financesDropdownOpen;
                    setDropdownOpen = setFinancesDropdownOpen;
                  } else if (item.label === "Manage Organization") {
                    isActive =
                      location.pathname.startsWith("/organizer/members") ||
                      location.pathname.startsWith("/organizer/organization");
                    dropdownOpen = organizationDropdownOpen;
                    setDropdownOpen = setOrganizationDropdownOpen;
                  } else if (item.label === "Management") {
                    isActive =
                      location.pathname.startsWith("/organizer/management") ||
                      location.pathname.startsWith("/organizer/analytics") ||
                      location.pathname.startsWith("/organizer/support-center");
                    dropdownOpen = managementDropdownOpen;
                    setDropdownOpen = setManagementDropdownOpen;
                  }

                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                          isActive
                            ? "bg-gray-800 text-white shadow-sm"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {dropdownOpen ? (
                          <FiChevronDown className="w-4 h-4 transition-transform duration-200 text-gray-400" />
                        ) : (
                          <FiChevronRight className="w-4 h-4 transition-transform duration-200 text-gray-600 group-hover:text-gray-400" />
                        )}
                      </button>

                      {dropdownOpen && (
                        <ul className="ml-6 mt-2 space-y-1 border-l border-gray-700 pl-4">
                          {item.subItems.map((subItem) => {
                            const isSubActive =
                              location.pathname === subItem.to;
                            return (
                              <li key={subItem.to}>
                                <Link
                                  to={subItem.to}
                                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                                    isSubActive
                                      ? "bg-gray-800 text-white shadow-sm"
                                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                  }`}
                                >
                                  <span className="font-medium">
                                    {subItem.label}
                                  </span>
                                  {subItem.badge && (
                                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                const { to, label, icon, exact } = item;
                const isActive = exact
                  ? location.pathname === to
                  : location.pathname.startsWith(to);

                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                        isActive
                          ? "bg-gray-800 text-white shadow-sm"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{icon}</span>
                        <span className="font-medium">{label}</span>
                      </div>
                      <FiChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive
                            ? "text-gray-400"
                            : "text-gray-600 group-hover:text-gray-400"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Flite AI Section - Fixed */}
          {/* <div className="flex-shrink-0 p-4 border-t border-gray-800">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-4 border border-purple-700/30">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <span className="text-white text-sm font-semibold">Flite AI</span>
                <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">Beta</span>
              </div>
              <p className="text-gray-300 text-xs mb-3">
                Your AI-powered event assistant
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200">
                Try Now
              </button>
            </div>
          </div> */}

          {/* User Section - Fixed */}
          <div className="flex-shrink-0 p-4 border-t border-gray-800">
            <div className="relative" ref={userProfileRef}>
              <button
                onClick={() => setUserProfileOpen(!userProfileOpen)}
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user?.email?.charAt(0).toUpperCase() || "F"}
                  </span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-white text-sm font-medium truncate">
                    {user?.name || user?.email?.split("@")[0] || "User"}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {user?.email || "akhtarfarhan281@gmail.com"}
                  </p>
                </div>
              </button>

              {/* User Profile Popup */}
              {userProfileOpen && (
                <div className="absolute left-full bottom-0 ml-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                  {/* User Info Header */}
                  <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user?.email?.charAt(0).toUpperCase() || "F"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">
                          {user?.name || user?.email?.split("@")[0] || "User"}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {user?.email || "akhtarfarhan281@gmail.com"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Options */}
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setUserProfileOpen(false);
                        navigate("/edit-profile");
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors duration-200 text-left"
                    >
                      <FiSettings className="w-5 h-5 text-gray-400" />
                      <span className="text-white text-sm">Edit Profile</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserProfileOpen(false);
                        navigate("/notifications");
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors duration-200 text-left"
                    >
                      <FiUsers className="w-5 h-5 text-gray-400" />
                      <span className="text-white text-sm">Notifications</span>
                    </button>

                    <div className="border-t border-gray-700 my-2"></div>

                    <button
                      onClick={() => {
                        setUserProfileOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors duration-200 text-left text-red-400 hover:text-red-300"
                    >
                      <FiLogOut className="w-5 h-5" />
                      <span className="text-sm">Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable */}
      <div className="flex-1 h-screen overflow-hidden">
        <main className="h-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Create Organization Modal */}
      {createOrgModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg border border-gray-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">MY ORG</h2>
              <button
                onClick={() => setCreateOrgModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleCreateOrganization} className="p-6 space-y-4">
              {/* Organization Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newOrgForm.name}
                  onChange={handleNewOrgFormChange}
                  placeholder="Enter a Name"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={newOrgForm.email}
                  onChange={handleNewOrgFormChange}
                  placeholder="Enter a email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Custom Domain */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Custom Domain
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="customDomain"
                    value={newOrgForm.customDomain}
                    onChange={handleNewOrgFormChange}
                    placeholder="my-org"
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <div className="bg-gray-700 border border-l-0 border-gray-600 rounded-r-lg px-4 py-3 text-gray-300 text-sm">
                    .flite.city
                  </div>
                </div>
              </div>

              {/* Currency */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Currency
                </label>
                <select
                  name="currency"
                  value={newOrgForm.currency}
                  onChange={handleNewOrgFormChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Currency</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="INR">INR - Indian Rupee</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={newOrgForm.country}
                  onChange={handleNewOrgFormChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                  <option value="AU">Australia</option>
                </select>
              </div>

              {/* Instagram */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Instagram
                </label>
                <div className="flex items-center">
                  <span className="bg-gray-700 border border-r-0 border-gray-600 rounded-l-lg px-3 py-3 text-gray-300 text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    name="instagram"
                    value={newOrgForm.instagram}
                    onChange={handleNewOrgFormChange}
                    placeholder="Enter a Name"
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-r-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={newOrgForm.description}
                  onChange={handleNewOrgFormChange}
                  placeholder="Enter a Description"
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newOrgForm.location}
                  onChange={handleNewOrgFormChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Upload Picture */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Upload Picture
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors duration-200 cursor-pointer">
                  <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload Picture</p>
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              {/* Upload Cover Picture */}
              <div>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-gray-500 transition-colors duration-200 cursor-pointer">
                  <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Upload Cover Picture</p>
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizerDashboard;
