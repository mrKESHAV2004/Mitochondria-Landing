import { useEffect, useState } from "react"

/**
 * @typedef {Object} TypewriterAnimationProps
 * @property {string[]} phrases - Array of phrases to cycle through
 * @property {number} [typingSpeed=100] - Speed of typing (ms per character)
 * @property {number} [deletingSpeed=50] - Speed of deleting (ms per character)
 * @property {number} [pauseDuration=1500] - How long to pause when completely typed (ms)
 * @property {number} [cursorBlinkSpeed=500] - Speed of cursor blinking (ms)
 * @property {string} [className=""] - Additional CSS classes
 * @property {string} [cursorStyle="_"] - Character to use as cursor
 * @property {number} [startDelay=0] - Delay before starting the animation (ms)
 * @property {boolean} [loop=true] - Whether to loop through phrases
 */

/**
 * A component that animates typing and deleting text
 * @param {TypewriterAnimationProps} props
 */
const TypewriterAnimation = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  cursorBlinkSpeed = 500,
  className = "",
  cursorStyle = " ",
  startDelay = 0,
  loop = true,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isStarted, setIsStarted] = useState(false)

  // Initial delay before starting animation
  useEffect(() => {
    if (!isStarted) {
      const timer = setTimeout(() => {
        setIsStarted(true)
        setIsTyping(true)
      }, startDelay)

      return () => clearTimeout(timer)
    }
  }, [startDelay, isStarted])

  // Toggle cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(cursorInterval)
  }, [cursorBlinkSpeed])

  // Handle typing animation
  useEffect(() => {
    if (!isStarted) return

    const currentPhrase = phrases[currentPhraseIndex]

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Pause at the end of typing
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseDuration)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Move to next phrase and start typing again
        if (loop || currentPhraseIndex < phrases.length - 1) {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          setIsTyping(true)
        }
      }
    }
  }, [displayText, isTyping, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, loop, isStarted])

  return (
    <span className={className}>
      {displayText}
      <span
        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity inline-block`}
        aria-hidden="true"
      >
        {cursorStyle}
      </span>
    </span>
  )
}

export default TypewriterAnimation