import { Link } from "react-router-dom"
import { Button } from "./Button"

export default function FeaturedGames() {
  const games = [
    {
      id: 1,
      title: "Financial Literacy",
      description: "Learn essential money management skills through interactive scenarios.",
      image: "https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Financial-Literacy-1--Streamline-Milano_sudkku.png",
      link: "/games/financial-literacy"
    },
    {
      id: 2,
      title: "Critical Thinking",
      description: "Develop problem-solving abilities with engaging puzzles and challenges.",
      image: "https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Critical-Thinking-1--Streamline-Milano_sudkku.png",
      link: "/games/critical-thinking"
    },
    {
      id: 3,
      title: "Entrepreneurship",
      description: "Build your business acumen through simulated startup scenarios.",
      image: "https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Entrepreneurship-1--Streamline-Milano_sudkku.png",
      link: "/games/entrepreneurship"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <Link to={game.link}>
                  <Button variant="yellow" size="medium">
                    Play Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
