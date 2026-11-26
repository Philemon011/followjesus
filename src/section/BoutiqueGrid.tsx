"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/lib/types";

const filters = [
  { key: "tout", label: "Tout" },
  { key: "homme", label: "Homme" },
  { key: "femme", label: "Femme" },
] as const;

export function BoutiqueGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("tout");

  const filtered =
    active === "tout" ? products : products.filter((p) => p.gender === active);

  return (
    <section className="px-6 md:px-12 py-10 md:py-16">
      <div className="flex gap-6 md:gap-8 mb-10 md:mb-14 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`font-body text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${
              active === f.key
                ? "border-scarlet text-ink"
                : "border-transparent text-ink/40 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

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
    </section>
  );
}