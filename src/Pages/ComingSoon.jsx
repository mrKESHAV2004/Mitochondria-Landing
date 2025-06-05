import { Instagram, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import routes from "../lib/routes"

// Mock motion for demo - replace with actual framer-motion
const motion = {
  div: ({ children, initial, animate, transition, className, ...props }) => (
    <div className={className} {...props} style={{ animation: "fadeInUp 0.8s ease-out" }}>
      {children}
    </div>
  ),
  h1: ({ children, initial, animate, transition, className, ...props }) => (
    <h1 className={className} {...props} style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}>
      {children}
    </h1>
  ),
  p: ({ children, initial, animate, transition, className, ...props }) => (
    <p className={className} {...props} style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
      {children}
    </p>
  )
}

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col w-full overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-24 h-24 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255,222,90,0.95) 0%, rgba(255,222,90,0.7) 20%, rgba(255,222,90,0.4) 40%, rgba(255,222,90,0.2) 60%, rgba(255,222,90,0.1) 80%, rgba(255,222,90,0) 100%)',
            filter: 'blur(12px)',
          }}
        />
        <div 
          className="w-16 h-16 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,222,90,1) 0%, rgba(255,222,90,0.9) 30%, rgba(255,222,90,0.6) 60%, rgba(255,222,90,0) 100%)',
          }}
        />
        <div 
          className="w-3 h-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,222,90,1) 0%, rgba(255,222,90,0.8) 100%)'
          }}
        />
      </div>

      {/* Background Image with Better Scaling */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10" />
        <img
          src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748551897/NET_-_SVG_idhhwu.svg"
          alt="Background pattern"
          className="w-full h-full object-cover scale-120 opacity-50"
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <img
              src="https://i.imgur.com/GRUMtV0.png"
              alt="Mitochondria Logo"
              className="h-24 mx-auto transform rotate-90 filter brightness-110 drop-shadow-[0_0_15px_rgba(255,222,90,0.3)]"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Coming <span className="text-[#FFDE5A]">Soon</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-200 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We're working on something exciting. Stay tuned for our launch.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-16"
          >
            <Button
              variant="yellow"
              size="large"
              href={routes.external.auth.signup}
              className="text-lg"
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-8"
          >
            {[
              { name: "Twitter", href: routes.external.social.twitter, icon: Twitter },
              { name: "LinkedIn", href: routes.external.social.linkedin, icon: Linkedin },
              { name: "Instagram", href: routes.external.social.instagram, icon: Instagram }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#FFDE5A] transition-all duration-300 text-lg font-medium"
              >
                <social.icon 
                  size={20} 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm relative z-20">
        © {new Date().getFullYear()} Mitochondria. All rights reserved.
      </footer>

      {/* Subtle Animation Styles */}
      <style jsx>{`
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
    </div>
  )
}