export default function Finances() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Finances</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl">Account Balance</h2>
          <p className="text-gray-400">Revenue available for payouts.</p>
          <p className="text-2xl font-bold">₹ 0</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl">Vendor Payouts</h2>
          <p className="text-gray-400">Money paid to vendor's banks.</p>
          <p className="text-2xl font-bold">₹ 0</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl">Total Transactions</h2>
          <p className="text-gray-400">
            Lifetime transactions made to vendors.
          </p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl">Total Vendors</h2>
          <p className="text-gray-400">Vendors you've onboarded to date.</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold mb-4">Payees</h3>
        <div className="flex justify-between mb-4">
          <button className="py-2 px-4 bg-blue-600 rounded-md">
            Add Payee
          </button>
          <select className="p-2 bg-gray-700 text-white rounded-md">
            <option>All</option>
            <option>Vendors</option>
            <option>Influencers</option>
            <option>Admins</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-gray-700 rounded-md text-white"
          />
        </div>
        <table className="table-fixed w-full">
          <thead>
            <tr className="text-gray-400">
              <th className="w-1/4">Name</th>
              <th className="w-1/4">Role</th>
              <th className="w-1/4">Paid Out</th>
              <th className="w-1/4">Stripe Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center text-gray-500">
                No Data Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Transactions</h3>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-gray-700 rounded-md text-white"
          />
          <button className="py-2 px-4 bg-blue-600 rounded-md">
            Make Payment
          </button>
        </div>
        <table className="table-fixed w-full">
          <thead>
            <tr className="text-gray-400">
              <th className="w-1/4">Payee</th>
              <th className="w-1/4">Date</th>
              <th className="w-1/4">Amount</th>
              <th className="w-1/4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="text-center text-gray-500">
                No Data Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
