import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth"

export async function GET() {
  const token = (await cookies()).get("admin-token")?.value

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  const user = verifyToken(token)

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  return NextResponse.json({ user })
}