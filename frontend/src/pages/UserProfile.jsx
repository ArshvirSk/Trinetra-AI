import { useState } from "react";

const mockUserData = {
  name: "John Doe",
  joinedDate: "January 2024",
  ecoScore: 85,
  totalTrips: 124,
  co2Saved: "45.2 kg",
  rewardPoints: 2750,
  rank: 12,
  level: 4,
};

const mockAchievements = [
  {
    id: 1,
    name: "Green Commuter",
    description: "Completed 50 eco-friendly trips",
    icon: "🌱",
    unlocked: true,
  },
  {
    id: 2,
    name: "Traffic Optimizer",
    description: "Avoided 10 heavy congestion areas",
    icon: "🚦",
    unlocked: true,
  },
  {
    id: 3,
    name: "Carbon Reducer",
    description: "Saved 50kg of CO2 emissions",
    icon: "🌍",
    unlocked: false,
  },
  {
    id: 4,
    name: "Smart Router",
    description: "Used AI suggestions for 20 trips",
    icon: "🤖",
    unlocked: true,
  },
  {
    id: 5,
    name: "Sustainability Champion",
    description: "Maintained eco-score above 80 for a month",
    icon: "🏆",
    unlocked: true,
  },
  {
    id: 6,
    name: "Data Contributor",
    description: "Shared traffic data for 30 days",
    icon: "📊",
    unlocked: false,
  },
];

const mockRewardHistory = [
  {
    id: 1,
    date: "2024-03-14",
    action: "Eco-friendly route chosen",
    points: 50,
  },
  { id: 2, date: "2024-03-13", action: "Peak hour avoidance", points: 30 },
  { id: 3, date: "2024-03-12", action: "Shared route data", points: 20 },
  {
    id: 4,
    date: "2024-03-11",
    action: "Low emission route completed",
    points: 40,
  },
];

const mockLeaderboard = [
  { id: 1, name: "Sarah J.", ecoScore: 94, rank: 1 },
  { id: 2, name: "Michael T.", ecoScore: 91, rank: 2 },
  { id: 3, name: "Emma R.", ecoScore: 89, rank: 3 },
  { id: 4, name: "David K.", ecoScore: 87, rank: 4 },
  { id: 5, name: "John Doe", ecoScore: 85, rank: 5 },
];

const mockRewards = [
  {
    id: 1,
    name: "$5 Coffee Voucher",
    cost: 500,
    category: "Food & Drink",
    icon: "☕",
  },
  {
    id: 2,
    name: "Public Transit Pass (1 day)",
    cost: 1000,
    category: "Transportation",
    icon: "🚌",
  },
  {
    id: 3,
    name: "Tree Planting Donation",
    cost: 1500,
    category: "Environmental",
    icon: "🌳",
  },
  {
    id: 4,
    name: "Premium App Features (1 month)",
    cost: 2000,
    category: "Digital",
    icon: "📱",
  },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedReward, setSelectedReward] = useState(null);

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-200">
              {mockUserData.name}
            </h2>
            <p className="text-gray-400">
              Member since {mockUserData.joinedDate}
            </p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-green-900 text-green-300 px-2 py-1 rounded-full">
                Level {mockUserData.level}
              </span>
              <span className="ml-2 text-sm text-gray-400">
                Rank #{mockUserData.rank} in your area
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "overview"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "achievements"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("rewards")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "rewards"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Rewards
            </button>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "leaderboard"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Leaderboard
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-900 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-green-300">
                    Eco Score
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-green-400">
                    {mockUserData.ecoScore}
                  </p>
                  <div className="mt-2 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: `${mockUserData.ecoScore}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-blue-300">
                    Total Trips
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-blue-400">
                    {mockUserData.totalTrips}
                  </p>
                </div>
                <div className="bg-purple-900 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-purple-300">
                    CO2 Saved
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-purple-400">
                    {mockUserData.co2Saved}
                  </p>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-yellow-300">
                    Reward Points
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-yellow-400">
                    {mockUserData.rewardPoints}
                  </p>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Sustainability Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-3 rounded-md">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🌳</span>
                      <div>
                        <p className="text-sm text-gray-400">
                          Trees Equivalent
                        </p>
                        <p className="font-medium text-gray-200">4.2 trees</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">⛽</span>
                      <div>
                        <p className="text-sm text-gray-400">Fuel Saved</p>
                        <p className="font-medium text-gray-200">18.5 liters</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">⏱️</span>
                      <div>
                        <p className="text-sm text-gray-400">Time Saved</p>
                        <p className="font-medium text-gray-200">5.8 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {mockRewardHistory.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex justify-between items-center p-3 bg-gray-800 rounded-lg"
                    >
                      <div>
                        <p className="text-gray-200">{activity.action}</p>
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                      <span className="font-medium text-green-400">
                        +{activity.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div>
              <div className="mb-4 bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-200">
                  Your Progress
                </h3>
                <p className="text-gray-400 mt-1">
                  You've unlocked{" "}
                  {mockAchievements.filter((a) => a.unlocked).length} of{" "}
                  {mockAchievements.length} achievements
                </p>
                <div className="mt-3 bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{
                      width: `${
                        (mockAchievements.filter((a) => a.unlocked).length /
                          mockAchievements.length) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked
                        ? "border-gray-700 bg-gray-700"
                        : "border-gray-600 bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h3 className="font-medium text-gray-200">
                          {achievement.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    {!achievement.unlocked && (
                      <div className="mt-2 text-sm text-gray-500">
                        🔒 Locked
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "rewards" && (
            <div className="space-y-4">
              <div className="bg-green-900 p-4 rounded-lg">
                <h3 className="font-medium text-green-300">Available Points</h3>
                <p className="text-3xl font-bold text-green-400">
                  {mockUserData.rewardPoints}
                </p>
                <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Redeem Points
                </button>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-4 text-gray-200">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {mockRewardHistory.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex justify-between items-center p-3 bg-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="text-gray-200">{activity.action}</p>
                        <p className="text-xs text-gray-400">{activity.date}</p>
                      </div>
                      <span className="font-medium text-green-400">
                        +{activity.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-4 text-gray-200">
                  Available Rewards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockRewards.map((reward) => (
                    <div
                      key={reward.id}
                      className="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600"
                      onClick={() => setSelectedReward(reward)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{reward.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-200">
                            {reward.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {reward.category}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-yellow-400 font-medium">
                          {reward.cost} points
                        </span>
                        <button
                          className={`px-3 py-1 rounded-md ${
                            mockUserData.rewardPoints >= reward.cost
                              ? "bg-green-600 text-white"
                              : "bg-gray-600 text-gray-400"
                          }`}
                          disabled={mockUserData.rewardPoints < reward.cost}
                        >
                          Redeem
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="space-y-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Eco Score Leaderboard
                </h3>
                <p className="text-gray-400 mb-4">
                  See how you rank against other users in your area
                </p>

                <div className="space-y-3">
                  {mockLeaderboard.map((user) => (
                    <div
                      key={user.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.name === mockUserData.name
                          ? "bg-green-900 border border-green-700"
                          : "bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-300">
                          {user.rank}
                        </div>
                        <span className="font-medium text-gray-200">
                          {user.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <span className="block text-green-400 font-medium">
                            {user.ecoScore}
                          </span>
                          <span className="text-xs text-gray-400">
                            Eco Score
                          </span>
                        </div>
                        {user.name === mockUserData.name && (
                          <span className="bg-green-800 text-green-300 px-2 py-1 text-xs rounded-full">
                            You
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Improve Your Ranking
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-800 rounded-lg flex items-start space-x-3">
                    <span className="text-xl">🚗</span>
                    <div>
                      <h4 className="font-medium text-gray-200">
                        Choose Eco-Friendly Routes
                      </h4>
                      <p className="text-sm text-gray-400">
                        Select routes marked as eco-friendly to earn more points
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg flex items-start space-x-3">
                    <span className="text-xl">⏰</span>
                    <div>
                      <h4 className="font-medium text-gray-200">
                        Avoid Peak Hours
                      </h4>
                      <p className="text-sm text-gray-400">
                        Travel during off-peak hours to reduce congestion
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg flex items-start space-x-3">
                    <span className="text-xl">📊</span>
                    <div>
                      <h4 className="font-medium text-gray-200">
                        Share Traffic Data
                      </h4>
                      <p className="text-sm text-gray-400">
                        Contribute to the community by sharing your traffic data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
