import { Button } from "../components/Button"
import FeaturedGames from "../components/FeaturedGames"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export default function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Featured Games Section - Replaced with the new component */}
        <FeaturedGames />

        {/* CTA Section */}
        <section className="py-16 bg-[#FFDE5A]/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to play and learn?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are building future-ready skills through our interactive games.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="black" size="large">
                Sign Up Free
              </Button>
              <Button variant="yellow" size="large" href="/">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
