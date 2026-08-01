import brandLogosAsset from "@/assets/brand_logos.png.asset.json";

// We'll simulate the individual logos by using the single image with different background positions or just repeating the style.
// However, the user wants the logos in circles as seen in the reference.
// The reference image shows a series of circular logos with a blue checkmark badge.

const brands = Array.from({ length: 15 });

function Logo({ index }: { index: number }) {
  return (
    <div
      className="group relative mx-6 flex h-20 w-20 shrink-0 cursor-none items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-[1.1]"
      style={{ 
        border: "1px solid color-mix(in oklab, var(--color-forest) 22%, transparent)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      <div className="overflow-hidden rounded-full w-full h-full p-2 flex items-center justify-center">
         {/* Using the provided strip as a source, offset slightly per index to show different logos */}
         <img 
            src={brandLogosAsset.url} 
            alt="Brand Logo" 
            className="h-full max-w-none object-contain"
            style={{ 
                transform: `translateX(-${index * 6.6}%)`, // Rough estimation to slide through the logo strip
                filter: "grayscale(20%) contrast(1.1)"
            }}
         />
      </div>
      
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
        {[...brands, ...brands].map((_, i) => (
          <Logo key={i} index={i % 15} />
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
