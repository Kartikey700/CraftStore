"use client"

import { useEffect, useState } from "react"
import { getOrders } from "@/lib/storage"

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl">Orders</h1>

      {orders.map((o) => (
        <div key={o.id} className="bg-zinc-900 p-4 mt-3 rounded-xl">
          <p>🧾 {o.id}</p>
          <p>👤 {o.player}</p>
          <p>💰 ₹{o.total}</p>

          {o.items.map((i: any, idx: number) => (
            <p key={idx}>• {i.name} x{i.qty}</p>
          ))}
        </div>
      ))}
    </div>
  )
}