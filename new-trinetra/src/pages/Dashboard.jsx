import { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [stats] = useState({
    liveSignals: 42,
    downSignals: 3,
    congestion: '25%'
  })

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Traffic Dashboard</h1>
        <nav className="space-x-4">
          <Link to="/smart-signal" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Smart Signal</Link>
          <Link to="/re-routing" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Re-Routing</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Signals Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Signals</h3>
          <p className="mt-2 text-3xl font-bold text-green-600 dark:text-green-400">{stats.liveSignals}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Active traffic signals</p>
        </div>

        {/* Down Signals Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Down Signals</h3>
          <p className="mt-2 text-3xl font-bold text-red-600 dark:text-red-400">{stats.downSignals}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Inactive traffic signals</p>
        </div>

        {/* Congestion Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Congestion</h3>
          <p className="mt-2 text-3xl font-bold text-yellow-600 dark:text-yellow-400">{stats.congestion}</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Average traffic density</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Traffic Flow</h3>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Traffic chart will be displayed here</p>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Events</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">High Traffic Alert</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Junction {event} experiencing heavy congestion</p>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 ml-auto">5m ago</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
