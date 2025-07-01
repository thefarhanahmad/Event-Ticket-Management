
export default function Audience() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">AUDIENCE</h1>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Tabs */}
        <div className="flex items-center space-x-6 mb-8 border-b border-gray-800">
          <button className="px-4 py-2 text-white border-b-2 border-white font-medium">
            Attendees
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white font-medium">
            Uploaded
          </button>
        </div>

        <div className="flex gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">My Attendees</h2>
              <p className="text-gray-400 text-sm mb-6">Everyone.</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">Total:</span>
                  <span className="text-white font-bold">0 Attendees</span>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search Attendees"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="text-center py-20">
                <h3 className="text-white text-lg font-medium mb-4">
                  You have no attendees yet, as you sell tickets your attendees will appear.
                </h3>
                <p className="text-gray-400 mb-6">
                  Get started with just a few clicks.
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-4">
                  Create Event
                </button>
                <div className="mt-6">
                  <p className="text-white text-sm mb-2">
                    If you want to upload a contact list, click here and upload a csv and send blasts.
                  </p>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-80">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Audience Builder</h3>
              <p className="text-gray-400 text-sm mb-6">
                Craft a custom audience for enhanced retargeting.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-white text-sm mb-2 block">Audience Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    placeholder="Enter audience name"
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">City</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                    <option>Select Cities</option>
                  </select>
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">Events</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500">
                    <option>Select Events</option>
                  </select>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-white font-medium">Custom Audience Size:</span>
                  <span className="text-white font-bold">0 Attendees</span>
                </div>

                <button className="w-full bg-white text-black px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
