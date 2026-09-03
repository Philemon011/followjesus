import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { ContactHero } from "@/section/ContactHero";
import { ContactPanel } from "@/section/ContactPanel";

export const metadata = {
  title: "Contact — Follow Jesus",
  description: "Une question, une commande spéciale ? Écris-nous.",
};

export default function ContactPage() {
  return (
    <main className="bg-ink text-white">
      <Navbar solid />
      <ContactHero />
      <ContactPanel />
      <Footer />
    </main>
  );
}