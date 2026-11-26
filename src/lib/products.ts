import { Gender, Language, Product, genderLabels } from "./types";

type ColorKey = "noir" | "blanc";

const colors: Record<ColorKey, { label: string; hex: string }> = {
  noir: { label: "Noir", hex: "#0A0A0A" },
  blanc: { label: "Blanc", hex: "#FFFFFF" },
};

// Convention de nommage : /public/products/{modele}-{couleur}-{langue}-{n}.jpg
// ex : homme-noir-fr-1.jpg, femme-blanc-en-2.jpg
const img = (gender: Gender, color: ColorKey, lang: Language, n: number) =>
  `/boutique/${gender}-${color}-${lang}-${n}.jpg`;

function makeProduct(
  gender: Gender,
  colorKey: ColorKey,
  extra: Partial<Product> = {}
): Product {
  return {
    slug: `${gender}-${colorKey}`,
    name: `T-shirt Follow Jesus — ${genderLabels[gender]}, ${colors[colorKey].label}`,
    gender,
    color: colors[colorKey],
    price: 5000,
    images: {
      fr: [img(gender, colorKey, "fr", 1), img(gender, colorKey, "fr", 2)],
      en: [img(gender, colorKey, "en", 1), img(gender, colorKey, "en", 2)],
    },
    sizes: ["S", "M", "L", "XL"],
    category: "t-shirts",
    featured: true,
    ...extra,
  };
}

export const products: Product[] = [
  makeProduct("homme", "noir", { rating: 4.8, reviewCount: 24 }),
  makeProduct("homme", "blanc", { rating: 4.6, reviewCount: 17 }),
  makeProduct("femme", "noir"), // pas encore d'avis : aucune étoile affichée
  makeProduct("femme", "blanc", { rating: 4.9, reviewCount: 11 }),
];

export const featuredProducts = products.filter((p) => p.featured);