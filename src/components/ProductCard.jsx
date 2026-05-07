import { useState } from 'react'
import { useCart } from '../context/CartContext'

const categoryEmojis = {
  ranks: "Crown",
  "crate-keys": "Key",
  "claim-blocks": "Grid",
  weapons: "Sword",
  equipment: "Shield",
  bundles: "Package"
}

const CategoryIcon = ({ category }) => {
  const icons = {
    ranks: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/>
        <path d="M5 21h14"/>
      </svg>
    ),
    "crate-keys": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/>
        <path d="m21 2-9.6 9.6"/>
        <circle cx="7.5" cy="15.5" r="5.5"/>
      </svg>
    ),
    "claim-blocks": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M3 15h18"/>
        <path d="M9 3v18"/>
        <path d="M15 3v18"/>
      </svg>
    ),
    weapons: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
        <line x1="13" x2="19" y1="19" y2="13"/>
        <line x1="16" x2="20" y1="16" y2="20"/>
        <line x1="19" x2="21" y1="21" y2="19"/>
      </svg>
    ),
    equipment: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      </svg>
    ),
    bundles: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    )
  }
  return icons[category] || icons.bundles
}

export function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const getBadgeClass = (badge) => {
    if (badge === "LEGENDARY" || badge === "ULTIMATE") {
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
    }
    if (badge === "NEW") {
      return "bg-emerald-500 text-white"
    }
    if (badge === "HOT") {
      return "bg-red-500 text-white"
    }
    return "bg-primary text-primary-foreground"
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Badge */}
      {product.badge && (
        <span className={`absolute right-3 top-3 z-10 rounded-full px-2 py-1 text-xs font-semibold ${getBadgeClass(product.badge)}`}>
          {product.badge}
        </span>
      )}

      {/* Image Area */}
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
        <div className="transition-transform duration-300 group-hover:scale-110">
          <CategoryIcon category={product.category} />
        </div>
        {discount && (
          <div className="absolute left-3 top-3 rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 space-y-1.5">
            {product.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                <span>{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <p className="text-xs text-primary">+{product.features.length - 3} more</p>
            )}
          </div>
        )}

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all ${
              added
                ? "bg-emerald-500 hover:bg-emerald-500"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {added ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Added
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="M12 5v14"/>
                </svg>
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
