import React, { useState } from 'react';
import TrashIcon from '../assets/trash.png';
import EditIcon from '../assets/edit.png';
import LockIcon from '../assets/lock.png';
import SearchIcon from "../assets/search2.png";

// Create a full list of dummy admins
const allAdmins = Array.from({ length: 50 }, (_, i) => ({
    username: `@Amy_${i + 1}`,
    name: `Amy ${i + 1}`,
    email: `amy${i + 1}@email.com`,
    role: 'Super admin',
    lastLogin: `${i + 1} hour(s) ago`,
}));

const AdminManagement = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentAdmins = allAdmins.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(allAdmins.length / itemsPerPage);

    return (
        <div className="admin-management p-6 text-black">
            {/* Top Controls */}
            <div className="flex justify-between items-center mb-4">
                {/* Search Input with Icon on Right */}
                <div className="relative" style={{ width: "330px", height: "44px" }}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-full pr-10 pl-[10px] py-[13px] rounded-[10px] border border-[#FFB300] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-[#FFB300]"
                    />
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        className="w-5 h-5 absolute right-[10px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                </div>

                {/* Filter & Export Buttons */}
                <div className="flex gap-2">
                    <button className="bg-white border px-4 py-2 rounded">Filter</button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded shadow-md">Export</button>
                </div>
            </div>

            {/* Table */}
         <div className="overflow-x-auto w-[1334px] max-h-full p-[30px] rounded-[20px] bg-white shadow border border-[#FFB300]">
                <table className="w-full text-left border-separate border-spacing-y-3">
                    <thead className="bg-[#FFB300] text-white h-[60px]">
                        <tr>
                            <th className="px-4 py-2 rounded-tl-[10px] rounded-bl-[10px]">User Name</th>
                            <th className="px-4 py-2">Admin Name</th>
                            <th className="px-4 py-2">Email ID</th>
                            <th className="px-4 py-2">Admin Role</th>
                            <th className="px-4 py-2">Last Login</th>
                            <th className="px-4 py-2 rounded-tr-[10px] rounded-br-[10px]">Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {currentAdmins.map((admin, idx) => (
                            <tr
                                key={idx}
                                className={`h-[64px] border border-[#FFB300] ${idx % 2 === 0 ? 'bg-[#FFF1CF]' : 'bg-white'
                                    }`}
                                style={{ borderRadius: '5px', overflow: 'hidden' }}
                            >
                                <td className="px-4 py-2 rounded-l-[5px]">
                                    <input
                                        type="radio"
                                        className="mr-2 accent-black border-black"
                                    />
                                    {admin.username}
                                </td>
                                <td className="px-4 py-2">{admin.name}</td>
                                <td className="px-4 py-2">{admin.email}</td>
                                <td className="px-4 py-2 ">
                                    <span className="bg-[#FFB30080] px-2 py-1 rounded-3xl text-sm">
                                        {admin.role}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    <span className="bg-[#FFC33480] px-2 py-1 rounded-3xl text-sm">
                                        {admin.lastLogin}
                                    </span>
                                </td>
                                <td className="px-4 py-2 flex gap-3 items-center rounded-r-[5px]">
                                    <button className="w-5 h-5">
                                        <img
                                            src={TrashIcon}
                                            alt="Delete"
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                    <button className="w-5 h-5">
                                        <img
                                            src={EditIcon}
                                            alt="Edit"
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                    <button className="w-5 h-5">
                                        <img
                                            src={LockIcon}
                                            alt="Lock"
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
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
                            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-yellow-500 text-white' : 'bg-yellow-100'
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

export default AdminManagement;
