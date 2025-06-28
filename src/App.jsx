import "./App.css";

// Components
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, useLocation } from "react-router-dom";
import EventDetailsPage from "./pages/EventDetailsPage";
import OrganizerDashboard from "./pages/OrganizerDashboard ";
import ManageEvents from "./pages/ManageEvents";
import ManageOrganization from "./pages/ManageOrganization";
import Finances from "./pages/Finances";
import Management from "./pages/Management";
import OrganizerHome from "./pages/OrganizerHome";
import ManageMarketing from "./pages/ManageUser";
import AttendeeDashboard from "./pages/AttendeeDashboard";
import CreateEvent from "./pages/CreateEvent";

export default function App() {
  const location = useLocation();

  // Hide Navbar on all routes under /organizer
  const hideNavbar = location.pathname.startsWith("/organizer");

  return (
    <div className="min-h-screen bg-slate-900">
      <>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attendee-dashboard" element={<AttendeeDashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/event/:eventId" element={<EventDetailsPage />} />
          <Route path="/organizer" element={<OrganizerDashboard />}>
            <Route index element={<OrganizerHome />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="users" element={<ManageMarketing />} />
            <Route path="finances" element={<Finances />} />
            <Route path="organization" element={<ManageOrganization />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="management" element={<Management />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}
