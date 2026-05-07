"use client"

import { createContext, useContext, useState } from "react"

type Item = {
  id: string
  name: string
  price: number
  qty: number
}

type CartType = {
  items: Item[]
  isOpen: boolean
  setIsOpen: (v: boolean) => void
  addItem: (item: Omit<Item, "qty">) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: Omit<Item, "qty">) => {
    setItems(prev => {
      const found = prev.find(i => i.id === item.id)

      if (found) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      }

      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeItem = (id: string) =>
    setItems(prev => prev.filter(i => i.id !== id))

  const clearCart = () => setItems([])

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
   <CartContext.Provider value={{
  items,
  isOpen,
  setIsOpen,
  addItem,
  removeItem,
  clearCart,
  total,
  
}}>
    
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("Cart missing")
  return ctx
}