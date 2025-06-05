import { Link } from "react-router-dom"
import { trackEvent } from "../utils/analytics"

export function Button({
  children,
  variant = "yellow", // Default to yellow
  size = "medium",
  href,
  className = "",
  trackingEvent,
  trackingParams = {},
  ...props
}) {
  // Base styles
  const baseStyles = "relative font-semibold transition-all duration-200 rounded-full transform-gpu"

  // Size variations
  const sizeStyles = {
    small: "px-4 py-1.5 text-sm md:px-6 md:py-2",
    medium: "px-5 py-2 text-sm md:px-8 md:py-3 md:text-base",
    large: "px-6 py-2.5 text-base md:px-10 md:py-3 md:text-lg",
    xlarge: "px-7 py-3 text-base md:px-12 md:py-4 md:text-lg",
  }

  // Enhanced 3D effect with deeper shadows and better transitions
  const variantStyles = {
    yellow:
      "bg-[#FFDE5A] text-black shadow-[0_4px_0_0_rgba(0,0,0,0.2),0_6px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2),0_4px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none",
    black:
      "bg-black text-white shadow-[0_4px_0_0_#1a1a1a,0_6px_0_0_#000] hover:shadow-[0_2px_0_0_#1a1a1a,0_4px_0_0_#000] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none",
  }

  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  // Handle click with tracking
  const handleClick = (e) => {
    if (trackingEvent && typeof trackingEvent === "string") {
      try {
        trackEvent(trackingEvent, {
          button_variant: variant,
          button_text: typeof children === "string" ? children : "Button",
          ...trackingParams,
        })
      } catch (error) {
        console.error("Error tracking button click:", error)
      }
    }

    if (props.onClick) {
      props.onClick(e)
    }
  }

  // If href is provided, render as Link
  if (href) {
    return (
      <Link to={href} className={buttonStyles} onClick={handleClick} {...props}>
        {children}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button className={buttonStyles} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}
