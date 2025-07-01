
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function LaunchAd() {
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
        <div className="space-y-4">
          {[
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
          ].map((ad) => (
            <div key={ad.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{ad.name}</h3>
                  <p className="text-gray-400 text-sm">{ad.startDate} - {ad.endDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ad.status === 'Active' ? 'bg-green-900 text-green-300' :
                  ad.status === 'Completed' ? 'bg-blue-900 text-blue-300' :
                  'bg-gray-700 text-gray-300'
                }`}>
                  {ad.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Budget</p>
                  <p className="text-white font-medium">{ad.budget}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Spent</p>
                  <p className="text-white font-medium">{ad.spent}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Reach</p>
                  <p className="text-white font-medium">{ad.reach}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Clicks</p>
                  <p className="text-white font-medium">{ad.clicks}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Create New Ad
          </button>
        </div>
      </div>

      {/* Multi-step Form Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-black border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="border-b border-gray-800 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">LAUNCH AN AD</h2>
                    <p className="text-gray-400 text-sm">Launch an ad to Facebook and Instagram</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                      Save & Continue
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex items-center space-x-4 mb-2">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            step <= currentStep
                              ? "bg-orange-500 text-white"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {step}
                        </div>
                        {step < 3 && (
                          <div
                            className={`w-16 h-1 mx-2 ${
                              step < currentStep ? "bg-orange-500" : "bg-gray-700"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Audience</span>
                    <span>Budget & Schedule</span>
                    <span>Ad Content</span>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 py-6 max-h-[60vh] overflow-y-auto">
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                </form>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-800 px-8 py-6">
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
                      currentStep === 1
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    <FiChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Next
                      <FiChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-orange-500 text-white px-8 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                      Launch Ad Campaign
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
