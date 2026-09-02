import type { Metadata } from "next";
import { googleSansDisplay, poppins, chantalMedium } from "@/lib/fonts";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Follow Jesus",
  description: "Come, follow me, Jesus said — Matthieu 4:19",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${googleSansDisplay.variable} ${poppins.variable} ${chantalMedium.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        <CartProvider>
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}