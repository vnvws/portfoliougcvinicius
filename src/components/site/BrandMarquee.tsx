import tempromo from "@/assets/brands/tempromo.jpg.asset.json";
import oipele from "@/assets/brands/oipele.jpg.asset.json";
import canva from "@/assets/brands/canva.png.asset.json";
import picnic from "@/assets/brands/picnic.png.asset.json";
import lucydays from "@/assets/brands/lucydays.jpg.asset.json";
import manclub from "@/assets/brands/manclub.png.asset.json";
import radnaq from "@/assets/brands/radnaq.png.asset.json";
import tinder from "@/assets/brands/tinder.jpg.asset.json";
import omie from "@/assets/brands/omie.png.asset.json";
import pj from "@/assets/brands/pj.jpg.asset.json";
import innerAi from "@/assets/inner-ai.jpg.asset.json";
import upGas from "@/assets/up-gas.png.asset.json";
import wine from "@/assets/wine.png.asset.json";
import openEnglish from "@/assets/open-english.png.asset.json";
import iracema from "@/assets/iracema.jpg.asset.json";
import promocoesDoDia from "@/assets/promocoes-do-dia.png.asset.json";
import lightning from "@/assets/lightning.png.asset.json";
import ofertinhas from "@/assets/ofertinhas.jpg.asset.json";
import rainha from "@/assets/brands/rainha.jpg.asset.json";
import joingo from "@/assets/brands/joingo.jpg.asset.json";
import houseOfMotors from "@/assets/brands/house-of-motors.jpg.asset.json";
import wa from "@/assets/brands/wa.png.asset.json";
import aPromoMen from "@/assets/brands/a-promo-men.jpg.asset.json";

import informal from "@/assets/brands/informal.jpg.asset.json";
import blueAbstract from "@/assets/brands/blue-abstract.jpg.asset.json";
import toutiAsset from "@/assets/brands/touti.jpg.asset.json";
import vorax from "@/assets/brands/vorax.png.asset.json";
import alvaAsset from "@/assets/brands/alva.png.asset.json";
import teccon from "@/assets/brands/teccon.png.asset.json";

type Brand = { name: string; src?: string | undefined };

const brands: Brand[] = [
  { name: "Canva", src: canva.url },
  { name: "Tinder", src: tinder.url },
  { name: "Wine", src: wine.url },
  { name: "Open English", src: openEnglish.url },
  { name: "Omie", src: omie.url },
  { name: "Picnic", src: picnic.url },
  { name: "Rainha", src: rainha.url },
  { name: "Alva", src: alvaAsset.url },
  { name: "Touti", src: toutiAsset.url },
  { name: "Inner AI", src: innerAi.url },
  { name: "ManClub", src: manclub.url },
  { name: "Radnaq", src: radnaq.url },
  { name: "House of Motors", src: houseOfMotors.url },
  { name: "Informal", src: informal.url },
  { name: "Vorax", src: vorax.url },
  { name: "Teccon", src: teccon.url },
  { name: "Tem Promô", src: tempromo.url },
  { name: "Ofertinhas Todo Dia", src: ofertinhas.url },
  { name: "Promoções do Dia", src: promocoesDoDia.url },
  { name: "Oipele Parfum", src: oipele.url },
  { name: "LucyDays", src: lucydays.url },
  { name: "PJ", src: pj.url },
  { name: "Up Gas", src: upGas.url },
  { name: "Iracema", src: iracema.url },
  { name: "WA", src: wa.url },
  { name: "Joingo", src: joingo.url },
  { name: "A Promo Men", src: aPromoMen.url },
  { name: "Lightning", src: lightning.url },
  { name: "Blue Abstract", src: blueAbstract.url },
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
        transform: "translateZ(0)",
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
