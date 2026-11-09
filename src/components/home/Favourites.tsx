"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CUT } from "@/lib/brand";
import { mustGetItem, priceLabel } from "@/lib/menu";
import { AddToCart } from "@/components/cart/AddToCart";
import { Reveal } from "@/components/motion/Reveal";

// Picks backed by what people mention most in Imbiss's Google reviews.
const PICKS = [
  { id: "okhlahoma", tag: "Beef burger · 120 mentions", big: true },
  { id: "loaded-fries", tag: "21 mentions" },
  { id: "mac-n-loaded", tag: "Mac n cheese · 14 mentions" },
  { id: "korean-drip", tag: "House signature" },
  { id: "lotus", tag: "Signature shake" },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Favourites() {
  return (
    <section id="favourites" className="relative bg-paper py-24 text-teal-deep sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-xs text-teal-deep/55">Fan favourites</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">Most loved.</h2>
          </div>
          <p className="max-w-sm text-teal-deep/70">The ones Lahore keeps coming back for, going by what gets named most in our Google reviews.</p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {PICKS.map((p, k) => {
            const item = mustGetItem(p.id);
            const big = "big" in p && p.big;
            const [w, h] = CUT[p.id];
            return (
              <motion.li
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, delay: k * 0.07, ease: EASE }}
                className={`group relative flex flex-col overflow-hidden rounded-[2.25rem] bg-teal text-cream shadow-[0_30px_60px_-40px_rgba(14,43,47,.9)] ${big ? "sm:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_38%,rgba(255,255,255,.2),transparent_70%)]" />
                <span className="label relative m-5 w-max rounded-full bg-teal-ink/40 px-3 py-1.5 text-[10px] text-cream/85 ring-1 ring-cream/10">{p.tag}</span>
                <div className={`relative flex flex-1 items-center justify-center px-6 ${big ? "py-4" : "py-2"}`}>
                  <Image
                    src={`/img/cutout/${p.id}.webp`}
                    alt={item.name}
                    width={w}
                    height={h}
                    quality={90}
                    sizes={big ? "(min-width:1024px) 40vw, 90vw" : "(min-width:1024px) 20vw, 45vw"}
                    className={`h-auto w-auto drop-shadow-[0_30px_30px_rgba(0,0,0,.3)] transition-transform duration-700 ease-(--ease-out-expo) group-hover:-translate-y-2 group-hover:scale-[1.05] group-hover:-rotate-3 ${big ? "max-h-[420px] max-w-[85%]" : "max-h-[180px] max-w-[80%]"}`}
                  />
                </div>
                <div className="relative flex items-end justify-between gap-4 p-5 pt-2 sm:p-6 sm:pt-2">
                  <div className="min-w-0">
                    <h3 className={`display ${big ? "text-4xl sm:text-5xl" : "text-2xl"}`}>{item.name}</h3>
                    {big && <p className="mt-2 max-w-sm text-sm text-cream/70">{item.description}</p>}
                    <p className="mt-1 text-sm font-semibold text-cream/85">{priceLabel(item)}</p>
                  </div>
                  <AddToCart id={item.id} name={item.name} variant="cream" compact />
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
