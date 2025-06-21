import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventContext } from '../../EventContext';
import RegisterEvent from './EventTomanage/RegisterEvent';
import PastEvent from './EventTomanage/PastEvent';
import PublishedEvent from './EventTomanage/PublishedEvent';
import SavedEvent from './EventTomanage/SavedEvent';
import Drafts from './EventTomanage/Drafts';

function ManageEvent() {
    const navigate = useNavigate();
    const [components, setComponents] = useState('Registered');
    const [searchQuery, setSearchQuery] = useState('');
    const MyEvents = useEventContext();
    const label = ["Registered", "Past", "Published", "Saved", "Drafts"]

    const filteredEvents = MyEvents.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div>
            <section className='flex-1 bg-white min-h-screen'>
                <header className="mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="relative flex w-md md:w-[600px]">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search events"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>
                        <button
                            onClick={() => navigate('/create-event')}
                            className="w-32 h-11 border flex justify-center items-center border-gray-200 text-lg text-white font-base rounded-lg bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Create events
                        </button>
                    </div>

                    <div className="relative flex flex-wrap gap-3 my-4">
                        {label.map((label) => (
                            <button
                                key={label}
                                onClick={() => setComponents(label)}
                                className={`pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg bg-white ${components === label ? "ring-2 ring-blue-500" : ""
                                    } text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-40`}
                            >
                                {label} events
                            </button>
                        ))}
                    </div>
                </header>


                {components === "Registered" && (
                    <RegisterEvent events={filteredEvents} />
                )}
                {components === "Past" && (
                    <PastEvent events={filteredEvents} />
                )}
                {components === "Published" && (
                    <PublishedEvent events={filteredEvents} />
                )}
                {components === "Saved" && (
                    <SavedEvent events={filteredEvents} />
                )}
                {components === "Drafts" && (
                    <Drafts events={filteredEvents} />
                )}

            </section>
        </div>
    );
}



export default ManageEvent;
