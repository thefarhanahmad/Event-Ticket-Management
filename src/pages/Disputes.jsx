
import { useState } from "react";

export default function Disputes() {
  const [activeTab, setActiveTab] = useState("All");

  const disputeStats = [
    { label: "Need Response", value: 0, color: "text-red-400", icon: "⏰" },
    { label: "Dispute Rate", value: "0%", color: "text-yellow-400", icon: "%" },
    { label: "Money on Hold", value: "₹ 0.00", color: "text-blue-400", icon: "₹" },
    { label: "Win Rate", value: "0%", color: "text-green-400", icon: "%" },
  ];

  const tabs = ["All", "Need Response", "In Review", "Won", "Lost"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">DISPUTE MANAGEMENT</h1>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {disputeStats.map((stat, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                <span className="text-gray-500">{stat.icon}</span>
              </div>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              {stat.label === "Need Response" && (
                <p className="text-gray-500 text-xs mt-1">disputes need immediate response</p>
              )}
              {stat.label === "Dispute Rate" && (
                <p className="text-gray-500 text-xs mt-1">percentage of transactions disputed</p>
              )}
              {stat.label === "Money on Hold" && (
                <p className="text-gray-500 text-xs mt-1">due to payment disputes</p>
              )}
              {stat.label === "Win Rate" && (
                <p className="text-gray-500 text-xs mt-1">percentage of disputes won</p>
              )}
            </div>
          ))}
        </div>

        {/* My Disputes Section */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">My Disputes</h3>
          <p className="text-gray-400 text-sm mb-6">All Disputed Transactions</p>

          {/* Tabs */}
          <div className="flex items-center space-x-1 mb-6 bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Order Name</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Dispute Date</th>
                  <th className="text-left py-3 px-4">Evidence Due Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-12">
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
