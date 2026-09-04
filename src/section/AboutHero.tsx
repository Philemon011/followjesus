"use client";

import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";

export function AboutHero() {
  return (
    <section className="relative bg-ink text-white pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -top-6 md:-top-14 left-1/2 -translate-x-1/2 font-display font-black text-white/[0.04] text-[24vw] leading-none whitespace-nowrap select-none pointer-events-none"
      >
        MISSION
      </span>

      <div className="relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-signature text-scarlet text-lg mb-6"
        >
          Notre histoire
        </motion.p>

        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[1] tracking-tight mb-8"
        >
          <AnimatedText text="UN VÊTEMENT" />
          <br />
          <AnimatedText text="NE FAIT PAS" />
          <br />
          <AnimatedText text="UN DISCIPLE." />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-white/60 text-base md:text-lg leading-relaxed max-w-lg"
        >
          Mais il peut être le premier pas vers une conversation. C&apos;est
          exactement pour ça que Follow Jesus existe.
        </motion.p>
      </div>
    </section>
  );
}