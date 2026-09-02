"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const shopLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/boutique?categorie=t-shirts", label: "T-shirts" },
  { href: "/panier", label: "Panier" },
];

const brandLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593942001149&mibextid=wwXIfr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/followjesus.wear?igsi=dmg5amZpems2NmY1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@followjesuswear?_r=1&_t=ZS-99OeOUCAuZA",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 2h-3.2v13.9a3.1 3.1 0 1 1-2.2-2.97V9.6a6.3 6.3 0 1 0 5.4 6.24V8.8a8.1 8.1 0 0 0 4.4 1.3V6.9a4.85 4.85 0 0 1-4.4-4.9Z" />
      </svg>
    ),
  },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22960585950";

export function Footer() {
  return (
    <footer className="bg-ink text-white px-6 md:px-12 pt-20 md:pt-28 pb-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 md:gap-8 pb-16 md:pb-20 border-b border-white/10"
        >
          <div>
            <span className="font-signature text-3xl block mb-4">
              Follow Jesus
            </span>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Des vêtements qui portent un message. Une marque construite
              autour d&apos;une vision : Matthieu 4:19.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                
              <a    key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 hover:border-scarlet hover:bg-scarlet transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-5">
              Boutique
            </p>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 hover:text-scarlet transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-5">
              Marque
            </p>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 hover:text-scarlet transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-5">
              Une question ?
            </p>
            
            <a  href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm bg-white text-ink px-5 py-3 hover:bg-scarlet hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.16-8.17 8.16Z" />
              </svg>
              Nous écrire
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Follow Jesus. Tous droits réservés.
          </p>
          <p className="font-signature text-white/30 text-lg">
            Matthieu 4:19
          </p>
        </div>
      </div>
    </footer>
  );
}