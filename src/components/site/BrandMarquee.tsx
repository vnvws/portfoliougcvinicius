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

type Brand = { name: string; src: string };

// Exactly 10 logos as requested
const brands: Brand[] = [
  { name: "Canva", src: (canva as any).url },
  { name: "Tinder", src: (tinder as any).url },
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
      className="group relative mx-4 flex h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-300 hover:scale-[1.05]"
      style={{ 
        border: "1px solid color-mix(in oklab, var(--color-forest) 15%, transparent)",
      }}
    >
      <img 
        src={src} 
        alt={`Logo ${name}`} 
        loading="eager"
        className="h-[65%] w-[65%] object-contain pointer-events-none" 
        onError={(e) => {
          // Hide broken image icon if loading fails
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden py-10 lg:py-16 touch-pan-x" style={{ isolation: 'isolate' }} role="list" aria-label="Marcas que já confiaram">
      <div
        className="flex w-max items-center animate-marquee"
        style={{ 
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden"
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
