"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
}

export function CheckoutForm() {
  const { items, total } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22953461205").replace(
    /[^\d]/g,
    ""
  );

  if (items.length === 0) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
        <p className="font-display font-black text-2xl md:text-4xl tracking-tight mb-4">
          Ton panier est vide
        </p>
        <Link
          href="/boutique"
          className="bg-ink text-white px-8 py-4 font-body text-sm hover:bg-scarlet transition-colors mt-4"
        >
          Voir la boutique
        </Link>
      </section>
    );
  }

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Entre ton nom.";
    if (!phone.trim()) next.phone = "Entre un numéro de téléphone.";
    if (!address.trim()) next.address = "Entre une adresse de livraison.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const lines = items.map(
  (item) =>
    `• ${item.product.name} — ${item.language === "fr" ? "Français" : "Anglais"}, taille ${item.size}, x${item.quantity} — ${formatPrice(
      item.product.price * item.quantity
    )}`
);

    const message = [
      `Bonjour, je souhaite passer commande :`,
      ``,
      ...lines,
      ``,
      `Sous-total : ${formatPrice(total)}`,
      ``,
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Adresse de livraison : ${address}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="pt-24 md:pt-28 px-6 md:px-12 pb-24 md:pb-32">
      <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-10 md:mb-14">
        Finaliser la commande
      </h1>

      <div className="grid lg:grid-cols-[1fr_380px] gap-12 md:gap-16">
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <label htmlFor="name" className="font-body text-sm text-ink/60 block mb-2">
              Nom complet
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex : Chantal Dossou"
              className="w-full h-12 border border-line px-4 font-body text-sm focus:border-ink outline-none transition-colors"
            />
            {errors.name && (
              <p className="font-body text-xs text-scarlet mt-1.5">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="font-body text-sm text-ink/60 block mb-2">
              Téléphone
            </label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex : +229 90 00 00 00"
              className="w-full h-12 border border-line px-4 font-body text-sm focus:border-ink outline-none transition-colors"
            />
            {errors.phone && (
              <p className="font-body text-xs text-scarlet mt-1.5">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="font-body text-sm text-ink/60 block mb-2">
              Adresse de livraison
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ex : Cotonou, quartier Fidjrossè, non loin de..."
              rows={3}
              className="w-full border border-line px-4 py-3 font-body text-sm focus:border-ink outline-none transition-colors resize-none"
            />
            {errors.address && (
              <p className="font-body text-xs text-scarlet mt-1.5">{errors.address}</p>
            )}
          </div>

          <p className="font-body text-xs text-ink/50 leading-relaxed">
            En validant, tu seras redirigé(e) vers WhatsApp avec ta commande déjà rédigée — il
            ne restera qu&apos;à envoyer le message.
          </p>
        </div>

        <div className="lg:sticky lg:top-28 h-fit bg-white border border-line p-6 md:p-8">
          <p className="font-body text-sm text-ink/60 mb-4">
            {items.length} article{items.length > 1 ? "s" : ""}
          </p>

          <div className="flex flex-col gap-3 pb-4 border-b border-line">
            {items.map((item) => (
              <div
                key={`${item.product.slug}-${item.size}-${item.color}`}
                className="flex justify-between font-body text-xs text-ink/70"
              >
                <span className="truncate pr-2">
                  {item.product.name} ({item.color}, {item.language.toUpperCase()}, {item.size}) x{item.quantity}
                </span>
                <span className="shrink-0">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-baseline justify-between py-4">
            <span className="font-body text-sm text-ink/60">Total</span>
            <span className="font-display font-bold text-lg">{formatPrice(total)}</span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full h-14 flex items-center justify-center gap-2 bg-ink text-white font-body text-sm hover:bg-scarlet transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.16-8.17 8.16Z" />
            </svg>
            Envoyer sur WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}