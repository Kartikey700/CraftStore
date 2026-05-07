"use client"

import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, total, clearCart } = useCart()

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-linear-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl z-50"
      >
        🛒 Cart ({items.length})
      </button>

      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-zinc-900 text-white p-4 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

        {items.length === 0 ? (
          <p className="text-gray-400">Cart empty</p>
        ) : (
          <>
            {items.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="bg-zinc-800 p-3 rounded-xl mb-2"
              >
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-400">Qty: {item.qty}</p>
                <p className="text-gray-400">
                  ₹{item.price * (item.qty || 1)}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="border-t border-zinc-700 mt-4 pt-4">
              <p className="font-bold">Total: ₹{total}</p>

              <button
                onClick={() => (window.location.href = "/checkout")}
                className="mt-3 w-full bg-linear-to-r from-blue-500 to-purple-600 py-2 rounded-xl"
              >
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-2 w-full bg-red-600 py-2 rounded-xl"
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}