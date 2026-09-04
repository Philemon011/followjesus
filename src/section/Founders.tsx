"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";

const founders = [
  {
    name: "Assikidana Glory",
    role: "Co-fondateur",
    photo: "/co/glory.jpeg",
    facebook: "https://www.facebook.com/askd.multimedia",
    phone: "+229 53 81 72 60",
  },
  {
    name: "Etounde Lumière",
    role: "Co-fondateur",
    photo: "/co/lumière.jpeg",
    facebook: "https://www.facebook.com/philemon.etounde.77",
    phone: "+229 53 81 72 60",
  },
];

export function Founders() {
  return (
    <section className="bg-ink text-white px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={headlineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-14 md:mb-20"
        >
          <AnimatedText text="LES VISAGES" />
          <br />
          <AnimatedText text="DERRIÈRE LA MARQUE" />
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-10 md:gap-14">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5 mb-6">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <p className="font-display font-bold text-xl md:text-2xl tracking-tight mb-1">
                {founder.name}
              </p>
              <p className="font-body text-xs text-scarlet mb-4">{founder.role}</p>

              <div className="flex items-center gap-4">
                
                <a  href={founder.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Profil Facebook de ${founder.name}`}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 hover:border-scarlet hover:bg-scarlet transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                  </svg>
                </a>
                
                <a  href={`tel:${founder.phone.replace(/\s/g, "")}`}
                  className="font-body text-xs text-white/60 hover:text-scarlet transition-colors"
                >
                  {founder.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}