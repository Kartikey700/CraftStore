"use client"

import { Star } from "lucide-react"
import ProductCard from "./product-card"
import { featuredProducts } from "@/lib/store-data"

export function FeaturedSection() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <Star className="h-4 w-4 fill-primary" />
            <span>Featured Items</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Our Best Sellers
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Handpicked premium items loved by our community. Top-rated products with 
            guaranteed satisfaction and instant delivery.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
