import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoLive() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-7">
            <div className="bg-gray-200 rounded-xl shadow-md w-full md:w-[78%] p-6 sm:p-10 flex flex-col gap-[28px] items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-3">
                    Set Up Your Live Event
                </h2>
                <p className="text-gray-700 text-center mb-6 max-w-xl text-base sm:text-lg">
                    Add the event’s title, description, and visibility settings. These details will help your audience discover and enjoy your stream
                </p>
                <button 
                 onClick={()=> navigate('/create-event')}
                 className="bg-blue-600 hover:bg-blue-700 text-white w-[180px] h-[47px]  font-medium text-xl rounded-md px-6 py-2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Get Started
                </button>
            </div>
        </div>
    );


}

export default GoLive;