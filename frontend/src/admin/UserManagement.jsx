import React from 'react';
import {
  FaSearch,
  FaUser,
  FaBell,
  FaPlus,
  FaTrash,
  FaLock,
  FaChevronDown,
} from 'react-icons/fa';

const UserManagement = () => {
  return (
    <div className="pt-[60px] pl-20 font-[Poppins] bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      {/* Top Content Container */}
      <div className="w-[1000px] h-[44px] flex items-center justify-between">
        {/* Left Side: Icon + Title + Search */}
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <FaUser className="w-[24px] h-[24px] text-[#0A0A0A]" />
            <span className="text-[20px] font-normal tracking-[0.02em] leading-[1] text-[#0A0A0A]">
              Users
            </span>
          </div>

          <div className="w-[330px] h-[44px] border border-[#000000] rounded-[10px] px-[10px] py-[13px] flex items-center gap-[10px] bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-[12px] font-light text-[#848484] tracking-[0.02em] outline-none bg-transparent"
            />
            <FaSearch className="w-[12px] h-[12px] text-[#0A0A0A]" />
          </div>
        </div>

        {/* Right Side: Action Icons */}
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px] bg-[#FFF1CF] border border-[#FFB300] rounded-[10px] px-[12px] py-[7px]">
            <div className="w-[30px] h-[30px] p-[4px] rounded-[6px] flex items-center justify-center">
              <FaPlus className="text-[#000000] w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] p-[4px] rounded-[6px] flex items-center justify-center">
              <FaTrash className="text-[#8F0000] w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] p-[4px] rounded-[6px] flex items-center justify-center">
              <FaLock className="text-[#000000] w-full h-full" />
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[44px] h-[44px] p-[4px] bg-[#FFF1CF] border border-[#FFB300] rounded-[10px] flex items-center justify-center">
              <FaBell className="text-[#000000]" />
            </div>
            <div className="w-[44px] h-[44px] p-[4px] bg-[#FFF1CF] border border-[#FFB300] rounded-full flex items-center justify-center">
              <FaUser className="text-[#000000]" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[30px]" />

      {/* Table Section */}
      <div className="w-[1100px] border border-[#FFB300] rounded-[12px] shadow-md">
        {/* Table Top Controls */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
          {/* Search Bar Left of Buttons */}
          <div className="w-[330px] h-[44px] border border-[#FFB300] rounded-[10px] px-[10px] py-[13px] flex items-center gap-[10px] bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-[12px] font-light text-[#848484] tracking-[0.02em] outline-none bg-transparent"
            />
            <FaSearch className="w-[12px] h-[12px] text-[#0A0A0A]" />
          </div>

          {/* Filter, Sort, Export Buttons */}
          <div className="flex items-center justify-center gap-[20px]">
            {['Filter', 'Sort', 'Export'].map((label) => (
              <button
                key={label}
                className="w-[90px] h-[44px] text-black text-center rounded-[10px] border border-[#00000040]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto px-5">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-[#FFB300] text-[#FFFF] text-sm font-semibold">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Email ID</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Courses Enrolled</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[#333] text-sm">
              {[
                {
                  name: 'John Doe',
                  username: 'john_doe',
                  email: 'john@example.com',
                  phone: '1234567890',
                  joined: '2023-01-01',
                  course: 'React, Node',
                  status: 'Active',
                },
                {
                  name: 'Jane Smith',
                  username: 'jane_smith',
                  email: 'jane@example.com',
                  phone: '9876543210',
                  joined: '2023-03-15',
                  course: 'Angular',
                  status: 'Inactive',
                },
              ].map((user, idx) => (
                <tr key={idx} className="border-t border-[#E5E7EB] hover:bg-[#FFFBEA]">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.joined}</td>
                  <td className="px-6 py-4">{user.course}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center gap-3">
                      <FaTrash className="text-red-500 cursor-pointer" />
                      <FaLock className="text-gray-700 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
