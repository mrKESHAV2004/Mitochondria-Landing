import { useEffect, useState } from "react"

export function AnimatedSkillChips({ skills }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setActiveIndex((i) => (i + 1) % skills.length), 1000)
    return () => clearInterval(iv)
  }, [skills.length])

  return (
    <div className="mt-2 sm:mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-3 px-4">
      {skills.map((skill, idx) => {
        const isActive = idx === activeIndex

        return (
          <span
            key={skill}
            className={`
              inline-flex items-center px-3 py-1.5 md:px-4 md:py-2
              text-xs sm:text-sm md:text-base font-medium
              transition-all duration-500 ease-in-out
              ${isActive 
                ? "bg-gray-900 text-white scale-110 shadow-lg" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
              rounded-3xl
              cursor-default
              select-none
            `}
          >
            {skill}
          </span>
        )
      })}
    </div>
  )
}
