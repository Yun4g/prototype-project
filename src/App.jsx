import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyEvent from './component/dashboard/myEvent';
import GoLive from './component/dashboard/GoLive';
import FeroPoints from './component/dashboard/FeroPoints';
import SettingsPage from './component/dashboard/settingsPage';
import Profile from './component/dashboard/Profile';
import Layout from './component/dashboard/layout';
import FindEvent from './component/dashboard/FindEvents';
import CreateEvent from './component/createEvent';

function App() {
  return (
    <div className="bg-gray-50 h-screen overflow-x-hidden">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<FindEvent/>} />
            <Route path="/my-events" element={<MyEvent />} />
            <Route path="/go-live" element={<GoLive />} />
            <Route path="/fero-points" element={<FeroPoints />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/create-event' element={<CreateEvent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
