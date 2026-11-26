export type Gender = "homme" | "femme";
export type Language = "fr" | "en";

export const genderLabels: Record<Gender, string> = {
  homme: "Homme",
  femme: "Femme",
};

export const languageLabels: Record<Language, string> = {
  fr: "Français",
  en: "Anglais",
};

export interface Product {
  slug: string;
  name: string;
  gender: Gender;
  color: { label: string; hex: string };
  price: number; // en FCFA
  images: Record<Language, string[]>; // visuels par langue du verset
  sizes: string[];
  category: string;
  featured?: boolean;
  rating?: number; // 0 à 5
  reviewCount?: number;
}