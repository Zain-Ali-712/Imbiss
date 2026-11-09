"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CUT } from "@/lib/brand";
import { mustGetItem, priceLabel } from "@/lib/menu";
import { AddToCart } from "@/components/cart/AddToCart";

// Scroll through the five vibes: each dish rests, then the next glides up into its place.
const VIBES = [
  { id: "okhlahoma", word: "SMASH", line: "Double smash, caramelised onions, crispy onions.", bg: "#5d8187" },
  { id: "korean-drip", word: "DRIP", line: "Korean glazed chicken that drips on purpose.", bg: "#4f7178" },
  { id: "lotus", word: "SLURP", line: "Biscoff-sweet Lotus, shaken thick.", bg: "#4b808b" },
  { id: "mac-n-loaded", word: "LOADED", line: "Mac n cheese stacked with fries and golden chicken.", bg: "#5f8584" },
  { id: "curly-fries", word: "CRUNCH", line: "Seasoned curls in the teal cup.", bg: "#557a80" },
] as const;
const N = VIBES.length;

// Progress 0..1 → vibe position 0..N-1, holding on each vibe for the first half of its slot.
const IN: number[] = [];
const OUT: number[] = [];
VIBES.forEach((_, i) => {
  IN.push(i / N, (i + 0.5) / N);
  OUT.push(i, i);
});
IN.push(1);
OUT.push(N - 1);

export function Vibes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const t = useTransform(scrollYProgress, IN, OUT);
  const bg = useTransform(t, VIBES.map((_, i) => i), VIBES.map((v) => v.bg));
  const [active, setActive] = useState(0);
  useMotionValueEvent(t, "change", (v) => setActive(Math.round(v)));
  const item = mustGetItem(VIBES[active].id);

  return (
    <motion.section ref={ref} id="vibes" style={{ backgroundColor: bg, height: `${N * 90}svh` }} className="relative text-cream">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_50%_at_50%_52%,rgba(255,255,255,.16),transparent_72%)]" />

        {VIBES.map((v, i) => (
          <Word key={v.id} i={i} t={t} word={v.word} />
        ))}
        {VIBES.map((v, i) => (
          <Dish key={v.id} i={i} t={t} id={v.id} />
        ))}

        <div className="absolute inset-x-0 top-20 mx-auto max-w-7xl px-4 sm:top-24 sm:px-8">
          <p className="label text-xs text-cream/65">Pick a vibe · keep scrolling</p>
        </div>

        {/* Info card */}
        <div className="absolute inset-x-0 bottom-6 mx-auto max-w-7xl px-4 sm:bottom-10 sm:px-8">
          <div className="relative max-w-sm rounded-[1.75rem] bg-teal-ink/55 p-5 ring-1 ring-cream/10 backdrop-blur-md sm:p-6">
            {VIBES.map((v, i) => (
              <Fade key={v.id} i={i} t={t} className={i ? "absolute inset-5 sm:inset-6" : ""}>
                <p className="label text-[11px] text-cheese">{mustGetItem(v.id).category}</p>
                <p className="display mt-1 text-3xl">{mustGetItem(v.id).name}</p>
                <p className="mt-1 text-sm text-cream/70">{v.line}</p>
              </Fade>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-cream/10 pt-4">
              <span className="font-semibold">{priceLabel(item)}</span>
              <AddToCart key={item.id} id={item.id} name={item.name} variant="cream" compact />
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <ol className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col gap-3 sm:right-8">
          {VIBES.map((v, i) => (
            <li key={v.id} className="flex items-center justify-end gap-3">
              <span className={`label hidden text-[11px] transition-opacity duration-500 md:block ${i === active ? "opacity-100" : "opacity-0"}`}>{v.word}</span>
              <span className={`block w-1.5 rounded-full transition-all duration-500 ${i === active ? "h-8 bg-cream" : "h-1.5 bg-cream/40"}`} />
            </li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}

function Word({ i, t, word }: { i: number; t: MotionValue<number>; word: string }) {
  const opacity = useTransform(t, (v) => Math.max(0, 1 - Math.abs(v - i) * 1.6));
  const y = useTransform(t, (v) => `${(i - v) * 14}vh`);
  return (
    <motion.p aria-hidden style={{ opacity, y }} className="display pointer-events-none absolute inset-x-0 top-[18%] text-center text-[26vw] leading-none text-cream/90 select-none lg:top-[12%] lg:text-[20vw]">
      {word}
    </motion.p>
  );
}

function Dish({ i, t, id }: { i: number; t: MotionValue<number>; id: string }) {
  const d = useTransform(t, (v) => i - v);
  const y = useTransform(d, (v) => `${v * 78}svh`);
  const scale = useTransform(d, (v) => 1 - Math.min(Math.abs(v), 1.2) * 0.38);
  const rotate = useTransform(d, (v) => v * 10);
  const opacity = useTransform(d, (v) => (v < 0 ? Math.max(0, 1 + v * 1.4) : Math.max(0, 1 - Math.max(0, v - 0.5) * 0.9)));
  const [w, h] = CUT[id];
  return (
    <motion.div style={{ y, scale, rotate, opacity }} className="pointer-events-none absolute inset-x-0 top-[27%] flex justify-center lg:top-[31%]">
      <Image
        src={`/img/cutout/${id}.webp`}
        alt={mustGetItem(id).name}
        width={w}
        height={h}
        quality={90}
        sizes="(min-width:1024px) 34vw, 80vw"
        className="h-auto max-h-[52svh] w-auto max-w-[82vw] drop-shadow-[0_40px_40px_rgba(0,0,0,.3)] lg:max-h-[54svh] lg:max-w-[32vw]"
      />
    </motion.div>
  );
}

function Fade({ i, t, className, children }: { i: number; t: MotionValue<number>; className?: string; children: React.ReactNode }) {
  const opacity = useTransform(t, (v) => Math.max(0, 1 - Math.abs(v - i) * 2.5));
  const y = useTransform(t, (v) => (i - v) * 18);
  return (
    <motion.div style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}
