import "leaflet/dist/leaflet.css";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Routing from "./pages/Routing";
import SmartParking from "./pages/SmartParking.jsx";
import TrafficLightsMap from "./pages/TrafficLightsMap.jsx";
import TrafficMap from "./pages/TrafficMap";
import TrafficSignal from "./pages/TrafficSignal";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 shadow-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-green-500">Smart Traffic</h1>
          </div>
          <nav className="mt-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Dashboard</span>
            </NavLink>
            <NavLink
              to="/traffic-signal"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Traffic Signal</span>
            </NavLink>
            <NavLink
              to="/routing"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Routing</span>
            </NavLink>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Map</span>
            </NavLink>
            <NavLink
              to="/traffic-lights"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Traffic Lights Map</span>
            </NavLink>
            <NavLink
              to="/smart-parking"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Smart Parking</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-green-500 ${
                  isActive ? "bg-gray-700 text-green-500" : ""
                }`
              }
            >
              <span className="mx-3">Profile</span>
            </NavLink>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8 bg-gray-900 text-gray-200">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/traffic-signal" element={<TrafficSignal />} />
            <Route path="/traffic-lights" element={<TrafficLightsMap />} />
            <Route path="/routing" element={<Routing />} />
            <Route path="/map" element={<TrafficMap />} />
            <Route path="/smart-parking" element={<SmartParking />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
