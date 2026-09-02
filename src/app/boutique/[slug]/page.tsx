import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/section/Footer";
import { ProductDetail } from "@/section/ProductDetail";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Follow Jesus`,
    description: `${product.name}, disponible en tailles ${product.sizes.join(", ")}.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  return (
    <main className="bg-paper text-ink">
      <Navbar solid />
      <ProductDetail product={product} related={related} />
      <Footer />
    </main>
  );
}