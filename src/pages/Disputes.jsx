
export default function Disputes() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Disputes</h1>
            <p className="text-gray-400 text-sm">
              Manage payment disputes and chargebacks
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
              <option>All Disputes</option>
              <option>Open</option>
              <option>Under Review</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Open Disputes</h2>
            <p className="text-3xl font-bold text-red-400">0</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Under Review</h2>
            <p className="text-3xl font-bold text-yellow-400">0</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Won</h2>
            <p className="text-3xl font-bold text-green-400">0</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Lost</h2>
            <p className="text-3xl font-bold text-gray-400">0</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Disputes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Order ID</th>
                  <th className="text-left py-3">Customer</th>
                  <th className="text-left py-3">Amount</th>
                  <th className="text-left py-3">Reason</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-8">
                    No disputes found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
