import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Order from "@/models/Order"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const { player, items, total } = body

    if (!player || !items || !total) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const order = await Order.create({
      player,
      items,
      total,
      status: "pending",
      createdAt: new Date(),
    })

    return NextResponse.json(order)

  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}