const brands = [
  "Picnic",
  "Up Gas",
  "ManClub",
  "Radnaq",
  "Tinder",
  "Wine",
  "Open English",
  "Canva",
  "Rainha",
  "Inner AI",
  "Iracema",
  "Joingo",
  "Informal",
  "House of Motors",
  "Alva",
  "Touti",
];

function Logo({ name }: { name: string }) {
  return (
    <div
      data-cursor="link"
      className="group relative mx-6 flex h-20 w-20 shrink-0 cursor-none items-center justify-center rounded-full bg-white p-3 text-center transition-all duration-300 hover:scale-[1.1]"
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
      <span className="font-display text-[11px] leading-[1.1] font-bold tracking-[-0.01em] text-ink uppercase">
        {name}
      </span>
      
      {/* Blue Verified Badge from the reference */}
      <div 
        className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white shadow-sm"
        style={{ backgroundColor: "#0095f6" }}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>
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
          <Logo key={`${b}-${i}`} name={b} />
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
