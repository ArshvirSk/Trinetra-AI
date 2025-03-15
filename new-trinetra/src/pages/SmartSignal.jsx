import { useState } from 'react'
import { Link } from 'react-router-dom'

const SmartSignal = () => {
  const [signals] = useState([
    {
      id: 1,
      name: 'Junction A',
      status: 'active',
      waitTime: '45 sec',
      congestion: 'moderate'
    },
    {
      id: 2,
      name: 'Junction B',
      status: 'inactive',
      waitTime: '0 sec',
      congestion: 'low'
    },
    {
      id: 3,
      name: 'Junction C',
      status: 'active',
      waitTime: '30 sec',
      congestion: 'high'
    }
  ])

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Signal Monitoring</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Dashboard</Link>
          <Link to="/re-routing" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Re-Routing</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map(signal => (
          <div key={signal.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{signal.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                signal.status === 'active' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}>
                {signal.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Wait Time:</span>
                <span className="font-medium text-gray-900 dark:text-white">{signal.waitTime}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Congestion:</span>
                <span className={`font-medium ${
                  signal.congestion === 'low' 
                    ? 'text-green-600 dark:text-green-400'
                    : signal.congestion === 'moderate'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {signal.congestion}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 py-2 px-4 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Signal Map</h2>
        <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Interactive map will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default SmartSignal
