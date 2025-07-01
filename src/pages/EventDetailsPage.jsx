import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiCalendar, FiClock, FiX, FiPlus, FiMinus } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "CANADA DAY IN OTTAWA",
    subtitle: "THE SHOW",
    organizer: "SENDSZN",
    date: "TUE, JUL 1 AT 10:00 PM",
    venue: "104 CLARENCE ST, OTTAWA, ON K1N 5P5, CANADA",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
    description: "Get ready for one of the biggest CANADA DAY PARTIES IN OTTAWA WITH SENDSZN CA",
    details: [
      "🗓️ When: July 1st | 10:00 PM - 2AM",
      "📍 $5.50 Drinks till 11pm",
      "🎫 $5 Early bird",
      "🎧 DJ SENDSZN"
    ],
    fullDescription: "Don't miss this one. Grab your friends, grab your tickets, and wear red and white CA",
    tickets: [
      {
        id: 1,
        name: "EARLY BIRD",
        description: "MUST BE IN BEFORE 10:30PM",
        price: 5.00,
        currency: "C$",
        available: true
      },
      {
        id: 2,
        name: "TIER 1",
        description: "ENTRY ALL NIGHT CA",
        price: 10.00,
        currency: "C$",
        available: true
      }
    ]
  },
  {
    id: 2,
    title: "JUNETEENTH MADNESS ✨ (18+)",
    subtitle: "PARTY",
    organizer: "XYZ PARTY ❤️‍🔥",
    date: "Thu, Jun 19 at 10:00 PM",
    venue: "CLUB LAMDA 📍, 1031 GRAND ST, BROOKLYN, NY 11211, USA",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop",
    description: "Biggest 18+ Juneteenth Party in NYC",
    details: [
      "🔞 18+ to enter, 21+ to drink",
      "⏰ Time: 10:00 PM – 4AM",
      "👗 Dress Code: No sweats or shorts",
      "🏙 Biggest 18+ Juneteenth Party in NYC"
    ],
    fullDescription: "Join us for an unforgettable night celebrating Juneteenth in the heart of Brooklyn!",
    tickets: [
      {
        id: 1,
        name: "General Admission",
        description: "Entry to the event",
        price: 18,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "VIP Experience",
        description: "VIP access with perks",
        price: 35,
        currency: "$",
        available: true
      }
    ]
  }
];

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(eventId));
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [showMore, setShowMore] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Event not found</h2>
          <p className="text-red-200">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (ticketId, change) => {
    setSelectedTickets(prev => {
      const current = prev[ticketId] || 0;
      const newQuantity = Math.max(0, current + change);
      if (newQuantity === 0) {
        const { [ticketId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [ticketId]: newQuantity };
    });
  };

  const getTotalAmount = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = event.tickets.find(t => t.id === parseInt(ticketId));
      return total + (ticket ? ticket.price * quantity : 0);
    }, 0);
  };

  const getTotalQuantity = () => {
    return Object.values(selectedTickets).reduce((total, quantity) => total + quantity, 0);
  };

  const handleCheckout = () => {
    if (getTotalQuantity() > 0) {
      setShowCheckout(true);
    }
  };

  const handleContactOrganizer = () => {
    // Handle contact organizer logic
    console.log("Contact organizer clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex lg:flex-row flex-col gap-8">
            {/* Left Column - Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex-shrink-0"
            >
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[500px] lg:h-[700px] object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 space-y-6"
            >
              {/* Event Title & Info */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-white font-bold text-3xl lg:text-4xl mb-2 leading-tight">
                    {event.title}
                  </h1>
                  <p className="text-gray-300 text-lg font-medium mb-4">
                    {event.subtitle}
                  </p>
                  <div className="flex items-center text-gray-300 mb-4">
                    <span className="text-sm">BY {event.organizer}</span>
                    <span className="ml-2 text-red-400">✓</span>
                  </div>
                </div>

                {/* Date and Location */}
                <div className="space-y-3">
                  <div className="flex items-start text-gray-200">
                    <FiCalendar className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-start text-gray-200">
                    <FiMapPin className="w-5 h-5 mr-3 mt-1 text-red-400 flex-shrink-0" />
                    <span className="font-medium">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <div className="border-t border-gray-600 pt-6">
                <p className="text-gray-200 text-lg font-medium mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  {event.details.map((detail, index) => (
                    <p key={index} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {event.fullDescription}
                </p>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-400 text-sm underline hover:text-gray-200 transition-colors"
                >
                  {showMore ? "VIEW LESS" : "VIEW MORE"}
                </button>

                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-600"
                  >
                    <p className="text-gray-300 text-sm">
                      Additional event information would go here. This could include venue details, 
                      parking information, age restrictions, dress code specifics, and more.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Tickets Section */}
              <div className="border-t border-gray-600 pt-6">
                <div className="space-y-4">
                  {event.tickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="bg-black/40 border border-gray-600 rounded-lg p-4 backdrop-blur-sm"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-1">
                            {ticket.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {ticket.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-xl mb-2">
                            {ticket.currency} {ticket.price.toFixed(2)}
                          </p>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleQuantityChange(ticket.id, -1)}
                              className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
                              disabled={!selectedTickets[ticket.id]}
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-white font-medium">
                              {selectedTickets[ticket.id] || 0}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(ticket.id, 1)}
                              className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 text-black flex items-center justify-center transition-colors"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Organizer Button */}
              <div className="pt-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {event.organizer.charAt(0)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleContactOrganizer}
                  className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-colors"
                >
                  CONTACT {event.organizer}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-xl font-bold">
                  Checkout - {event.tickets.find(t => selectedTickets[t.id])?.currency} {getTotalAmount().toFixed(2)}
                </h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                  const ticket = event.tickets.find(t => t.id === parseInt(ticketId));
                  if (!ticket) return null;

                  return (
                    <div key={ticketId} className="flex justify-between items-center text-white">
                      <div>
                        <p className="font-medium">{ticket.name}</p>
                        <p className="text-sm text-gray-400">Quantity: {quantity}</p>
                      </div>
                      <p className="font-bold">
                        {ticket.currency} {(ticket.price * quantity).toFixed(2)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between items-center text-white">
                  <p className="text-lg font-bold">Total</p>
                  <p className="text-lg font-bold">
                    {event.tickets[0]?.currency} {getTotalAmount().toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    // Handle payment processing
                    console.log("Processing payment...", selectedTickets);
                    setShowCheckout(false);
                    // Navigate to success page or show success message
                  }}
                  className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Complete Purchase
                </button>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Checkout Button */}
      {getTotalQuantity() > 0 && !showCheckout && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
        >
          <button
            onClick={handleCheckout}
            className="bg-black/80 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full border border-gray-600 hover:bg-black transition-colors flex items-center space-x-2"
          >
            <span>Checkout - {event.tickets[0]?.currency} {getTotalAmount().toFixed(2)}</span>
            <FiX className="w-5 h-5 rotate-45" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default EventDetailsPage;