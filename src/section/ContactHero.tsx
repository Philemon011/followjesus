"use client";

import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";

export function ContactHero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
      {/* Typo géante en filigrane, purement décorative */}
      <span
        aria-hidden="true"
        className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2 font-display font-black text-white/[0.04] text-[28vw] leading-none whitespace-nowrap select-none pointer-events-none"
      >
        PARLONS
      </span>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-signature text-scarlet text-lg mb-4"
        >
          On est là pour toi
        </motion.p>

        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-2xl"
        >
          <AnimatedText text="UNE QUESTION ?" />
          <br />
          <AnimatedText text="ÉCRIS-NOUS." />
        </motion.h1>
      </div>
    </section>
  );
}