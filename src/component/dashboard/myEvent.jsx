import { Bell, User, } from 'lucide-react';
import CreateEvent from '../MyeventComponents/CreateEvent';
import ManageEvent from '../MyeventComponents/ManageEvent';



function MyEvent() {
    const events = false;
    return (

        <main className="flex-1 p-6 md:p-14 bg-white min-h-screen  ">
            <header className="mb-8  border-b-2  ">
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
              

            </header>


            <section>
               {
                 events ? (
                        <ManageEvent/>
                 ) : (
                     <div>
                       <CreateEvent/>
                     </div>  
                 )
               }
            </section>
        </main>

    );
}

export default MyEvent;