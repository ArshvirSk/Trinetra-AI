import { useState } from "react";

const mockRoutes = [
  {
    id: 1,
    from: "Downtown",
    to: "Airport",
    originalTime: "45 mins",
    optimizedTime: "30 mins",
    congestionLevel: "high",
    co2Reduction: "2.5 kg",
    status: "recommended",
    aiConfidence: "95%",
    routeType: "fastest",
  },
  {
    id: 2,
    from: "Suburb",
    to: "City Center",
    originalTime: "35 mins",
    optimizedTime: "25 mins",
    congestionLevel: "medium",
    co2Reduction: "1.8 kg",
    status: "alternative",
    aiConfidence: "87%",
    routeType: "eco-friendly",
  },
  {
    id: 3,
    from: "East Side",
    to: "West District",
    originalTime: "40 mins",
    optimizedTime: "32 mins",
    congestionLevel: "low",
    co2Reduction: "1.2 kg",
    status: "alternative",
    aiConfidence: "82%",
    routeType: "balanced",
  },
];

const mockConditions = [
  {
    id: 1,
    location: "Highway 101",
    status: "Heavy Traffic",
    impact: "high",
    time: "10 mins ago",
  },
  {
    id: 2,
    location: "Main Street",
    status: "Construction",
    impact: "medium",
    time: "5 mins ago",
  },
  {
    id: 3,
    location: "Bridge Ave",
    status: "Accident Cleared",
    impact: "low",
    time: "2 mins ago",
  },
];

const mockPredictions = [
  {
    id: 1,
    location: "Downtown Area",
    prediction: "Increasing congestion expected in 30 mins",
    confidence: "High",
    impact: "medium",
  },
  {
    id: 2,
    location: "Highway 280 South",
    prediction: "Traffic clearing in 15 mins",
    confidence: "Medium",
    impact: "low",
  },
];

const Routing = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [routeType, setRouteType] = useState("fastest");
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          AI-Based Route Optimization
        </h2>

        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300">
                Active Re-Routes
              </h3>
              <p className="text-3xl font-bold text-blue-400">24</p>
            </div>
            <div className="bg-green-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-300">
                CO₂ Saved Today
              </h3>
              <p className="text-3xl font-bold text-green-400">128.5 kg</p>
            </div>
            <div className="bg-purple-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-300">
                Time Saved Today
              </h3>
              <p className="text-3xl font-bold text-purple-400">342 mins</p>
            </div>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">
              Route Preferences
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setRouteType("fastest")}
                className={`px-4 py-2 rounded-md ${
                  routeType === "fastest"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                Fastest
              </button>
              <button
                onClick={() => setRouteType("eco-friendly")}
                className={`px-4 py-2 rounded-md ${
                  routeType === "eco-friendly"
                    ? "bg-green-600 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                Eco-Friendly
              </button>
              <button
                onClick={() => setRouteType("balanced")}
                className={`px-4 py-2 rounded-md ${
                  routeType === "balanced"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                Balanced
              </button>
              <button
                onClick={() => setRouteType("scenic")}
                className={`px-4 py-2 rounded-md ${
                  routeType === "scenic"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                Scenic
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-200">
                Current Routes
              </h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Find New Route
              </button>
            </div>

            {mockRoutes.map((route) => (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedRoute?.id === route.id
                    ? "border-green-500 bg-gray-700"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-200">
                      {route.from} → {route.to}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Original: {route.originalTime} | Optimized:{" "}
                      {route.optimizedTime}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      route.status === "recommended"
                        ? "bg-green-900 text-green-300"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {route.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                  <span>Congestion: {route.congestionLevel}</span>
                  <span>CO₂ Reduction: {route.co2Reduction}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-blue-400">
                    AI Confidence: {route.aiConfidence}
                  </span>
                  <span
                    className={`${
                      route.routeType === "eco-friendly"
                        ? "text-green-400"
                        : route.routeType === "fastest"
                        ? "text-blue-400"
                        : "text-purple-400"
                    }`}
                  >
                    {route.routeType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Route Details
            </h3>
            {selectedRoute ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-200">
                    Journey Overview
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    From {selectedRoute.from} to {selectedRoute.to}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded-md">
                    <p className="text-sm text-gray-400">Original Time</p>
                    <p className="font-medium text-gray-200">
                      {selectedRoute.originalTime}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <p className="text-sm text-gray-400">Optimized Time</p>
                    <p className="font-medium text-green-400">
                      {selectedRoute.optimizedTime}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-200">
                    Environmental Impact
                  </h4>
                  <p className="text-sm text-green-400 mt-1">
                    Potential CO₂ Reduction: {selectedRoute.co2Reduction}
                  </p>
                </div>
                <div className="bg-blue-900 p-3 rounded-md">
                  <h4 className="font-medium text-blue-300">AI Analysis</h4>
                  <p className="text-sm text-gray-200 mt-1">
                    This route was calculated using our advanced AI algorithm
                    that considers current traffic conditions, historical
                    patterns, and predictive congestion models.
                  </p>
                  <p className="text-sm text-blue-300 mt-2">
                    Confidence: {selectedRoute.aiConfidence} | Type:{" "}
                    {selectedRoute.routeType}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowMap(true)}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    View on Map
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Start Navigation
                  </button>
                </div>
                {showMap && (
                  <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-200">Route Map</h4>
                      <button
                        onClick={() => setShowMap(false)}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="bg-gray-700 h-64 rounded flex items-center justify-center">
                      <p className="text-gray-400">
                        Map integration with Google Maps/OpenStreetMap would be
                        displayed here
                      </p>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      Powered by Google Maps API integration
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400 text-center">
                Select a route to view details
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            Current Traffic Conditions
          </h2>
          <div className="space-y-4">
            {mockConditions.map((condition) => (
              <div
                key={condition.id}
                className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-200">
                    {condition.location}
                  </h3>
                  <p className="text-sm text-gray-400">{condition.status}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      condition.impact === "high"
                        ? "bg-red-900 text-red-300"
                        : condition.impact === "medium"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-green-900 text-green-300"
                    }`}
                  >
                    {condition.impact} impact
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{condition.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            AI Traffic Predictions
          </h2>
          <div className="space-y-4">
            {mockPredictions.map((prediction) => (
              <div key={prediction.id} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-200">
                    {prediction.location}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      prediction.confidence === "High"
                        ? "bg-red-900 text-red-300"
                        : prediction.confidence === "Medium"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-green-900 text-green-300"
                    }`}
                  >
                    {prediction.confidence}
                  </span>
                  <span>{prediction.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routing;
