import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in .env.local")
}

// Global cache (prevents multiple connections in dev)
let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export const connectDB = async () => {
  // If already connected, reuse it
  if (cached.conn) {
    return cached.conn
  }

  // If no connection promise yet, create one
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongooseInstance) => {
      console.log("✅ MongoDB Connected")
      return mongooseInstance
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (err) {
    cached.promise = null
    console.log("❌ MongoDB Connection Error:", err)
    throw err
  }

  return cached.conn
}