import type { Metadata, Viewport } from "next";
import { Chewy, DM_Sans, Oswald } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartFab } from "@/components/cart/CartFab";
import "./globals.css";

// Closest Google Fonts to Imbiss's artwork: Chewy for the hand-drawn iMBiSS letters,
// Oswald for the condensed tagline caps.
const chewy = Chewy({ variable: "--font-chewy", subsets: ["latin"], weight: "400" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["400", "500", "600"] });
const dm = DM_Sans({ variable: "--font-dm", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Imbiss — Every bite, a different vibe | Lahore", template: "%s | Imbiss Lahore" },
  description:
    "Smash burgers, Korean Drip, loaded fries, pasta and signature shakes at Imbiss, opposite Jinnah Hospital, Lahore. Open 1 PM to 2 AM. Johar Town branch coming soon.",
};

export const viewport: Viewport = { themeColor: "#5d8187" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${chewy.variable} ${oswald.variable} ${dm.variable} antialiased`}>
      <body className="min-h-dvh">
        <CartProvider>
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <CartFab />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
