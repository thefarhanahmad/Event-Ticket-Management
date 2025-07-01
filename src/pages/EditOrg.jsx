
import { useState } from "react";
import {
  FiUpload,
  FiSave,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiCamera,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiShield,
  FiEdit3,
  FiTrash2
} from "react-icons/fi";

export default function EditOrg() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    organizationName: "Farhan's Organization",
    contactEmail: "akhtarfahraan281@gmail.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    website: "https://example.com",
    description: "We are a dynamic organization focused on creating amazing events and experiences for our community.",
    instagram: "@farhans_org",
    twitter: "@farhans_org",
    facebook: "FarhansOrganization"
  });

  const [billingInfo, setBillingInfo] = useState({
    companyName: "Farhan's Organization",
    taxId: "12-3456789",
    billingEmail: "billing@farhansorg.com",
    paymentMethod: "Credit Card ending in 4242",
    billingAddress: "123 Main Street, New York, NY 10001"
  });

  const [teamMembers] = useState([
    {
      id: 1,
      name: "Farhan Akhtar",
      email: "akhtarfahraan281@gmail.com",
      role: "Owner",
      status: "Active",
      permissions: ["All Access"]
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      permissions: ["Events", "Analytics", "Team Management"]
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Manager",
      status: "Active",
      permissions: ["Events", "Analytics"]
    }
  ]);

  const [orgSettings, setOrgSettings] = useState({
    allowPublicEvents: true,
    requireApprovalForEvents: false,
    enableNotifications: true,
    allowMemberInvites: true,
    timezone: "America/New_York",
    defaultEventPrivacy: "public"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSettingsChange = (setting) => {
    setOrgSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organization data:", formData);
  };

  const tabs = [
    { id: 'profile', label: 'Organization Profile', icon: FiUser },
    { id: 'team', label: 'Team Management', icon: FiUsers },
    { id: 'billing', label: 'Billing & Payments', icon: FiDollarSign },
    { id: 'settings', label: 'Organization Settings', icon: FiSettings },
    { id: 'security', label: 'Security & Permissions', icon: FiShield }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="border-b border-gray-800 pb-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Edit Organization</h1>
              <p className="text-gray-400">
                Manage your organization profile, team, and settings
              </p>
            </div>
            <button
              form="organization-form"
              type="submit"
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <FiSave className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-xl border border-gray-800">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white shadow-lg border border-gray-700'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {activeTab === 'profile' && (
            <form id="organization-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Organization Logo */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">Organization Logo</h3>
                    
                    <div className="space-y-4">
                      <div className="relative group">
                        <div className="w-40 h-40 bg-gray-700 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center mx-auto group-hover:border-gray-500 transition-colors duration-200 cursor-pointer">
                          <div className="text-center">
                            <FiCamera className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-400 text-sm">Upload Logo</p>
                          </div>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                      
                      <div className="text-center">
                        <button
                          type="button"
                          className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 mx-auto"
                        >
                          <FiUpload className="w-4 h-4" />
                          <span>Choose File</span>
                        </button>
                        <p className="text-gray-400 text-xs mt-2">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                      <FiUser className="w-6 h-6 mr-3" />
                      Basic Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Organization Name *
                        </label>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Contact Email *
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            name="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Website
                        </label>
                        <div className="relative">
                          <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <FiMapPin className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Social Media Links
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Instagram
                        </label>
                        <div className="relative">
                          <FiInstagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
                          <input
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleInputChange}
                            placeholder="@username"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Twitter
                        </label>
                        <div className="relative">
                          <FiTwitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                          <input
                            type="text"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleInputChange}
                            placeholder="@username"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Facebook
                        </label>
                        <div className="relative">
                          <FiFacebook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                          <input
                            type="text"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleInputChange}
                            placeholder="Page name"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-white">Team Members</h3>
                <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  <FiUser className="w-5 h-5" />
                  <span>Add Member</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-sm border-b border-gray-700">
                      <th className="text-left py-4 px-6 font-medium">Member</th>
                      <th className="text-left py-4 px-6 font-medium">Role</th>
                      <th className="text-left py-4 px-6 font-medium">Status</th>
                      <th className="text-left py-4 px-6 font-medium">Permissions</th>
                      <th className="text-left py-4 px-6 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-white font-medium">{member.name}</p>
                              <p className="text-gray-400 text-sm">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            member.role === 'Owner' 
                              ? 'bg-purple-900/30 text-purple-300' 
                              : member.role === 'Admin'
                              ? 'bg-blue-900/30 text-blue-300'
                              : 'bg-gray-700/30 text-gray-300'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-300">
                            {member.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1">
                            {member.permissions.slice(0, 2).map((permission, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                {permission}
                              </span>
                            ))}
                            {member.permissions.length > 2 && (
                              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                +{member.permissions.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                              <FiEdit3 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Billing Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={billingInfo.companyName}
                    onChange={handleBillingChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tax ID
                  </label>
                  <input
                    type="text"
                    name="taxId"
                    value={billingInfo.taxId}
                    onChange={handleBillingChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Billing Email
                  </label>
                  <input
                    type="email"
                    name="billingEmail"
                    value={billingInfo.billingEmail}
                    onChange={handleBillingChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    name="paymentMethod"
                    value={billingInfo.paymentMethod}
                    onChange={handleBillingChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Billing Address
                </label>
                <textarea
                  name="billingAddress"
                  value={billingInfo.billingAddress}
                  onChange={handleBillingChange}
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Organization Settings</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Allow Public Events</p>
                    <p className="text-gray-400 text-sm">Members can create public events</p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('allowPublicEvents')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      orgSettings.allowPublicEvents ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        orgSettings.allowPublicEvents ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Require Event Approval</p>
                    <p className="text-gray-400 text-sm">All events need admin approval</p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('requireApprovalForEvents')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      orgSettings.requireApprovalForEvents ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        orgSettings.requireApprovalForEvents ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Enable Notifications</p>
                    <p className="text-gray-400 text-sm">Send email notifications to members</p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('enableNotifications')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      orgSettings.enableNotifications ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        orgSettings.enableNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Allow Member Invites</p>
                    <p className="text-gray-400 text-sm">Members can invite others to the organization</p>
                  </div>
                  <button
                    onClick={() => handleSettingsChange('allowMemberInvites')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      orgSettings.allowMemberInvites ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        orgSettings.allowMemberInvites ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Timezone
                  </label>
                  <select
                    value={orgSettings.timezone}
                    onChange={(e) => setOrgSettings(prev => ({ ...prev, timezone: e.target.value }))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  >
                    <option value="America/New_York">Eastern Time</option>
                    <option value="America/Chicago">Central Time</option>
                    <option value="America/Denver">Mountain Time</option>
                    <option value="America/Los_Angeles">Pacific Time</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Default Event Privacy
                  </label>
                  <select
                    value={orgSettings.defaultEventPrivacy}
                    onChange={(e) => setOrgSettings(prev => ({ ...prev, defaultEventPrivacy: e.target.value }))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="organization">Organization Only</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Security & Permissions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Two-Factor Authentication</h4>
                  <p className="text-gray-400 text-sm mb-4">Add an extra layer of security to your organization</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                    Enable 2FA
                  </button>
                </div>
                
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">API Access</h4>
                  <p className="text-gray-400 text-sm mb-4">Manage API keys and integrations</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                    Manage API Keys
                  </button>
                </div>
                
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <h4 className="text-white font-semibold mb-3">Login Activity</h4>
                  <p className="text-gray-400 text-sm mb-4">View recent login attempts and activities</p>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                    View Activity Log
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
