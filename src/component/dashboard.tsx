import { Search, Bell,  MapPin, Calendar, User, Bookmark } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';



const Dashboard = () => {

    const featuredEvents = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "956 connected"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "956 connected"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "956 connected"
        }
    ];

    const trendingEvents = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 12,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 13,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 14,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 15,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 17,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        },
        {
            id: 18,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
            title: "CONFIG Watch Party, PH Chapter",
            date: "Today",
            attendees: "99+ registered",
            location: "Onsite & Virtual",
            fullDate: "5th May, 2025",
            tag: "Tech Events"
        }
    ];




    return (
        <main className="flex-1 p-6 md:p-14 bg-white min-h-screen  ">
            <header className="mb-8 ">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className=" text-xl md:text-3xl font-bold text-gray-900 mb-1">Hello, Chioma</h1>
                        <p className="text-gray-600">View and manage your events here</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row  justify-between items-center gap-4 mb-8">
                    <div className="relative flex w-md  md:w-[600px]">

                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search events"
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        />

                        <SlidersHorizontal className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="relative">
                        <div className=" pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-40">
                            <p>Featured events</p>

                        </div>

                    </div>
                </div>
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-lg flex shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                            <img src={event.image} alt={event.title} className="w-[30%]  object-cover" />
                            <div className="p-4 w-[70%] flex flex-wrap">
                                <h3 className="text-lg font-semibold text-gray-900 ">{event.title}</h3>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                    <span>{event.date}</span>
                                    <span className="mx-2 text-gray-400">•</span>
                                    <User className="w-4 h-4  text-gray-400" />
                                    <span>{event.attendees}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:space-x-8 mb-6  ">
                    <button
                        className=" pl-4 pr-10 py-2.5  font-semibold border border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-40" >
                        Trending events
                    </button>
                    <button
                     className=" pl-4 pr-10 py-2.5 border font-semibold border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-40">
                        Live events
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {trendingEvents.map((trends) => (
                        <div
                            key={trends.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] max-w-sm mx-auto w-full"
                        >
                            <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden">
                                <img
                                    src={trends.image}
                                    alt={trends.title}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                                    {trends.tag}
                                </div>


                            </div>


                            <div className="p-3 space-y-3">
                                <div className=' flex  justify-between'>
                                    <h3 className="text-base font-semibold text-gray-900 leading-tight line-clamp-2">
                                        {trends.title}
                                    </h3>
                                    <span className=" right-3 p-1.5 bg-white bg-opacity-90 hover:bg-white rounded-full transition-colors shadow-sm">
                                        <Bookmark className="w-4 h-4 text-gray-600 hover:text-gray-800" />
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                                    <span className="truncate">{trends.location}</span>
                                </div>


                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                                        <span className="truncate">{trends.date}</span>
                                    </div>
                                    <span className=" text-gray-500 font-medium text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
                                        {trends.attendees}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
};

export default Dashboard;