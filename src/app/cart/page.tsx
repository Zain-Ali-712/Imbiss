import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = { title: "Your cart", robots: { index: false } };

export default function CartPage() {
  return (
    <div className="min-h-[80svh] bg-paper pt-28 text-ink sm:pt-32">
      <CartView />
    </div>
  );
}
