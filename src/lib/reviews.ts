export interface Review {
  id: string;
  name: string;
  rating: number; // 1 à 5
  comment: string;
  productSlug: string;
  date: string; // format lisible, ex: "Août 2026"
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Chantal A.",
    rating: 5,
    comment: "Le tissu est vraiment épais, on sent la qualité dès qu'on l'enfile. Et le message au dos attire toujours une remarque.",
    productSlug: "homme-noir",
    date: "Août 2026",
  },
  {
    id: "r2",
    name: "Emmanuel K.",
    rating: 5,
    comment: "Commandé un lundi, reçu le mercredi à Cotonou. Coupe oversize parfaite, exactement comme sur les photos.",
    productSlug: "homme-noir",
    date: "Juillet 2026",
  },
  {
    id: "r3",
    name: "Rachelle D.",
    rating: 4,
    comment: "Très beau t-shirt, taille un peu grand donc je conseille de prendre une taille en dessous. Sinon RAS.",
    productSlug: "homme-blanc",
    date: "Juillet 2026",
  },
  {
    id: "r4",
    name: "Josué M.",
    rating: 5,
    comment: "Ce n'est pas juste un t-shirt, c'est un vrai témoignage qu'on porte. Je vais en reprendre pour toute ma famille.",
    productSlug: "homme-noir",
    date: "Juin 2026",
  },
  {
    id: "r5",
    name: "Grace T.",
    rating: 5,
    comment: "Le blanc reste impeccable après plusieurs lavages, aucune décoloration de l'impression. Très satisfaite.",
    productSlug: "homme-blanc",
    date: "Juin 2026",
  },
  {
    id: "r6",
    name: "Divine H.",
    rating: 5,
    comment: "Ma fille adore le sien, il est doux et la coupe est parfaite pour son âge. Je recommande.",
    productSlug: "femme-blanc",
    date: "Mai 2026",
  },
  {
    id: "r7",
    name: "Steve O.",
    rating: 4,
    comment: "Bon rapport qualité-prix, livraison rapide via WhatsApp, échange facile pour un souci de taille.",
    productSlug: "homme-blanc",
    date: "Mai 2026",
  },
  {
    id: "r8",
    name: "Prisca L.",
    rating: 5,
    comment: "Le design au dos est magnifique en vrai, encore plus beau qu'en photo. Coup de cœur total.",
    productSlug: "femme-blanc",
    date: "Avril 2026",
  },
];

export function getReviewsForProduct(slug: string) {
  return reviews.filter((r) => r.productSlug === slug);
}

export function getAverageRating(list: Review[]) {
  if (list.length === 0) return 0;
  return list.reduce((sum, r) => sum + r.rating, 0) / list.length;
}