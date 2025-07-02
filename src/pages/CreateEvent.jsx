
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiFileText, FiCalendar, FiMapPin, FiUsers, FiImage, FiEye, FiEyeOff } from 'react-icons/fi';

export default function CreateEvent() {
  const [eventType, setEventType] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    venueName: '',
    address: '',
    startTime: '',
    endTime: '',
    description: '',
    isRecurring: false,
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEventTypeSelect = (type) => {
    setEventType(type);
  };

  const handleBack = () => {
    setEventType(null);
  };

  // Event Type Selection Screen
  if (!eventType) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-800/20 to-red-900/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-red-600/30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-orange-500/20"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-12">
              What kind of event is it?
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => handleEventTypeSelect('rsvp')}
                className="group relative bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-500 rounded-lg p-8 w-48 h-32 flex flex-col items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCheck className="w-8 h-8 text-white mb-3 group-hover:text-blue-400 transition-colors" />
                <span className="text-white font-semibold text-lg">RSVP ONLY</span>
              </motion.button>

              <motion.button
                onClick={() => handleEventTypeSelect('ticketed')}
                className="group relative bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-gray-500 rounded-lg p-8 w-48 h-32 flex flex-col items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFileText className="w-8 h-8 text-white mb-3 group-hover:text-blue-400 transition-colors" />
                <span className="text-white font-semibold text-lg">TICKETED</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Form Screen
  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Add Flyer Section */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border-2 border-dashed border-gray-600 rounded-lg p-8 text-center h-80 flex flex-col items-center justify-center"
            >
              <FiImage className="w-16 h-16 text-gray-500 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Add Flyer</h3>
              <p className="text-gray-400 text-sm mb-1">OPTIMAL SIZE: 1500 X 1500 PIXELS</p>
              <p className="text-gray-400 text-sm mb-4">PLEASE UPLOAD A FLYER UNIQUE URL</p>
              
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors mb-4">
                Create an AI Flyer (Beta) ✨
              </button>
              
              <div className="flex items-center text-gray-400 text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Show on Explore</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Organization Header */}
              <div className="text-center mb-6">
                <h2 className="text-white text-lg font-medium">Farhans Organization Presents</h2>
              </div>

              {/* Back Button */}
              <button
                onClick={handleBack}
                className="text-blue-400 hover:text-blue-300 mb-4 flex items-center"
              >
                ← Back to event type selection
              </button>

              {/* Event Title */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Event Title*"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <div className="text-right text-gray-400 text-xs">0/70</div>
              </div>

              {/* Venue and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="venueName"
                  value={formData.venueName}
                  onChange={handleInputChange}
                  placeholder="Venue Name"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Start and End Time */}
              <div className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm mb-2 block">Start Time</label>
                    <input
                      type="datetime-local"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">End Time</label>
                    <input
                      type="datetime-local"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-lg block">DESCRIPTION</label>
                <div className="bg-transparent border border-gray-600 rounded-lg">
                  {/* Toolbar */}
                  <div className="border-b border-gray-600 p-2 flex items-center space-x-2 text-gray-400">
                    <select className="bg-transparent text-white text-sm">
                      <option>Normal</option>
                    </select>
                    <select className="bg-transparent text-white text-sm">
                      <option>Sans Serif</option>
                    </select>
                    <select className="bg-transparent text-white text-sm">
                      <option>Normal</option>
                    </select>
                    <div className="flex space-x-1">
                      <button className="p-1 hover:bg-gray-700 rounded">B</button>
                      <button className="p-1 hover:bg-gray-700 rounded">I</button>
                      <button className="p-1 hover:bg-gray-700 rounded">U</button>
                      <button className="p-1 hover:bg-gray-700 rounded">S</button>
                    </div>
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none resize-none"
                    placeholder="Enter event description..."
                  />
                </div>
              </div>

              {/* Recurring Event */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">Is this a Recurring Event?</span>
                  <span className="text-gray-400 text-sm">(Hosting this more than once? Click here to make it recurring.)</span>
                </div>
              </div>

              {/* RSVP or Ticketed Section */}
              {eventType === 'rsvp' ? (
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">RSVP</h3>
                  <button className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 text-white hover:bg-gray-700 transition-colors">
                    Boost RSVPs by 10%! Add More Event Info ↗
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Hidden Ticket */}
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg">HIDDEN TICKET</h3>
                    <p className="text-gray-400 text-sm">(Set up password for your hidden tickets in Detail)</p>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter Password"
                        className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Tickets Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-lg">Tickets</h3>
                      <div className="flex space-x-2">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                          Add Ticket
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                          Add Group
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-gray-600 rounded-lg p-4">
                      <p className="text-gray-400 text-sm text-center">
                        Recent Ticket Sales for %A%! Add More Event Info ↗
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Create Event Button */}
              <motion.button
                className="w-full bg-white text-black font-bold py-4 px-6 rounded-lg hover:bg-gray-200 transition-colors text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                CREATE EVENT
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
