import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mockSignalData = [
  { time: "00:00", efficiency: 85, waitTime: 25 },
  { time: "04:00", efficiency: 90, waitTime: 20 },
  { time: "08:00", efficiency: 60, waitTime: 45 },
  { time: "12:00", efficiency: 70, waitTime: 35 },
  { time: "16:00", efficiency: 55, waitTime: 50 },
  { time: "20:00", efficiency: 75, waitTime: 30 },
];

const mockSignals = [
  {
    id: 1,
    intersection: "5th & Main St",
    status: "optimized",
    trafficVolume: "high",
    lastAdjustment: "5 mins ago",
    efficiency: 92,
    waitTime: 18,
    aiSuggestion: "Maintain current timing",
  },
  {
    id: 2,
    intersection: "Broadway & Park Ave",
    status: "needs attention",
    trafficVolume: "very high",
    lastAdjustment: "35 mins ago",
    efficiency: 68,
    waitTime: 42,
    aiSuggestion: "Increase green light duration by 15s",
  },
  {
    id: 3,
    intersection: "Oak St & River Rd",
    status: "optimized",
    trafficVolume: "medium",
    lastAdjustment: "12 mins ago",
    efficiency: 88,
    waitTime: 22,
    aiSuggestion: "Maintain current timing",
  },
  {
    id: 4,
    intersection: "Highland & 3rd Ave",
    status: "needs attention",
    trafficVolume: "medium",
    lastAdjustment: "50 mins ago",
    efficiency: 72,
    waitTime: 35,
    aiSuggestion: "Adjust timing for northbound traffic",
  },
];

const mockHistoricalData = [
  { date: "Mar 10", efficiency: 65, adjustments: 18 },
  { date: "Mar 11", efficiency: 70, adjustments: 22 },
  { date: "Mar 12", efficiency: 68, adjustments: 20 },
  { date: "Mar 13", efficiency: 75, adjustments: 24 },
  { date: "Mar 14", efficiency: 82, adjustments: 28 },
  { date: "Mar 15", efficiency: 78, adjustments: 26 },
  { date: "Mar 16", efficiency: 80, adjustments: 27 },
];

const TrafficSignal = () => {
  const [selectedSignal, setSelectedSignal] = useState(null);
  const [activeTab, setActiveTab] = useState("realtime");

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          Signal Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-300">
              Overall Efficiency
            </h3>
            <p className="text-3xl font-bold text-green-400">72%</p>
          </div>
          <div className="bg-blue-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-300">
              Average Wait Time
            </h3>
            <p className="text-3xl font-bold text-blue-400">35s</p>
          </div>
          <div className="bg-purple-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-300">
              AI Adjustments Today
            </h3>
            <p className="text-3xl font-bold text-purple-400">24</p>
          </div>
        </div>

        <div className="border-b border-gray-700 mb-6">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("realtime")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "realtime"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Real-Time Monitoring
            </button>
            <button
              onClick={() => setActiveTab("historical")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "historical"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Historical Analytics
            </button>
          </nav>
        </div>

        {activeTab === "realtime" && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">
              Signal Performance Trends
            </h3>
            <LineChart width={800} height={300} data={mockSignalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis yAxisId="left" stroke="#9CA3AF" />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderColor: "#374151",
                  color: "#E5E7EB",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="efficiency"
                stroke="#4ade80"
                name="Efficiency %"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="waitTime"
                stroke="#60a5fa"
                name="Wait Time (s)"
              />
            </LineChart>
          </div>
        )}

        {activeTab === "historical" && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">
              7-Day Historical Performance
            </h3>
            <LineChart width={800} height={300} data={mockHistoricalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis yAxisId="left" stroke="#9CA3AF" />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderColor: "#374151",
                  color: "#E5E7EB",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="efficiency"
                stroke="#4ade80"
                name="Avg Efficiency %"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="adjustments"
                stroke="#c084fc"
                name="AI Adjustments"
              />
            </LineChart>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            Active Signals Status
          </h2>
          <div className="space-y-4">
            {mockSignals.map((signal) => (
              <div
                key={signal.id}
                onClick={() => setSelectedSignal(signal)}
                className={`flex items-center justify-between p-4 bg-gray-700 rounded-lg cursor-pointer ${
                  selectedSignal?.id === signal.id ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div>
                  <h3 className="font-semibold text-gray-200">
                    {signal.intersection}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {signal.trafficVolume} traffic volume
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    signal.status === "optimized"
                      ? "text-green-300 bg-green-900"
                      : "text-yellow-300 bg-yellow-900"
                  }`}
                >
                  {signal.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            {selectedSignal ? "Signal Details" : "AI-Based Signal Management"}
          </h2>
          {selectedSignal ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-200">
                  {selectedSignal.intersection}
                </h3>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedSignal.status === "optimized"
                      ? "text-green-300 bg-green-900"
                      : "text-yellow-300 bg-yellow-900"
                  }`}
                >
                  {selectedSignal.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-3 rounded-md">
                  <p className="text-sm text-gray-400">Current Efficiency</p>
                  <p className="font-medium text-gray-200">
                    {selectedSignal.efficiency}%
                  </p>
                </div>
                <div className="bg-gray-700 p-3 rounded-md">
                  <p className="text-sm text-gray-400">Average Wait Time</p>
                  <p className="font-medium text-gray-200">
                    {selectedSignal.waitTime}s
                  </p>
                </div>
                <div className="bg-gray-700 p-3 rounded-md">
                  <p className="text-sm text-gray-400">Traffic Volume</p>
                  <p className="font-medium text-gray-200">
                    {selectedSignal.trafficVolume}
                  </p>
                </div>
                <div className="bg-gray-700 p-3 rounded-md">
                  <p className="text-sm text-gray-400">Last AI Adjustment</p>
                  <p className="font-medium text-gray-200">
                    {selectedSignal.lastAdjustment}
                  </p>
                </div>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <h4 className="font-medium text-blue-300">AI Recommendation</h4>
                <p className="text-gray-200 mt-1">
                  {selectedSignal.aiSuggestion}
                </p>
                <div className="mt-3 flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm">
                    Apply Suggestion
                  </button>
                  <button className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 text-sm">
                    Manual Override
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <p className="text-gray-400">
                Select a signal to view details and AI recommendations
              </p>
              <div className="bg-blue-900 p-4 rounded-lg text-left">
                <h4 className="font-medium text-blue-300">
                  AI Signal Management System
                </h4>
                <p className="text-gray-200 mt-2">
                  Our AI system uses real-time traffic data, historical
                  patterns, and deep Q-learning to optimize signal timing across
                  the network.
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-400">
                      •
                    </span>
                    <span className="ml-2">
                      24/7 automated signal optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-400">
                      •
                    </span>
                    <span className="ml-2">
                      Adaptive response to traffic conditions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-blue-400">
                      •
                    </span>
                    <span className="ml-2">
                      Predictive congestion management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrafficSignal;
