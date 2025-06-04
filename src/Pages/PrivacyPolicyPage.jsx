import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                This page will contain the privacy policy for Mitochondria. Please add your content here.
              </p>

              {/* Placeholder sections */}
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">Content to be added...</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">Content to be added...</p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
