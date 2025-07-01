export default function PaymentDetails() {
  const payments = [
    {
      id: 1,
      transactionId: "TXN-2024-5001",
      eventName: "Summer Music Festival 2024",
      amount: "$299.98",
      paymentMethod: "•••• 4532",
      paymentType: "Visa",
      date: "Dec 20, 2024",
      time: "3:45 PM",
      status: "Completed"
    },
    {
      id: 2,
      transactionId: "TXN-2024-5002",
      eventName: "Tech Innovation Conference",
      amount: "$149.99",
      paymentMethod: "•••• 8901",
      paymentType: "Mastercard",
      date: "Dec 18, 2024",
      time: "11:30 AM",
      status: "Completed"
    },
    {
      id: 3,
      transactionId: "TXN-2024-5003",
      eventName: "Food & Wine Expo",
      amount: "$256.50",
      paymentMethod: "PayPal",
      paymentType: "PayPal",
      date: "Dec 22, 2024",
      time: "7:20 PM",
      status: "Processing"
    },
    {
      id: 4,
      transactionId: "TXN-2024-5004",
      eventName: "Art Gallery Opening",
      amount: "$75.00",
      paymentMethod: "•••• 2468",
      paymentType: "Amex",
      date: "Dec 15, 2024",
      time: "2:15 PM",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-bold">Payment History</h2>
        <span className="text-gray-400 text-sm">{payments.length} transactions</span>
      </div>

      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm font-medium mb-2">Total Spent</h3>
          <p className="text-white text-2xl font-bold">$781.47</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm font-medium mb-2">This Month</h3>
          <p className="text-white text-2xl font-bold">$706.47</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm font-medium mb-2">Transactions</h3>
          <p className="text-white text-2xl font-bold">{payments.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{payment.eventName}</h3>
                <p className="text-gray-400 text-sm">Transaction ID: {payment.transactionId}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-lg">{payment.amount}</p>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  payment.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                }`}>
                  {payment.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Payment Method</p>
                <p className="text-white">{payment.paymentType} {payment.paymentMethod}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Date</p>
                <p className="text-white">{payment.date}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Time</p>
                <p className="text-white">{payment.time}</p>
              </div>
            </div>

            <div className="flex space-x-3 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View Receipt
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}