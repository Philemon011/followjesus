import { Product } from "./types";

export const products: Product[] = [
  {
    slug: "follow-jesus-noir",
    name: "T-shirt Follow Jesus — Noir",
    price: 12000,
    images: [
      "/products/follow-jesus-white.jpg",
      "/products/follow-jesus-bonhomme.png",
    ],
    colors: [{ label: "Noir", hex: "#0A0A0A" }],
    sizes: ["S", "M", "L", "XL"],
    category: "t-shirts",
    featured: true,
    rating: 4.8,
    reviewCount: 24,
  },
  {
    slug: "follow-jesus-blanc",
    name: "T-shirt Follow Jesus — Blanc",
    price: 12000,
    images: [
      "/products/follow-jesus-black.png",
      "/products/follow-jesus-homme.png",
    ],
    colors: [{ label: "Blanc", hex: "#FFFFFF" }],
    sizes: ["S", "M", "L", "XL"],
    category: "t-shirts",
    featured: true,
    rating: 4.6,
    reviewCount: 17,
  },
  {
    slug: "follow-jesus-girl-blanc",
    name: "T-shirt Follow Jesus Girl — Blanc",
    price: 12000,
    images: ["/products/follow-jesus-femme.png"],
    colors: [{ label: "Blanc", hex: "#FFFFFF" }],
    sizes: ["S", "M", "L", "XL"],
    category: "t-shirts",
    featured: true,
    rating: 4.9,
    reviewCount: 11,
  },
];

export const featuredProducts = products.filter((p) => p.featured);