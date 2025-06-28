export default function Management() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">My Team</h1>
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-xl text-gray-400 mb-2">
          Create your first event to add your team members
        </h2>
        <p className="mb-4 text-gray-500">Get started with just a few clicks</p>
        <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Create Event
        </button>
        <button className="mt-4 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition duration-300">
          Rehire All
        </button>
      </div>
    </div>
  );
}
