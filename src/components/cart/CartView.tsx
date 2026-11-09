"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/menu";
import { FoodImage } from "@/components/menu/FoodImage";

export function CartView() {
  const { lines, subtotal, count, setQty } = useCart();

  if (lines.length === 0) {
    return (
      <div className="flex min-h-[50svh] flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="display text-5xl text-teal-deep">Your tray is empty</p>
        <p className="text-ink/60">Every bite, a different vibe. Pick yours.</p>
        <Link href="/#favourites" className="mt-2 rounded-full bg-teal-deep px-6 py-3 font-bold text-cream">
          Browse the menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <h1 className="display text-6xl text-teal-deep">Your cart</h1>
        <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          <AnimatePresence initial={false}>
            {lines.map((l) => (
              <motion.li key={l.id} layout exit={{ opacity: 0, x: 60 }} className="flex items-center gap-5 py-5">
                <FoodImage src={l.image} alt={l.name} sizes="96px" className="size-24 shrink-0 rounded-3xl" />
                <div className="min-w-0 flex-1">
                  <p className="display text-2xl text-teal-deep">{l.name}</p>
                  <p className="text-sm text-ink/60">{formatPKR(l.price)} each{l.from ? " · single" : ""}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button type="button" onClick={() => setQty(l.id, l.qty - 1)} aria-label={`Remove one ${l.name}`} className="grid size-9 place-items-center rounded-full border border-ink/15 hover:border-teal-deep">
                      {l.qty === 1 ? <Trash2 className="size-4" /> : <Minus className="size-4" />}
                    </button>
                    <span className="w-6 text-center font-bold tabular-nums">{l.qty}</span>
                    <button type="button" onClick={() => setQty(l.id, l.qty + 1)} aria-label={`Add one ${l.name}`} className="grid size-9 place-items-center rounded-full border border-ink/15 hover:border-teal-deep">
                      <Plus className="size-4" />
                    </button>
                  </div>
                </div>
                <p className="font-bold tabular-nums">{formatPKR(l.qty * l.price)}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <Link href="/#favourites" className="mt-6 inline-block text-sm font-bold text-teal-deep underline-offset-4 hover:underline">
          + Add more
        </Link>
      </div>
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-[2rem] bg-teal-deep p-6 text-cream">
          <p className="label text-xs text-cream/60">Summary</p>
          <div className="mt-4 flex justify-between text-sm text-cream/75">
            <span>
              {count} item{count === 1 ? "" : "s"}
            </span>
            <span className="tabular-nums">{formatPKR(subtotal)}</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between border-t border-cream/15 pt-4">
            <span className="font-bold">Subtotal</span>
            <span className="display text-4xl tabular-nums">{formatPKR(subtotal)}</span>
          </div>
          <Link href="/checkout" className="group mt-6 flex items-center justify-center gap-2 rounded-full bg-cream py-4 text-lg font-bold text-teal-deep transition hover:bg-white">
            Checkout <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
