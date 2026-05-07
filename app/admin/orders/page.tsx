"use client"

import { useEffect } from "react"
import { isAdmin, logoutAdmin } from "@/lib/admin-auth"
import { useRouter } from "next/navigation"

export default function Orders() {
  const router = useRouter()

  useEffect(() => {
    if (!isAdmin()) {
      router.push("/admin")
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">📊 Orders Dashboard</h1>

        <button
          onClick={() => {
            logoutAdmin()
            router.push("/admin")
          }}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <p className="text-gray-400">
        Secure admin system active 🔐
      </p>

    </div>
  )
}