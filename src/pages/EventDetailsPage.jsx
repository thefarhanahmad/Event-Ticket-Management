import { useParams } from "react-router-dom";
import { FiMapPin, FiCalendar, FiTag } from "react-icons/fi";

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

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <div className="text-white text-center mt-10">Event not found</div>;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 flex justify-center">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden text-white">
        {/* Banner */}
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-end p-6">
            <div>
              <h1 className="text-3xl font-bold">{event.title}</h1>
              <p className="text-sm text-gray-300">{event.category}</p>
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <FiCalendar />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin />
              {event.location}
            </span>
            <span className="flex items-center gap-2">
              <FiTag />
              {event.category}
            </span>
          </div>

          <p className="text-gray-200 leading-relaxed">{event.description}</p>

          {/* Action button */}
          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-200 px-6 py-3 rounded-lg font-semibold text-white shadow-md">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
