"use client"

import { useEffect, useState } from "react"

export default function Checkout() {
  const [order, setOrder] = useState<any>(null)
  const [done, setDone] = useState(false)

  const discord = "https://discord.gg/yourserver"

  useEffect(() => {
    const data = sessionStorage.getItem("order")

    if (data) {
      setOrder(JSON.parse(data))
    }
  }, [])

  if (!order) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading checkout...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-2xl mb-4">💳 Manual Payment</h1>

      <img
        src="/qr.png"
        className="w-40 h-40 bg-white p-2 rounded-xl"
      />

      <p className="mt-4 text-gray-400">
        Order ID: {order.id}
      </p>

      {!done ? (
        <button
          onClick={() => setDone(true)}
          className="mt-6 bg-red-600 px-6 py-3 rounded-xl"
        >
          I Have Paid ✔
        </button>
      ) : (
        <div className="mt-6 text-center">

          <p className="text-green-400">
            🎉 Order Sent for Verification
          </p>

          <a
            href={discord}
            className="mt-3 inline-block bg-blue-600 px-4 py-2 rounded-xl"
          >
            Join Discord 📩
          </a>

        </div>
      )}

    </div>
  )
}