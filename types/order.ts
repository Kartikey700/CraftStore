export type OrderStatus = "pending" | "paid"

export interface OrderItem {
  id: string
  name: string
  price: number
  qty: number
}

export interface Order {
  _id?: string
  player: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  createdAt?: number
}