"use client"

import { CartDrawer } from "@/components/cart-drawer"
import ProductCard from "@/components/product-card"

export default function Home() {
  const products = [
    { id: "vip", name: "VIP Rank 👑", price: 499 },
    { id: "elite", name: "Elite Rank ⚔️", price: 999 },
    { id: "legend", name: "Legend Rank 🔥", price: 1499 },
    { id: "crate", name: "Crate Key 🔑", price: 199 },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-black to-slate-900 text-white">

      {/* CART */}
      <CartDrawer />

      {/* HEADER */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          🛒 Minecraft Marketplace
        </h1>

        <p className="text-gray-400 mt-3">
          Buy ranks, keys & upgrades instantly ⚡
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 mt-20 pb-10">
        Made for Minecraft Servers ⚡
      </div>
    </div>
  )
}