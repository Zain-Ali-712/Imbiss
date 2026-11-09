"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Clock, MapPin, Star } from "lucide-react";
import { BRAND, CUT } from "@/lib/brand";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (delay: number) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 1, ease: EASE } });

/** Still hero: their own spread shot, big on the right, on the exact teal it was shot on. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#5b7e84] text-cream lg:h-[100svh] lg:min-h-[680px]">
      {/* Studio light and a static wordmark behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_60%_at_68%_45%,rgba(255,255,255,.14),transparent_70%)]" />
      <p aria-hidden className="display pointer-events-none absolute -bottom-[0.18em] left-[-0.04em] -z-10 text-[30vw] leading-none text-white/[.045] select-none">
        iMBiSS
      </p>

      {/* Side dishes, quiet and still */}
      <Image src="/img/cutout/thai-wings.webp" alt="" width={CUT["thai-wings"][0]} height={CUT["thai-wings"][1]} sizes="180px" className="pointer-events-none absolute top-[9%] left-[27%] -z-10 hidden w-24 -rotate-12 opacity-35 lg:block" />
      <Image src="/img/cutout/curly-fries.webp" alt="" width={CUT["curly-fries"][0]} height={CUT["curly-fries"][1]} sizes="140px" className="pointer-events-none absolute bottom-[9%] left-[3%] -z-10 hidden w-24 rotate-6 opacity-30 lg:block" />

      {/* The spread */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="relative mt-16 aspect-[1600/1030] w-full lg:absolute lg:top-[52%] lg:right-0 lg:mt-0 lg:w-[62vw] lg:max-w-[1150px] lg:-translate-y-1/2"
        style={{ maskImage: "linear-gradient(90deg,transparent,#000 14%,#000 96%,transparent),linear-gradient(#000 80%,transparent)", maskComposite: "intersect" }}
      >
        <Image src="/img/brand/spread.webp" alt="Okhlahoma burger with Alfredo pasta, Korean wings and two Imbiss mojitos" fill priority quality={90} sizes="(min-width:1024px) 62vw, 100vw" className="object-cover" />
      </motion.div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 pt-2 pb-14 sm:px-8 lg:pt-20 lg:pb-10">
        <div className="max-w-xl lg:max-w-[34rem]">
          <motion.p {...rise(0.2)} className="label flex items-center gap-2 text-xs text-cream/75">
            <MapPin className="size-3.5" /> Opposite Jinnah Hospital · Lahore
          </motion.p>
          <motion.h1 {...rise(0.3)} className="display mt-5 text-[3.4rem] sm:text-7xl xl:text-[5.6rem]">
            Every bite,
            <br />a different <span className="text-cheese">vibe.</span>
          </motion.h1>
          <motion.p {...rise(0.45)} className="mt-6 max-w-md text-lg text-cream/80">
            Australian-beef smash burgers, Korean Drip, loaded fries and signature shakes. {BRAND.bio}.
          </motion.p>
          <motion.div {...rise(0.55)} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/#favourites" className="group inline-flex h-13 items-center gap-2 rounded-full bg-cream px-7 font-bold text-teal-deep shadow-[0_18px_40px_-18px_rgba(0,0,0,.6)] transition hover:bg-white">
              Order now <ArrowDownRight className="size-4 transition-transform group-hover:-rotate-45" />
            </Link>
            <Link href="/#burgers" className="inline-flex h-13 items-center rounded-full px-6 font-semibold ring-1 ring-cream/35 transition hover:bg-cream/10">
              See the burgers
            </Link>
          </motion.div>
          <motion.dl {...rise(0.7)} className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/15 pt-6">
            <div>
              <dt className="label text-[11px] text-cream/55">Google</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-semibold">
                <Star className="size-4 fill-cheese text-cheese" /> {BRAND.google.rating} · {BRAND.google.reviews.toLocaleString("en")} reviews
              </dd>
            </div>
            <div>
              <dt className="label text-[11px] text-cream/55">Open daily</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-semibold">
                <Clock className="size-4 text-cheese" /> 1 PM – 2 AM
              </dd>
            </div>
            <div>
              <dt className="label text-[11px] text-cream/55">Coming soon</dt>
              <dd className="mt-1 font-semibold">Johar Town</dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
