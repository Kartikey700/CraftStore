import { ProductCard } from './ProductCard'
import { featuredProducts } from '../data/storeData'

export function FeaturedSection() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
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
