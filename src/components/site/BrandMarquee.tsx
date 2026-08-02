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

type Brand = { name: string; src?: string | undefined };

const brands: Brand[] = [
  { name: "Tem Promô", src: tempromo.url },
  { name: "Oipele Parfum", src: oipele.url },
  { name: "Canva", src: canva.url },
  { name: "Picnic", src: picnic.url },
  { name: "LucyDays", src: lucydays.url },
  { name: "ManClub", src: manclub.url },
  { name: "Radnaq", src: radnaq.url },
  { name: "Tinder", src: tinder.url },
  { name: "Omie", src: omie.url },
  { name: "PJ", src: pj.url },
  { name: "Up Gas" },
  { name: "Wine" },
  { name: "Open English" },
  { name: "Rainha" },
  { name: "Inner AI" },
  { name: "Iracema" },
  { name: "Joingo" },
  { name: "Informal" },
  { name: "House of Motors" },
  { name: "Alva" },
  { name: "Touti" },
];

function Logo({ name, src }: Brand) {
  return (
    <div
      data-cursor="link"
      className="group relative mx-6 flex h-20 w-20 shrink-0 cursor-none items-center justify-center overflow-hidden rounded-full bg-white text-center transition-all duration-300 hover:scale-[1.1]"
      style={{ 
        border: "1px solid color-mix(in oklab, var(--color-forest) 22%, transparent)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 0 1px var(--color-neon), 0 0 26px -4px color-mix(in oklab, var(--color-neon) 65%, transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      {src ? (
        <img src={src} alt={`Logo ${name}`} loading="lazy" className="h-full w-full object-cover" />
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
    <div className="group relative overflow-hidden py-10">
      <div
        className="flex w-max items-center"
        style={{ animation: "marquee-x 40s linear infinite" }}
        onMouseOver={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseOut={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...brands, ...brands].map((b, i) => (
          <Logo key={`${b.name}-${i}`} name={b.name} src={b.src} />
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
