"use client";

import { Review } from "@/lib/reviews";
import { StarRating } from "./StarRating";

interface MarqueeRowProps {
  items: Review[];
  direction: "left" | "right";
  speed?: number; // secondes pour un cycle complet
}

export function MarqueeRow({ items, direction, speed = 40 }: MarqueeRowProps) {
  // On duplique la liste pour un défilement continu sans coupure visible
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex gap-5 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((review, i) => (
          <div
            key={`${review.id}-${i}`}
            className="w-[280px] md:w-[340px] shrink-0 bg-white border border-line p-6 md:p-7"
          >
            <StarRating rating={review.rating} />
            <p className="font-body text-sm text-ink/80 leading-relaxed mt-4 mb-6">
              « {review.comment} »
            </p>
            <div className="flex items-center justify-between">
              <p className="font-display font-bold text-sm">{review.name}</p>
              <p className="font-body text-xs text-ink/40">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}