import localFont from "next/font/local";
import { Poppins } from "next/font/google";

// Display (72pt optical size) — titres larges, hero, prix
export const googleSansDisplay = localFont({
  src: [
    { path: "../../public/fonts/GoogleSansFlex_72pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/GoogleSansFlex_72pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/GoogleSansFlex_72pt-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/GoogleSansFlex_72pt-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

// Texte courant, UI, boutons
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Signature — logo, accents manuscrits (citations bibliques)
export const chantalMedium = localFont({
  src: "../../public/fonts/ChantalMedium.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-signature",
  display: "swap",
});