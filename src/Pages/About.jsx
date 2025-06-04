import { Button } from "@/components/Button"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mitochondria</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are on a mission to make education future-ready and learner-centric.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <p className="text-lg mb-6">Content to be added about the founding story of Mitochondria...</p>
              <p className="text-lg mb-6">Content to be added about the mission and vision...</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team Member Placeholder 1 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>
                </div>
                <h3 className="text-xl font-bold">Name</h3>
                <p className="text-gray-600">Position</p>
              </div>

              {/* Team Member Placeholder 2 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>
                </div>
                <h3 className="text-xl font-bold">Name</h3>
                <p className="text-gray-600">Position</p>
              </div>

              {/* Team Member Placeholder 3 */}
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>
                </div>
                <h3 className="text-xl font-bold">Name</h3>
                <p className="text-gray-600">Position</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Value 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p>Content to be added about this value...</p>
              </div>

              {/* Value 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Learner-Centric</h3>
                <p>Content to be added about this value...</p>
              </div>

              {/* Value 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Future-Ready</h3>
                <p>Content to be added about this value...</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#FFDE5A]/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join us on our mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the revolution in education that prepares students for the future.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="black" size="large">
                Get Started
              </Button>
              <Button variant="yellow" size="large" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
