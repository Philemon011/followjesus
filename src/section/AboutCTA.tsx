"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";

export function AboutCTA() {
  return (
    <section className="bg-paper text-ink px-6 md:px-12 py-24 md:py-36 text-center">
      <motion.h2
        variants={headlineContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-10 max-w-3xl mx-auto"
      >
        <AnimatedText text="REJOINS LE MOUVEMENT." />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/boutique"
          className="inline-flex items-center gap-3 bg-ink text-white px-10 py-5 font-body text-sm hover:bg-scarlet transition-colors"
        >
          Découvrir la collection
        </Link>
      </motion.div>
    </section>
  );
}