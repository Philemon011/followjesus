"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
}

export function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
        <p className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
          Ton panier est vide
        </p>
        <p className="font-body text-sm text-ink/60 mb-8 max-w-xs">
          Découvre la collection et trouve la pièce qui te correspond.
        </p>
        <Link
          href="/boutique"
          className="bg-ink text-white px-8 py-4 font-body text-sm hover:bg-scarlet transition-colors"
        >
          Voir la boutique
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-24 md:pt-28 px-6 md:px-12 pb-24 md:pb-32">
      <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-10 md:mb-14">
        Panier
      </h1>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
        <div className="border-t border-line">
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={`${item.product.slug}-${item.size}-${item.color}`}
                initial={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex gap-3 sm:gap-4 md:gap-6 py-6 border-b border-line">
  <div className="relative w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 shrink-0 bg-paper">
    <Image
      src={item.product.images[0]}
      alt={item.product.name}
      fill
      className="object-cover"
      sizes="140px"
    />
  </div>

  <div className="flex-1 flex flex-col justify-between min-w-0">
    <div>
      <p className="font-body text-sm md:text-base mb-1 truncate">
        {item.product.name}
      </p>
      <p className="font-body text-xs text-ink/50 mb-3">
        {item.color} — Taille {item.size}
      </p>
      <p className="font-display font-bold text-sm sm:hidden mb-3">
        {formatPrice(item.product.price * item.quantity)}
      </p>
    </div>

    <div className="flex items-center justify-between flex-wrap gap-2">
      <div className="inline-flex items-center border border-line">
        <button
          onClick={() => updateQuantity(index, item.quantity - 1)}
          aria-label="Diminuer la quantité"
          className="h-9 w-9 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(index, item.quantity + 1)}
          aria-label="Augmenter la quantité"
          className="h-9 w-9 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeItem(index)}
        aria-label={`Retirer ${item.product.name} du panier`}
        className="font-body text-xs text-ink/50 underline underline-offset-2 hover:text-scarlet transition-colors"
      >
        Retirer
      </button>
    </div>
  </div>

  <p className="font-display font-bold text-sm md:text-base shrink-0 hidden sm:block">
    {formatPrice(item.product.price * item.quantity)}
  </p>
</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:sticky lg:top-28 h-fit bg-white border border-line p-6 md:p-8">
          <p className="font-body text-sm text-ink/60 mb-2">Récapitulatif</p>

          <div className="flex items-baseline justify-between py-4 border-b border-line">
            <span className="font-body text-sm text-ink/60">Sous-total</span>
            <span className="font-display font-bold text-lg">{formatPrice(total)}</span>
          </div>

          <p className="font-body text-xs text-ink/50 pt-4 mb-6 leading-relaxed">
            Livraison calculée avec toi sur WhatsApp selon ta localisation.
          </p>

          <Link
            href="/commande"
            className="block text-center bg-ink text-white h-14 leading-[3.5rem] font-body text-sm hover:bg-scarlet transition-colors"
          >
            Passer la commande
          </Link>

          <Link
            href="/boutique"
            className="block text-center font-body text-xs text-ink/50 underline underline-offset-2 mt-4 hover:text-scarlet transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      </div>
    </section>
  );
}