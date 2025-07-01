
export default function MyReservations() {
  const reservations = [
    {
      id: 1,
      type: "Table",
      name: "Premium Dinner Table",
      event: "Food & Wine Expo 2024",
      date: "Jan 15, 2025",
      time: "7:00 PM",
      location: "Grand Ballroom",
      seats: 8,
      status: "Confirmed"
    },
    {
      id: 2,
      type: "Event",
      name: "VIP Experience Package",
      event: "Summer Music Festival",
      date: "Jan 22, 2025",
      time: "5:00 PM",
      location: "VIP Lounge",
      seats: 2,
      status: "Confirmed"
    },
    {
      id: 3,
      type: "Table",
      name: "Business Networking Table",
      event: "Tech Innovation Conference",
      date: "Feb 05, 2025",
      time: "12:00 PM",
      location: "Executive Floor",
      seats: 6,
      status: "Pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-bold">My Reservations</h2>
        <span className="text-gray-400 text-sm">{reservations.length} reservations</span>
      </div>
      
      <div className="grid gap-4">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    reservation.type === 'Table' ? 'bg-blue-900 text-blue-300' : 'bg-purple-900 text-purple-300'
                  }`}>
                    {reservation.type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    reservation.status === 'Confirmed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {reservation.status}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg">{reservation.name}</h3>
                <p className="text-gray-300">{reservation.event}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Date & Time</p>
                <p className="text-white">{reservation.date} at {reservation.time}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-white">{reservation.location}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Seats</p>
                <p className="text-white">{reservation.seats} people</p>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Modify
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
