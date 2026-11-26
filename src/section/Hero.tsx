"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/ImageCarousel";
import { AnimatedText, headlineContainer } from "@/components/AnimatedText";


const heroImages = [ 
    "/products/follow-jesus-1.png",
    "/products/follow-jesus-2.png",
    "/products/follow-jesus-3.png",
    "/products/follow-jesus-6.png",
    // "/products/follow-jesus-black.png",
    // "/products/follow-jesus-white.jpg",
    // "/products/follow-jesus-femme.png",
    // "/products/follow-jesus-homme.png",
    // "/products/follow-jesus-black-white.png",
    // "/products/follow-jesus-bonhomme.png",
];

export function Hero() {
    return (
        <section className="grid md:grid-cols-2 min-h-screen bg-ink text-white pt-20 md:pt-0">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-0 order-2 md:order-1 md:border-r border-white/10"
            >
                <p className="font-signature text-scarlet text-lg mb-4">
                    Matthieu 4:19
                </p>

                <motion.h1
                    variants={headlineContainer}
                    initial="hidden"
                    animate="show"
                    className="font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6"
                >
                    <AnimatedText text="VIENS," />
                    <br />
                    <AnimatedText text="SUIS-MOI" />
                </motion.h1>

                <p className="font-body text-white/70 max-w-sm mb-10 leading-relaxed text-sm md:text-base">
                    « Venez, suivez-moi, dit Jésus, et je vous ferai pêcheurs d'hommes. »
                    Un vêtement, un message, une mission.
                </p>
                <Link
                    href="/boutique"
                    className="inline-flex w-fit items-center gap-3 bg-white text-ink px-8 py-4 font-body font-medium text-sm md:text-base hover:bg-scarlet hover:text-white transition-colors"
                >
                    Découvrir la collection 
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="order-1 md:order-2"
            >
                <ImageCarousel images={heroImages} alt="T-shirt Follow Jesus" priority />
            </motion.div>
        </section>
    );
}