"use client"

import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

// You can replace this with your actual placeholder image
const IMG_PLACEHOLDER = "https://i.imgur.com/M967mvE.png"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Waitlist
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Be among the first to experience our new learning platform.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <Button variant="yellow" size="large">
                    Join Waitlist
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
