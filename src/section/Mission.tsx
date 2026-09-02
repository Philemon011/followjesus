"use client";

import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";

export function Mission() {
  return (
    <section className="bg-paper text-ink py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-signature text-scarlet text-xl mb-6"
        >
          Notre mission
        </motion.p>

        <motion.h2
          variants={headlineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-8"
        >
          <AnimatedText text="LE VÊTEMENT COMME" />
          <br />
          <AnimatedText text="TERRAIN DE MISSION" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-ink/70 max-w-xl mx-auto leading-relaxed"
        >
          Chaque pièce Follow Jesus porte un message tiré de l'Écriture. Pas
          un accessoire de mode passager — un rappel porté au quotidien, pensé
          pour ceux qui veulent afficher leur foi sans compromis sur le style.
        </motion.p>
      </div>

    </section>
  );
}