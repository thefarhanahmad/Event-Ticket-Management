
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiDollarSign,
  FiMoreVertical,
  FiEdit3,
  FiTrash2,
  FiEye
} from "react-icons/fi";

export default function ManageEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample events data
  const events = [
    {
      id: 1,
      title: "JUNETEENTH MADNESS ✨ (18+)",
      date: "2024-06-19",
      time: "10:00 PM",
      venue: "CLUB LAMDA",
      location: "Brooklyn, NY",
      status: "published",
      attendees: 150,
      revenue: 2850,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "$1 WINGS HAPPY HOUR",
      date: "2024-06-22",
      time: "9:00 PM",
      venue: "SPORTS BAR & GRILL",
      location: "Washington, DC",
      status: "draft",
      attendees: 85,
      revenue: 850,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "ROOFTOP SUMMER VIBES",
      date: "2024-06-28",
      time: "6:00 PM",
      venue: "SKY LOUNGE",
      location: "Tampa, FL",
      status: "published",
      attendees: 200,
      revenue: 6000,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=100&h=100&fit=crop"
    }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      published: "bg-green-900/30 text-green-400 border-green-700/50",
      draft: "bg-yellow-900/30 text-yellow-400 border-yellow-700/50",
      cancelled: "bg-red-900/30 text-red-400 border-red-700/50"
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">My Events</h1>
            <p className="text-gray-400 text-sm">
              Manage and track all your events in one place
            </p>
          </div>
          <Link
            to="/organizer/createEvent"
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <FiPlus className="w-4 h-4" />
            <span>Create Event</span>
          </Link>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 w-64"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-400 w-4 h-4" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gray-600"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            {events.length} events total
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-200">
              {/* Event Image */}
              <div className="relative h-48 bg-gray-800">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(event.status)}
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors">
                    <FiMoreVertical className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{event.venue}, {event.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <FiUsers className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400 text-xs">Attendees</span>
                    </div>
                    <p className="text-white font-semibold">{event.attendees}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <FiDollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400 text-xs">Revenue</span>
                    </div>
                    <p className="text-white font-semibold">${event.revenue}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/event/${event.id}`}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded-lg transition-colors duration-200"
                  >
                    <FiEye className="w-4 h-4" />
                    <span className="text-sm">View</span>
                  </Link>
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors duration-200">
                    <FiEdit3 className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors duration-200">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md mx-auto">
              <FiCalendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No events found</h3>
              <p className="text-gray-400 mb-4">
                Get started by creating your first event
              </p>
              <Link
                to="/organizer/createEvent"
                className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                <FiPlus className="w-4 h-4" />
                <span>Create Event</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
