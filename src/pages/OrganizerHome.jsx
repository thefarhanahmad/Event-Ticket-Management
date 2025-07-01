
import { Link } from "react-router-dom";
import { 
  FiTrendingUp, 
  FiUsers, 
  FiEye, 
  FiCreditCard,
  FiPlus,
  FiArrowRight,
  FiStar,
  FiLifeBuoy,
  FiZap,
  FiVideo,
  FiDollarSign
} from "react-icons/fi";

export default function OrganizerHome() {
  const stats = [
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      value: "₹ 0.00",
      label: "Total Sales Today",
      subtitle: "Sales since last 24hrs so far",
      trend: null
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "0",
      label: "Tickets Sold Today",
      subtitle: "Tickets sold since last 24hrs so far",
      trend: null
    },
    {
      icon: <FiEye className="w-5 h-5" />,
      value: "0",
      label: "Page Visits Today",
      subtitle: "Page visits since last 24hrs so far",
      trend: null
    },
    {
      icon: <FiCreditCard className="w-5 h-5" />,
      value: "₹ 0.00",
      label: "Tap To Pay (24 Hrs)",
      subtitle: "Tap To Pay sales last 24 hours",
      trend: null
    }
  ];

  const features = [
    {
      icon: <FiLifeBuoy className="w-5 h-5 text-orange-400" />,
      title: "Support Center",
      description: "View and respond to support tickets directly in Flite."
    },
    {
      icon: <FiZap className="w-5 h-5 text-blue-400" />,
      title: "Launch Ads with Flite",
      description: "Create and submit ad campaigns with Flite's dedicated ads manager."
    },
    {
      icon: <FiVideo className="w-5 h-5 text-purple-400" />,
      title: "Flite Moments",
      description: "Upload short videos to give attendees a preview of your events."
    },
    {
      icon: <FiDollarSign className="w-5 h-5 text-green-400" />,
      title: "Vendor Payments",
      description: "Manage and process vendor payments seamlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Welcome Back, Farhan
            </h1>
            <p className="text-gray-400 text-sm">
              Here's what's happening with your events today
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-700">
              Export Data
            </button>
            <Link
              to="/organizer/createEvent"
              className="px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors duration-200 flex items-center space-x-2 font-medium"
            >
              <FiPlus className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {stat.icon}
                </div>
                {stat.trend && (
                  <FiTrendingUp className="w-4 h-4 text-green-400" />
                )}
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-white text-sm font-medium">{stat.label}</p>
                <p className="text-gray-400 text-xs">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main CTA Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Bring Your Event Dreams to Life
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With Flite, set up, sell out, and fly high. Your perfect event is just a few clicks away.
                  </p>
                </div>

                <Link
                  to="/organizer/createEvent"
                  className="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <span>Start Creating</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* What's New Section */}
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">What's New</h3>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Stay updated with new tools and features
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer">
                    <div className="p-1.5 bg-gray-800 rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/organizer/events"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-left"
                >
                  <span className="text-gray-300 text-sm">View All Events</span>
                  <FiArrowRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/organizer/finances"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-left"
                >
                  <span className="text-gray-300 text-sm">Check Finances</span>
                  <FiArrowRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/organizer/users"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-left"
                >
                  <span className="text-gray-300 text-sm">Marketing Tools</span>
                  <FiArrowRight className="w-4 h-4 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
