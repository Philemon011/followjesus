"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section className="bg-paper text-ink py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <motion.h2
            variants={headlineContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            <AnimatedText text="LA COLLECTION" />
          </motion.h2>

          <Link
            href="/boutique"
            className="hidden md:inline-block font-body text-sm border-b border-ink pb-1 hover:border-scarlet hover:text-scarlet transition-colors"
          >
            Voir tout
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <Link
          href="/boutique"
          className="md:hidden mt-10 inline-block font-body text-sm border-b border-ink pb-1"
        >
          Voir tout
        </Link>
      </div>
    </section>
  );
}