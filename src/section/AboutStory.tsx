"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-base md:text-lg leading-relaxed text-ink/80 mb-8">
            <span className="font-display font-black text-6xl md:text-7xl float-left mr-3 leading-[0.8] text-scarlet">
              F
            </span>
            ollow Jesus est né d&apos;un constat simple : la mode dit toujours
            quelque chose sur celui qui la porte. Un logo, une marque, une
            attitude. Nous avons voulu que ce que nos vêtements disent soit
            plus grand qu&apos;une tendance — un message qui reste vrai
            longtemps après que la pièce soit passée de mode.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-ink/80 mb-8">
            Chaque design part d&apos;un verset, pas d&apos;une planche de
            tendances. Le style vient ensuite, au service du message — jamais
            l&apos;inverse. C&apos;est cette exigence, autant spirituelle
            qu&apos;artisanale, qui guide chaque pièce que nous produisons.
          </p>

          <blockquote className="font-signature text-scarlet text-2xl md:text-3xl leading-snug border-l-2 border-scarlet pl-6 my-10">
            « Nous ne vendons pas un t-shirt. Nous prêtons une voix à ceux qui
            veulent porter leur foi sans un mot à dire. »
          </blockquote>

          <p className="font-body text-base md:text-lg leading-relaxed text-ink/80">
            Conçu et pensé à Cotonou, pour toute l&apos;Afrique francophone qui
            veut allier exigence de style et fidélité à ses convictions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full bg-ink md:sticky md:top-28"
        >
          <Image
            src="/products/follow-jesus-white.jpg"
            alt="L'équipe Follow Jesus au travail"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}