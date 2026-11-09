import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND, NAV } from "@/lib/brand";
import { Logo } from "@/components/brand/Logo";
import { Socials } from "@/components/brand/Socials";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-ink text-cream">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="w-40" />
          <p className="label mt-4 text-sm text-cream/60">{BRAND.tagline}</p>
          <Socials className="mt-8 -ml-1" itemClassName="size-11 bg-white/5 text-cream ring-1 ring-cream/10 hover:bg-cream hover:text-teal-deep" />
        </div>
        <div>
          <h3 className="label mb-4 text-xs text-cream/50">Visit</h3>
          <p className="leading-relaxed">{BRAND.address}</p>
          <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
            Get directions <ArrowUpRight className="size-4" />
          </a>
          <p className="mt-4 text-sm text-cream/60">Johar Town — opening soon</p>
        </div>
        <div>
          <h3 className="label mb-4 text-xs text-cream/50">Open daily</h3>
          <p>{BRAND.hours}</p>
          <a href={BRAND.whatsappHref} className="mt-3 block font-semibold">
            WhatsApp only · {BRAND.whatsapp}
          </a>
        </div>
        <div>
          <h3 className="label mb-4 text-xs text-cream/50">Explore</h3>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="underline-offset-4 hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-cream/10 px-4 py-6 text-xs text-cream/50 sm:px-8">
        <p>© Imbiss, Lahore.</p>
        <p>Concept website — menu and prices from Imbiss&apos;s Instagram menu and Foodpanda listing, November 2026.</p>
      </div>
      <p aria-hidden className="display pointer-events-none -mb-[0.32em] text-center text-[27vw] leading-none text-cream/[.05] select-none">
        iMBiSS
      </p>
    </footer>
  );
}
