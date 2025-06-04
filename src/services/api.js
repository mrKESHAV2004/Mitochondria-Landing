const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export async function submitEducatorForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/educators`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get("name"),
        organization: formData.get("org"),
        email: formData.get("email"),
        phone: formData.get("phone")
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to submit form')
    }

    const data = await response.json()
    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
      data
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: error.message || "There was an error submitting your information. Please try again later."
    }
  }
}