import { useState } from 'react'
import { Link } from 'react-router-dom'

const ReRouting = () => {
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [routes] = useState([
    {
      id: 1,
      name: 'Route 1',
      distance: '5.2 km',
      time: '15 min',
      congestion: 'low',
      signals: 4
    },
    {
      id: 2,
      name: 'Route 2',
      distance: '6.8 km',
      time: '18 min',
      congestion: 'moderate',
      signals: 3
    },
    {
      id: 3,
      name: 'Route 3',
      distance: '7.1 km',
      time: '20 min',
      congestion: 'high',
      signals: 2
    }
  ])

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would make an API call to get route suggestions
    console.log('Searching routes from', source, 'to', destination)
  }

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Re-Routing</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Dashboard</Link>
          <Link to="/smart-signal" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Smart Signal</Link>
        </nav>
      </header>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Source</label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Enter starting point"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Destination</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              placeholder="Enter destination"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Find Routes
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map(route => (
          <div key={route.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{route.name}</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Distance:</span>
                <span className="font-medium text-gray-900 dark:text-white">{route.distance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Est. Time:</span>
                <span className="font-medium text-gray-900 dark:text-white">{route.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Congestion:</span>
                <span className={`font-medium ${
                  route.congestion === 'low' 
                    ? 'text-green-600 dark:text-green-400'
                    : route.congestion === 'moderate'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {route.congestion.charAt(0).toUpperCase() + route.congestion.slice(1)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Traffic Signals:</span>
                <span className="font-medium text-gray-900 dark:text-white">{route.signals}</span>
              </div>
            </div>
            <button
              className="mt-4 w-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 py-2 px-4 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
            >
              Select Route
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Route Map</h2>
        <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Interactive map will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default ReRouting
