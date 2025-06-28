import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'events', label: 'EVENTS', path: '/events' },
    { id: 'login', label: 'LOGIN', path: '/login' },
    { id: 'signup', label: 'SIGNUP', path: '/signup' }
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 font-sans"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            <h1 className="text-2xl font-extrabold text-white tracking-tight hover:text-slate-200 transition-colors duration-200">
              FLITE
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <Link
                    to={item.path}
                    className={`
                      relative px-4 py-2.5 text-sm font-semibold tracking-wide
                      transition-all duration-300 cursor-pointer rounded-lg
                      ${item.id === 'login' || item.id === 'signup' 
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white border border-slate-500 hover:from-slate-600 hover:to-slate-500 hover:border-slate-400 shadow-lg hover:shadow-xl'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60 backdrop-blur-sm border border-transparent hover:border-slate-600/50'
                      }
                      group overflow-hidden
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="navbar-hover"
                    />
                    {/* Active indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2 cursor-pointer hover:bg-slate-800 rounded-md transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3 sm:px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block px-4 py-3 text-base font-semibold w-full text-left 
                      transition-all duration-300 tracking-wide rounded-xl cursor-pointer
                      border-l-4 border-transparent hover:border-slate-400
                      ${item.id === 'login' || item.id === 'signup' 
                        ? 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-white border border-slate-600 hover:from-slate-700/80 hover:to-slate-600/80 hover:border-slate-500 shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg'
                      }
                      group relative overflow-hidden
                    `}
                  >
                    <span className="relative z-10 flex items-center">
                      {item.label}
                      <motion.span
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </span>
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="mobile-hover"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}