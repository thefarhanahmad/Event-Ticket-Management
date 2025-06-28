const ManageEvents = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">My Events</h1>

      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-gray-800 rounded-md">Live</button>
          <button className="py-2 px-4 bg-gray-800 rounded-md">All</button>
          <button className="py-2 px-4 bg-gray-800 rounded-md">Pending</button>
          <button className="py-2 px-4 bg-gray-800 rounded-md">Past</button>
          <button className="py-2 px-4 bg-gray-800 rounded-md">
            Affiliated
          </button>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search By Event Name"
            className="px-4 py-2 bg-gray-800 rounded-md text-white"
          />
          <button className="py-2 px-4 bg-blue-600 rounded-md">
            Create Event
          </button>
          <button className="py-2 px-4 bg-blue-600 rounded-md">
            Duplicate Event
          </button>
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="text-xl">
          You have no live or affiliated upcoming events.
        </h2>
        <p className="mt-2">Get started with just a few clicks!</p>
        <button className="mt-4 py-2 px-4 bg-blue-600 rounded-md">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default ManageEvents;
