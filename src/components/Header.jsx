import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import routes from "../lib/routes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { to: routes.app.about, label: "About" },
    { to: routes.app.courses, label: "Courses" },
    { to: routes.app.community, label: "Community" },
  ]

  return (
    <header 
      className={`absolute top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 py-3 md:px-6 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          aria-label="Mitochondria Home"
        >
          <div className="relative">
            <img
              src="https://i.imgur.com/GRUMtV0.png"
              alt="Mitochondria Logo"
              className="h-8 md:h-10 transform rotate-90 transition-transform duration-300 group-hover:rotate-180"
            />
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-900">
            Mitochondria
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={routes.external.auth.signup}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 md:hidden rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-900" />
          ) : (
            <Menu size={24} className="text-gray-900" />
          )}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-50 md:hidden"
          style={{
            animation: 'slideIn 0.3s ease-out forwards'
          }}
        >
          <div className="h-full flex flex-col">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <Link 
                to="/" 
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <img
                  src="https://i.imgur.com/GRUMtV0.png"
                  alt="Mitochondria Logo"
                  className="h-8 transform rotate-90"
                />
                <span className="text-lg font-bold text-gray-900">
                  Mitochondria
                </span>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-900" />
              </button>
            </div>

            {/* Menu Content */}
            <nav className="flex-1 flex flex-col p-6">
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-2xl font-medium text-center transition-all duration-300 transform hover:scale-105 ${
                      location.pathname === link.to
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={toggleMenu}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.1}s forwards`,
                      opacity: 0
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Bottom CTA */}
              <div 
                className="mt-auto pt-8 border-t border-gray-100"
                style={{
                  animation: 'fadeInUp 0.3s ease-out 0.4s forwards',
                  opacity: 0
                }}
              >
                <Link
                  to={routes.external.auth.signup}
                  className="block w-full py-4 text-center text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
