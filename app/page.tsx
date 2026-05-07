"use client"

import LiveSales from "@/components/live-sales"
import { Header } from "../components/header"
import { CartDrawer } from "@/components/cart-drawer"
import { HeroSection } from "../components/hero-section"
import { FeaturedSection } from "../components/featured-section"
import { StoreSection } from "../components/store-section"
import { FAQSection } from "../components/faq-section"
import { Footer } from "../components/footer"
import { PlayerInput } from "@/components/player-input"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Header />
      <CartDrawer />
      <PlayerInput />
      <LiveSales />

      <main>
        <HeroSection />
        <FeaturedSection />
        <StoreSection />
        <FAQSection />
      </main>

      <Footer />

    </div>
  )
}