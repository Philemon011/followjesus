    "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/lib/types";

export function BoutiqueGrid({ products }: { products: Product[] }) {
  const categories = ["Tout", ...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState("Tout");

  const filtered =
    active === "Tout" ? products : products.filter((p) => p.category === active);

  return (
    <section className="px-6 md:px-12 py-10 md:py-16">
      <div className="flex gap-6 md:gap-8 mb-10 md:mb-14 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${
              active === cat
                ? "border-scarlet text-ink"
                : "border-transparent text-ink/40 hover:text-ink"
            }`}
          >
            {cat === "t-shirts" ? "T-shirts" : cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-sm text-ink/50 py-20 text-center">
          Aucune pièce dans cette catégorie pour l&apos;instant.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-14">
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}