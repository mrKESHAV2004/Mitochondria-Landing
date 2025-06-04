import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://i.imgur.com/GRUMtV0.png"
                alt="Mitochondria Logo"
                className="h-8 transform rotate-90"
              />
              <span className="text-xl font-bold">Mitochondria</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building future-ready skills through interactive learning experiences that prepare the next generation for success.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Games
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@mitochondria.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  contact@mitochondria.com
                </a>
              </li>
              <li className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-block px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mitochondria. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
