import React, { useState } from "react";
import { FaSearch, FaBell, FaRegTrashAlt } from "react-icons/fa";
import { FiUsers, FiUser } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineUnlock } from "react-icons/ai";

// Dummy Data
const users = [
  {
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    phone: "1234567890",
    joined: "2023-01-01",
    course: "React, Node",
    status: "Active",
  },
  {
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    phone: "1234567890",
    joined: "2023-01-01",
    course: "React, Node",
    status: "Active",
  },
  {
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    phone: "1234567890",
    joined: "2023-01-01",
    course: "React, Node",
    status: "Active",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "9876543210",
    joined: "2023-03-15",
    course: "Angular",
    status: "Inactive",
  },
];

const UserManagement = () => {
  // const navigate = useNavigate();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentAdmins = users.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="pt-[60px] pl-20 font-[Poppins] bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      {/* Top Content Container */}
      <div className="w-[1000px] h-[44px] flex items-center justify-between">
        {/* Left Side: Icon + Title + Search */}
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <FiUsers className="w-[24px] h-[24px] text-[#0A0A0A]" />
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
              <AiOutlinePlus className="text-[#000000] w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] p-[4px] rounded-[6px] flex items-center justify-center">
              <FaRegTrashAlt className="text-[#8F0000] w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] p-[4px] rounded-[6px] flex items-center justify-center">
              <AiOutlineUnlock className="text-[#000000] w-full h-full" />
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="w-[44px] h-[44px] p-[4px] bg-[#FFF1CF] border border-[#FFB300] rounded-[10px] flex items-center justify-center">
              <FaBell className="text-[#000000]" />
            </div>
            <div className="w-[44px] h-[44px] p-[4px] bg-[#FFF1CF] border border-[#FFB300] rounded-full flex items-center justify-center">
              <FiUser className="text-[#000000]" />
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
            {["Filter", "Sort", "Export"].map((label) => (
              <button
                key={label}
                className="w-[90px] h-[44px] text-black text-center rounded-[10px] border border-[#00000040] cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto px-5 pb-5">
          <table className="w-full table-auto text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-[#FFB300] text-[#FFFF] text-sm font-semibold">
                <th className="px-6 py-4 rounded-tl-[10px] rounded-bl-[5px]">
                  <input type="radio" className="mr-2" name="selectAll" />
                  Name
                </th>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Email ID</th>
                <th className="px-6 py-4">Phone Number</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Courses Enrolled</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right rounded-tr-[10px] rounded-br-[5px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[#333] text-sm">
              {currentAdmins.map((user, idx) => (
                <tr
                  key={idx}
                  className={`rounded-[10px] ${
                    idx % 2 === 0 ? "bg-[#FFFBEA]" : "bg-[#FFFFFF]"
                  }`}
                >
                  <td
                    colSpan={8}
                    className="rounded-[10px] border border-[#FFB300] overflow-hidden"
                  >
                    <div className="grid grid-cols-8">
                      <div className="px-6 py-4 flex items-center justify-center gap-2 col-span-1">
                        <input type="radio" name="userSelect" />
                        <span>{user.name}</span>
                      </div>
                      <div className="px-6 py-4 mr-10 flex items-center justify-center col-span-1">
                        {user.username}
                      </div>
                      <div className="px-6 py-4 mr-5 flex items-center justify-center col-span-1">
                        {user.email}
                      </div>
                      <div className="px-6 py-4 mr-4 flex items-center justify-center col-span-1">
                        {user.phone}
                      </div>
                      <div className="px-6 py-4 mr-4 flex items-center justify-center col-span-1">
                        {user.joined}
                      </div>
                      <div className="px-6 py-4 flex items-center justify-center col-span-1">
                        {user.course}
                      </div>
                      <div className="px-6 py-4 flex items-center justify-center col-span-1">
                        <span
                          className={`inline-block px-5 ml-8 py-1 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-[#10C500] text-[#FFFFFF]"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="px-6 ml-6 py-4 flex items-center justify-center col-span-1">
                        <div className="flex items-center justify-center gap-3">
                          <FaRegTrashAlt className="text-red-500 cursor-pointer" />
                          <AiOutlineUnlock className="text-gray-700 cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        {/* Previous Button on Left */}
        <div>
          <button
            className="bg-[#FFF0CE] text-black rounded-[6px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.3)] px-[48px] py-[0px] w-[158px] h-[40px] disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        </div>

        {/* Page Numbers in Center */}
        <div className="w-[265px] h-[40px] flex items-center justify-center gap-4 backdrop-blur-[500px]">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-yellow-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Next Button on Right */}
        <div>
          <button
            className="bg-[#FF9D00] text-black rounded-[6px] border border-[#FF9D00] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.3)] px-[63px] py-[0px] w-[158px] h-[40px] disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
