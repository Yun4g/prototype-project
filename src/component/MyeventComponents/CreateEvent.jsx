import { useNavigate } from "react-router-dom";



function CreateEvent() {
    const navigate = useNavigate()
    const eventData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "25/05/2023",
            attendees: "396 connected",
        },
    ];

    return (
        <div className="p-4 md:p-7">
            <div className="border border-blue-300 rounded-lg p-6 md:p-10 text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      
                        <svg
                            className="w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-lg md:text-2xl font-semibold mb-2">
                    You haven't <span className="font-bold">created or joined any events yet</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    Your events will appear here once you create them. You can host or join webinars,
                    livestreams, workshops, and more.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button onClick={()=> navigate('/create-event')} className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        + Create Event
                    </button>
                    <div
                     onClick={()=> navigate('/')}
                    className=" border flex gap-2  justify-center md:justify-start items-center border-gray-300 rounded-md px-3  py-1 w-40 cursor-pointer transition-colors duration-200  focus:outline-none focus:ring-2 focus:ring-blue-500">
                         <svg
                            className=" h-5 text-gray-300 "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                          <button className="text-lg font-meduim  text-gray-400">Find Events</button>           
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <button 
                 onClick={()=> navigate('/')}
                className="border-2 cursor-pointer p-7 font-semibold rounded-md text-gray-700 text-base  px-3 py-1  mb-4">
                    Explore events
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {eventData.map((event) => (
                        <div key={event.id} className="border flex rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition" >
                            <img src={event.image} alt={event.title} className="w-[40%] h-full object-cover" />
                            <div className="p-2   w-[60%]">
                                <h3 className="text-[16px]  font-medium flex flex-wrap ">{event.title}</h3>
                                <div className="flex items-center md:mt-4 text-gray-500 text-xs ">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    {event.date}
                                </div>
                                <div className="text-gray-500 text-xs">{event.attendees}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default CreateEvent;
