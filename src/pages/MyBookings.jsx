export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      eventTitle: "Summer Music Festival 2024",
      eventDate: "Jan 15, 2025",
      eventTime: "6:00 PM",
      location: "Central Park Amphitheater",
      ticketType: "VIP Pass",
      quantity: 2,
      totalAmount: "$299.98",
      bookingDate: "Dec 20, 2024",
      status: "Confirmed",
      bookingId: "BK-2024-1001"
    },
    {
      id: 2,
      eventTitle: "Tech Innovation Conference",
      eventDate: "Jan 22, 2025",
      eventTime: "9:00 AM",
      location: "Convention Center Hall A",
      ticketType: "Early Bird",
      quantity: 1,
      totalAmount: "$149.99",
      bookingDate: "Dec 18, 2024",
      status: "Confirmed",
      bookingId: "BK-2024-1002"
    },
    {
      id: 3,
      eventTitle: "Food & Wine Expo",
      eventDate: "Feb 05, 2025",
      eventTime: "4:00 PM",
      location: "Downtown Exhibition Center",
      ticketType: "General Admission",
      quantity: 3,
      totalAmount: "$256.50",
      bookingDate: "Dec 22, 2024",
      status: "Pending",
      bookingId: "BK-2024-1003"
    }
  ];

  const handleViewTicket = (bookingId) => {
    alert(`View ticket for booking ID: ${bookingId}`);
    // Implement view ticket logic here
  };

  const handleDownloadTicket = (bookingId) => {
    alert(`Download ticket for booking ID: ${bookingId}`);
    // Implement download ticket logic here
  };

  const handleCancelBooking = (bookingId) => {
    alert(`Cancel booking for booking ID: ${bookingId}`);
    // Implement cancel booking logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-bold">My Bookings</h2>
        <span className="text-gray-400 text-sm">{bookings.length} bookings</span>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{booking.eventTitle}</h3>
                  <div className="flex items-center space-x-4 text-gray-300 text-sm mb-2">
                    <span>{booking.eventDate} at {booking.eventTime}</span>
                    <span>•</span>
                    <span>{booking.location}</span>
                  </div>
                  <p className="text-gray-400 text-sm">Booking ID: {booking.bookingId}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  booking.status === 'Confirmed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                }`}>
                  {booking.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Ticket Type</p>
                  <p className="text-white font-medium">{booking.ticketType}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Quantity</p>
                  <p className="text-white font-medium">{booking.quantity} ticket{booking.quantity > 1 ? 's' : ''}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Amount</p>
                  <p className="text-white font-medium">{booking.totalAmount}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Booked On</p>
                  <p className="text-white font-medium">{booking.bookingDate}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleViewTicket(booking.bookingId)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  View Ticket
                </button>
                <button
                  onClick={() => handleDownloadTicket(booking.bookingId)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Download PDF
                </button>
                {booking.status === 'Confirmed' && (
                  <button
                    onClick={() => handleCancelBooking(booking.bookingId)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}