"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export default function Checkout() {
  const { items, total, clearCart } = useCart()

  const [player, setPlayer] = useState("")
  const [step, setStep] = useState<"pay" | "success">("pay")
  const [orderId, setOrderId] = useState("")

  // 💳 CREATE ORDER (IMPORTANT)
  const createOrder = async () => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player,
        items,
        total,
        status: "pending",
      }),
    })

    const data = await res.json()
    return data
  }

  // ✅ USER CLICKED "I HAVE PAID"
  const handlePaid = async () => {
    if (!player) {
      alert("Enter Minecraft username")
      return
    }

    const order = await createOrder()

    setOrderId(order._id)
    clearCart()
    setStep("success")
  }

  // ================= PAY SCREEN =================
  if (step === "pay") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-md">

          <h1 className="text-2xl font-bold mb-4 text-center">
            💳 Checkout
          </h1>

          {/* PLAYER INPUT */}
          <input
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            placeholder="Minecraft Username"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 mb-4"
          />

          {/* QR */}
          <div className="flex justify-center">
            <img
              src="/qr.png"
              className="w-40 h-40 bg-white p-2 rounded-xl"
            />
          </div>

          <p className="text-center text-gray-300 mt-3">
            Total: ₹{total}
          </p>

          {/* AD BANNER */}
          <div className="mt-3 text-sm text-blue-300 bg-blue-500/10 p-2 rounded-xl text-center">
            🔥 VIP Rank Discount Active
          </div>

          <button
            onClick={handlePaid}
            className="mt-5 w-full bg-linear-to-r from-blue-500 to-purple-600 py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            I Have Paid ✔
          </button>

        </div>
      </div>
    )
  }

  // ================= SUCCESS SCREEN =================
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">

        <div className="text-green-400 text-5xl mb-4 animate-bounce">
          ✔
        </div>

        <h1 className="text-3xl font-bold text-green-300">
          Order Placed 🎉
        </h1>

        <p className="text-gray-300 mt-2">
          We will verify payment manually
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Player: {player}
        </p>

        <p className="text-sm text-gray-400">
          Order ID: {orderId}
        </p>

        <a
          href="https://discord.gg/yourserver"
          className="inline-block mt-6 bg-linear-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl"
        >
          Join Discord 📩
        </a>

      </div>
    </div>
  )
}