"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export function Footer() {
  const { total, setIsOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">CraftStore</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
        </nav>

        {/* Cart Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative px-4 py-2 bg-black text-white rounded"
        >
          Cart

          {/* Show TOTAL price (since your context uses total) */}
          {total > 0 && (
            <span className="ml-2 bg-white text-black px-2 py-0.5 rounded text-sm">
              ₹{total}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden p-4 flex flex-col gap-3 border-t">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
        </div>
      )}
    </footer>
  )
}