
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiUser, FiDownload, FiMessageCircle } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "JUNETEENTH MADNESS ✨ (18+)",
    category: "PARTY",
    date: "Thu, Jun 19",
    time: "10:00 PM",
    location: "New York",
    venue: "CLUB LAMDA 📍",
    host: "XYZ PARTY ❤️‍🔥",
    fullDate: "Thursday, June 19th at 10:00 PM",
    address: "1031 GRAND ST, BROOKLYN, NY 11211, USA",
    endTime: "4AM",
    ageLimit: "18+ to enter, 21+ to drink",
    dressCode: "No sweats or shorts",
    highlight: "Biggest 18+ Juneteenth Party in NYC",
    rsvpCount: "999+",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    tickets: [
      { type: "General Admission", price: "$18", status: "50 last chance tickets", available: true },
      { type: "Ladies Group of 3", price: "$30", status: "SOLD OUT", available: false },
      { type: "VIP Experience", price: "$35", status: "Available", available: true },
      { type: "VIP Section Reservation", price: "$50", status: "10% deposit", available: true },
      { type: "Everyone Free 1st Hour", price: "Free", status: "RSVP & repost required – SOLD OUT", available: false }
    ]
  },
  {
    id: 2,
    title: "$1 WINGS HAPPY HOUR",
    category: "FOOD & DRINK",
    date: "Sun, Jun 22",
    time: "9:00 PM",
    location: "Washington",
    venue: "SPORTS BAR & GRILL",
    host: "WING MASTERS",
    fullDate: "Sunday, June 22nd at 9:00 PM",
    address: "123 Main St, Washington, DC 20001, USA",
    endTime: "11PM",
    highlight: "Best wing deals in the city",
    rsvpCount: "250+",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    tickets: [
      { type: "General Entry", price: "Free", status: "Available", available: true }
    ]
  },
  {
    id: 3,
    title: "THURSDAY DINNER PARTY",
    category: "DINING",
    date: "Thu, Jun 26",
    time: "5:00 PM",
    location: "New York",
    venue: "ROOFTOP RESTAURANT",
    host: "DINNER CLUB NYC",
    fullDate: "Thursday, June 26th at 5:00 PM",
    address: "456 Park Ave, New York, NY 10016, USA",
    endTime: "9PM",
    highlight: "Exclusive dinner experience",
    rsvpCount: "85+",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    tickets: [
      { type: "Dinner Reservation", price: "$75", status: "Available", available: true }
    ]
  },
  {
    id: 4,
    title: "QUEEN MOOD HARBOR PARTY",
    category: "PARTY",
    date: "Thu, Jun 26",
    time: "8:00 PM",
    location: "New York",
    venue: "HARBOR CLUB",
    host: "QUEEN MOOD EVENTS",
    fullDate: "Thursday, June 26th at 8:00 PM",
    address: "789 Harbor Dr, New York, NY 10002, USA",
    endTime: "2AM",
    highlight: "Waterfront party experience",
    rsvpCount: "500+",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
    tickets: [
      { type: "General Admission", price: "$25", status: "Available", available: true }
    ]
  },
  {
    id: 5,
    title: "ROOFTOP SUMMER VIBES",
    category: "PARTY",
    date: "Sat, Jun 28",
    time: "6:00 PM",
    location: "Tampa",
    venue: "SKY LOUNGE",
    host: "SUMMER VIBES COLLECTIVE",
    fullDate: "Saturday, June 28th at 6:00 PM",
    address: "321 Sky Tower, Tampa, FL 33602, USA",
    endTime: "12AM",
    highlight: "Best rooftop views in Tampa",
    rsvpCount: "350+",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
    tickets: [
      { type: "General Admission", price: "$30", status: "Available", available: true }
    ]
  },
  {
    id: 6,
    title: "SUNSET SERIES BOAT CRUISE",
    category: "CRUISE",
    date: "Sat, Jul 5",
    time: "6:00 PM",
    location: "New York",
    venue: "YACHT MARINA",
    host: "SUNSET CRUISES NYC",
    fullDate: "Saturday, July 5th at 6:00 PM",
    address: "555 Marina Blvd, New York, NY 10004, USA",
    endTime: "10PM",
    highlight: "Luxury sunset cruise experience",
    rsvpCount: "200+",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    tickets: [
      { type: "Cruise Ticket", price: "$65", status: "Available", available: true }
    ]
  },
  {
    id: 7,
    title: "PILATES & PROSECCO",
    category: "FITNESS",
    date: "Sun, Jun 29",
    time: "10:00 AM",
    location: "Tampa",
    venue: "FITNESS STUDIO",
    host: "WELLNESS COLLECTIVE",
    fullDate: "Sunday, June 29th at 10:00 AM",
    address: "888 Wellness Way, Tampa, FL 33601, USA",
    endTime: "12PM",
    highlight: "Fitness meets fun",
    rsvpCount: "75+",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    tickets: [
      { type: "Class & Drinks", price: "$45", status: "Available", available: true }
    ]
  },
  {
    id: 8,
    title: "MIDNIGHT POETRY SLAM",
    category: "CULTURE",
    date: "Fri, Jun 27",
    time: "11:00 PM",
    location: "Brooklyn",
    venue: "UNDERGROUND LOUNGE",
    host: "POETRY COLLECTIVE",
    fullDate: "Friday, June 27th at 11:00 PM",
    address: "777 Arts District, Brooklyn, NY 11201, USA",
    endTime: "2AM",
    highlight: "Brooklyn's premier poetry scene",
    rsvpCount: "125+",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    tickets: [
      { type: "General Entry", price: "$15", status: "Available", available: true }
    ]
  },
];

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Event not found</h2>
          <p className="text-slate-400">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-8"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Event Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-full border border-blue-400/30">
                    {event.category}
                  </span>
                </div>
                
                {/* Event Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-white font-bold text-3xl lg:text-4xl mb-2 leading-tight">
                    {event.title}
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Basic Event Info */}
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
                <h2 className="text-white text-2xl font-bold mb-4">{event.title}</h2>
                
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <FiMapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="font-medium">{event.venue}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-300">
                    <FiUser className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="font-medium">BY {event.host}</span>
                  </div>
                  
                  <div className="flex items-center text-slate-300">
                    <FiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="font-medium">{event.fullDate}</span>
                  </div>
                  
                  <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
                    <p className="text-slate-300 text-sm font-medium">{event.address}</p>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              {event.id === 1 && (
                <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-white text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>🔞 {event.ageLimit}</p>
                    <p>⏰ Time: {event.time} – {event.endTime}</p>
                    <p>👗 Dress Code: {event.dressCode}</p>
                    <p>🏙 {event.highlight}</p>
                  </div>
                </div>
              )}

              {/* RSVP Count */}
              <motion.button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg border border-blue-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View {event.rsvpCount} people going
              </motion.button>

              {/* Tickets Section */}
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-white text-xl font-bold mb-4">Tickets</h3>
                <div className="space-y-3">
                  {event.tickets.map((ticket, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-xl border ${
                        ticket.available 
                          ? 'bg-slate-700/50 border-slate-600/50 hover:border-blue-500/50' 
                          : 'bg-red-900/20 border-red-500/30'
                      } transition-all duration-200`}
                      whileHover={ticket.available ? { scale: 1.02 } : {}}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-semibold">{ticket.type}</h4>
                          <p className={`text-sm ${ticket.available ? 'text-slate-400' : 'text-red-400'}`}>
                            {ticket.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-lg">{ticket.price}</p>
                          {ticket.available && (
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200">
                              Select
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Exclusive Guest List */}
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-white text-xl font-bold mb-3">EXCLUSIVE GUEST LIST</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Download the Discover to access the full guest list, enjoy exclusive perks, and manage your bookings.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-slate-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-slate-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full border-2 border-slate-800"></div>
                  </div>
                  <span className="text-slate-300 text-sm">+{event.rsvpCount} more</span>
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Get App</span>
                </motion.button>
              </div>

              {/* Contact Host */}
              <motion.button
                className="w-full bg-slate-700/60 hover:bg-slate-600/60 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 border border-slate-600/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMessageCircle className="w-5 h-5" />
                <span>Contact {event.host}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
