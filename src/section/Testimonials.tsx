"use client";

import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";
import { MarqueeRow } from "@/components/MarqueeRow";
import { reviews, getAverageRating } from "@/lib/reviews";

const average = getAverageRating(reviews);
const rowOne = reviews.slice(0, 5);
const rowTwo = reviews.slice(3).concat(reviews.slice(0, 3));

export function Testimonials() {
  return (
    <section className="bg-paper text-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-14 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2
            variants={headlineContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            <AnimatedText text="ILS PORTENT" />
            <br />
            <AnimatedText text="LE MESSAGE" />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-5 shrink-0"
          >
            <span className="font-display font-black text-6xl md:text-7xl tracking-tight">
              {average.toFixed(1)}
            </span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C1272D">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-xs text-ink/50">
                {reviews.length} avis vérifiés
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-5"
      >
        <MarqueeRow items={rowOne} direction="left" speed={38} />
        <MarqueeRow items={rowTwo} direction="right" speed={44} />
      </motion.div>
    </section>
  );
}