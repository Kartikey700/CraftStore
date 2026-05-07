"use client"

import { Crown, Grid3X3, Key, Package, Shield, Sword } from "lucide-react"
import type { Category } from "@/lib/store-data"

const iconMap = {
  Crown,
  Key,
  Grid3X3,
  Sword,
  Shield,
  Package
}

type CategoryCardProps = {
  category: Category
  isActive: boolean
  onClick: () => void
}

export function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap]

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-all hover:border-primary/50 hover:bg-primary/5 ${
        isActive
          ? "border-primary bg-primary/10"
          : "border-border bg-card"
      }`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
          isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
        }`}
      >
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{category.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{category.description}</p>
      </div>
    </button>
  )
}
