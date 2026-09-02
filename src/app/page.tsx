import { Navbar } from "@/components/Navbar";
import { Hero } from "@/section/Hero";
import { Mission } from "@/section/Mission";
import { Pillars } from "@/section/Pillars";
import { FeaturedProducts } from "@/section/FeaturedProducts";
import { Testimonials } from "@/section/Testimonials";
import { Footer } from "@/section/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Pillars />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </main>
  );
}