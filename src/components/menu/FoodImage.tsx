import Image from "next/image";
import { imageSize } from "@/lib/menu";

/** A dish photo, or a teal tile with the wordmark when Imbiss hasn't shot that item yet. */
export function FoodImage({ src, alt, sizes, className = "", tint, priority }: { src: string | null; alt: string; sizes: string; className?: string; tint?: number; priority?: boolean }) {
  if (!src) {
    return (
      <div className={`grid place-items-center overflow-hidden bg-teal ${className}`} role="img" aria-label={alt}>
        <Image src="/img/brand/logo.png" alt="" width={840} height={434} className="w-1/2 opacity-40" />
      </div>
    );
  }
  const [w, h] = imageSize(src);
  return (
    <div className={`overflow-hidden bg-teal ${className}`}>
      <Image src={src} alt={alt} width={w} height={h} sizes={sizes} priority={priority} className="size-full object-cover" style={tint ? { filter: `hue-rotate(${tint}deg) saturate(1.15)` } : undefined} />
    </div>
  );
}
