"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CUT } from "@/lib/brand";
import { MENU, formatPKR } from "@/lib/menu";
import { AddToCart } from "@/components/cart/AddToCart";
import { Reveal } from "@/components/motion/Reveal";

// The burger board: every burger as a big type row. Hover (or tap) one and it lands on the plate.
const SIDES = MENU.filter((c) => c.id === "beef" || c.id === "chicken").map((c) => ({ id: c.id, name: c.id === "beef" ? "Beef" : "Chicken", note: c.note, items: c.items }));
const EASE = [0.16, 1, 0.3, 1] as const;

const double = (d: string) => Number(d.match(/Double patty Rs\. (\d+)/)?.[1] ?? 0);
const ingredients = (d: string) => d.replace(/\. Double patty.*$/, "");

export function Burgers() {
  const [side, setSide] = useState(0);
  const list = SIDES[side].items;
  const [active, setActive] = useState(list[0].id);
  const current = list.find((b) => b.id === active) ?? list[0];
  const shown = CUT[current.id] ? current : list.find((b) => CUT[b.id])!;

  return (
    <section id="burgers" className="relative overflow-hidden bg-teal-ink py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute top-1/3 right-[-10%] size-[60vw] max-w-[820px] rounded-full bg-teal/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-xs text-cream/55">The burger board</p>
            <h2 className="display mt-2 text-6xl sm:text-8xl">Smash or crunch?</h2>
          </div>
          <div role="tablist" aria-label="Burger type" className="flex gap-1 rounded-full bg-white/5 p-1 ring-1 ring-cream/10">
            {SIDES.map((s, k) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={k === side}
                onClick={() => {
                  setSide(k);
                  setActive(SIDES[k].items[0].id);
                }}
                className={`relative rounded-full px-6 py-2.5 text-sm font-bold transition-colors ${k === side ? "text-teal-deep" : "text-cream/70 hover:text-cream"}`}
              >
                {k === side && <motion.span layoutId="side-pill" className="absolute inset-0 rounded-full bg-cream" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <span className="relative">{s.name}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ul className="border-t border-cream/10">
            {list.map((b, k) => {
              const on = b.id === current.id;
              return (
                <li
                  key={b.id}
                  onPointerEnter={() => setActive(b.id)}
                  onClick={() => setActive(b.id)}
                  className="group grid cursor-pointer grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 border-b border-cream/10 py-5 sm:grid-cols-[3rem_1fr_auto] sm:py-6"
                >
                  <span className={`label text-xs transition-colors ${on ? "text-cheese" : "text-cream/35"}`}>{String(k + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <p className={`display text-4xl transition-all duration-500 ease-(--ease-out-expo) sm:text-5xl ${on ? "translate-x-2 text-cream" : "text-cream/45 group-hover:text-cream/80"}`}>{b.name}</p>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="overflow-hidden pl-2 text-sm text-cream/60">
                          <span className="block pt-2">{ingredients(b.description)}</span>
                          <span className="block pt-1 tabular-nums sm:hidden">
                            {formatPKR(b.price)} · Double {formatPKR(double(b.description))}
                          </span>
                          {CUT[b.id] && (
                            <Image src={`/img/cutout/${b.id}.webp`} alt="" width={CUT[b.id][0]} height={CUT[b.id][1]} sizes="70vw" className="mt-4 h-auto w-[70%] max-w-72 drop-shadow-[0_20px_20px_rgba(0,0,0,.4)] lg:hidden" />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden text-right text-sm tabular-nums sm:block">
                      <p className="font-semibold">{formatPKR(b.price)}</p>
                      <p className="text-cream/45">Double {formatPKR(double(b.description))}</p>
                    </div>
                    <AddToCart id={b.id} name={b.name} variant={on ? "cream" : "outline"} compact className={on ? "" : "[&>div]:text-cream/70"} />
                  </div>
                </li>
              );
            })}
          </ul>

          {/* The plate */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 grid aspect-square place-items-center">
              <div className="absolute inset-[8%] rounded-full bg-teal shadow-[inset_0_-30px_60px_rgba(0,0,0,.25),0_50px_80px_-50px_rgba(0,0,0,.9)]" />
              <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(60%_55%_at_50%_35%,rgba(255,255,255,.22),transparent_70%)]" />
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={shown.id}
                  initial={{ opacity: 0, y: 60, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9, rotate: 6, transition: { duration: 0.35 } }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="relative w-[78%]"
                >
                  <Image src={`/img/cutout/${shown.id}.webp`} alt={shown.name} width={CUT[shown.id][0]} height={CUT[shown.id][1]} quality={90} sizes="36vw" className="h-auto w-full drop-shadow-[0_40px_40px_rgba(0,0,0,.45)]" />
                </motion.div>
              </AnimatePresence>
              <span className="label absolute top-[4%] right-[4%] grid size-24 whitespace-pre-line place-items-center rounded-full bg-cheese text-center text-[11px] leading-tight text-ink shadow-xl">
                {SIDES[side].note?.replace(" +", "\n+")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
