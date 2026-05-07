export const categories = [
  {
    id: "ranks",
    name: "Ranks",
    description: "Unlock exclusive perks and privileges",
    icon: "Crown"
  },
  {
    id: "crate-keys",
    name: "Crate Keys",
    description: "Open crates for amazing rewards",
    icon: "Key"
  },
  {
    id: "claim-blocks",
    name: "Claim Blocks",
    description: "Expand your territory",
    icon: "Grid3X3"
  },
  {
    id: "weapons",
    name: "Weapons",
    description: "Powerful gear for combat",
    icon: "Sword"
  },
  {
    id: "equipment",
    name: "Equipment",
    description: "Essential items for survival",
    icon: "Shield"
  },
  {
    id: "bundles",
    name: "Bundles",
    description: "Best value packages",
    icon: "Package"
  }
]

export const products = [
  // Ranks
  {
    id: "vip-rank",
    name: "VIP Rank",
    description: "Start your journey with exclusive VIP perks including colored chat, /fly in lobby, and 2x daily rewards.",
    price: 9.99,
    category: "ranks",
    image: "/products/vip-rank.jpg",
    features: ["Colored Chat", "/fly in Lobby", "2x Daily Rewards", "VIP Kit Monthly"]
  },
  {
    id: "mvp-rank",
    name: "MVP Rank",
    description: "Step up your game with MVP status. Includes all VIP perks plus /nick, particle effects, and priority queue.",
    price: 24.99,
    originalPrice: 29.99,
    category: "ranks",
    image: "/products/mvp-rank.jpg",
    popular: true,
    badge: "POPULAR",
    features: ["All VIP Perks", "/nick Command", "Particle Effects", "Priority Queue", "MVP Kit Monthly"]
  },
  {
    id: "elite-rank",
    name: "Elite Rank",
    description: "Become elite with premium features including /god mode, custom join messages, and exclusive cosmetics.",
    price: 49.99,
    originalPrice: 59.99,
    category: "ranks",
    image: "/products/elite-rank.jpg",
    featured: true,
    badge: "BEST VALUE",
    features: ["All MVP Perks", "/god Mode", "Custom Join Messages", "Exclusive Cosmetics", "Elite Kit Weekly"]
  },
  {
    id: "legend-rank",
    name: "Legend Rank",
    description: "The ultimate rank with every perk unlocked. Includes lifetime benefits and exclusive Legend-only events.",
    price: 99.99,
    originalPrice: 149.99,
    category: "ranks",
    image: "/products/legend-rank.jpg",
    featured: true,
    badge: "LEGENDARY",
    features: ["All Elite Perks", "Lifetime Benefits", "Legend-Only Events", "Custom Pet", "Legend Kit Daily"]
  },
  // Crate Keys
  {
    id: "common-key",
    name: "Common Key x5",
    description: "Open common crates with a chance for basic rewards and useful items.",
    price: 2.99,
    category: "crate-keys",
    image: "/products/common-key.jpg",
    features: ["5 Common Keys", "Basic Rewards", "Common Items"]
  },
  {
    id: "rare-key",
    name: "Rare Key x5",
    description: "Unlock rare crates with better loot including rare weapons and armor.",
    price: 7.99,
    originalPrice: 9.99,
    category: "crate-keys",
    image: "/products/rare-key.jpg",
    popular: true,
    badge: "HOT",
    features: ["5 Rare Keys", "Better Loot", "Rare Weapons", "Enchanted Armor"]
  },
  {
    id: "epic-key",
    name: "Epic Key x5",
    description: "Epic crates contain exclusive items, custom enchantments, and more.",
    price: 14.99,
    category: "crate-keys",
    image: "/products/epic-key.jpg",
    features: ["5 Epic Keys", "Exclusive Items", "Custom Enchantments", "Rare Cosmetics"]
  },
  {
    id: "legendary-key",
    name: "Legendary Key x3",
    description: "The rarest keys with guaranteed legendary drops and exclusive rewards.",
    price: 24.99,
    originalPrice: 34.99,
    category: "crate-keys",
    image: "/products/legendary-key.jpg",
    featured: true,
    badge: "LEGENDARY",
    features: ["3 Legendary Keys", "Guaranteed Legendary Drop", "Exclusive Rewards", "Rare Pet Chance"]
  },
  // Claim Blocks
  {
    id: "claim-blocks-1000",
    name: "1,000 Claim Blocks",
    description: "Expand your protected area with 1,000 additional claim blocks.",
    price: 4.99,
    category: "claim-blocks",
    image: "/products/claim-blocks-small.jpg",
    features: ["1,000 Claim Blocks", "Instant Delivery", "Permanent"]
  },
  {
    id: "claim-blocks-5000",
    name: "5,000 Claim Blocks",
    description: "Medium pack perfect for growing your base. Great value!",
    price: 19.99,
    originalPrice: 24.99,
    category: "claim-blocks",
    image: "/products/claim-blocks-medium.jpg",
    popular: true,
    badge: "BEST SELLER",
    features: ["5,000 Claim Blocks", "Instant Delivery", "Permanent", "20% Bonus"]
  },
  {
    id: "claim-blocks-15000",
    name: "15,000 Claim Blocks",
    description: "Large pack for serious builders. Claim massive territories!",
    price: 49.99,
    originalPrice: 74.99,
    category: "claim-blocks",
    image: "/products/claim-blocks-large.jpg",
    featured: true,
    badge: "MEGA DEAL",
    features: ["15,000 Claim Blocks", "Instant Delivery", "Permanent", "35% Bonus"]
  },
  // Weapons
  {
    id: "netherite-mace",
    name: "Netherite Mace",
    description: "The devastating Netherite Mace with Smash V enchantment. Crush your enemies!",
    price: 14.99,
    category: "weapons",
    image: "/products/mace.jpg",
    featured: true,
    badge: "NEW",
    features: ["Netherite Quality", "Smash V", "Unbreaking III", "Custom Lore"]
  },
  {
    id: "diamond-sword",
    name: "Ultimate Diamond Sword",
    description: "Max enchanted diamond sword with Sharpness V, Fire Aspect II, and more.",
    price: 9.99,
    category: "weapons",
    image: "/products/diamond-sword.jpg",
    features: ["Sharpness V", "Fire Aspect II", "Looting III", "Unbreaking III"]
  },
  {
    id: "crossbow-ultimate",
    name: "Ultimate Crossbow",
    description: "Powerful crossbow with Multishot, Piercing, and Quick Charge.",
    price: 12.99,
    category: "weapons",
    image: "/products/crossbow.jpg",
    features: ["Multishot", "Piercing IV", "Quick Charge III", "Unbreaking III"]
  },
  // Equipment
  {
    id: "elytra",
    name: "Enchanted Elytra",
    description: "Fly through the skies with this Unbreaking III, Mending Elytra. Soar above the competition!",
    price: 19.99,
    originalPrice: 29.99,
    category: "equipment",
    image: "/products/elytra.jpg",
    featured: true,
    popular: true,
    badge: "FAN FAVORITE",
    features: ["Unbreaking III", "Mending", "Custom Texture", "Instant Delivery"]
  },
  {
    id: "netherite-armor",
    name: "Full Netherite Armor Set",
    description: "Complete set of max-enchanted Netherite armor. Ultimate protection!",
    price: 39.99,
    originalPrice: 59.99,
    category: "equipment",
    image: "/products/netherite-armor.jpg",
    featured: true,
    badge: "PREMIUM",
    features: ["Protection IV", "Unbreaking III", "Mending", "Full Set"]
  },
  {
    id: "totem-pack",
    name: "Totem Pack x10",
    description: "Stock up on Totems of Undying. Never die unprepared again!",
    price: 7.99,
    category: "equipment",
    image: "/products/totem.jpg",
    features: ["10 Totems", "Instant Delivery", "Death Protection"]
  },
  // Bundles
  {
    id: "starter-bundle",
    name: "Starter Bundle",
    description: "Perfect for new players! Includes VIP rank, 5 rare keys, and 1000 claim blocks.",
    price: 14.99,
    originalPrice: 19.97,
    category: "bundles",
    image: "/products/starter-bundle.jpg",
    badge: "STARTER",
    features: ["VIP Rank", "5 Rare Keys", "1,000 Claim Blocks", "Diamond Tools Set"]
  },
  {
    id: "warrior-bundle",
    name: "Warrior Bundle",
    description: "Combat focused bundle with Mace, Diamond Sword, and full armor set.",
    price: 49.99,
    originalPrice: 74.99,
    category: "bundles",
    image: "/products/warrior-bundle.jpg",
    popular: true,
    badge: "COMBAT",
    features: ["Netherite Mace", "Ultimate Diamond Sword", "Netherite Armor Set", "64 Golden Apples"]
  },
  {
    id: "ultimate-bundle",
    name: "Ultimate Bundle",
    description: "Everything you need! Elite rank, all weapons, Elytra, 10k claim blocks, and 10 legendary keys.",
    price: 149.99,
    originalPrice: 249.99,
    category: "bundles",
    image: "/products/ultimate-bundle.jpg",
    featured: true,
    badge: "ULTIMATE",
    features: ["Elite Rank", "All Weapons", "Enchanted Elytra", "10,000 Claim Blocks", "10 Legendary Keys"]
  }
]

export const featuredProducts = products.filter(p => p.featured)
export const popularProducts = products.filter(p => p.popular)
