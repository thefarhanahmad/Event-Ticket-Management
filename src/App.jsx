import "./App.css";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
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
import ManageUser from "./pages/ManageUser";
import CreateEvent from "./pages/CreateEvent";
import Marketing from "./pages/Marketing";
import Audience from "./pages/Audience";
import LaunchAd from "./pages/LaunchAd";
import AttendeeDashboard from "./pages/AttendeeDashboard";
import MyBookings from "./pages/MyBookings";
import PaymentDetails from "./pages/PaymentDetails";
import MyReservations from "./pages/MyReservations";
import AttendeeProfile from "./pages/AttendeeProfile";
import AboutPage from "./pages/AboutPage";
import Payouts from "./pages/Payouts";
import Disputes from "./pages/Disputes";
import Members from "./pages/Members";
import Analytics from "./pages/Analytics";
import SupportCenter from "./pages/SupportCenter";
import EditOrg from "./pages/EditOrg";
import EditProfile from "./pages/EditProfile";
import Notifications from "./pages/Notifications";
import ResetPasswordPage from "./pages/ResetPasswordPage"; //Import the new Page

function AppContent() {
  const location = useLocation();

  // Hide Navbar on all routes under /organizer
  const hideNavbar = location.pathname.startsWith("/organizer");

  return (
    <div className="min-h-screen bg-slate-900">
      <>
        {!hideNavbar && <Navbar />}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #475569',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#dc2626',
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attendee-dashboard" element={
            <ProtectedRoute allowedRoles={['attendee', 'organizer']}>
              <AttendeeDashboard />
            </ProtectedRoute>
          }>
             <Route index element={<MyBookings />} />
             <Route path="my-bookings" element={<MyBookings />} />
             <Route path="payment-details" element={<PaymentDetails />} />
             <Route path="my-reservations" element={<MyReservations />} />
             <Route path="profile" element={<AttendeeProfile />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/event/:eventId" element={<EventDetailsPage />} />
          <Route path="/organizer" element={
            <ProtectedRoute requiredRole="organizer">
              <OrganizerDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<OrganizerHome />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="users" element={<ManageUser />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="audience" element={<Audience />} />
            <Route path="launch-ad" element={<LaunchAd />} />
            <Route path="finances" element={<Finances />} />
            <Route path="organization" element={<ManageOrganization />} />
            <Route path="management" element={<Management />} />
            <Route path="createEvent" element={<CreateEvent />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="disputes" element={<Disputes />} />
            <Route path="members" element={<Members />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="support-center" element={<SupportCenter />} />
            <Route path="edit-org" element={<EditOrg />} />
          </Route>
          <Route path="/edit-profile" element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          } />
          <Route path="/notifications" element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          } />
        </Routes>
      </>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}