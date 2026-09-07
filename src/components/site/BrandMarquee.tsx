import canva from "@/assets/brands/canva.png.asset.json";
import tinder from "@/assets/brands/tinder.png.asset.json";
import wine from "@/assets/brands/wine.png.asset.json";
import openEnglish from "@/assets/brands/open-english.png.asset.json";
import omie from "@/assets/brands/omie.png.asset.json";
import picnic from "@/assets/brands/picnic.png.asset.json";
import rainha from "@/assets/brands/rainha.png.asset.json";
import alva from "@/assets/brands/alva.png.asset.json";
import touti from "@/assets/brands/touti.jpg.asset.json";
import innerAi from "@/assets/brands/inner-ai.png.asset.json";
import jackLinks from "@/assets/brands/Jack_links.png.asset.json";
import bic from "@/assets/brands/BIC.png.asset.json";
import samsClub from "@/assets/brands/Sams_Club.png.asset.json";

type Brand = { name: string; src: string };

const brands: Brand[] = [
  { name: "Canva", src: (canva as any).url },
  { name: "Tinder", src: (tinder as any).url },
  { name: "Sam's Club", src: (samsClub as any).url },
  { name: "BIC", src: (bic as any).url },
  { name: "Jack Link's", src: (jackLinks as any).url },
  { name: "Wine", src: (wine as any).url },
  { name: "Open English", src: (openEnglish as any).url },
  { name: "Omie", src: (omie as any).url },
  { name: "Picnic", src: (picnic as any).url },
  { name: "Rainha", src: (rainha as any).url },
  { name: "Alva", src: (alva as any).url },
  { name: "ToutiCosmetics", src: (touti as any).url },
  { name: "Inner AI", src: (innerAi as any).url },
];


function Logo({ name, src }: Brand) {
  return (
    <div
      role="listitem"
      aria-label={`Logo da marca ${name}`}
      className="group relative mx-3 flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:scale-[1.05]"
      style={{ 
        border: "1px solid color-mix(in oklab, var(--color-forest) 10%, transparent)",
      }}
    >
      <img 
        src={src} 
        alt={`Logo ${name}`} 
        loading="eager"
        className="h-full w-full object-cover object-center pointer-events-none" 
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden py-6 lg:py-10 touch-pan-x" style={{ isolation: 'isolate' }} role="list" aria-label="Marcas que já confiaram">
      <div
        className="flex w-max items-center animate-marquee"
        style={{ 
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Render 3 copies to ensure seamless loop on any screen width */}
        {[...brands, ...brands, ...brands].map((b, i) => (
          <Logo key={`${b.name}-${i}`} name={b.name} src={b.src} />
        ))}
      </div>
      
      {/* Side gradients for soft fade effect */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
        style={{ background: "linear-gradient(to right, var(--color-bone), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
        style={{ background: "linear-gradient(to left, var(--color-bone), transparent)" }}
      />
    </div>
  );
}
