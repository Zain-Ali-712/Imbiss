"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { BRAND, REVIEWS, REVIEW_TAGS } from "@/lib/brand";

function CountUp({ to, decimals = 0, className }: { to: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: setV });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {v.toLocaleString("en-PK", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  );
}

export function Reviews() {
  const fivePct = Math.round((BRAND.google.fiveStar / BRAND.google.reviews) * 100);
  const col = (rev: boolean) => {
    const base = rev ? [...REVIEWS].reverse() : [...REVIEWS];
    return [...base, ...base, ...base, ...base]; // doubled twice so the -50% loop never shows a gap
  };
  return (
    <section className="relative overflow-hidden bg-teal py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="label mb-3 text-xs text-cheese">Google reviews</p>
          <h2 className="display text-4xl md:text-5xl">What Lahore is saying</h2>
          <div className="flex items-end gap-4">
            <CountUp to={BRAND.google.rating} decimals={1} className="display text-[clamp(7rem,17vw,13rem)] leading-[0.85] tabular-nums" />
            <div className="mb-5 flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <motion.span key={i} initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 260, damping: 14 }}>
                  <Star className="size-7 fill-cheese text-cheese" />
                </motion.span>
              ))}
            </div>
          </div>
          <p className="mt-4 max-w-sm text-lg text-cream/75">
            From <CountUp to={BRAND.google.reviews} className="font-bold text-cream tabular-nums" /> reviews on Google Maps, and {fivePct}% of them are five stars.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {REVIEW_TAGS.map(([tag, n], i) => (
              <motion.li key={tag} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="rounded-full bg-teal-ink/30 px-4 py-2 text-sm ring-1 ring-cream/15">
                {tag} <span className="font-bold text-cheese">{n}</span>
              </motion.li>
            ))}
          </ul>
          <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
            Read them on Google Maps <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="relative h-[520px] overflow-hidden [mask-image:linear-gradient(transparent,black_15%,black_85%,transparent)]">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {[false, true].map((rev) => (
              <div key={String(rev)} className={`flex flex-col gap-4 ${rev ? "hidden animate-[marquee-y_34s_linear_infinite_reverse] sm:flex" : "animate-[marquee-y_28s_linear_infinite]"}`}>
                {col(rev).map((r, i) => (
                  <figure key={`${r.name}-${i}`} className="rounded-3xl bg-cream p-6 text-teal-ink shadow-[0_20px_40px_-30px_rgba(0,0,0,.6)]">
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: 5 }, (_, k) => (
                        <Star key={k} className="size-4 fill-cheese text-cheese" />
                      ))}
                    </div>
                    <blockquote className="text-teal-ink/80">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-4 text-sm font-bold text-teal-deep">{r.name}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
