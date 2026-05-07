"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#products", label: "Store" },
  { href: "#categories", label: "Categories" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const { totalItems, setIsOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-red-600/30 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:scale-105 transition"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 shadow-lg">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Craft<span className="text-red-500">Store</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300
                hover:text-white transition hover:scale-105"
              >
                {link.label}
              </Link>
            ))}

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            {/* CART BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:scale-110 transition active:scale-90"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-5 w-5 text-white" />

              {/* BADGE */}
              {totalItems > 0 && (
                <span className="
                  absolute -right-1 -top-1
                  flex h-5 w-5 items-center justify-center
                  rounded-full bg-red-600 text-xs font-bold text-white
                  animate-bounce shadow-lg
                ">
                  {totalItems}
                </span>
              )}

            </Button>

            {/* MOBILE MENU */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition"
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-70 bg-zinc-950 border-l border-red-600"
              >

                <div className="flex flex-col gap-6 pt-8">

                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-gray-300
                      hover:text-red-500 transition hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>

              </SheetContent>
            </Sheet>

          </div>

        </div>

      </div>

    </header>
  )
}