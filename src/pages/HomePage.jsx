import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "../components/EventCard";
import EventCarousel from "../components/EventCarousel";

export default function HomePage({ setCurrentPage }) {
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [showPreloader, setShowPreloader] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const heroRef = useRef(null);
  const additionalContentRef = useRef(null);

  // Sample event data
  const events = [
    {
      id: 1,
      title: "JUNETEENTH MADNESS",
      category: "PARTY",
      date: "Thu, Jun 19",
      time: "10:00 PM",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "$1 WINGS HAPPY HOUR",
      category: "FOOD & DRINK",
      date: "Sun, Jun 22",
      time: "9:00 PM",
      location: "Washington",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "THURSDAY DINNER PARTY",
      category: "DINING",
      date: "Thu, Jun 26",
      time: "5:00 PM",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "QUEEN MOOD HARBOR PARTY",
      category: "PARTY",
      date: "Thu, Jun 26",
      time: "8:00 PM",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "ROOFTOP SUMMER VIBES",
      category: "PARTY",
      date: "Sat, Jun 28",
      time: "6:00 PM",
      location: "Tampa",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "SUNSET SERIES BOAT CRUISE",
      category: "CRUISE",
      date: "Sat, Jul 5",
      time: "6:00 PM",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      title: "PILATES & PROSECCO",
      category: "FITNESS",
      date: "Sun, Jun 29",
      time: "10:00 AM",
      location: "Tampa",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      title: "MIDNIGHT POETRY SLAM",
      category: "CULTURE",
      date: "Fri, Jun 27",
      time: "11:00 PM",
      location: "Brooklyn",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
  ];

  // Additional trending events
  const trendingEvents = [
    {
      id: 9,
      title: "TECH STARTUP MIXER",
      category: "NETWORKING",
      date: "Sat, Jul 12",
      time: "7:00 PM",
      location: "San Francisco",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      title: "OUTDOOR MOVIE NIGHT",
      category: "ENTERTAINMENT",
      date: "Fri, Jul 11",
      time: "8:30 PM",
      location: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1489599328109-4f4556e04b17?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      title: "COFFEE CUPPING SESSION",
      category: "FOOD & DRINK",
      date: "Sun, Jul 13",
      time: "11:00 AM",
      location: "Seattle",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      title: "VINTAGE VINYL MARKET",
      category: "SHOPPING",
      date: "Sat, Jul 19",
      time: "10:00 AM",
      location: "Austin",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    },
  ];

  // Past events
  const pastEvents = [
    {
      id: 13,
      title: "SPRING JAZZ FESTIVAL",
      category: "MUSIC",
      date: "Sat, May 15",
      time: "6:00 PM",
      location: "New Orleans",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    },
    {
      id: 14,
      title: "ART GALLERY OPENING",
      category: "CULTURE",
      date: "Thu, May 8",
      time: "7:00 PM",
      location: "Miami",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesName = event.title
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesLocation = event.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    return matchesName && matchesLocation;
  });

  // Check if user has bypassed preloader before
  const hasBypassedPreloader = localStorage.getItem("flite-preloader-bypassed");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero section starts leaving viewport and user hasn't triggered preloader yet
          if (!entry.isIntersecting && !hasTriggered && !hasBypassedPreloader) {
            setHasTriggered(true);
            setShowPreloader(true);

            // Show preloader for 2.5 seconds
            setTimeout(() => {
              setShowPreloader(false);
              setShowAdditionalContent(true);
              // Set bypass flag for returning users
              localStorage.setItem("flite-preloader-bypassed", "true");
            }, 2500);
          } else if (
            !entry.isIntersecting &&
            hasBypassedPreloader &&
            !showAdditionalContent
          ) {
            // For returning users, show content immediately
            setShowAdditionalContent(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px 0px 0px",
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasTriggered, hasBypassedPreloader, showAdditionalContent]);

  return (
    <div className="min-h-screen font-sans">
      {/* Scroll-triggered Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="scroll-preloader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="spinner"></div>
              <motion.p
                className="text-slate-300 mt-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Loading more amazing events...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-slate-400 text-lg font-medium tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  MONETIZE OUTSIDE THE FEED.
                </motion.h2>

                <motion.h1
                  className="text-5xl font-extrabold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  AUTOMATE DEALS,
                  <br />
                  EVENTS, AND EARNINGS
                  <br />
                  <span className="text-slate-400">– ALL IN ONE PLACE.</span>
                </motion.h1>
              </div>

              <motion.button
                className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-all duration-200 flex items-center space-x-2"
                onClick={() => setCurrentPage("about")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>ABOUT US</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right Content - Event Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <EventCarousel events={events.slice(0, 3)} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-850/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  WHAT ARE YOU LOOKING FOR?
                </label>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full search-input text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-500 transition-all duration-200"
                  placeholder="Event name..."
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  WHERE?
                </label>
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full search-input text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:ring-2 focus:ring-slate-500 transition-all duration-200"
                  placeholder="Location..."
                />
              </div>

              <motion.button
                className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-all duration-200 cursor-pointer hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                SEARCH
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Upcoming Events
            </h2>
            <p className="text-slate-400 font-medium">
              Discover what's happening near you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Content Sections - Triggered by Scroll */}
      <AnimatePresence>
        {showAdditionalContent && (
          <div ref={additionalContentRef}>
            {/* Trending Now Section */}
            <motion.section
              className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-850/30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-7xl mx-auto">
                <motion.div className="mb-8 fade-in-up">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Trending Now
                  </h2>
                  <p className="text-slate-400 font-medium">
                    The hottest events everyone's talking about
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {trendingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <EventCard event={event} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Featured Categories Section */}
            <motion.section
              className="py-16 px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="max-w-7xl mx-auto">
                <motion.div className="mb-8 slide-in-left">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Explore by Category
                  </h2>
                  <p className="text-slate-400 font-medium">
                    Find exactly what you're looking for
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    "PARTY",
                    "FOOD & DRINK",
                    "CULTURE",
                    "FITNESS",
                    "NETWORKING",
                    "ENTERTAINMENT",
                  ].map((category, index) => (
                    <motion.div
                      key={category}
                      className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/60 transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-slate-600/60"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <h3 className="text-white font-semibold text-sm">
                        {category}
                      </h3>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Past Events Section */}
            <motion.section
              className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-850/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="max-w-7xl mx-auto">
                <motion.div className="mb-8 fade-in-up">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Recently Concluded
                  </h2>
                  <p className="text-slate-400 font-medium">
                    See what amazing events you missed
                  </p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  {pastEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    >
                      <EventCard event={event} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
