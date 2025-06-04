"use client"
import { trackEvent, trackPageView } from "@/utils/analytics"
import { useEffect } from "react"
import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export default function LearnPage() {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView()
  }, [])

  const handleSubscribe = () => {
    // This would be called when the user clicks the subscribe button
    trackEvent("InitiateCheckout", {
      content_category: "subscription",
      content_name: "premium_subscription",
      currency: "INR",
      value: 2999,
    })

    // Continue with subscription process
    // ...
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Learn Essential Skills in 7 Minutes
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Our bite-sized lessons are designed to fit into your busy schedule while delivering maximum impact.
              </p>
              <Button variant="yellow" size="large" href="/signup">
                Start Learning
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Time-1--Streamline-Milano_sudkku.png"
                    alt="Time icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Lessons</h3>
                <p className="text-gray-600">
                  Learn essential skills in just 7 minutes per day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Interactive-1--Streamline-Milano_sudkku.png"
                    alt="Interactive icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">
                  Engage with interactive content and real-world scenarios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Progress-1--Streamline-Milano_sudkku.png"
                    alt="Progress icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                <p className="text-gray-600">
                  Monitor your learning journey and celebrate achievements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
