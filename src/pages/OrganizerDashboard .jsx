import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiLayers,
  FiLogOut,
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
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-lg flex flex-col justify-between">
        <div className="p-5">
          <h2 className="text-xl font-bold text-white">FLITE</h2>
          <h3 className="text-sm text-gray-400">My Organization</h3>
          <p className="text-gray-400 mb-4">{user?.email || ""}</p>
          <nav>
            <ul>
              {navItems.map(({ to, label, icon, exact }) => {
                const isActive = exact
                  ? location.pathname === to
                  : location.pathname.startsWith(to);

                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`flex items-center gap-3 py-2 px-4 rounded-md text-sm ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {icon}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-5 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 py-2 px-4 rounded-md text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>

      {/* Main section */}
      <div className="flex-grow p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Welcome Back, {user?.email.split("@")[0] || ""}
          </h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Try Now
          </button>
        </header>
        <main className="mt-4 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
