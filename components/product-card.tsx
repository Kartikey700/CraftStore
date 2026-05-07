"use client"

import { useCart } from "@/lib/cart-context"

type Product = {
  id: string
  name: string
  price: number
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">

      {/* PRODUCT NAME */}
      <h2 className="text-lg font-bold text-white">
        {product.name}
      </h2>

      {/* PRICE */}
      <p className="text-gray-400 mt-1">
        ₹{product.price}
      </p>

      {/* BADGE */}
      <div className="mt-2 inline-block text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
        Instant Delivery ⚡
      </div>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={() =>
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
          })
        }
        className="
          mt-4 w-full py-2 rounded-xl font-semibold text-white
          bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
          hover:shadow-lg hover:shadow-purple-500/30
          transition-all duration-200
          active:scale-95
        "
      >
        ✨ Add to Cart
      </button>

    </div>
  )
}