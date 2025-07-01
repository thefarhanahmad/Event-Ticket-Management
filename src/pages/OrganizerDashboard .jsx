import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLayers,
  FiLogOut,
  FiChevronRight,
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
    to: "/organizer/users",
    label: "Marketing",
    icon: <FiUsers />,
  },
  {
    to: "/organizer/finances",
    label: "Finances",
    icon: <FiDollarSign />,
  },
  {
    to: "/organizer/organization",
    label: "Manage Organization",
    icon: <FiSettings />,
  },
  {
    to: "/organizer/management",
    label: "Management",
    icon: <FiLayers />,
  },
];

const OrganizerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">F</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                Farhans Organization
              </p>
              <p className="text-gray-400 text-xs truncate">
                {user?.email || "admin@farhans.org"}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Navigation - Scrollable */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <ul className="space-y-2">
              {navItems.map(({ to, label, icon, exact }) => {
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
                      <FiChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? "text-gray-400" : "text-gray-600 group-hover:text-gray-400"
                      }`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Flite AI Section - Fixed */}
          <div className="flex-shrink-0 p-4 border-t border-gray-800">
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
          </div>

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
    </div>
  );
};

export default OrganizerDashboard;