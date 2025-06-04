/**
 * Track a custom event with Meta Pixel
 * @param {string} eventName - Name of the event to track
 * @param {Object} [eventParams] - Optional parameters for the event
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined" && window.fbq && eventName) {
    try {
      window.fbq("track", eventName, eventParams)
    } catch (error) {
      console.error("Error tracking event:", error)
    }
  }
}

/**
 * Track a standard event with Meta Pixel
 * @param {string} eventName - Name of the standard event to track
 * @param {Object} [eventParams] - Optional parameters for the event
 */
export function trackStandardEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined" && window.fbq && eventName) {
    try {
      window.fbq("trackCustom", eventName, eventParams)
    } catch (error) {
      console.error("Error tracking standard event:", error)
    }
  }
}

/**
 * Track page view
 */
export function trackPageView() {
  if (typeof window !== "undefined" && window.fbq) {
    try {
      window.fbq("track", "PageView")
    } catch (error) {
      console.error("Error tracking page view:", error)
    }
  }
}

/**
 * Track when someone completes registration
 * @param {Object} [params] - Optional parameters
 */
export function trackCompleteRegistration(params = {}) {
  trackEvent("CompleteRegistration", params)
}

/**
 * Track when someone initiates checkout
 * @param {Object} [params] - Optional parameters like currency and value
 */
export function trackInitiateCheckout(params = {}) {
  trackEvent("InitiateCheckout", params)
}

/**
 * Track when someone adds payment info
 * @param {Object} [params] - Optional parameters
 */
export function trackAddPaymentInfo(params = {}) {
  trackEvent("AddPaymentInfo", params)
}

/**
 * Track when someone makes a purchase
 * @param {Object} params - Parameters like currency and value
 */
export function trackPurchase(params = {}) {
  trackEvent("Purchase", params)
}

/**
 * Track a custom event with Meta Pixel using trackCustom
 * @param {string} eventName - Name of the event to track
 * @param {Object} [eventParams] - Optional parameters for the event
 */
export function trackCustomEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined" && window.fbq && eventName) {
    try {
      window.fbq("trackCustom", eventName, eventParams)
    } catch (error) {
      console.error("Error tracking custom event:", error)
    }
  }
}

/**
 * Track when someone starts a trial
 * @param {Object} [params] - Optional parameters
 */
export function trackStartTrial(params = {}) {
  trackCustomEvent("StartTrial", params)
}

/**
 * Track when someone subscribes
 * @param {Object} [params] - Optional parameters
 */
export function trackSubscribe(params = {}) {
  trackCustomEvent("Subscribe", params)
}

/**
 * Track when someone adds to cart
 * @param {Object} [params] - Optional parameters like currency, value, and content
 */
export function trackAddToCart(params = {}) {
  trackEvent("AddToCart", params)
}

/**
 * Track a lead generation event
 * @param {Object} [params] - Optional parameters
 */
export function trackLead(params = {}) {
  trackEvent("Lead", params)
}

/**
 * Track when someone completes a tutorial or lesson
 * @param {Object} [params] - Optional parameters
 */
export function trackLessonCompletion(params = {}) {
  trackCustomEvent("LessonCompletion", params)
}
