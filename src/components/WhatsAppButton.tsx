"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22953461205").replace(
    /[^\d]/g,
    ""
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.8 },
        y: {
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        },
      }}
      className="group fixed bottom-6 right-6 z-40 flex items-center"
    >
      {/* Anneaux de pulsation — signalent "présence active" */}
      <span className="absolute inset-0 h-14 w-14 bg-ink/40 animate-ping-slow" />
      <span className="absolute inset-0 h-14 w-14 bg-ink/20 animate-ping-slower" />

      {/* Bouton principal */}
      <div className="relative h-14 w-14 bg-ink flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.16-8.17 8.16Z" />
        </svg>

        {/* Pastille "en ligne" */}
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 bg-scarlet border-2 border-white">
          <span className="absolute inset-0 bg-scarlet animate-ping-slow" />
        </span>
      </div>

      {/* Étiquette au survol (desktop uniquement) */}
      <span className="hidden md:block absolute right-16 whitespace-nowrap bg-ink text-white font-body text-xs px-3 py-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Nous sommes en ligne — écrivez-nous
      </span>
    </motion.a>
  );
}