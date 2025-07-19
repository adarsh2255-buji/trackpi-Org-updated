import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteAdminPopup = ({ username, email, name, onCancel, onConfirm }) => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-70 fixed inset-0 z-50">
            <div className="w-[608px] h-[563px] p-[50px] rounded-[10px] border border-[#FFB300] bg-[#FF8200]
             shadow-[4px_4px_50px_10px_rgba(0,0,0,0.25)] backdrop-blur-[100px] 
             shadow-inner shadow-[1px_1px_10px_0px_rgba(255,241,207,0.5)] text-white
             flex flex-col items-center justify-center gap-[30px]"
            >

                {/* Header */}
                <div
                    className="text-center mx-auto"
                    style={{
                        width: '508px',
                        height: '92px',
                        opacity: 1,
                    }}
                >
                    <div className="text-3xl font-semibold flex items-center justify-center gap-2 mb-2">
                        <span role="img" aria-label="alert">🔴</span>
                        Confirm Delete
                    </div>
                    <p className="text-white text-base leading-tight">
                        Are you sure you want to delete the admin{" "}
                        <span className="text-[#FFF1CF] font-medium">"{name}"</span>?
                    </p>
                </div>

                {/* Highlighted User Info */}
                <div
                    className="text-white text-[16px] leading-7"
                    style={{
                        width: '360px',
                        height: '92px',
                        gap: '10px',
                        opacity: 1,
                        borderRadius: '10px',
                        border: '2px solid #8F0000',
                        padding: '10px 30px',
                        background: '#FF000080',
                        backdropFilter: 'blur(100px)',
                        boxShadow: 'inset 4px 4px 10px 0px #FFA6A640',
                    }}
                >
                    <p>UserName: <strong>{username}</strong></p>
                    <p>Email ID: <strong>{email}</strong></p>
                </div>

                {/* Password Input */}
                <div
                    style={{
                        width: '300px',
                        height: '77px',
                        gap: '10px',
                        opacity: 1,
                    }}
                >
                    <label className="block text-lg font-semibold mb-2 text-center">
                        Enter Your Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-[300px] h-[37px] rounded-[5px] border border-[#FFF1CF80] 
                        bg-[#FFB30080] text-white placeholder-white focus:outline-none 
                        px-[15px] pr-[169px] py-[8px]"
                    />
                </div>

                {/* Confirmation Checkbox */}
                <div className="w-[508px] h-[36px] flex items-center gap-[10px] opacity-100">
                    <input
                        type="checkbox"
                        id="confirmDelete"
                        className="w-5 h-5 accent-[#FFB300]"
                    />
                    <label htmlFor="confirmDelete" className="text-lg text-white">
                        I understand this will permanently delete this admin.
                    </label>
                </div>

                {/* Buttons */}
                <div className="w-[411px] h-[46px] flex justify-between items-center gap-[131px] mt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-[140px] h-[46px] px-[35px] py-[5px] rounded-[5px] 
                        border border-[#FFF1CF] bg-[#FFB30080] text-white font-semibold 
                       shadow-[0px_0px_10px_1px_rgba(10,10,10,0.25)] transition" >Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="w-[140px] h-[46px] px-[35px] rounded-[5px] 
                        border border-[#8F0000] bg-[#E20000] text-white font-semibold 
                        shadow-[0px_0px_10px_1px_rgba(10,10,10,0.25)] transition">Delete
                    </button>

                </div>
            </div>
        </div>
    );
};

export default DeleteAdminPopup;
