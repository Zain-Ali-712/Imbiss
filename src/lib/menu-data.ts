import type { MenuCategory, MenuItem } from "./menu-types";

// Menu and prices from Imbiss's Instagram menu story and Foodpanda listing (Nov 2026).
// Burgers list the Single price; Double is in the description. Photos are Imbiss's own Foodpanda shots.

const img = (id: string) => `/img/menu/${id}.webp`;
const it = (id: string, name: string, price: number, description: string, image: string | null = img(id), extra: Partial<MenuItem> = {}): MenuItem => ({
  id,
  name,
  price,
  from: false,
  description,
  image,
  popular: false,
  ...extra,
});
const burger = (id: string, name: string, single: number, double: number, description: string, image: string | null = img(id)) =>
  it(id, name, single, `${description}. Double patty Rs. ${double}.`, image, { from: true });

export const MENU: MenuCategory[] = [
  {
    id: "beef",
    name: "Beef Burgers",
    note: "Triple patty and cheese +Rs. 300",
    items: [
      burger("classic-beef", "Classic Beef", 750, 1050, "Australian beef, cheese, iceberg, onion wheels, garlic mayo & OG sauce"),
      burger("okhlahoma", "Okhlahoma", 810, 1110, "Australian beef, cheese, iceberg, caramelized onions, crispy onions, garlic mayo & OG sauce"),
      burger("dynashroom", "Dynashroom", 780, 1080, "Australian beef, cheese, iceberg, pan-roasted mushrooms & onions, gherkins, garlic mayo & dynamite sauce"),
      burger("big-jack", "Big Jack", 740, 1040, "Australian beef, cheese, iceberg, gherkins, garlic mayo & big jack sauce"),
      burger("jala-beef", "Jala Beef", 760, 1060, "Australian beef smashed with chillis, cheese, iceberg, jalapenos, jalapeno sauce & gochu sauce", null),
      burger("bacon-beast", "Bacon Beast", 880, 1200, "Australian beef, cheese, iceberg, turkey bacon, garlic mayo, gochu sauce & cowboy sauce"),
    ],
  },
  {
    id: "chicken",
    name: "Chicken Burgers",
    note: "Cheese slice +Rs. 100",
    items: [
      burger("tangy-attack", "Tangy Attack", 770, 1070, "Crispy chicken dipped in sweet and sour sauce, iceberg, garlic mayo & chipotle sauce"),
      burger("blazin-south", "Blazin' South", 790, 1090, "Nashville oil dipped chicken dusted with spicy masala, cheese slice, iceberg, gherkins, jalapeno & chipotle sauce"),
      burger("fillet-fusion", "Fillet Fusion", 780, 1080, "Tempura fillet, cheese slice, iceberg, jalapenos & jalapeno sauce"),
      burger("tokyo-chipotle", "Tokyo Chipotle", 780, 1080, "Tempura fillet, cheese slice, iceberg, garlic mayo & chipotle sauce"),
      burger("korean-drip", "Korean Drip", 890, 1180, "Korean glazed chicken, iceberg, garlic mayo & gochu sauce"),
    ],
  },
  {
    id: "wraps-pasta",
    name: "Wraps & Pasta",
    note: null,
    items: [
      it("jackn-jala", "Jackn' Jala", 890, "Tender chicken, fries, iceberg, jalapenos, garlic mayo, big jack sauce & jalapeno sauce"),
      it("chipotle-volte", "Chipotle Volte", 890, "Tender chicken, fries, iceberg, gherkins, garlic mayo, big jack sauce & chipotle sauce"),
      it("alfredo-pasta", "Alfredo Pasta", 940, "Parmesan, sun-dried mushrooms and alfredo sauce, served with crumb fried chicken"),
      it("mac-n-loaded", "Mac N' Loaded", 960, "Mac n cheese stacked with crispy fries, golden chicken, big jack sauce & chipotle sauce"),
    ],
  },
  {
    id: "wings",
    name: "Wings",
    note: "6 pieces",
    items: [
      it("thai-wings", "Thai Sweet Chilli Wings", 680, "Six wings glazed in Thai sweet chilli"),
      it("bbq-wings", "BBQ Wings", 640, "Six wings in smoky BBQ glaze", null),
      it("dynamite-wings", "Dynamite Wings", 720, "Six wings tossed in creamy dynamite sauce"),
      it("korean-wings", "Korean Wings", 740, "Six wings in sticky Korean glaze with sesame"),
    ],
  },
  {
    id: "fries",
    name: "Fries & Sauces",
    note: null,
    items: [
      it("regular-fries", "Regular Fries", 330, "Golden, salted, in the teal cup"),
      it("loaded-fries", "Loaded Fries", 760, "Fries loaded with chicken and house sauces"),
      it("curly-fries", "Curly Fries", 420, "Seasoned curly fries"),
      it("garlic-mayo", "Garlic Mayo", 130, "House dip"),
      it("chipotle-sauce", "Chipotle Sauce", 130, "House dip"),
      it("big-jack-sauce", "Big Jack Sauce", 130, "House dip", null),
      it("jalapeno-sauce", "Jalapeno Sauce", 130, "House dip", null),
    ],
  },
  {
    id: "shakes",
    name: "Shakes & Mojitos",
    note: null,
    items: [
      it("mix-berries", "Mix Berries", 680, "Signature shake"),
      it("nutella-oreo", "Nuttela Oreo", 710, "Signature shake"),
      it("lotus", "Lotus", 760, "Signature shake"),
      it("blue-wave", "Blue Wave", 350, "Mojito", img("mojito"), { tint: 165 }),
      it("passion-punch", "Passion Punch", 350, "Mojito", img("mojito")),
      it("tropical-mango", "Tropical Mango", 350, "Mojito", img("mojito"), { tint: -18 }),
      it("kiwi-blast", "Kiwi Blast", 350, "Mojito", img("mojito"), { tint: 45 }),
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Meals",
    note: null,
    items: [
      it("meal-regular", "Make it a meal", 350, "Regular fries + a drink", null),
      it("meal-curly", "Make it a meal (curly)", 450, "Curly fries + a drink", null),
      it("pepsi", "Pepsi", 120, "345 ml", null),
      it("7up", "7up", 120, "345 ml", null),
      it("mirinda", "Mirinda", 120, "345 ml", null),
      it("7up-diet", "7up Diet", 120, "345 ml", null),
      it("water", "Water", 100, "500 ml", null),
    ],
  },
];

export const IMAGE_SIZES: Record<string, [number, number]> = {
  [img("mojito")]: [560, 700],
  [img("korean-wings")]: [1020, 440],
};
