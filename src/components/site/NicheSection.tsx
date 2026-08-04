import { Reveal, useInView } from "./Reveal";
import { VideoCardVertical } from "./VideoCardVertical";
import { VideoCardHorizontal } from "./VideoCardHorizontal";
import type { Niche } from "./niches";

export function NicheSection({ niche, index }: { niche: Niche; index: number }) {
  const { ref, inView } = useInView<HTMLElement>(0.08);
  const isHorizontal = niche.layout === "horizontal";
  const perRow = isHorizontal ? 3 : 4;

  return (
    <section
      ref={ref}
      id={niche.id}
      className="relative rounded-[22px] px-9 pt-8 pb-10"
      style={{
        border: "1px solid color-mix(in oklab, var(--color-neon) 42%, transparent)",
        boxShadow: inView
          ? "0 0 0 1px color-mix(in oklab, var(--color-neon) 22%, transparent), 0 0 42px -10px color-mix(in oklab, var(--color-neon) 45%, transparent)"
          : "0 0 20px -14px color-mix(in oklab, var(--color-neon) 30%, transparent)",
        transition: "box-shadow 800ms ease",
        backgroundColor: "color-mix(in oklab, var(--color-forest) 5%, transparent)",
      }}
    >
      <Reveal className="mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="text-[11px] tracking-[0.32em] text-forest uppercase">
            {String(index + 1).padStart(2, "0")} / Nicho
          </span>
          <h3 className="mt-2 font-display text-[58px] leading-[0.9] font-extrabold tracking-[-0.03em] text-ink uppercase">
            {niche.title}
          </h3>
        </div>
        <span
          className="mb-2 shrink-0 rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase"
          style={{
            border: "1px solid color-mix(in oklab, var(--color-neon) 60%, transparent)",
            color: "var(--color-forest)",
          }}
        >
          {niche.videos.length} vídeos · {isHorizontal ? "16:9" : "9:16"}
        </span>
      </Reveal>

      <div
        className="grid gap-x-6 gap-y-10"
        style={{ gridTemplateColumns: `repeat(${perRow}, minmax(0, 1fr))` }}
      >
        {niche.videos.map((video, i) => (
          <Reveal key={`${niche.id}-${i}`} delay={(i % perRow) * 90}>
            {isHorizontal ? (
              <VideoCardHorizontal {...video} />
            ) : (
              <VideoCardVertical {...video} />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}