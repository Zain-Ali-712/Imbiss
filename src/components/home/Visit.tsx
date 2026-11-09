import { ArrowUpRight, Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Reveal } from "@/components/motion/Reveal";

export function Visit() {
  const rows = [
    { Icon: MapPin, k: "Address", v: BRAND.address, href: BRAND.mapsUrl },
    { Icon: Clock, k: "Hours", v: BRAND.hours },
    { Icon: MessageCircle, k: "WhatsApp only", v: BRAND.whatsapp, href: BRAND.whatsappHref },
    { Icon: Star, k: "Google", v: `${BRAND.google.rating} ★ from ${BRAND.google.reviews.toLocaleString("en")} reviews` },
  ];
  return (
    <section id="visit" className="bg-teal py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="label text-xs text-cream/60">Visit</p>
          <h2 className="display mt-2 text-6xl sm:text-7xl">Right across from Jinnah Hospital.</h2>
          <p className="mt-4 max-w-md text-cream/70">A few steps from FAST NUCES, open till 2 AM for the late lab, the long shift and the midnight craving.</p>
          <dl className="mt-10 divide-y divide-cream/15 border-y border-cream/15">
            {rows.map(({ Icon, k, v, href }) => (
              <div key={k} className="flex items-center gap-4 py-4">
                <Icon className="size-5 shrink-0 text-cheese" />
                <dt className="label w-32 shrink-0 text-[11px] text-cream/55">{k}</dt>
                <dd className="font-semibold">
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                      {v} <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="overflow-hidden rounded-[2.5rem] ring-1 ring-cream/15">
          <iframe
            title="Imbiss on Google Maps"
            src="https://www.google.com/maps?q=Imbiss+Lahore+opposite+Jinnah+Hospital&output=embed"
            className="aspect-[4/3] w-full [filter:grayscale(.6)_contrast(1.05)_hue-rotate(150deg)_saturate(.6)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
