import { MapPin, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const LINKS = [
  { label: "Instagram", href: BRAND.instagram, Icon: Instagram },
  { label: "WhatsApp", href: BRAND.whatsappHref, Icon: MessageCircle },
  { label: "Google Maps", href: BRAND.mapsUrl, Icon: MapPin },
] as const;

/** Imbiss's real channels from their Instagram bio. */
export function Socials({ className = "", itemClassName = "" }: { className?: string; itemClassName?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={`Imbiss on ${label}`} className={`grid size-10 place-items-center rounded-full transition hover:-translate-y-0.5 ${itemClassName}`}>
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
