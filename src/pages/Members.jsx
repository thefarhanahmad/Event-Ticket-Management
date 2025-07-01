
import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiMail, FiPhone, FiX, FiSettings } from "react-icons/fi";

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [addMemberForm, setAddMemberForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Farhan Akhtar",
      email: "akhtarfahraan281@gmail.com",
      role: "Owner",
      status: "Active",
      joinedDate: "2024-01-15",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      joinedDate: "2024-02-10",
      phone: "+1 (555) 987-6543"
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Member",
      status: "Inactive",
      joinedDate: "2024-03-05",
      phone: "+1 (555) 456-7890"
    }
  ]);

  const [permissions, setPermissions] = useState({
    home: false,
    myEvents: false,
    analytics: false,
    myTeam: false,
    payouts: false,
    manageOrg: false,
    editOrg: false,
    launchAd: false,
    disputes: false,
    supportCenter: false,
    finances: false,
    attendeeMarketing: false,
    attendeeAudience: false
  });

  const handleAddMember = () => {
    setShowAddModal(true);
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setAddMemberForm({
      firstName: member.name.split(' ')[0],
      lastName: member.name.split(' ')[1] || '',
      email: member.email,
      phone: member.phone
    });
    setShowEditModal(true);
  };

  const handleDeleteMember = (memberId) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(member => member.id !== memberId));
    }
  };

  const handleSubmitAddMember = (e) => {
    e.preventDefault();
    const newMember = {
      id: Date.now(),
      name: `${addMemberForm.firstName} ${addMemberForm.lastName}`,
      email: addMemberForm.email,
      role: "Member",
      status: "Active",
      joinedDate: new Date().toISOString().split('T')[0],
      phone: addMemberForm.phone
    };
    setMembers([...members, newMember]);
    setAddMemberForm({ firstName: "", lastName: "", email: "", phone: "" });
    setShowAddModal(false);
  };

  const handleSubmitEditMember = (e) => {
    e.preventDefault();
    const updatedMembers = members.map(member => 
      member.id === selectedMember.id 
        ? {
            ...member,
            name: `${addMemberForm.firstName} ${addMemberForm.lastName}`,
            email: addMemberForm.email,
            phone: addMemberForm.phone
          }
        : member
    );
    setMembers(updatedMembers);
    setShowEditModal(false);
    setSelectedMember(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddMemberForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissionChange = (permission) => {
    setPermissions(prev => ({
      ...prev,
      [permission]: !prev[permission]
    }));
  };

  const handleUpdatePermissions = () => {
    console.log('Updated permissions:', permissions);
    setShowSettingsModal(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Members</h1>
            <p className="text-gray-400 text-sm">
              Manage your organization members and their permissions
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <FiSettings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button 
              onClick={handleAddMember}
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <FiPlus className="w-4 h-4" />
              <span>Add Member</span>
            </button>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-600"
          >
            <option value="">All Roles</option>
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
        </div>

        {/* Members List */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="text-left py-4 px-6">Member</th>
                  <th className="text-left py-4 px-6">Role</th>
                  <th className="text-left py-4 px-6">Status</th>
                  <th className="text-left py-4 px-6">Joined</th>
                  <th className="text-left py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{member.name}</p>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <span className="flex items-center space-x-1">
                              <FiMail className="w-3 h-3" />
                              <span>{member.email}</span>
                            </span>
                            {member.phone && (
                              <span className="flex items-center space-x-1">
                                <FiPhone className="w-3 h-3" />
                                <span>{member.phone}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.status === 'Active' 
                          ? 'bg-green-900/30 text-green-300' 
                          : 'bg-red-900/30 text-red-300'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-400">
                      {new Date(member.joinedDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEditMember(member)}
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteMember(member.id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
                        >
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
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Add Member</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitAddMember} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={addMemberForm.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={addMemberForm.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={addMemberForm.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-800 border border-gray-600 rounded-l-lg px-3">
                      <span className="text-white text-sm">🇺🇸</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={addMemberForm.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="flex-1 bg-gray-800 border border-gray-600 border-l-0 rounded-r-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  ADD MEMBER
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Member Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Edit Member</h2>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitEditMember} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={addMemberForm.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter First Name"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={addMemberForm.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Last Name"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={addMemberForm.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-800 border border-gray-600 rounded-l-lg px-3">
                      <span className="text-white text-sm">🇺🇸</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={addMemberForm.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="flex-1 bg-gray-800 border border-gray-600 border-l-0 rounded-r-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  UPDATE MEMBER
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Manage Permissions Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Manage Permissions for Farhan Akhtar</h2>
                  <p className="text-gray-400 text-sm">Control what this user can access</p>
                </div>
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Set Permissions</h3>
                <p className="text-gray-400 text-sm mb-6">Control what this user can access</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="home"
                        checked={permissions.home}
                        onChange={() => handlePermissionChange('home')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="home" className="text-white text-sm">HOME</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="analytics"
                        checked={permissions.analytics}
                        onChange={() => handlePermissionChange('analytics')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="analytics" className="text-white text-sm">ANALYTICS</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="myTeam"
                        checked={permissions.myTeam}
                        onChange={() => handlePermissionChange('myTeam')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="myTeam" className="text-white text-sm">MY TEAM</label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="myEvents"
                        checked={permissions.myEvents}
                        onChange={() => handlePermissionChange('myEvents')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="myEvents" className="text-white text-sm">MY EVENTS</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="payouts"
                        checked={permissions.payouts}
                        onChange={() => handlePermissionChange('payouts')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="payouts" className="text-white text-sm">PAYOUTS</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="manageOrg"
                        checked={permissions.manageOrg}
                        onChange={() => handlePermissionChange('manageOrg')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="manageOrg" className="text-white text-sm">MANAGE ORG</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="editOrg"
                        checked={permissions.editOrg}
                        onChange={() => handlePermissionChange('editOrg')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="editOrg" className="text-white text-sm">EDIT ORG</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="launchAd"
                        checked={permissions.launchAd}
                        onChange={() => handlePermissionChange('launchAd')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="launchAd" className="text-white text-sm">LAUNCH AD</label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="disputes"
                        checked={permissions.disputes}
                        onChange={() => handlePermissionChange('disputes')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="disputes" className="text-white text-sm">DISPUTES</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="attendeeMarketing"
                        checked={permissions.attendeeMarketing}
                        onChange={() => handlePermissionChange('attendeeMarketing')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="attendeeMarketing" className="text-white text-sm">ATTENDEE MARKETING</label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="finances"
                        checked={permissions.finances}
                        onChange={() => handlePermissionChange('finances')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="finances" className="text-white text-sm">FINANCES</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="attendeeAudience"
                        checked={permissions.attendeeAudience}
                        onChange={() => handlePermissionChange('attendeeAudience')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="attendeeAudience" className="text-white text-sm">ATTENDEE AUDIENCE</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="supportCenter"
                        checked={permissions.supportCenter}
                        onChange={() => handlePermissionChange('supportCenter')}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="supportCenter" className="text-white text-sm">SUPPORT CENTER</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={handleUpdatePermissions}
                  className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
