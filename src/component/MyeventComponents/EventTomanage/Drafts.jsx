import { Bookmark, MapPin, Calendar } from 'lucide-react';


function Drafts( {events}) {
    return (
        <div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {events.map((trends) => (
                        <div key={trends.id} className="bg-white rounded-xl cursor-pointer shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] max-w-sm mx-auto w-full" >
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
        </div>
    );
}

export default Drafts;