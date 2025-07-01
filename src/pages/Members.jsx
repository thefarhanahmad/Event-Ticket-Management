
import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiMail, FiPhone } from "react-icons/fi";

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const members = [
    {
      id: 1,
      name: "Farhan Akhtar",
      email: "akhtarfahraan281@gmail.com",
      role: "Owner",
      status: "Active",
      joinedDate: "2024-01-15",
      phone: "+1 (555) 123-4567"
    },
    // Add more mock members as needed
  ];

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
          <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            <FiPlus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
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
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                          <FiEdit2 className="w-4 h-4" />
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
      </div>
    </div>
  );
}
