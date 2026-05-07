import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Order from "@/models/Order"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const order = await Order.create({
      ...body,
      status: "pending",
      createdAt: Date.now(),
    })

    return NextResponse.json(order)
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}