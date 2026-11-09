import { Hero } from "@/components/home/Hero";
import { Vibes } from "@/components/home/Vibes";
import { Marquee } from "@/components/home/Marquee";
import { Favourites } from "@/components/home/Favourites";
import { Burgers } from "@/components/home/Burgers";
import { Reviews } from "@/components/home/Reviews";
import { JoharTown } from "@/components/home/JoharTown";
import { Visit } from "@/components/home/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Vibes />
      <Marquee />
      <Favourites />
      <Burgers />
      <Reviews />
      <JoharTown />
      <Visit />
    </>
  );
}
