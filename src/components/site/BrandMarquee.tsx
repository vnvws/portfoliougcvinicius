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
import manclub from "@/assets/brands/manclub.png.asset.json";
import radnaq from "@/assets/brands/radnaq.png.asset.json";

type Brand = { name: string; src?: string | undefined };

const brands: Brand[] = [
  { name: "Canva", src: (canva as any).url },
  { name: "Tinder", src: (tinder as any).url },
  { name: "Wine", src: (wine as any).url },
  { name: "Open English", src: (openEnglish as any).url },
  { name: "Omie", src: (omie as any).url },
  { name: "Picnic", src: (picnic as any).url },
  { name: "Rainha", src: (rainha as any).url },
  { name: "Alva", src: (alva as any).url },
  { name: "Touti", src: (touti as any).url },
  { name: "Inner AI", src: (innerAi as any).url },
  { name: "ManClub", src: (manclub as any).url },
  { name: "Radnaq", src: (radnaq as any).url },
];

function Logo({ name, src }: Brand) {
  return (
    <div
      data-cursor="link"
      role="listitem"
      aria-label={`Logo da marca ${name}`}
      className="group relative mx-3 flex h-20 w-20 shrink-0 cursor-none items-center justify-center overflow-hidden rounded-full bg-white text-center transition-all duration-300 hover:scale-[1.1] focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-4"
      style={{ 
        border: "1px solid color-mix(in oklab, var(--color-forest) 22%, transparent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 0 1px var(--color-neon), 0 0 26px -4px color-mix(in oklab, var(--color-neon) 65%, transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {src ? (
        <img 
          src={src} 
          alt={`Logo ${name}`} 
          loading="lazy" 
          decoding="async"
          className="h-full w-full object-cover" 
        />
      ) : (
        <span className="p-3 font-display text-[11px] leading-[1.1] font-bold tracking-[-0.01em] text-ink uppercase">
          {name}
        </span>
      )}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden py-10 touch-pan-x" style={{ isolation: 'isolate' }} role="list" aria-label="Marcas que já confiaram">
      <div
        className="flex w-max items-center animate-marquee"
          style={{ 
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        onMouseEnter={(e) => {
          if (window.matchMedia("(pointer: fine)").matches) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {brands.map((b, i) => (
          <Logo key={`${b.name}-${i}`} name={b.name} src={b.src} />
        ))}
        {brands.map((b, i) => (
          <Logo key={`${b.name}-clone-${i}`} name={b.name} src={b.src} />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-40"
        style={{ background: "linear-gradient(to right, var(--color-bone), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-40"
        style={{ background: "linear-gradient(to left, var(--color-bone), transparent)" }}
      />
    </div>
  );
}
