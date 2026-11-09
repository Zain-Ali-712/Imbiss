"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Bell } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";
import { Instagram } from "@/components/brand/Socials";
import { LogoMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/** The second branch. Imbiss hasn't announced a date or address yet, so this only says what's known. */
export function JoharTown() {
  return (
    <section id="johar-town" className="relative overflow-hidden bg-paper py-24 text-teal-deep sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="label inline-flex items-center gap-2 rounded-full bg-teal-deep px-4 py-2 text-xs text-cream">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-cheese" />
                <span className="relative size-2 rounded-full bg-cheese" />
              </span>
              New branch · Opening soon
            </span>
          </Reveal>
          <h2 className="display mt-6 text-[19vw] leading-[0.82] sm:text-[9rem]">
            {["Johar", "Town."].map((w, k) => (
              <span key={w} className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" initial={{ y: "105%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: k * 0.1, ease: EASE }}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-lg text-teal-deep/75">
              A second Imbiss counter is on its way to Johar Town, Lahore. Same smash patties, same Korean Drip, same 2 AM energy. The date and pin drop on Instagram first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink("Hi Imbiss! Please let me know when the Johar Town branch opens.")} target="_blank" rel="noreferrer" className="inline-flex h-13 items-center gap-2 rounded-full bg-teal-deep px-6 font-bold text-cream transition hover:bg-teal-ink">
                <Bell className="size-4" /> Notify me on WhatsApp
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="inline-flex h-13 items-center gap-2 rounded-full px-6 font-semibold ring-1 ring-teal-deep/25 transition hover:bg-teal-deep/5">
                <Instagram className="size-4" /> @imbiss.pk <ArrowUpRight className="size-4" />
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-teal-deep/15 pt-6 text-sm">
              {[
                ["Where", "Johar Town"],
                ["When", "Coming soon"],
                ["Flagship", "Opp. Jinnah Hospital"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-[11px] text-teal-deep/50">{k}</dt>
                  <dd className="mt-1 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Badge with orbiting "coming soon" ring and the dishes floating round it */}
        <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-[520px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 animate-[spin-slow_28s_linear_infinite] text-teal-deep" aria-hidden>
            <defs>
              <path id="jt-circle" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
            </defs>
            <text className="label" fontSize="11" letterSpacing="3.2" fill="currentColor">
              <textPath href="#jt-circle">COMING SOON • JOHAR TOWN • LAHORE • COMING SOON • JOHAR TOWN • LAHORE •</textPath>
            </text>
          </svg>
          <div className="absolute inset-[16%] grid place-items-center">
            <LogoMark className="w-full" />
          </div>
          <Image src="/img/cutout/okhlahoma.webp" alt="" width={1139} height={1120} sizes="240px" className="absolute -right-[4%] -bottom-[2%] w-[44%] animate-[float-y_6s_ease-in-out_infinite] drop-shadow-[0_30px_30px_rgba(14,43,47,.35)]" />
          <Image src="/img/cutout/lotus.webp" alt="" width={667} height={1200} sizes="110px" className="absolute top-[2%] left-[2%] w-[20%] -rotate-12 animate-[float-y_7s_ease-in-out_infinite_1s] drop-shadow-[0_30px_30px_rgba(14,43,47,.3)]" />
        </Reveal>
      </div>
    </section>
  );
}
