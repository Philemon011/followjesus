"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    label: "QUALITÉ",
    text: "Des vêtements conçus pour durer.",
  },
  {
    number: "02",
    label: "SENS",
    text: "Chaque pièce porte un message.",
  },
  {
    number: "03",
    label: "SIMPLICITÉ",
    text: "Des designs simples, forts et intemporels.",
  },
  {
    number: "04",
    label: "VISION",
    text: "Une marque construite autour d'une vision.",
  },
];

export function Pillars() {
  return (
    <section className="bg-ink text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-white/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-8 md:py-10 border-b border-white/10"
            >
              <span className="font-display font-bold text-scarlet text-sm md:text-base tracking-tight md:w-24 shrink-0">
                {pillar.number} <span className="text-white/30">—</span>{" "}
                <span className="text-white/50 group-hover:text-white transition-colors duration-300">
                  {pillar.label}
                </span>
              </span>
              <p className="font-display font-bold text-2xl md:text-4xl leading-tight tracking-tight">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}