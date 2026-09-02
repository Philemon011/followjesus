"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { ImageCarousel } from "@/components/ImageCarousel";
import { StarRating } from "@/components/StarRating";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart-context";
import { getReviewsForProduct } from "@/lib/reviews";
import { ProductReviews } from "@/components/ProductReviews";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
}

const accordionSections = [
  {
    title: "Description",
    content:
      "Un t-shirt oversize en coton épais, pensé pour durer. Le design \"Follow Jesus\" est imprimé au dos en sérigraphie haute tenue, résistante au lavage.",
  },
  {
    title: "Livraison & retours",
    content:
      "Livraison à Cotonou et environs sous 24 à 48h après confirmation de la commande sur WhatsApp. Échange possible sous 7 jours si la taille ne convient pas, produit non porté.",
  },
  {
    title: "Entretien",
    content: "Lavage à 30°C, à l'envers. Ne pas repasser directement sur l'impression. Séchage à l'air libre recommandé.",
  },
];

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].label);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("Description");
  const [justAdded, setJustAdded] = useState(false);

  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    addItem({ product, size: selectedSize, color: selectedColor, quantity });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22960585950").replace(/[^\d]/g, "");
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par : ${product.name} — Taille ${selectedSize ?? "?"}, Couleur ${selectedColor}, Quantité ${quantity}.`
  );

  return (
    <>
      <div className="pt-24 md:pt-28 px-6 md:px-12">
        <nav className="font-body text-xs text-ink/50 flex items-center gap-2 mb-6 md:mb-10">
          <Link href="/boutique" className="hover:text-scarlet transition-colors">
            Boutique
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="grid md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-12 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageCarousel images={product.images} alt={product.name} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:pt-4"
        >
          {product.rating !== undefined && (
            <div className="mb-4">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
          )}

          <h1 className="font-display font-black text-3xl md:text-5xl leading-tight tracking-tight mb-3">
            {product.name}
          </h1>

          <p className="font-display font-bold text-xl md:text-2xl mb-8">
            {formatPrice(product.price)}
          </p>

          {product.colors.length > 1 && (
            <div className="mb-8">
              <p className="font-body text-sm text-ink/60 mb-3">
                Couleur — <span className="text-ink">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.label}
                    onClick={() => setSelectedColor(color.label)}
                    aria-label={color.label}
                    aria-pressed={selectedColor === color.label}
                    className={`h-9 w-9 rounded-full border-2 transition-all ${
                      selectedColor === color.label ? "border-scarlet scale-110" : "border-line"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <p className="font-body text-sm text-ink/60">
                Taille {selectedSize && <span className="text-ink">— {selectedSize}</span>}
              </p>
              <button className="font-body text-xs text-ink/50 underline underline-offset-2">
                Guide des tailles
              </button>
            </div>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                  className={`h-11 min-w-11 px-3 font-body text-sm border transition-colors ${
                    selectedSize === size
                      ? "border-ink bg-ink text-white"
                      : "border-line text-ink hover:border-ink"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {sizeError && (
              <p className="font-body text-xs text-scarlet mt-2">
                Choisis une taille avant d&apos;ajouter au panier.
              </p>
            )}
          </div>

          <div className="mb-8">
            <p className="font-body text-sm text-ink/60 mb-3">Quantité</p>
            <div className="inline-flex items-center border border-line">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
                className="h-11 w-11 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
              >
                −
              </button>
              <span className="w-10 text-center font-body text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Augmenter la quantité"
                className="h-11 w-11 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <button
              onClick={handleAddToCart}
              className={`h-14 font-body font-medium text-sm transition-colors ${
                justAdded ? "bg-scarlet text-white" : "bg-ink text-white hover:bg-scarlet"
              }`}
            >
              {justAdded ? "Ajouté au panier ✓" : "Ajouter au panier"}
            </button>

            
            <a  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 flex items-center justify-center gap-2 border border-ink font-body text-sm hover:border-scarlet hover:text-scarlet transition-colors"
            >
              Commander directement sur WhatsApp
            </a>
          </div>

          <div className="border-t border-line">
            {accordionSections.map((section) => (
              <div key={section.title} className="border-b border-line">
                <button
                  onClick={() =>
                    setOpenSection(openSection === section.title ? null : section.title)
                  }
                  className="w-full flex items-center justify-between py-5 font-body text-sm font-medium"
                >
                  {section.title}
                  <span
                    className={`transition-transform duration-300 ${
                      openSection === section.title ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openSection === section.title ? "auto" : 0,
                    opacity: openSection === section.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-sm text-ink/60 leading-relaxed pb-5">
                    {section.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-20">
  <ProductReviews reviews={getReviewsForProduct(product.slug)} />
</section>

      {related.length > 0 && (
        <section className="px-6 md:px-12 pb-24 md:pb-32 border-t border-line pt-16 md:pt-20">
          <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight mb-10">
            Complète ton look
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}