import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { AboutHero } from "@/section/AboutHero";
import { AboutStory } from "@/section/AboutStory";
import { Founders } from "@/section/Founders";
import { AboutCTA } from "@/section/AboutCTA";

export const metadata = {
  title: "À propos — Follow Jesus",
  description: "L'histoire, la mission et les fondateurs de Follow Jesus.",
};

export default function AProposPage() {
  return (
    <main className="bg-paper text-ink">
      <Navbar solid />
      <AboutHero />
      <AboutStory />
      <Founders />
      <AboutCTA />
      <Footer />
    </main>
  );
}