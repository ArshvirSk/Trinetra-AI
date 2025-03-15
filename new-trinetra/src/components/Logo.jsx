const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* SVG Logo */}
        <svg
          className="w-8 h-8"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer mandala pattern */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          
          {/* Decorative triangular patterns */}
          <path
            d="M50 5 L80 65 L20 65 Z"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Third eye shape */}
          <path
            d="M30 50 Q50 20 70 50 Q50 80 30 50 Z"
            className="fill-blue-600 dark:fill-blue-400"
            opacity="0.1"
          />
          <path
            d="M30 50 Q50 20 70 50 Q50 80 30 50 Z"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="3"
            fill="none"
          />
          
          {/* Iris and pupil */}
          <circle
            cx="50"
            cy="50"
            r="12"
            className="fill-blue-600 dark:fill-blue-400"
            opacity="0.2"
          />
          <circle
            cx="50"
            cy="50"
            r="6"
            className="fill-blue-600 dark:fill-blue-400"
          />
          
          {/* Sacred geometry patterns */}
          <path
            d="M50 35 L50 65"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          <path
            d="M35 50 L65 50"
            className="stroke-blue-600 dark:stroke-blue-400"
            strokeWidth="2"
          />
          
          {/* Decorative dots */}
          <circle cx="50" cy="30" r="2" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="50" cy="70" r="2" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="30" cy="50" r="2" className="fill-blue-600 dark:fill-blue-400" />
          <circle cx="70" cy="50" r="2" className="fill-blue-600 dark:fill-blue-400" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex items-center">
        <span className="text-lg font-bold text-gray-900 dark:text-white tracking-wider">
          Trinetra
        </span>
        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 ml-1">
          AI
        </span>
      </div>
    </div>
  )
}

export default Logo
