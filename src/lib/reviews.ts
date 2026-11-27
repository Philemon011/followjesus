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
    name: "Mélanie A.",
    rating: 5,
    comment: "J'ai reçu mon t-shirt hier et franchement je ne suis pas déçue. Le tissu est agréable et le rendu du message au dos est vraiment propre.",
    productSlug: "homme-noir",
    date: "Novembre 2026",
  },
  {
    id: "r2",
    name: "Samuel K.",
    rating: 5,
    comment: "Je l'ai porté à une sortie entre amis, plusieurs personnes m'ont demandé où je l'avais acheté. La coupe est bien large comme je voulais.",
    productSlug: "homme-noir",
    date: "Novembre 2026",
  },
  {
    id: "r3",
    name: "Esther D.",
    rating: 4,
    comment: "Très joli t-shirt, j'aime surtout le message et le design. J'aurais peut-être dû prendre une taille en dessous, mais il reste confortable.",
    productSlug: "homme-blanc",
    date: "Novembre 2026",
  },
  {
    id: "r4",
    name: "David M.",
    rating: 5,
    comment: "Ce que j'aime, c'est de pouvoir porter un message qui représente vraiment mes convictions. L'impression est nette et le t-shirt tombe bien.",
    productSlug: "homme-noir",
    date: "Octobre 2026",
  },
  {
    id: "r5",
    name: "Grâce T.",
    rating: 5,
    comment: "J'ai pris le blanc et il est encore très beau après plusieurs utilisations. L'impression n'a pas bougé après le lavage que j'ai fait.",
    productSlug: "homme-blanc",
    date: "Octobre 2026",
  },
  {
    id: "r6",
    name: "Nadine H.",
    rating: 5,
    comment: "J'ai commandé pour mon petit frère. Il a beaucoup aimé le message au dos. La taille lui va bien et la livraison s'est bien passée.",
    productSlug: "femme-blanc",
    date: "Octobre 2026",
  },
  {
    id: "r7",
    name: "Kevin O.",
    rating: 4,
    comment: "Le t-shirt est conforme aux photos. J'ai juste eu un petit doute sur la taille au moment de commander, mais finalement ça me va.",
    productSlug: "homme-blanc",
    date: "Octobre 2026",
  },
  {
    id: "r8",
    name: "Prisca L.",
    rating: 5,
    comment: "J'aime beaucoup le travail sur le dos du t-shirt. C'est simple, mais ça attire l'attention sans être trop chargé. Je suis satisfaite de mon achat.",
    productSlug: "femme-blanc",
    date: "Octobre 2026",
  },
];


export function getReviewsForProduct(slug: string) {
  return reviews.filter((r) => r.productSlug === slug);
}

export function getAverageRating(list: Review[]) {
  if (list.length === 0) return 0;
  return list.reduce((sum, r) => sum + r.rating, 0) / list.length;
}