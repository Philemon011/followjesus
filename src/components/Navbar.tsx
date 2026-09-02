"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CartIcon } from "./CartIcon";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  solid?: boolean; // true = page à fond clair dès le départ (ex: Boutique)
}

export function Navbar({ solid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const isTransparentHero = !solid && !scrolled;

  const headerBg = isTransparentHero
    ? "bg-transparent"
    : scrolled
    ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
    : "bg-paper border-b border-line";

  const textColor = isTransparentHero || scrolled ? "text-white" : "text-ink";
  const textColorMuted = isTransparentHero || scrolled ? "text-white/80" : "text-ink/70";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          <Link href="/" className={`font-signature text-2xl z-10 ${textColor}`}>
            Follow Jesus
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm hover:text-scarlet transition-colors ${textColorMuted}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-10">
            <Link href="/panier" className={textColor}>
              <CartIcon count={count} />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="flex md:hidden h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span className={`block h-px w-6 ${isTransparentHero || scrolled ? "bg-white" : "bg-ink"}`} />
              <span className={`block h-px w-6 ${isTransparentHero || scrolled ? "bg-white" : "bg-ink"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-signature text-2xl text-white">Follow Jesus</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-10 w-10 items-center justify-center text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-6 mt-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display font-bold text-4xl text-white block py-4 border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Link
              href="/panier"
              onClick={() => setMenuOpen(false)}
              className="mx-6 mt-4 font-body text-sm text-white/70 flex items-center gap-2"
            >
              Panier {count > 0 && `(${count})`}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}