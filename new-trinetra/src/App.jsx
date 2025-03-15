import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SmartSignal from './pages/SmartSignal'
import ReRouting from './pages/ReRouting'
import ThemeToggle from './components/ThemeToggle'
import Logo from './components/Logo'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <header className="border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 h-14 flex justify-between items-center">
              <Logo />
              <ThemeToggle />
            </div>
          </header>
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/smart-signal" element={<SmartSignal />} />
              <Route path="/re-routing" element={<ReRouting />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
