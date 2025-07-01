
export default function LaunchAd() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">LAUNCH AN AD</h1>
            <p className="text-gray-400 text-sm">Launch an ad to Facebook and Instagram</p>
          </div>
          <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium transition-colors">
            Create New
          </button>
        </div>
      </header>

      <div className="px-8 py-6">
        <div className="text-center py-20">
          <h2 className="text-white text-xl font-medium mb-4">
            No ads found.
          </h2>
          <p className="text-gray-400 mb-6">
            Create your first ad campaign to reach more people.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Create New Ad
          </button>
        </div>
      </div>
    </div>
  );
}
