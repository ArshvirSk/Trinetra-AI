import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";

const trafficLightsData = [
  {
    id: 1,
    name: "Signal at Dadar",
    lat: 19.0176,
    lng: 72.8562,
    location: "Dadar, Mumbai",
    type: "Pedestrian",
    status: "Operational",
  },
  {
    id: 2,
    name: "Signal at Bandra",
    lat: 19.055,
    lng: 72.829,
    location: "Bandra, Mumbai",
    type: "Vehicle",
    status: "Under Maintenance",
  },
  {
    id: 3,
    name: "Signal at Andheri",
    lat: 19.1197,
    lng: 72.8479,
    location: "Andheri, Mumbai",
    type: "Smart Signal",
    status: "Operational",
  },
  {
    id: 4,
    name: "Signal at CST",
    lat: 18.9401,
    lng: 72.8352,
    location: "CST, Mumbai",
    type: "Vehicle",
    status: "Operational",
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
};

const center = {
  lat: 19.076, // Mumbai
  lng: 72.8777,
};

const TrafficLightsMap = () => {
  const [selectedSignal, setSelectedSignal] = useState(null);

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <LoadScript googleMapsApiKey="AIzaSyAcsbrr5mKHFjjWQ8PhV3twTf87vlglZsg">
        <div className="flex-grow p-4">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <GoogleMap
              mapContainerStyle={{ ...mapContainerStyle, borderRadius: "12px" }}
              center={center}
              zoom={12}
            >
              {trafficLightsData.map((signal) => (
                <Marker
                  key={signal.id}
                  position={{ lat: signal.lat, lng: signal.lng }}
                  onClick={() => setSelectedSignal(signal)}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>

      {/* Glassmorphism Sidebar */}
      <div className="w-96 p-6 bg-white/10 backdrop-blur-lg backdrop-filter rounded-l-2xl shadow-2xl border-l border-white/20">
        {selectedSignal ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white/90">
              {selectedSignal.name}
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <p className="text-white/80">
                  <span className="font-semibold text-white/90">Location:</span>{" "}
                  {selectedSignal.location}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <p className="text-white/80">
                  <span className="font-semibold text-white/90">
                    Signal Type:
                  </span>{" "}
                  {selectedSignal.type}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <p className="text-white/80">
                  <span className="font-semibold text-white/90">Status:</span>{" "}
                  <span
                    className={`${
                      selectedSignal.status === "Operational"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {selectedSignal.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/60 text-lg">
              Click on a marker to see details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficLightsMap;
