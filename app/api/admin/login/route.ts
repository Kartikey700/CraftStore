import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    await connectDB()

    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      )
    }

    const admin = await Admin.findOne({ username: username } as any)

    if (!admin || admin.password !== password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      )
    }

    const token = signToken({
      id: admin._id,
      username: admin.username,
    })

    const res = NextResponse.json({
      success: true,
      message: "Login successful",
    })

    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "lax",
      path: "/",
    })

    return res
  } catch (err) {
    console.log("LOGIN ERROR:", err)

    return NextResponse.json(
      {
        error: "Server error",
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    )
  }
}