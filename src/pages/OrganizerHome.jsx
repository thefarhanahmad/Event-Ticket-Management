import { Link } from "react-router-dom";

export default function OrganizerHome() {
  return (
    <div className="min-h-screen w-full p-6 bg-gray-900 text-white">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Welcome Back, Farhan</h1>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">₹ 0.00</h2>
          <p>Total Sales Today</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">0</h2>
          <p>Tickets Sold Today</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">0</h2>
          <p>Page Visits Today</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg">₹ 0.00</h2>
          <p>Tap To Pay (24 Hrs)</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 flex flex-col items-start rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">
          Bring Your Event Dreams to Life
        </h2>
        <p>
          With Flite, set up, sell out, and fly high. Your perfect event is just
          a few clicks away.
        </p>
        <Link
          to={"/organizer/createEvent"}
          className="mt-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Start Creating
        </Link>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">What's New</h3>
        <ul className="list-disc list-inside">
          <li>
            Support Center - View and respond to support tickets directly in
            Flite.
          </li>
          <li>
            Launch Ads with Flite - Create and submit ad campaigns with Flite’s
            dedicated ads manager.
          </li>
          <li>
            Flite Moments - Upload short videos to give attendees a preview of
            your events.
          </li>
          <li>Vendor Payments</li>
        </ul>
      </div>
    </div>
  );
}
