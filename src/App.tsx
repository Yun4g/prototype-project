import './App.css';
import Dashboard from './component/dashboard';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="bg-gray-50 h-screen overflow-hidden">
      <div className="flex h-full">
        <Navbar />
        <main className="flex-1 overflow-y-auto pt-16 sm:pt-0">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
