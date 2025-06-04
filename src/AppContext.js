import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local")
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function submitEducatorForm(formData) {
  try {
    const client = await clientPromise
    const db = client.db("entrepi")
    const collection = db.collection("educator_inquiries")

    // Extract form data
    const name = formData.get("name")
    const org = formData.get("org")
    const email = formData.get("email")
    const phone = formData.get("phone")

    // Validate form data
    if (!name || !org || !email || !phone) {
      return { success: false, message: "All fields are required" }
    }

    // Create document to insert
    const document = {
      name,
      organization: org,
      email,
      phone,
      createdAt: new Date(),
    }

    // Insert into MongoDB
    await collection.insertOne(document)

    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting your information. Please try again later.",
    }
  }
}
