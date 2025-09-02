import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-gray-200 dark:bg-hc-darkless transition-colors duration-200">
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-hc-snow dark:bg-hc-darkless text-hc-black dark:text-white hover:bg-hc-smoke dark:hover:bg-hc-steel transition-colors duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

export default DarkModeToggle
