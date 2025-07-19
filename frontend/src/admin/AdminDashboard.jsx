import React from 'react';
import { useNavigate } from "react-router-dom";

import AdminManagement from './AdminManagement';
import PlusIcon from '../assets/plus.png';
import TrashIcon from '../assets/trash.png';
import LockIcon from '../assets/lock.png';
import BellIcon from '../assets/bell.png';
import UserIcon from '../assets/user.png';
import DashboardIcon from '../assets/dashboard.png';
import SearchIcon from '../assets/search2.png';


const AdminDashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white">
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center px-6 py-4 shadow-md">

                <div className="flex items-center gap-2">
                    <img
                        src={DashboardIcon}
                        alt="Dashboard Icon"
                        className="w-6 h-6 object-contain"
                    />
                    <span className="font-bold text-xl text-black">Dashboard</span>

                    <div className="flex items-center border border-gray-400 px-3 py-1 rounded ml-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none text-sm placeholder-gray-600 text-black bg-white"
                        />
                        <img
                            src={SearchIcon}
                            alt="Search Icon"
                            className="w-4 h-4 mr-2"
                        />

                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Grouped Buttons */}
                    <div className="flex gap-3 bg-[#FFF0CE] rounded-[1rem] border-2 border-[#FFB300] px-4 py-2">
                        <button onClick={() => navigate("/admin/add")}>
                            <img src={PlusIcon} alt="Plus" className="w-5 h-5" />
                        </button>
                        <button
                            className="w-5 h-5"
                            onClick={() => navigate("/admin/delete")}>
                            <img src={TrashIcon} alt="Delete" className="w-full h-full object-contain" />
                        </button>
                        <button>
                            <img src={LockIcon} alt="Lock" className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Separate Buttons */}
                    <button className="bg-[#FFF0CE] rounded-[1rem] border-2 border-[#FFB300] p-2">
                        <img src={BellIcon} alt="Notification" className="w-5 h-5" />
                    </button>
                    <button className="bg-[#FFF0CE] rounded-full border-2 border-[#FFB300] p-2">
                        <img src={UserIcon} alt="Profile" className="w-5 h-5" />
                    </button>
                </div>

            </div>

            {/* Admin Table Section */}
            <AdminManagement />
        </div>
    );
};

export default AdminDashboard;
