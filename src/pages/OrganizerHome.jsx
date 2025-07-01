
import { Link } from "react-router-dom";
import { useState } from "react";
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
  FiDollarSign,
  FiCalendar,
  FiSearch,
  FiMessageSquare,
  FiMail,
  FiBarChart,
  FiTarget,
  FiGift,
  FiTrendingDown,
  FiActivity,
  FiClock,
  FiMapPin,
  FiHeart,
  FiAward,
} from "react-icons/fi";

export default function OrganizerHome() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    {
      icon: <FiDollarSign className="w-5 h-5" />,
      value: "₹ 0.00",
      label: "Total Sales Today",
      subtitle: "Sales since last 24hrs so far",
      trend: null,
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "0",
      label: "Tickets Sold Today",
      subtitle: "Tickets sold since last 24hrs so far",
      trend: null,
    },
    {
      icon: <FiEye className="w-5 h-5" />,
      value: "0",
      label: "Page Visits Today",
      subtitle: "Page visits since last 24hrs so far",
      trend: null,
    },
    {
      icon: <FiCreditCard className="w-5 h-5" />,
      value: "₹ 0.00",
      label: "Tap To Pay (24 Hrs)",
      subtitle: "Tap To Pay sales last 24 hours",
      trend: null,
    },
  ];

  const features = [
    {
      icon: <FiLifeBuoy className="w-5 h-5 text-orange-400" />,
      title: "Support Center",
      description: "View and respond to support tickets directly in Flite.",
    },
    {
      icon: <FiZap className="w-5 h-5 text-blue-400" />,
      title: "Launch Ads with Flite",
      description:
        "Create and submit ad campaigns with Flite's dedicated ads manager.",
    },
    {
      icon: <FiVideo className="w-5 h-5 text-purple-400" />,
      title: "Flite Moments",
      description:
        "Upload short videos to give attendees a preview of your events.",
    },
    {
      icon: <FiDollarSign className="w-5 h-5 text-green-400" />,
      title: "Vendor Payments",
      description: "Manage and process vendor payments seamlessly.",
    },
  ];

  const popularFeatures = [
    {
      icon: <FiBarChart className="w-5 h-5 text-blue-400" />,
      title: "Analytics Dashboard",
      description: "Get insights into your event performance",
      action: "View Analytics",
      link: "/organizer/analytics"
    },
    {
      icon: <FiTarget className="w-5 h-5 text-purple-400" />,
      title: "Marketing Campaigns",
      description: "Create targeted marketing campaigns",
      action: "Start Campaign",
      link: "/organizer/marketing"
    },
    {
      icon: <FiGift className="w-5 h-5 text-pink-400" />,
      title: "Promotional Tools",
      description: "Set up discounts and promotional codes",
      action: "Create Promo",
      link: "/organizer/marketing"
    },
  ];

  const recentActivity = [
    {
      type: "sale",
      message: "New ticket sale for Summer Festival",
      time: "2 hours ago",
      icon: <FiDollarSign className="w-4 h-4 text-green-400" />
    },
    {
      type: "visitor",
      message: "50 new page visits this hour",
      time: "1 hour ago",
      icon: <FiEye className="w-4 h-4 text-blue-400" />
    },
    {
      type: "support",
      message: "New support ticket received",
      time: "3 hours ago",
      icon: <FiMessageSquare className="w-4 h-4 text-orange-400" />
    },
  ];

  const upcomingTasks = [
    {
      task: "Review marketing campaign performance",
      due: "Today",
      priority: "high",
      icon: <FiTrendingUp className="w-4 h-4" />
    },
    {
      task: "Process vendor payments",
      due: "Tomorrow",
      priority: "medium",
      icon: <FiCreditCard className="w-4 h-4" />
    },
    {
      task: "Update event descriptions",
      due: "This week",
      priority: "low",
      icon: <FiCalendar className="w-4 h-4" />
    },
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
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-800 rounded-lg">{stat.icon}</div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
                    With Flite, set up, sell out, and fly high. Your perfect
                    event is just a few clicks away.
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
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
                  >
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
              <h3 className="text-lg font-bold text-white mb-4">
                Quick Actions
              </h3>
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
                  to="/organizer/marketing"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-left"
                >
                  <span className="text-gray-300 text-sm">Marketing Tools</span>
                  <FiArrowRight className="w-4 h-4 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Features Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Popular Features</h3>
            <Link 
              to="/organizer/features" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {feature.icon}
                  </div>
                  <FiArrowRight className="w-4 h-4 text-gray-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  {feature.action}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Activity & Tasks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
              <FiActivity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                  <div className="p-1.5 bg-gray-800 rounded-lg flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.message}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Upcoming Tasks</h3>
              <FiClock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                  <div className="p-1.5 bg-gray-800 rounded-lg flex-shrink-0">
                    {task.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{task.task}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-gray-400 text-xs">{task.due}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Events</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Manage your upcoming and past events
            </p>

            {/* Event Tabs */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-4 py-2 text-sm font-medium rounded-lg mr-2 transition-colors duration-200 ${
                  activeTab === "upcoming"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                UPCOMING
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeTab === "past"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                PAST
              </button>
            </div>

            {/* No Events State */}
            <div className="text-center py-12">
              <FiCalendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h4 className="text-white text-lg font-medium mb-2">
                No {activeTab} events
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                {activeTab === "upcoming" 
                  ? "Get started by creating your first event"
                  : "Your past events will appear here"
                }
              </p>
              {activeTab === "upcoming" && (
                <Link
                  to="/organizer/createEvent"
                  className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Create Event
                </Link>
              )}
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Orders</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              View your latest ticket sales
            </p>

            {/* Search Bar */}
            <div className="relative mb-6">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Recent Orders"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* No Orders State */}
            <div className="text-center py-12">
              <div className="text-gray-400 text-sm">
                No matching records were found
              </div>
            </div>

            {/* Order Actions */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition-colors duration-200">
                  Affiliate
                </button>
                <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition-colors duration-200">
                  List
                </button>
                <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded transition-colors duration-200">
                  CSV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Center Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Support Center</h3>
              <Link
                to="/organizer/support-center"
                className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                View Desk
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              View and respond to support tickets directly in Flite
            </p>

            {/* No Messages State */}
            <div className="text-center py-12">
              <FiMessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h4 className="text-white text-lg font-medium mb-2">
                No Messages Yet
              </h4>
              <p className="text-gray-400 text-sm">
                When users send messages they will appear here.
              </p>
            </div>
          </div>

          {/* Additional Support Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Get Help</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Need assistance? We're here to help you succeed
            </p>

            <div className="space-y-4">
              <a
                href="mailto:support@flite.city"
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <FiMail className="w-5 h-5 text-blue-400" />
                <div>
                  <h4 className="text-white font-medium">Email Support</h4>
                  <p className="text-gray-400 text-sm">
                    Get help via email within 24 hours
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <FiLifeBuoy className="w-5 h-5 text-green-400" />
                <div>
                  <h4 className="text-white font-medium">Help Center</h4>
                  <p className="text-gray-400 text-sm">
                    Browse our knowledge base and FAQs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
