export type Order = {
  id: string
  player: string
  items: any[]
  total: number
  status: "pending" | "paid"
  createdAt: number
}

const KEY = "mc_orders"

export function getOrders(): Order[] {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem(KEY) || "[]")
}

export function addOrder(order: Order) {
  const orders = getOrders()
  orders.unshift(order)
  localStorage.setItem(KEY, JSON.stringify(orders))
}

export function updateOrder(id: string, status: Order["status"]) {
  const orders = getOrders().map(o =>
    o.id === id ? { ...o, status } : o
  )
  localStorage.setItem(KEY, JSON.stringify(orders))
}