import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { CartPage } from "@/section/CartPage";

export const metadata = {
  title: "Panier — Follow Jesus",
};

export default function Panier() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <Navbar solid />
      <CartPage />
      <Footer />
    </main>
  );
}