export function createReceipt(order: any) {
  return {
    id: order.id,
    items: order.items,
    total: order.total,
    date: new Date().toISOString(),
    status: "pending",
  }
}