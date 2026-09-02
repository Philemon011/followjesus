"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { StarRating } from "./StarRating";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    addItem({
      product,
      size: product.sizes[0],
      color: product.colors[0].label,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group">
      <Link href={`/boutique/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleQuickAdd();
            }}
            aria-label={`Ajouter ${product.name} au panier`}
            className={`absolute bottom-3 right-3 h-10 w-10 items-center justify-center transition-all duration-300 hidden md:flex ${
              added
                ? "bg-scarlet text-white opacity-100 translate-y-0"
                : "bg-white text-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-scarlet hover:text-white"
            }`}
          >
            {added ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
        </div>
      </Link>

      <div className="pt-4">
        {product.rating !== undefined && (
          <div className="mb-1.5">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        )}

        <Link href={`/boutique/${product.slug}`} className="block">
          <p className="font-body text-sm md:text-base mb-1">{product.name}</p>
        </Link>

        <div className="flex items-center justify-between">
          <p className="font-display font-bold text-sm md:text-base">
            {formatPrice(product.price)}
          </p>

          <button
            onClick={handleQuickAdd}
            className={`md:hidden font-body text-xs border px-3 py-1.5 transition-colors ${
              added ? "bg-scarlet text-white border-scarlet" : "border-ink active:bg-ink active:text-white"
            }`}
          >
            {added ? "Ajouté ✓" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}