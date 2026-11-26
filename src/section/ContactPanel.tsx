"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593942001149&mibextid=wwXIfr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/followjesus.wear?igsi=dmg5amZpems2NmY1",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 2h-3.2v13.9a3.1 3.1 0 1 1-2.2-2.97V9.6a6.3 6.3 0 1 0 5.4 6.24V8.8a8.1 8.1 0 0 0 4.4 1.3V6.9a4.85 4.85 0 0 1-4.4-4.9Z" />
      </svg>
    ),
  },
];

function FloatingField({
  id,
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Field = multiline ? "textarea" : "input";

  return (
    <div className="relative">
      <Field
        id={id}
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-transparent border-b border-white/20 pt-6 pb-2 font-body text-sm text-white outline-none transition-colors focus:border-scarlet resize-none ${
          multiline ? "" : ""
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 font-body text-white/40 transition-all duration-200 pointer-events-none ${
          active ? "top-0 text-[11px] text-scarlet" : "top-6 text-sm"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function ContactPanel() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22953461205").replace(
    /[^\d]/g,
    ""
  );

  const handleSubmit = () => {
    if (!name.trim() || !message.trim()) return;

    const text = [
      `Bonjour, je vous contacte depuis le site Follow Jesus :`,
      ``,
      `Nom : ${name}`,
      phone.trim() ? `Téléphone : ${phone}` : null,
      ``,
      `Message : ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="px-6 md:px-12 pb-24 md:pb-32">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 max-w-6xl mx-auto">
        {/* Colonne infos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-4">
              Réponse la plus rapide
            </p>
            
            <a  href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/15 px-6 py-5 hover:border-scarlet hover:bg-scarlet transition-colors"
            >
              <div className="flex items-center gap-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.51-3.67 8.16-8.17 8.16Z" />
                </svg>
                <span className="font-body text-sm">WhatsApp</span>
              </div>
              <span className="font-body text-xs text-white/40 group-hover:text-white transition-colors">
                →
              </span>
            </a>
          </div>

          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-4">
              Basé à
            </p>
            <p className="font-display font-bold text-2xl md:text-3xl tracking-tight">
              Cotonou, Bénin
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-wide text-white/40 mb-4">
              Suis-nous
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                
                <a  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 hover:border-scarlet hover:bg-scarlet transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Colonne formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-8">
            <FloatingField id="name" label="Ton nom" value={name} onChange={setName} />
            <FloatingField id="phone" label="Téléphone (optionnel)" value={phone} onChange={setPhone} />
            <FloatingField
              id="message"
              label="Ton message"
              value={message}
              onChange={setMessage}
              multiline
            />

            <button
              onClick={handleSubmit}
              disabled={!name.trim() || !message.trim()}
              className={`h-14 mt-4 font-body text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                sent ? "bg-scarlet text-white" : "bg-white text-ink hover:bg-scarlet hover:text-white"
              }`}
            >
              {sent ? "Message prêt sur WhatsApp ✓" : "Envoyer sur WhatsApp"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}