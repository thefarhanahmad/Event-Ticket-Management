
export default function Marketing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">MARKETING</h1>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Tabs */}
        <div className="flex items-center space-x-6 mb-8 border-b border-gray-800">
          <button className="px-4 py-2 text-white border-b-2 border-white font-medium">
            Message
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white font-medium">
            Email
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white font-medium">
            Notifications
          </button>
        </div>

        <div className="flex gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Marketing</h2>
              <p className="text-gray-400 text-sm mb-6">
                Send an instant Message to your Plan base.
              </p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Farhans Organization:</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Type your Message here. Use {'{firstName}'} to address the recipient by their first name.
                </p>
                
                <textarea
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 h-32 resize-none"
                  placeholder="Type your message here..."
                />
                <div className="text-right text-gray-400 text-xs mt-1">21/130</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-white text-sm mb-2 block">Select Audience</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                    <option>Select Audience</option>
                  </select>
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Select City</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                    <option>Select City</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-white text-sm mb-2 block">Select Link</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                  <option>Select Link</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  Preview
                </button>
                <button className="px-6 py-2 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-80">
            <div className="mb-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mb-4">
                Insert First Name
              </button>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Past Campaigns</h3>
              <p className="text-gray-400 text-sm mb-2">Check deliverability reports.</p>
              
              <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                <span>Title & Data</span>
                <div className="flex space-x-4">
                  <span>Preview</span>
                  <span>Delivery</span>
                </div>
              </div>

              <div className="text-center text-gray-500 text-sm py-8">
                No past campaigns to show
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
