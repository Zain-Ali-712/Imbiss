import { BRAND } from "@/lib/brand";

const WORDS = [BRAND.bio, "Smash burgers", "Korean Drip", "Loaded fries", "Signature shakes", "Open 1pm – 2am", "Opposite Jinnah Hospital", "Johar Town soon"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden bg-cream py-5 text-teal-deep" aria-label={WORDS.join(", ")}>
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center" aria-hidden>
        {row.map((w, k) => (
          <span key={k} className="flex items-center">
            <span className="display px-7 text-3xl whitespace-nowrap sm:text-4xl">{w}</span>
            <span className="size-2.5 rounded-full bg-cheese" />
          </span>
        ))}
      </div>
    </div>
  );
}
