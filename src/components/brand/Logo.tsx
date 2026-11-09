import Image from "next/image";

/** The iMBiSS wordmark, traced from Imbiss's Instagram profile picture (cream on transparent). */
export function Logo({ className = "", title = "Imbiss" }: { className?: string; title?: string }) {
  return <Image src="/img/brand/logo.png" alt={title} width={840} height={434} priority className={`h-auto ${className}`} />;
}

/** The round teal badge from their profile picture. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`grid aspect-square place-items-center rounded-full bg-teal p-[18%] shadow-[0_20px_40px_-18px_rgba(0,0,0,.5)] ${className}`}>
      <Logo className="w-full" title="" />
    </span>
  );
}
