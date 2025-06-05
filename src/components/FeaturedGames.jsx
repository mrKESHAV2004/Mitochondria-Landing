import { Button } from "@/components/Button"
import routes from '../lib/routes'

export default function FeaturedGames() {
  const games = [
    {
      id: 1,
      name: "Startup High",
      description: "Build your business empire and navigate market challenges in this strategic board game.",
      price: 1999,
      image: "https://startuphigh.in/cdn/shop/files/file_6.png",
      link_learn: routes.external.products.startupHigh,
      link_buy: routes.external.products.startupHighBuy,
    },
    {
      id: 2,
      name: "Entrepreneur Express",
      description: "Learn investment strategies and stock market principles through this educational game.",
      price: 44.99,
      image: "/assets/decorations/ee.jpeg",
      link_learn: routes.app.waitlist,
      link_buy: routes.external.products.entrepreneurExpress,
    },
    {
      id: 3,
      name: "The Elevator Pitch",
      description: "Master personal finance and budgeting skills in this family-friendly board game.",
      price: 34.99,
      image: "/assets/decorations/ep.png",
      link_learn: routes.app.waitlist,
      link_buy: routes.external.products.elevatorPitch,
    },
  ]

  return (
    <section id="games" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">Our Featured Games</h2>
          <p className="mx-auto mt-3 max-w-[700px] text-sm md:text-lg lg:text-xl text-muted-foreground px-4">
            Discover our collection - designed for pure fun and engagement!
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {games.map((game, index) => (
            <div key={game.id} className="group perspective">
              <div className="rounded-lg bg-card text-card-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div className="h-full w-full relative">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "/diverse-group-playing-board-game.png"
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <Button 
                      variant="yellow" 
                      size="small" 
                      className="mb-4 transform-gpu hover:scale-105 active:scale-95 transition-transform"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>
                <div className="p-4 md:p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors relative z-10">
                    {game.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground relative z-10">{game.description}</p>
                  <div className="mt-3 md:mt-4 flex items-center justify-between relative z-10">
                    {game.id === 1 ? (
                      <span className="text-lg font-bold">Rs.{game.price.toFixed(2)}</span>
                    ) : (
                      <span className="text-lg font-bold">Sold Out</span>
                    )}

                    <div className="flex gap-2">
                      {game.id === 1 ? (
                        <a href={game.link_buy}>
                          <Button 
                            variant="yellow" 
                            size="small" 
                            className="text-xs md:text-sm transform-gpu hover:scale-105 active:scale-95 transition-transform"
                          >
                            Buy Now
                          </Button>
                        </a>
                      ) : (
                        <>
                          <a href={game.link_buy}>
                            <Button 
                              variant="yellow" 
                              size="small" 
                              className="text-xs md:text-sm transform-gpu hover:scale-105 active:scale-95 transition-transform"
                            >
                              Pre-Book
                            </Button>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={routes.app.games}>
            <Button size="large" variant="yellow">
              View All Games
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
