import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { BoutiqueGrid } from "@/section/BoutiqueGrid";
import { products } from "@/lib/products";

export const metadata = {
  title: "Boutique — Follow Jesus",
  description: "Découvre la collection Follow Jesus.",
};

export default function BoutiquePage() {
  return (
    <main className="bg-paper text-ink">
      <Navbar solid />
      <section className="pt-32 md:pt-44 pb-10 md:pb-16 px-6 md:px-12 border-b border-line">
        <p className="font-body text-xs md:text-sm text-ink/50 mb-3">
          {products.length} pièce{products.length > 1 ? "s" : ""}
        </p>
        <h1 className="font-signature text-6xl sm:text-7xl md:text-9xl leading-none">
          Boutique
        </h1>
      </section>

      <BoutiqueGrid products={products} />

      <Footer />
    </main>
  );
}