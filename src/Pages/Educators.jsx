"use client"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { trackPageView } from "../utils/analytics"

export default function Educators() {
  const [showModal, setShowModal] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResult, setFormResult] = useState(null)

  useEffect(() => {
    // Track page view when component mounts
    trackPageView()
  }, [])

  const openModal = () => {
    setShowModal(true)
    setFormResult(null)
  }

  const closeModal = () => {
    setShowModal(false)
    setFormResult(null)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare form data
    const formData = {
      name: formState.name.trim(),
      org: formState.org.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
    }

    // Basic validation
    if (!formData.name || !formData.org || !formData.email || !formData.phone) {
      setFormResult({
        success: false,
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormResult({
        success: false,
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Create mailto link with form data
    const subject = `New Educator Contact: ${formData.name}`;
    const body = `
Name: ${formData.name}
Organization: ${formData.org}
Email: ${formData.email}
Phone: ${formData.phone}
    `.trim();

    const mailtoLink = `mailto:shrimalikeshav4@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormState({
      name: "",
      org: "",
      email: "",
      phone: "",
    });

    setFormResult({
      success: true,
      message: 'Thank you! Your email client should open with the form details.'
    });

    setIsSubmitting(false);
    closeModal();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4 md:mb-8">
            Educators, assemble!
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4">
            The world is changing in ways we cannot imagine. In order to make students future-ready, we need to work
            together to provide them with learner centric, holistic and complete learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFDE5A] rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5B2A86]"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m7 10 3 3 7-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-2">Personalized Learning</h3>
              <p className="text-sm md:text-base text-center">
                Tailor education to individual student needs with our AI-powered platform that adapts to different
                learning styles and paces.
              </p>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFDE5A] rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5B2A86]"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-2">Skill-Based Curriculum</h3>
              <p className="text-sm md:text-base text-center">
                Integrate future-ready skills into your existing curriculum with our NEP 2020 aligned framework and
                resources.
              </p>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFDE5A] rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5B2A86]"
                >
                  <path d="M2 12h5" />
                  <path d="M17 12h5" />
                  <path d="M12 2v5" />
                  <path d="M12 17v5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-2">Community & Collaboration</h3>
              <p className="text-sm md:text-base text-center">
                Join a network of forward-thinking educators to share resources, organize events, and collaborate on
                innovative teaching methods.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="yellow" size="large" onClick={openModal} trackingEvent="EducatorContactClick">
              Let&apos;s speak!
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-8 max-w-sm md:max-w-md w-full mx-2 transform transition-all duration-300 ease-in-out animate-slideIn">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-lg md:text-2xl font-bold">Connect with us</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1">
                  Org name
                </label>
                <input
                  type="text"
                  id="org"
                  value={formState.org}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  placeholder="Your organization"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              {formResult && (
                <div
                  className={`p-3 rounded-md ${formResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {formResult.message}
                </div>
              )}

              <div className="pt-4">
                <Button
                  variant="yellow"
                  className="w-full"
                  trackingEvent="EducatorFormSubmit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}