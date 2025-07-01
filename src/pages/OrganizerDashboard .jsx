import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLayers,
  FiChevronRight,
  FiChevronDown,
  FiLogOut,
  FiChevronUp,
  FiPlus,
  FiSearch,
  FiX,
  FiUpload,
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
  const [orgSwitcherOpen, setOrgSwitcherOpen] = useState(false); // Organization switcher popup state
  const [createOrgModalOpen, setCreateOrgModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
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

          {/* Organization Info - Fixed */}
          <div className="flex-shrink-0 p-4 border-b border-gray-800">
            <button
              onClick={() => setOrgSwitcherOpen(true)}
              className="flex items-center space-x-3 w-full hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">F</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-white text-sm font-medium truncate">
                  Farhans Organization
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {user?.email || "akhtar@farhan51@gmail.com"}
                </p>
              </div>
              <FiChevronDown className="w-4 h-4 text-gray-400" />
            </button>
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
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {user?.email?.charAt(0).toUpperCase() || "F"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  Farhan Akhtar
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {user?.email || "akhtar@farhan51@gmail.com"}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-all duration-200 border border-gray-700 hover:border-red-700/50"
            >
              <FiLogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable */}
      <div className="flex-1 h-screen overflow-hidden">
        <main className="h-full overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Organization Switcher Popup */}
      {orgSwitcherOpen && (
        <div className="absolute top-0 right-0 h-screen w-96 bg-gray-900 border-l border-gray-800 shadow-lg z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-white font-semibold">Switch Organization</h2>
            <button onClick={() => setOrgSwitcherOpen(false)}>
              <FiX className="w-5 h-5 text-gray-500 hover:text-gray-400" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-700 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search organization..."
                required
              />
            </div>
          </div>

          {/* Organization List */}
          <div className="p-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
            <ul>
              <li className="py-2">
                <button className="flex items-center space-x-3 w-full hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">F</span>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-white text-sm font-medium truncate">
                      Farhans Organization
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      akhtar@farhan51@gmail.com
                    </p>
                  </div>
                </button>
              </li>
              {/* Add more organizations here */}
              <li className="py-2">
                <button className="flex items-center space-x-3 w-full hover:bg-gray-800 rounded-lg p-2 transition-colors duration-200">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-white text-sm font-medium truncate">
                      Another Org
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      test@example.com
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Create Organization Button */}
          <div className="p-4 border-t border-gray-800">
            <button
              onClick={() => setCreateOrgModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <FiPlus className="w-4 h-4" />
              <span>Create Organization</span>
            </button>
          </div>
        </div>
      )}

      {/* Create Organization Modal */}
      {createOrgModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg shadow-lg w-96">
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-white font-semibold">Create Organization</h2>
              <button onClick={() => setCreateOrgModalOpen(false)}>
                <FiX className="w-5 h-5 text-gray-500 hover:text-gray-400" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              <div>
                <label
                  htmlFor="orgName"
                  className="block text-sm font-medium text-gray-400"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="orgName"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter organization name"
                />
              </div>

              <div>
                <label
                  htmlFor="orgLogo"
                  className="block text-sm font-medium text-gray-400"
                >
                  Organization Logo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-medium text-gray-400">
                    <FiUpload className="mr-2 h-4 w-4" aria-hidden="true" />
                    Upload
                  </span>
                  <input
                    type="file"
                    id="orgLogo"
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-800 flex justify-end space-x-2">
              <button
                onClick={() => setCreateOrgModalOpen(false)}
                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizerDashboard;