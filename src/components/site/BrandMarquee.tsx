const brands = [
  "Shopee",
  "Mercado Livre",
  "Amazon",
  "Nubank",
  "iFood",
  "Magalu",
  "AliExpress",
  "Rappi",
  "Samsung",
  "Insider",
  "Hering",
  "Centauro",
];

function Logo({ name }: { name: string }) {
  return (
    <span
      data-cursor="link"
      className="group mx-5 flex shrink-0 cursor-none items-center rounded-full px-6 py-3 font-display text-[26px] font-bold tracking-[-0.02em] whitespace-nowrap text-forest uppercase transition-all duration-300 hover:scale-[1.06] hover:text-ink"
      style={{ border: "1px solid color-mix(in oklab, var(--color-forest) 22%, transparent)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 0 1px var(--color-neon), 0 0 26px -4px color-mix(in oklab, var(--color-neon) 65%, transparent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {name}
    </span>
  );
}

export function BrandMarquee() {
  return (
    <div className="group relative overflow-hidden py-6">
      <div
        className="flex w-max"
        style={{ animation: "marquee-x 34s linear infinite" }}
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