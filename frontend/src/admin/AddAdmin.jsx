import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70">
            <div
                className="w-[732px] h-[647px] p-[50px] rounded-[10px] border-[2px] border-[#FFB300] bg-[#FF8200]
                   shadow-[4px_4px_50px_10px_rgba(0,0,0,0.25)] backdrop-blur-[100px]
                   shadow-inner shadow-[1px_1px_10px_0px_rgba(255,241,207,0.5)] text-white"
            >
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center mb-[50px] text-white">
                    Add Admin
                </h2>

                {/* Form Container */}
                <div
                    className="w-[630px] h-[291px] grid grid-cols-2 gap-x-[30px] gap-y-[30px] mx-auto text-white"
                    style={{
                        opacity: 1,
                    }}
                >
                    {/* Username */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white placeholder-white focus:outline-none"
                        />
                    </div>

                    {/* Full Name */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter Fullname"
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white placeholder-white focus:outline-none"
                        />
                    </div>

                    {/* Email ID */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Email ID</label>
                        <input
                            type="email"
                            placeholder="Enter Email ID"
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white placeholder-white focus:outline-none"
                        />
                    </div>

                    {/* Admin Type */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Admin Type</label>
                        <select
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white focus:outline-none"
                        >
                            <option value="">Select Admin Type</option>
                            <option value="super">Super Admin</option>
                            <option value="moderator">Moderator</option>
                        </select>
                    </div>

                    {/* Set Password */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Set Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white placeholder-white focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="h-[77px]">
                        <label className="block text-lg font-semibold mb-2">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full h-[37px] px-[15px] rounded-[5px] border border-[#FFB300] bg-[#FF9900] text-white placeholder-white focus:outline-none"
                        />
                    </div>
                </div>

                {/* Cancel Button */}
                <div className="flex justify-between mt-[40px] w-[632px] h-[46px] gap-[30px]">
                    <button
                        className="w-[300px] h-[46px] px-[122px] py-[10px] rounded-[5px] border border-[#FFF1CF] bg-[#FFB30033]
                        shadow-[0px_0px_10px_1px_rgba(10,10,10,0.25)] text-white font-semibold transition"
                        onClick={() => window.history.back()} >Cancel
                    </button>

                    {/* Add Button */}
                    <button
                        className="w-[302px] h-[46px] px-[134px] py-[10px] rounded-[5px] border border-[#8F0000] bg-[#E20000]
                        shadow-[0px_0px_10px_1px_rgba(10,10,10,0.25)] text-white font-semibold transition">Add
                    </button>

                </div>

            </div>
        </div>
    );
};

export default AddAdmin;