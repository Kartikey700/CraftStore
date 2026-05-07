import Order from "@/models/Order"
import { connectDB } from "@/lib/db"
import { Order as OrderType } from "@/types/order"

export async function createOrder(data: OrderType) {
  await connectDB()
  return await Order.create(data)
}

export async function getOrders() {
  await connectDB()
  return await Order.find().sort({ createdAt: -1 })
}

export async function getOrderById(id: string) {
  await connectDB()
  return await (Order as any).findById(id).exec()
}