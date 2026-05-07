import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

export const metadata: Metadata = {
  title: "Minecraft Marketplace",
  description: "Server store system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}