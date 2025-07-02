import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import toast from "react-hot-toast";

export default function LaunchAd() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleViewCampaign = (campaignId) => {
    toast.info(`Viewing campaign: ${campaignId}`);
  };

  const handleEditCampaign = (campaignId) => {
    toast.info(`Editing campaign: ${campaignId}`);
  };

  const handlePauseCampaign = (campaignId) => {
    toast.info(`Pausing campaign: ${campaignId}`);
  };

  const handleDeleteCampaign = (campaignId) => {
    if (confirm(`Are you sure you want to delete campaign ${campaignId}?`)) {
      toast.success(`Campaign ${campaignId} has been deleted`);
    }
  };

  const handleCreateNewCampaign = () => {
    toast.info("Opening new campaign creation form...");
  };

  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Audience
    selectedEvent: "",
    targetAudience: "",
    ageMin: "",
    ageMax: "",
    gender: "",
    location: "",
    // Step 2 - Budget & Schedule
    budget: "",
    budgetType: "daily",
    startDate: "",
    endDate: "",
    // Step 3 - Ad Content
    adTitle: "",
    adDescription: "",
    callToAction: "",
    adImage: null,
  });

  const totalSteps = 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ad Campaign Data:", formData);
    setShowForm(false);
    setCurrentStep(1);
    // Reset form or handle submission
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Audience</h3>

              {/* Event Selection */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Event</label>
                <div className="relative">
                  <select
                    name="selectedEvent"
                    value={formData.selectedEvent}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-orange-500"
                  >
                    <option value="">Select an Event</option>
                    <option value="event1">Summer Music Festival</option>
                    <option value="event2">Tech Conference 2024</option>
                    <option value="event3">Food & Wine Expo</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <p className="text-orange-500 text-xs mt-1">Event Date and Time</p>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Target Audience</label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="Search for audience interests. Begin typing..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Age Range */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Age</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    name="ageMin"
                    value={formData.ageMin}
                    onChange={handleInputChange}
                    placeholder="Min"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <span className="text-white">—</span>
                  <input
                    type="number"
                    name="ageMax"
                    value={formData.ageMax}
                    onChange={handleInputChange}
                    placeholder="Max"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Gender</label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-orange-500"
                  >
                    <option value="">Select...</option>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Search for locations. Begin typing..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Budget & Schedule</h3>

              {/* Budget */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Budget</label>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <select
                    name="budgetType"
                    value={formData.budgetType}
                    onChange={handleInputChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="daily">Daily</option>
                    <option value="total">Total</option>
                  </select>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Ad Content</h3>

              {/* Ad Title */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Ad Title</label>
                <input
                  type="text"
                  name="adTitle"
                  value={formData.adTitle}
                  onChange={handleInputChange}
                  placeholder="Enter compelling ad title"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Ad Description */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Description</label>
                <textarea
                  name="adDescription"
                  value={formData.adDescription}
                  onChange={handleInputChange}
                  placeholder="Write a compelling description for your ad..."
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              {/* Call to Action */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Call to Action</label>
                <select
                  name="callToAction"
                  value={formData.callToAction}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select CTA</option>
                  <option value="learn_more">Learn More</option>
                  <option value="buy_now">Buy Now</option>
                  <option value="get_tickets">Get Tickets</option>
                  <option value="sign_up">Sign Up</option>
                  <option value="book_now">Book Now</option>
                </select>
              </div>

              {/* Ad Image Upload */}
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">Ad Image</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white mb-2">Upload ad image</p>
                  <p className="text-gray-400 text-sm mb-4">Recommended: 1200x628 pixels</p>
                  <button
                    type="button"
                    className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const campaigns = [
    {
      id: 1,
      name: "Summer Music Festival Promotion",
      status: "Active",
      budget: "$500",
      spent: "$287.50",
      reach: "12,500",
      clicks: "1,234",
      startDate: "Dec 15, 2024",
      endDate: "Jan 15, 2025"
    },
    {
      id: 2,
      name: "Tech Conference Early Bird",
      status: "Completed",
      budget: "$750",
      spent: "$750.00",
      reach: "18,900",
      clicks: "2,156",
      startDate: "Nov 20, 2024",
      endDate: "Dec 20, 2024"
    },
    {
      id: 3,
      name: "Food & Wine Expo Launch",
      status: "Draft",
      budget: "$300",
      spent: "$0.00",
      reach: "0",
      clicks: "0",
      startDate: "Jan 05, 2025",
      endDate: "Feb 05, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">LAUNCH AN AD</h1>
            <p className="text-gray-400 text-sm">Launch an ad to Facebook and Instagram</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Create New
          </button>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Ad Campaigns List */}
        <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-bold">Ad Campaigns</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{campaigns.length} campaigns</span>
          <button
            onClick={handleCreateNewCampaign}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Create Campaign
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold text-lg">{campaign.name}</h3>
                <p className="text-gray-400 text-sm">{campaign.startDate} - {campaign.endDate}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  campaign.status === 'Paused' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {campaign.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Budget</p>
                <p className="text-white font-medium">{campaign.budget}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Spent</p>
                <p className="text-white font-medium">{campaign.spent}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Reach</p>
                <p className="text-white font-medium">{campaign.reach}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Clicks</p>
                <p className="text-white font-medium">{campaign.clicks}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex gap-3">
              <button
                onClick={() => handleViewCampaign(campaign.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View
              </button>
              <button
                onClick={() => handleEditCampaign(campaign.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Edit
              </button>
              {campaign.status === 'Active' && (
                <button
                  onClick={() => handlePauseCampaign(campaign.id)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Pause
                </button>
              )}
              <button
                onClick={() => handleDeleteCampaign(campaign.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}