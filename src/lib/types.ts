export interface Product {
  slug: string;
  name: string;
  price: number;
  images: string[];
  colors: { label: string; hex: string }[];
  sizes: string[];
  category: string;
  featured?: boolean;
  rating?: number; // 0 à 5
  reviewCount?: number;
}