export default function ManageOrganization() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Edit Organization</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Organization Image */}
        <div className="flex flex-col items-center mb-6">
          <label
            htmlFor="organizationImage"
            className="cursor-pointer border-2 border-dashed border-gray-400 rounded-full p-8 flex items-center justify-center"
          >
            <input
              type="file"
              id="organizationImage"
              className="hidden"
              accept="image/*"
            />
            <span className="text-gray-400">Upload Organization Image</span>
          </label>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-400">Organization Name</span>
            <input
              type="text"
              placeholder="Farhan's Organization"
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md text-white"
            />
          </label>

          <label className="block">
            <span className="text-gray-400">Contact Email</span>
            <input
              type="email"
              placeholder="akhtarfahraan281@gmail.com"
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md text-white"
            />
          </label>

          <label className="block">
            <span className="text-gray-400">Instagram Handle</span>
            <input
              type="text"
              placeholder="@dallasmavs"
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md text-white"
            />
          </label>

          <label className="block">
            <span className="text-gray-400">Location</span>
            <input
              type="text"
              placeholder="Location"
              className="mt-1 block w-full p-2 bg-gray-700 rounded-md text-white"
            />
          </label>
        </div>

        {/* Save Changes Button */}
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
