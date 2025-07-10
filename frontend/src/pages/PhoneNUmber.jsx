import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PhoneNUmber = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        if(token) {
            localStorage.setItem('token', token);
        }
    }, [location])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'http://localhost:5000/auth/phone-number',
                { phoneNumber },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            navigate('/start-course');
        } catch (error) {
            alert('Failed to save phone number. Please try again.');
            if (error.response?.data?.message) {
                console.log(error.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-black px-4">
            <div className="w-full max-w-[747px] rounded-[50px] border border-solid p-8 sm:p-[50px] space-y-10 backdrop-blur-[76px]"
                style={{
                    background: 'linear-gradient(117.87deg, #171717 -19.96%, rgba(23, 23, 23, 0.08) 96.5%)',
                    borderImage: 'linear-gradient(110.43deg, #000000 5.85%, rgba(0, 0, 0, 0.4) 94.01%) 1',
                }}>
                <h2 className="text-center text-[28px] sm:text-[36px] font-semibold text-white font-['Roboto'] capitalize leading-[100%]">
                    You’ve Signed Up with Google!
                </h2>
                <p className="text-center text-[16px] sm:text-[20px] font-bold text-white font-['Roboto'] capitalize leading-[100%]">
                    To complete your setup, please enter your phone number to activate your account.
                </p>
                <form onSubmit={handleSubmit}>
                    <fieldset className="w-full max-w-[647px] mx-auto h-auto border border-white rounded-[12px] px-4 py-2">
                        <legend className="px-2 text-white font-semibold text-[16px] font-['Roboto'] text-center">
                            Phone Number
                        </legend>
                        <div className="flex items-center h-[60px] bg-black rounded-[12px] ">
                            <span className="flex items-center gap-2">
                                <img
                                    src="https://flagcdn.com/w40/in.png"
                                    alt="India Flag"
                                    className="w-6 h-4 object-cover"
                                />
                                <span className="text-white font-medium">+91</span>
                            </span>
                            <input
                                type="tel"
                                placeholder="1234567890"
                                className=" border-none  ml-4  w-full bg-black text-white placeholder:text-gray-500"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </fieldset>
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="w-[142px] h-[50px] bg-[#F38D07] text-white font-['Roboto'] font-bold text-[16px] rounded-[10.91px]"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Create Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PhoneNUmber;