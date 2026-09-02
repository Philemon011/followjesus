"use client";

import { motion } from "framer-motion";
import { Review, getAverageRating } from "@/lib/reviews";
import { StarRating } from "./StarRating";

export function ProductReviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="border-t border-line pt-16 md:pt-20">
        <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight mb-4">
          Avis clients
        </h2>
        <p className="font-body text-sm text-ink/50">
          Aucun avis pour cette pièce pour l&apos;instant — sois le premier à en laisser un.
        </p>
      </div>
    );
  }

  const average = getAverageRating(reviews);
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percent: Math.round(
      (reviews.filter((r) => r.rating === star).length / reviews.length) * 100
    ),
  }));

  return (
    <div className="border-t border-line pt-16 md:pt-20">
      <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight mb-10">
        Avis clients
      </h2>

      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-display font-black text-5xl tracking-tight">
              {average.toFixed(1)}
            </span>
            <span className="font-body text-sm text-ink/50">/ 5</span>
          </div>
          <StarRating rating={average} reviewCount={reviews.length} />

          <div className="flex flex-col gap-2 mt-8">
            {distribution.map((d) => (
              <div key={d.star} className="flex items-center gap-3">
                <span className="font-body text-xs text-ink/50 w-3">{d.star}</span>
                <div className="flex-1 h-1.5 bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-scarlet"
                  />
                </div>
                <span className="font-body text-xs text-ink/40 w-8 text-right">
                  {d.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col divide-y divide-line">
          {reviews.map((review) => (
            <div key={review.id} className="py-6 first:pt-0">
              <div className="flex items-center justify-between mb-2">
                <p className="font-display font-bold text-sm">{review.name}</p>
                <p className="font-body text-xs text-ink/40">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
              <p className="font-body text-sm text-ink/70 leading-relaxed mt-3">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}