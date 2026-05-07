"use client"

import { useState, useEffect } from "react"
import { loginAdmin, isAdmin } from "@/lib/admin-auth"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (isAdmin()) {
      router.push("/admin/orders")
    }
  }, [])

  const handleLogin = () => {
    const ok = loginAdmin(password)

    if (ok) {
      router.push("/admin/orders")
    } else {
      alert("❌ Wrong password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-black text-white">

      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-80 backdrop-blur-xl">

        <h1 className="text-xl font-bold mb-4">
          🔐 Secure Admin Login
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full p-2 rounded bg-black border border-white/10"
        />

        <button
          onClick={handleLogin}
          className="mt-4 w-full py-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition"
        >
          Login
        </button>

      </div>

    </div>
  )
}