import { Instagram, Linkedin, Twitter } from "lucide-react"

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
  return (
    <div className="min-h-screen relative flex flex-col w-full overflow-hidden">
      {/* Background Image with Better Scaling */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748551897/NET_-_SVG_idhhwu.svg"
          alt="Background pattern"
          className="w-full h-full object-cover scale-120 opacity-30"
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
              className="h-20 mx-auto transform rotate-90 filter brightness-110"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Coming Soon
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-200 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We're working on something exciting. Stay tuned for our launch.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-8"
          >
            {[
              { name: "Twitter", href: "https://twitter.com", icon: Twitter },
              { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
              { name: "Instagram", href: "https://instagram.com", icon: Instagram }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-lg font-medium"
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