import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mockData = [
  { time: "00:00", congestion: 20 },
  { time: "04:00", congestion: 15 },
  { time: "08:00", congestion: 80 },
  { time: "12:00", congestion: 65 },
  { time: "16:00", congestion: 85 },
  { time: "20:00", congestion: 45 },
];

const mockIncidents = [
  {
    id: 1,
    type: "accident",
    severity: "major",
    location: "Highway 101 North",
    description: "Emergency services on scene",
    time: "2 hours ago",
    status: "active",
    impact: "high",
    affectedArea: "3 mile radius",
  },
  {
    id: 2,
    type: "construction",
    severity: "minor",
    location: "Downtown Main Street",
    description: "Lane closure",
    time: "5 hours ago",
    status: "active",
    impact: "medium",
    affectedArea: "1 mile radius",
  },
  {
    id: 3,
    type: "weather",
    severity: "moderate",
    location: "East Side District",
    description: "Heavy rain causing slowdowns",
    time: "1 hour ago",
    status: "active",
    impact: "medium",
    affectedArea: "2 mile radius",
  },
  {
    id: 4,
    type: "event",
    severity: "minor",
    location: "Convention Center",
    description: "Sports event causing increased traffic",
    time: "3 hours ago",
    status: "active",
    impact: "low",
    affectedArea: "0.5 mile radius",
  },
];

const Dashboard = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [predictionData, setPredictionData] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [trafficPatterns, setTrafficPatterns] = useState([
    {
      id: 1,
      pattern: "Morning Rush Hour",
      description:
        "Consistent congestion on northbound routes between 7:30-9:00 AM",
      confidence: 92,
      recommendation:
        "Adjust signal timing to favor northbound traffic during this period",
    },
    {
      id: 2,
      pattern: "Event-Related Congestion",
      description:
        "Stadium events cause 35% increase in traffic in surrounding 2-mile radius",
      confidence: 88,
      recommendation:
        "Pre-emptively adjust traffic management 2 hours before and after events",
    },
  ]);
  const [aiRecommendations, setAiRecommendations] = useState([
    {
      id: 1,
      action:
        "Suggest re-routing traffic from Highway 101 to Alternative Route A",
      impact: "high",
      status: "approved",
      reasoning:
        "Current accident causing 45-minute delays. Re-routing would reduce travel time by 65%.",
    },
    {
      id: 2,
      action: "Adjust signal timing at 5th and Main intersection",
      impact: "medium",
      status: "approved",
      reasoning:
        "Current timing causing unnecessary stops. AI simulation shows 22% improvement with adjustment.",
    },
    {
      id: 3,
      action: "Monitor increasing congestion in downtown area",
      impact: "low",
      status: "pending",
      reasoning:
        "Pattern recognition indicates potential congestion developing. Proactive monitoring recommended.",
    },
  ]);
  const [anomalies, setAnomalies] = useState([
    {
      id: 1,
      location: "Interstate 95, Mile 42",
      description: "Unexpected congestion without apparent cause",
      confidence: 87,
      detectedAt: "10:15 AM",
      status: "investigating",
    },
    {
      id: 2,
      location: "Downtown Grid, Block 12-15",
      description: "Unusual traffic flow pattern detected",
      confidence: 73,
      detectedAt: "11:30 AM",
      status: "monitoring",
    },
  ]);

  // Mock function to simulate AI prediction fetching
  const fetchPredictions = () => {
    // In a real implementation, this would call your AI model API
    const predictions = mockData.map((point) => ({
      ...point,
      predictedCongestion:
        point.congestion * (1 + (Math.random() * 0.3 - 0.15)),
    }));
    setPredictionData(predictions);
  };

  // Function to analyze selected incident with AI
  const analyzeIncident = (incident) => {
    setSelectedIncident(incident);

    // Simulate AI analysis (in real implementation, call your AI service)
    setTimeout(() => {
      setAiAnalysis({
        estimatedClearTime: "45 minutes",
        impactScore: 78,
        recommendedActions: [
          "Deploy additional emergency services",
          "Adjust signal timing in surrounding 5 intersections",
          "Alert drivers through variable message signs",
        ],
        similarPastIncidents: 3,
        trafficPrediction:
          "Expected to increase congestion by 25% for next 2 hours",
      });
    }, 500);
  };

  // Call this in useEffect
  useEffect(() => {
    fetchPredictions();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          Traffic Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-300">
              Current Congestion
            </h3>
            <p className="text-3xl font-bold text-blue-400">65%</p>
          </div>
          <div className="bg-green-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-300">
              Active Signals
            </h3>
            <p className="text-3xl font-bold text-green-400">42</p>
          </div>
          <div className="bg-yellow-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-300">
              Incidents Today
            </h3>
            <p className="text-3xl font-bold text-yellow-400">3</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Congestion Trends
          </h3>
          <LineChart
            width={800}
            height={300}
            data={predictionData.length ? predictionData : mockData}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderColor: "#374151",
                color: "#E5E7EB",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="congestion"
              stroke="#8884d8"
              name="Current Congestion"
            />
            {predictionData.length > 0 && (
              <Line
                type="monotone"
                dataKey="predictedCongestion"
                stroke="#82ca9d"
                strokeDasharray="5 5"
                name="AI Prediction"
              />
            )}
          </LineChart>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          Traffic Incident Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            {mockIncidents.map((incident) => (
              <div
                key={incident.id}
                onClick={() => analyzeIncident(incident)}
                className={`border-l-4 pl-4 py-2 cursor-pointer transition-colors ${
                  selectedIncident?.id === incident.id
                    ? "border-blue-500 bg-gray-700"
                    : incident.severity === "major"
                    ? "border-red-500"
                    : incident.severity === "moderate"
                    ? "border-yellow-500"
                    : "border-green-500"
                }`}
              >
                <h3 className="font-semibold text-gray-200">
                  {incident.type.charAt(0).toUpperCase() +
                    incident.type.slice(1)}
                </h3>
                <p className="text-gray-400">{incident.location}</p>
                <p className="text-sm text-gray-500">{incident.time}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 bg-gray-700 p-4 rounded-lg">
            {selectedIncident ? (
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {selectedIncident.type.charAt(0).toUpperCase() +
                      selectedIncident.type.slice(1)}{" "}
                    Details
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      selectedIncident.impact === "high"
                        ? "bg-red-900 text-red-300"
                        : selectedIncident.impact === "medium"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-green-900 text-green-300"
                    }`}
                  >
                    {selectedIncident.impact} impact
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium text-gray-200">
                      {selectedIncident.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="font-medium text-gray-200">
                      {selectedIncident.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Reported</p>
                    <p className="font-medium text-gray-200">
                      {selectedIncident.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Affected Area</p>
                    <p className="font-medium text-gray-200">
                      {selectedIncident.affectedArea}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400">Description</p>
                  <p className="font-medium text-gray-200">
                    {selectedIncident.description}
                  </p>
                </div>

                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm">
                    View on Map
                  </button>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 text-sm">
                    Get Alternate Routes
                  </button>
                  <button className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 text-sm">
                    Share
                  </button>
                </div>

                {aiAnalysis && (
                  <div className="mt-4 border-t border-gray-600 pt-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      AI Analysis
                    </h4>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400">
                          Estimated Clear Time
                        </p>
                        <p className="font-medium text-gray-200">
                          {aiAnalysis.estimatedClearTime}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Impact Score</p>
                        <p className="font-medium text-gray-200">
                          {aiAnalysis.impactScore}/100
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400">
                        Traffic Prediction
                      </p>
                      <p className="font-medium text-gray-200">
                        {aiAnalysis.trafficPrediction}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400">
                        AI Recommended Actions
                      </p>
                      <ul className="list-disc pl-5 text-gray-200">
                        {aiAnalysis.recommendedActions.map((action, idx) => (
                          <li key={idx}>{action}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  Select an incident to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          AI Traffic Pattern Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trafficPatterns.map((pattern) => (
            <div key={pattern.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-200">
                  {pattern.pattern}
                </h3>
                <span className="text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                  {pattern.confidence}% confidence
                </span>
              </div>
              <p className="text-gray-300 mt-2">{pattern.description}</p>
              <div className="mt-3">
                <p className="text-sm text-gray-400">AI Recommendation:</p>
                <p className="text-gray-300">{pattern.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          AI Anomaly Detection
        </h2>
        <div className="space-y-4">
          {anomalies.map((anomaly) => (
            <div
              key={anomaly.id}
              className="bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-200">
                  {anomaly.location}
                </h3>
                <span className="text-sm bg-purple-900 text-purple-300 px-2 py-1 rounded-full">
                  {anomaly.confidence}% confidence
                </span>
              </div>
              <p className="text-gray-300 mt-2">{anomaly.description}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Detected at {anomaly.detectedAt}</span>
                <span className="capitalize">{anomaly.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">
          AI Recommendations
        </h2>
        <ul className="space-y-3">
          {aiRecommendations.map((rec) => (
            <li key={rec.id} className="bg-gray-700 p-3 rounded-lg">
              <div className="flex items-start">
                <span
                  className={`flex-shrink-0 h-6 w-6 text-${
                    rec.impact === "high"
                      ? "green"
                      : rec.impact === "medium"
                      ? "blue"
                      : "yellow"
                  }-500`}
                >
                  {rec.status === "approved" ? "✓" : "!"}
                </span>
                <div className="ml-3">
                  <p className="text-gray-300">{rec.action}</p>
                  <p className="text-sm text-gray-400 mt-1">{rec.reasoning}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700">
                      Implement
                    </button>
                    <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
