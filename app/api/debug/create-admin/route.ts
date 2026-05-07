import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"

export async function GET() {
  try {
    await connectDB()

    await Admin.deleteMany({})

    await Admin.create({
      username: "admin",
      password: "ashu786",
    })

    return NextResponse.json({
      success: true,
      message: "Admin created",
    })
  } catch (err) {
    return NextResponse.json({
      error: "Failed",
      detail: String(err),
    })
  }
}