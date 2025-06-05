/**
 * Routes configuration for the EntrePi application
 * This file centralizes all routes and external links used throughout the application
 */

// External URLs
export const externalUrls = {
  // Authentication and user management
  auth: {
    login: "https://www.app.mitochondria.in/login",
    signup: "https://www.app.mitochondria.in",
    dashboard: "https://mitochondria.in/dashboard",
  },

  // Product and company websites
  products: {
    startupHigh: "https://startuphigh.in/",
    startupHighBuy: "https://startuphigh.in/products/startup-high-founder-s-edition",
    entrepreneurExpress: "https://startuphigh.in/products/entrepreneur-express",
    elevatorPitch: "https://startuphigh.in/products/elevator-pitch",
  },

  // Social media links
  social: {
    twitter: "https://x.com/EntrePiWorld",
    instagram: "https://instagram.com/entrepi.world",
    linkedin: "https://linkedin.com/company/entrepi",
    facebook: "https://facebook.com/entrepi.world",
  },
}

// Internal application routes
export const appRoutes = {
  // Main pages
  home: "/",
  about: "/about",
  games: "/games",
  educators: "/educators",
  learn: "/learn",
  privacy: "/privacy",
  terms: "/terms",
  contact: "/contact",

  // Feature pages
  waitlist: "/waitlist",
  community: "/community",
  blog: "/blog",

  // Authentication pages (internal)
  auth: {
    login: "/login",
    signup: "/signup",
    forgotPassword: "/forgot-password",
  },
}

// Helper function to get a route by name
export function getRoute(routeName) {
  // Split the route name by dots (e.g., "auth.login")
  const parts = routeName.split(".")

  // Navigate through the route objects
  let route = parts[0] === "external" ? externalUrls : appRoutes

  // Start from index 1 if using external routes
  const startIndex = parts[0] === "external" ? 1 : 0

  for (let i = startIndex; i < parts.length; i++) {
    route = route[parts[i]]
    if (!route) {
      console.error(`Route not found: ${routeName}`)
      return "/"
    }
  }

  return route
}

// Export a combined object for easy access
export const routes = {
  app: appRoutes,
  external: externalUrls,
  get: getRoute,
}

export default routes
