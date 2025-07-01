import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiCalendar, FiClock, FiX, FiPlus, FiMinus } from "react-icons/fi";

const events = [
  {
    id: 1,
    title: "JUNETEENTH MADNESS",
    subtitle: "PARTY",
    organizer: "XYZ PARTY ❤️‍🔥",
    date: "Thu, Jun 19 at 10:00 PM",
    venue: "CLUB LAMDA, 1031 GRAND ST, BROOKLYN, NY 11211, USA",
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
  },
  {
    id: 2,
    title: "$1 WINGS HAPPY HOUR",
    subtitle: "FOOD & DRINK",
    organizer: "WING MASTERS",
    date: "Sun, Jun 22 at 9:00 PM",
    venue: "SPORTS BAR & GRILL, 456 WING ST, WASHINGTON, DC 20001, USA",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=800&fit=crop",
    description: "Amazing $1 wings and drinks special every Sunday night",
    details: [
      "🍗 $1 Wings all night long",
      "🍺 Happy hour drinks until midnight",
      "📺 Live sports on big screens",
      "🎵 DJ playing the hottest tracks"
    ],
    fullDescription: "Come hungry and leave happy! Our Sunday wing special is the talk of the town.",
    tickets: [
      {
        id: 1,
        name: "Entry",
        description: "General admission to the event",
        price: 5,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 3,
    title: "THURSDAY DINNER PARTY",
    subtitle: "DINING",
    organizer: "ELITE DINING",
    date: "Thu, Jun 26 at 5:00 PM",
    venue: "ROOFTOP RESTAURANT, 789 FINE DINING AVE, NEW YORK, NY 10001, USA",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=800&fit=crop",
    description: "Exclusive fine dining experience with live entertainment",
    details: [
      "🍽️ 5-course gourmet meal",
      "🍷 Wine pairing available",
      "🎭 Live jazz performance",
      "👔 Smart casual dress code"
    ],
    fullDescription: "An unforgettable evening of culinary excellence and sophisticated entertainment.",
    tickets: [
      {
        id: 1,
        name: "Standard Dinner",
        description: "5-course meal included",
        price: 85,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Premium with Wine",
        description: "Meal + wine pairing",
        price: 125,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 4,
    title: "QUEEN MOOD HARBOR PARTY",
    subtitle: "PARTY",
    organizer: "HARBOR EVENTS",
    date: "Thu, Jun 26 at 8:00 PM",
    venue: "HARBOR PIER, 123 WATERFRONT DR, NEW YORK, NY 10002, USA",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
    description: "Ultimate harbor party with stunning waterfront views",
    details: [
      "🌊 Waterfront location",
      "🎵 Top DJs and live music",
      "🍹 Premium bar service",
      "💃 Dance floor with harbor views"
    ],
    fullDescription: "Dance the night away with breathtaking harbor views and incredible music.",
    tickets: [
      {
        id: 1,
        name: "General Admission",
        description: "Entry to the party",
        price: 25,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "VIP Harbor View",
        description: "Premium location + drinks",
        price: 65,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 5,
    title: "ROOFTOP SUMMER VIBES",
    subtitle: "PARTY",
    organizer: "SKYLINE EVENTS",
    date: "Sat, Jun 28 at 6:00 PM",
    venue: "SKY LOUNGE, 456 HIGH RISE BLVD, TAMPA, FL 33601, USA",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=800&fit=crop",
    description: "Summer rooftop party with panoramic city views",
    details: [
      "🏢 Stunning city skyline views",
      "☀️ Perfect summer atmosphere",
      "🍸 Craft cocktails and beverages",
      "🎶 Chill house music vibes"
    ],
    fullDescription: "Experience Tampa's best rooftop party with amazing views and summer vibes.",
    tickets: [
      {
        id: 1,
        name: "Rooftop Access",
        description: "General admission",
        price: 30,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Premium Skyline",
        description: "Best views + welcome drink",
        price: 55,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 6,
    title: "SUNSET SERIES BOAT CRUISE",
    subtitle: "CRUISE",
    organizer: "NAUTICAL ADVENTURES",
    date: "Sat, Jul 5 at 6:00 PM",
    venue: "PIER 17, 123 MARINA WAY, NEW YORK, NY 10003, USA",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=800&fit=crop",
    description: "Luxurious sunset cruise around New York Harbor",
    details: [
      "🚢 3-hour luxury cruise",
      "🌅 Perfect sunset viewing",
      "🍾 Open bar included",
      "📸 Statue of Liberty photo ops"
    ],
    fullDescription: "Sail into the sunset on this unforgettable cruise experience around NYC.",
    tickets: [
      {
        id: 1,
        name: "Sunset Cruise",
        description: "3-hour cruise + open bar",
        price: 75,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "VIP Deck Access",
        description: "Premium deck + dinner",
        price: 120,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 7,
    title: "PILATES & PROSECCO",
    subtitle: "FITNESS",
    organizer: "WELLNESS COLLECTIVE",
    date: "Sun, Jun 29 at 10:00 AM",
    venue: "YOGA STUDIO PLUS, 789 WELLNESS ST, TAMPA, FL 33602, USA",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
    description: "Relaxing pilates session followed by prosecco social hour",
    details: [
      "🧘‍♀️ 1-hour pilates class",
      "🥂 Prosecco and healthy snacks",
      "🌿 Peaceful studio environment",
      "👥 Meet like-minded wellness enthusiasts"
    ],
    fullDescription: "Start your Sunday with mindful movement and bubbly celebration.",
    tickets: [
      {
        id: 1,
        name: "Pilates + Prosecco",
        description: "Full experience included",
        price: 45,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 8,
    title: "MIDNIGHT POETRY SLAM",
    subtitle: "CULTURE",
    organizer: "BROOKLYN ARTS",
    date: "Fri, Jun 27 at 11:00 PM",
    venue: "THE UNDERGROUND, 456 ARTIST ST, BROOKLYN, NY 11201, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    description: "Raw, authentic poetry performances in Brooklyn's underground scene",
    details: [
      "🎤 Open mic for all skill levels",
      "🌙 Late night creative energy",
      "☕ Coffee and light refreshments",
      "📚 Spoken word and poetry focus"
    ],
    fullDescription: "Express yourself or witness powerful spoken word in Brooklyn's most authentic venue.",
    tickets: [
      {
        id: 1,
        name: "Poetry Night Entry",
        description: "Access to all performances",
        price: 15,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Performer Pass",
        description: "Entry + open mic slot",
        price: 20,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 9,
    title: "TECH STARTUP MIXER",
    subtitle: "NETWORKING",
    organizer: "SF TECH COMMUNITY",
    date: "Sat, Jul 12 at 7:00 PM",
    venue: "INNOVATION HUB, 123 STARTUP WAY, SAN FRANCISCO, CA 94105, USA",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=800&fit=crop",
    description: "Connect with fellow entrepreneurs and tech innovators",
    details: [
      "💼 Networking with industry leaders",
      "🚀 Startup pitch sessions",
      "🍷 Premium networking reception",
      "💡 Innovation showcase displays"
    ],
    fullDescription: "Build meaningful connections in San Francisco's thriving tech ecosystem.",
    tickets: [
      {
        id: 1,
        name: "Mixer Entry",
        description: "Networking + reception",
        price: 35,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Entrepreneur Pass",
        description: "Entry + pitch opportunity",
        price: 75,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 10,
    title: "OUTDOOR MOVIE NIGHT",
    subtitle: "ENTERTAINMENT",
    organizer: "LA CINEMA COLLECTIVE",
    date: "Fri, Jul 11 at 8:30 PM",
    venue: "GRIFFITH PARK, 4730 CRYSTAL SPRINGS DR, LOS ANGELES, CA 90027, USA",
    image: "https://images.unsplash.com/photo-1489599328109-4f4556e04b17?w=600&h=800&fit=crop",
    description: "Classic movies under the stars in beautiful Griffith Park",
    details: [
      "🎬 Classic and modern film selections",
      "⭐ Under the beautiful LA night sky",
      "🍿 Popcorn and concessions available",
      "🧺 Bring your own blankets and chairs"
    ],
    fullDescription: "Experience cinema magic under the stars in one of LA's most iconic locations.",
    tickets: [
      {
        id: 1,
        name: "Movie Night",
        description: "Entry to outdoor screening",
        price: 12,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Premium Spot",
        description: "Reserved seating area",
        price: 25,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 11,
    title: "COFFEE CUPPING SESSION",
    subtitle: "FOOD & DRINK",
    organizer: "SEATTLE COFFEE ROASTERS",
    date: "Sun, Jul 13 at 11:00 AM",
    venue: "ROASTERY CAFÉ, 789 BEAN ST, SEATTLE, WA 98101, USA",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop",
    description: "Professional coffee tasting experience with expert roasters",
    details: [
      "☕ Taste 8 different coffee varieties",
      "👨‍🍳 Learn from master roasters",
      "📚 Coffee education and brewing tips",
      "🥐 Light pastries included"
    ],
    fullDescription: "Discover the art and science of coffee with Seattle's finest roasters.",
    tickets: [
      {
        id: 1,
        name: "Cupping Experience",
        description: "Full tasting + education",
        price: 28,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Roaster Masterclass",
        description: "Extended session + take-home beans",
        price: 55,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 12,
    title: "VINTAGE VINYL MARKET",
    subtitle: "SHOPPING",
    organizer: "AUSTIN RECORD COLLECTORS",
    date: "Sat, Jul 19 at 10:00 AM",
    venue: "CONVENTION CENTER SOUTH, 456 MUSIC ROW, AUSTIN, TX 78701, USA",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
    description: "Rare vinyl records and music memorabilia marketplace",
    details: [
      "🎵 Thousands of vintage vinyl records",
      "💿 Rare and collectible albums",
      "🎸 Music memorabilia and equipment",
      "🎧 DJ sets throughout the day"
    ],
    fullDescription: "Dig through crates of musical treasures in Austin's premier vinyl market.",
    tickets: [
      {
        id: 1,
        name: "Market Entry",
        description: "Browse all vendor booths",
        price: 8,
        currency: "$",
        available: true
      },
      {
        id: 2,
        name: "Early Bird Access",
        description: "1 hour early entry",
        price: 20,
        currency: "$",
        available: true
      }
    ]
  },
  {
    id: 13,
    title: "SPRING JAZZ FESTIVAL",
    subtitle: "MUSIC",
    organizer: "NEW ORLEANS JAZZ SOCIETY",
    date: "Sat, May 15 at 6:00 PM",
    venue: "FRENCH QUARTER SQUARE, 123 JAZZ ST, NEW ORLEANS, LA 70116, USA",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
    description: "Celebrate jazz heritage with world-class musicians",
    details: [
      "🎺 Live performances by jazz legends",
      "🎷 Multiple stages and venues",
      "🍹 New Orleans cuisine and cocktails",
      "🎪 Family-friendly atmosphere"
    ],
    fullDescription: "Experience the soul of New Orleans through its legendary jazz tradition.",
    tickets: [
      {
        id: 1,
        name: "Festival Pass",
        description: "All-day access to performances",
        price: 45,
        currency: "$",
        available: false
      },
      {
        id: 2,
        name: "VIP Experience",
        description: "Premium seating + meet & greet",
        price: 95,
        currency: "$",
        available: false
      }
    ]
  },
  {
    id: 14,
    title: "ART GALLERY OPENING",
    subtitle: "CULTURE",
    organizer: "MIAMI ART DISTRICT",
    date: "Thu, May 8 at 7:00 PM",
    venue: "CONTEMPORARY GALLERY, 789 ART AVE, MIAMI, FL 33137, USA",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=800&fit=crop",
    description: "Exclusive opening of contemporary art exhibition",
    details: [
      "🎨 Contemporary artists showcase",
      "🥂 Wine and cheese reception",
      "👥 Meet the featured artists",
      "🖼️ Limited edition prints available"
    ],
    fullDescription: "Discover emerging and established artists in Miami's vibrant art scene.",
    tickets: [
      {
        id: 1,
        name: "Gallery Opening",
        description: "Reception + exhibition access",
        price: 25,
        currency: "$",
        available: false
      },
      {
        id: 2,
        name: "Collector's Preview",
        description: "Private viewing + artist meet",
        price: 65,
        currency: "$",
        available: false
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
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    instagram: '',
    phone: '',
    subject: '',
    message: ''
  });

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
    setShowContactModal(true);
  };

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // Handle form submission logic here
    setShowContactModal(false);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      instagram: '',
      phone: '',
      subject: '',
      message: ''
    });
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

      {/* Contact Host Modal */}
      <AnimatePresence>
        {showContactModal && (
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
              className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-600 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl font-bold">
                  Contact Your Host
                </h2>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
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
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    placeholder="Your Email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Instagram
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      @
                    </span>
                    <input
                      type="text"
                      name="instagram"
                      value={contactForm.instagram}
                      onChange={handleContactFormChange}
                      placeholder="username"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactFormChange}
                    placeholder="Your Phone"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    placeholder="Subject"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
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