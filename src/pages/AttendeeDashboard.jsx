import { Link, useNavigate } from "react-router-dom";

export default function AttendeeDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">WELCOME BACK, FARHAN</h1>
        <div className="flex items-center space-x-4">
          <Link
            to="/user/dashboard/my-reservations"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            My Reservations
          </Link>
          <Link
            to="/user/dashboard/payment-details"
            className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Payment Details
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
          {/* Upcoming events list */}
          <ul>
            <li className="bg-gray-800 rounded-md p-4 mb-2">Event 1</li>
            <li className="bg-gray-800 rounded-md p-4 mb-2">Event 2</li>
          </ul>

          <h2 className="text-lg font-semibold mb-2">Past Events</h2>
          {/* Past events list */}
          <ul>
            <li className="bg-gray-800 rounded-md p-4 mb-2">Event 3</li>
            <li className="bg-gray-800 rounded-md p-4 mb-2">Event 4</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
