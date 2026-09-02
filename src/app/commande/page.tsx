import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { CheckoutForm } from "@/section/CheckoutForm";

export const metadata = {
  title: "Commande — Follow Jesus",
};

export default function Commande() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <Navbar solid />
      <CheckoutForm />
      <Footer />
    </main>
  );
}