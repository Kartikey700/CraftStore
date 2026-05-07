const KEY = "orders"

export function addOrder(order: any) {
  const data = JSON.parse(localStorage.getItem(KEY) || "[]")
  data.push(order)
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function getOrders() {
  return JSON.parse(localStorage.getItem(KEY) || "[]")
}