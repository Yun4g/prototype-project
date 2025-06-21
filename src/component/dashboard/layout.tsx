import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

const Layout = () => {
  return (
    <div className="flex h-full">
      <Navbar />
      <main className="flex-1 overflow-y-auto pt-16 sm:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
