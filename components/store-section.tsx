"use client"

import { useState } from "react"
import { categories, products } from "@/lib/store-data"
import { CategoryCard } from "./category-card"
import ProductCard from "./product-card"
import { Button } from "./ui/button"
import { LayoutGrid } from "lucide-react"

export function StoreSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <section id="products" className="scroll-mt-20 border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div id="categories" className="mb-12 scroll-mt-20">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Categories</h2>
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="text-primary hover:text-primary/80"
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Show All
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={selectedCategory === category.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory
                  ? categories.find(c => c.id === selectedCategory)?.name
                  : "All Products"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} items available
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
