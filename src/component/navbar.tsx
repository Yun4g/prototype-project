import { useState } from 'react';
import {
  Home, Calendar, Zap, Star, User, Settings, LogOut,
} from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Find Events' },
    { icon: Calendar, label: 'My Events' },
    { icon: Zap, label: 'Go Live' },
    { icon: Star, label: 'Fero Points' },
    { icon: User, label: 'My Profile', divider: true },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className='bg-gray-50 '>
    
      <div className="sm:hidden flex justify-between bg-gray-50 items-center px-4 py-3  shadow-md fixed top-0 left-0 right-0 z-50">
        <img src="/src/assets/logo.PNG" alt="Logo" className="h-8" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

     
      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Nav */}
      <aside
        className={`fixed sm:static top-0 left-0 h-full w-64 bg-gray-50  shadow-md z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        <nav className="h-full flex flex-col p-4 pt-6">
       
          <div className="flex items-center justify-center sm:justify-start mb-6">
            <img src="/src/assets/logo.PNG" alt="Logo" className="h-10" />
          </div>

         
          <ul className="space-y-2 flex-1 overflow-y-auto">
            {navItems.map(({ icon: Icon, label, divider }, index) => (
              <li key={index} className={divider ? 'pt-4 border-t border-gray-200' : ''}>
                <button className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Logout */}
          <div className="mt-6 border-t pt-4">
            <button className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
