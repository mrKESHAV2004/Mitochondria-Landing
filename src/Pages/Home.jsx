import { useEffect, useState } from "react"
import { AnimatedSkillChips } from "../components/AnimatedSkillChips"
import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import TypewriterAnimation from "../components/TypeWriterAnimation"
import routes from "../lib/routes"
import { trackPageView } from "../utils/analytics"

export default function Home() {
  const [showElements, setShowElements] = useState(false)

  useEffect(() => {
    setShowElements(true)
    // Track page view when component mounts
    trackPageView()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Inspired by reference image */}
        <section className="flex flex-col justify-between min-h-screen bg-white/40 relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 -z-10">
            <img
              src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748551897/NET_-_SVG_idhhwu.svg"
              alt="Network background"
              className="object-cover scale-150 opacity-20 w-full h-full"
            />
          </div>

          {/* Main hero */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-grow justify-center">
            <div className="max-w-5xl mx-auto w-full relative">
              {/* Startup illustration behind text */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748554048/Startup-4--Streamline-Milano_pco0n9_mdbbez.svg"
                  alt="Person illustration"
                  className="w-full h-full max-w-2xl object-contain opacity-30"
                />
              </div>

              {/* "Be" + illustration */}
              <div className="flex justify-center items-baseline gap-4">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">Be</h1>
              </div>

              {/* Typewriter + "in 7 Mins/Day" */}
              <div className="text-center mt-4 md:mt-6">
                <div className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#FFDE5A]">
                  <TypewriterAnimation
                    phrases={["Future-Ready", "Financially Sound", "Entrepreneurial", "a Critical Thinker"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                  />
                </div>

                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mt-2">
                  in 7 Mins/Day
                </h1>

                <p className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-bold text-gray-500">
                  Interactive lessons based on global skill frameworks!
                </p>

                <div className="mt-10 md:mt-12">
                  <Button
                    variant="yellow"
                    size="xlarge"
                    href={routes.external.auth.signup}
                    trackingEvent="GetStartedClick"
                    trackingParams={{ location: "hero_section" }}
                    className="text-base sm:text-lg md:text-xl px-10 py-3 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Skills chips */}
          <div className="w-full px-4 pb-10 sm:pb-6 lg:pb-8 mt-auto">
            <AnimatedSkillChips
              skills={[
                "Entrepreneurship",
                "Financial Literacy",
                "Critical Thinking",
                "Problem Solving",
                "Communication",
              ]}
            />
          </div>
        </section>

        {/* NEP 2020 Section - Fixed logo padding */}
        <section className="py-6 md:py-10 relative overflow-hidden bg-[#FFDE5A]/70">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/assets/backgrounds/background.png"
              alt="Geometric background"
              className="object-cover"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-black">
              Powerhouse of learning lies in skills not content
            </h2>

            {/* Flex layout for screens < 1280px, Grid layout for screens >= 1280px 
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:grid xl:grid-cols-5 xl:gap-10 2xl:gap-12 xl:justify-items-center">
              {[
                { name: "Amity", logo: "/assets/logos/amity.png" },
                { name: "Manav Rachna", logo: "/assets/logos/manav-rachna.png" },
                { name: "Masters Union", logo: "/assets/logos/masters-union.png" },
                { name: "PWSOS", logo: "/assets/logos/pwsos.png" },
                { name: "BITS-Pilani", logo: "/assets/logos/bits-pilani.png" },
              ].map((institution) => (
                <div key={institution.name} className="text-center">
                  <img
                    src={institution.logo || "/placeholder.svg"}
                    alt={`${institution.name} logo`}
                    width={250}
                    height={250}
                    className="w-[120px] h-auto sm:w-[150px] md:w-[200px] lg:w-[220px] xl:w-[180px] 2xl:w-[200px] object-contain"
                  />
                </div>
              ))}
            </div>
            */}
          </div>
        </section>

        {/* Changing World Section - Updated with gradient */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              {/* Image first on mobile, second on desktop */}
              <div className="flex justify-center md:order-1 order-1 md:pl-4 lg:pl-8">
                <div className="w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Mvp-1--Streamline-Milano_sudkku.png"
                    alt="Future ready illustration"
                    width={280}
                    height={280}
                    className="w-full h-auto max-w-[220px] md:max-w-[280px]"
                  />
                </div>
              </div>

              <div className="max-w-md mx-auto md:mx-0 md:order-2 order-2 text-center md:text-left md:pr-4 lg:pr-8">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 text-black">
                  Do you have the skills to succeed in future?
                </h2>
                <p className="text-sm md:text-lg mb-3 md:mb-6 text-black">
                  AI writes code. Robots do jobs. Humans have to evolve. But education is in 2005. Teens need real-world skills - fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educators Section - Fixed padding and mobile layout */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              {/* Text first on desktop, second on mobile */}
              <div className="max-w-md mx-auto md:mx-0 order-2 md:order-1 text-center md:text-left md:pl-4 lg:pl-8">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 text-black">
                  Anywhere. Anytime.
                </h2>
                <p className="text-sm md:text-lg mb-3 md:mb-6 text-black">
                  Learning isn't locked in classrooms anymore. We break down essential skills into 7-minute lessons that fit into everyday life. 
                </p>
                <Button
                  variant="yellow"
                  href={routes.app.educators}
                  trackingEvent="EducatorsLearnMoreClick"
                  trackingParams={{ location: "educators_section" }}
                  className="text-base md:text-lg px-6 py-2 md:px-8 md:py-3 mb-4 md:mb-0"
                >
                  Learn More
                </Button>
              </div>

              {/* Image first on mobile, second on desktop */}
              <div className="flex justify-center order-1 md:order-2 md:pr-4 lg:pr-8">
                <div className="w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/I-Have-Question-3--Streamline-Milano_sb8poo.png"
                    alt="Educator illustration"
                    width={280}
                    height={280}
                    className="w-full h-auto max-w-[220px] md:max-w-[280px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Learning Section - Updated with gradient and mobile layout */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              {/* Image first on mobile, second on desktop */}
              <div className="flex justify-center md:order-1 md:pl-4 lg:pl-8">
                <div className="w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748817655/Leadership-3--Streamline-Milano_oigzb2.png"
                    alt="Games illustration"
                    width={280}
                    height={280}
                    className="w-full h-auto max-w-[220px] md:max-w-[280px]"
                  />
                </div>
              </div>

              <div className="max-w-md mx-auto md:mx-0 md:order-2 text-center md:text-left md:pr-4 lg:pr-8">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 text-black">
                  Learn in a way your brain appreciates!
                </h2>
                <p className="text-sm md:text-lg mb-4 md:mb-8 text-black">
                  Spaced, small, repetitive learning is what neuroscience recommends and what Mitochondria delivers!
                </p>
                <Button
                  variant="yellow"
                  href={routes.app.games}
                  trackingEvent="ExploreGamesClick"
                  trackingParams={{ location: "fun_learning_section" }}
                  className="text-base md:text-lg px-6 py-2 md:px-8 md:py-3 mb-4 md:mb-0"
                >
                  Explore Games
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-10 md:py-16 bg-[#FFDE5A]/70 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/assets/backgrounds/background.png"
              alt="Geometric background"
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4">
              Read → Interact → Do
            </h2>
            <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-lg mx-auto px-4">
              Each lesson ends with a small, real-life action. Teens test what they've learned by doing- not just watching or reading. That's how they grow.
            </p>

            <div className="flex justify-center">
              <Button
                variant="black"
                size="large"
                href={routes.app.community}
                className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3"
              >
                Join Community
              </Button>
            </div>
          </div>
        </section>

        {/* Skill Taxonomy Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Skill Taxonomy designed in partnership with
            </h2>

            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="text-center">
                <img
                  src="https://res.cloudinary.com/dacuzjrcg/image/upload/v1748534898/MRCAL_1_uth7hz.png"
                  alt="CAL and MRU logos"
                  className="max-w-[280px] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-16 bg-[#FFDE5A]/70 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/assets/backgrounds/background.png"
              alt="Geometric background"
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-6">"We're building this with you."</h2>
            <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-lg mx-auto px-4">
              Future learning can't be built in isolation. If you have ideas, suggestions, or feedback—book a call. Let's shape Mitochondria together.
            </p>

            <div className="flex justify-center">
              <Button
                variant="black"
                size="large"
                href={routes.external.auth.signup}
                trackingEvent="SignUpClick"
                trackingParams={{ location: "cta_section" }}
                className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3"
              >
                Talk to Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
