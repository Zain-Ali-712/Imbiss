// Facts from Imbiss's Instagram bio (@imbiss.pk), Google Maps listing and Foodpanda page (Nov 2026).

export const BRAND = {
  name: "Imbiss",
  tagline: "Every bite, a different vibe",
  bio: "Attendance low, appetite high",
  whatsapp: "0323 2000888",
  whatsappHref: "https://wa.me/923232000888",
  address: "Opposite Jinnah Hospital, Lahore",
  hours: "1 PM – 2 AM, every day",
  mapsUrl: "https://maps.app.goo.gl/dBmYU5oLVZXE11Yu8",
  instagram: "https://www.instagram.com/imbiss.pk/",
  foodpanda: "https://www.foodpanda.pk/restaurant/r0ot/imbiss-r0ot",
  google: { rating: 4.8, reviews: 1584, fiveStar: 1430 }, // Google Maps, Nov 2026
  igFollowers: "9.6k",
  priceRange: "Rs 1–2,000",
} as const;

export const NAV = [
  { href: "/#favourites", label: "Favourites" },
  { href: "/#burgers", label: "Burgers" },
  { href: "/#johar-town", label: "Johar Town" },
  { href: "/#visit", label: "Visit" },
] as const;

export const waLink = (text: string) => `${BRAND.whatsappHref}?text=${encodeURIComponent(text)}`;

/** Real 5-star Google Maps reviews of Imbiss, word for word (spacing tidied). */
export const REVIEWS = [
  { name: "Adeel K.", text: "Amazing & Awesome. Great taste for bang for the buck. Ordered Chicken nashville, Oaklahoma beef & Chicken wrap (Chipotle volte) & curly fries… Highly recommended." },
  { name: "Abdullah S.", text: "Loved their sauce combination and injection in chicken which makes burger a perfect. Beef was superb tasty too. Must try. Highly recommend" },
  { name: "Hoor F.", text: "It was a very very good experience in here, the food was fresh and tasted very good! Highly recommend it to everyone to try it once!!" },
  { name: "Asila M.", text: "Food was really exceptional. Service was really good… behaviour of staff was commendable. Will recommend everyone" },
] as const;

/** Google Maps review topics with mention counts. */
export const REVIEW_TAGS = [
  ["beef burger", 120],
  ["loaded fries", 21],
  ["curly fries", 15],
  ["mac n cheese", 14],
  ["mojitos", 8],
  ["dynamite wings", 5],
] as const;

/** Cutout sizes (px) of the transparent dish images in /img/cutout. */
export const CUT: Record<string, [number, number]> = {"okhlahoma": [1139, 1120], "korean-drip": [1200, 1125], "lotus": [667, 1200], "mac-n-loaded": [1161, 1070], "curly-fries": [997, 1157], "classic-beef": [1200, 1200], "mix-berries": [652, 1114], "loaded-fries": [1139, 1196], "thai-wings": [1200, 1061], "dynashroom": [1200, 1177], "big-jack": [1200, 1114], "bacon-beast": [1200, 1167], "tangy-attack": [1200, 1135], "blazin-south": [1200, 1179], "fillet-fusion": [1200, 1044], "tokyo-chipotle": [1200, 1186], "nutella-oreo": [1200, 1183], "alfredo-pasta": [1192, 1062], "regular-fries": [1077, 1151]};
