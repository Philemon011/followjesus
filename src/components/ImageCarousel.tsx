"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
  priority?: boolean; // true uniquement pour un carrousel visible au chargement (ex: hero)
}

export function ImageCarousel({
  images,
  alt,
  autoPlayInterval = 4500,
  priority = false,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  const restartAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length > 1) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, autoPlayInterval);
    }
  };

  useEffect(() => {
    restartAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const handleManualNav = (next: number) => {
    goTo(next);
    restartAutoPlay();
  };

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
      {/* couche de fond : dernière image "arrivée", toujours nette, sert de socle
          pour qu'aucun blanc n'apparaisse jamais entre deux transitions */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images[index]}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>

      <AnimatePresence>
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, filter: "blur(24px)", scale: 1.03 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(24px)", scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${alt} — vue ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => handleManualNav(index - 1)}
            aria-label="Image précédente"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center bg-ink/80 text-white backdrop-blur-sm hover:bg-scarlet transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => handleManualNav(index + 1)}
            aria-label="Image suivante"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center bg-ink/80 text-white backdrop-blur-sm hover:bg-scarlet transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(i)}
                aria-label={`Aller à l'image ${i + 1}`}
                className={`h-1.5 transition-all ${
                  i === index ? "w-6 bg-scarlet" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}