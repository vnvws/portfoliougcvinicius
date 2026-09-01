import { Play } from "lucide-react";
import { useState } from "react";
import { InlineVideo } from "./InlineVideo";
import type { VideoItem } from "./VideoCardVertical";

export function VideoCardHorizontal({
  title,
  description,
  src,
  youtubeId,
  youtubeUrl,
  poster,
  label,
}: VideoItem) {
  const [hover, setHover] = useState(false);
  const hasMedia = Boolean(src || youtubeId || youtubeUrl);

  return (
    <figure
      data-cursor="link"
      className="w-full cursor-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative overflow-hidden rounded-[14px] bg-ink"
        style={{
          aspectRatio: "16 / 9",
          border: "1px solid color-mix(in oklab, var(--color-neon) 55%, transparent)",
          boxShadow: hover
            ? "0 0 0 1px var(--color-neon), 0 0 34px -2px color-mix(in oklab, var(--color-neon) 60%, transparent)"
            : "none",
          transform: hover ? "scale(1.03)" : "scale(1)",
          transition: "transform 420ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {hasMedia ? (
          <InlineVideo
            src={src}
            youtubeId={youtubeId}
            youtubeUrl={youtubeUrl}
            poster={poster}
            iconSize={24}
            label={label || "16:9"}
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--color-forest) 50%, transparent), transparent 65%)",
              }}
            />
            <div className="grain absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  border: "1px solid var(--color-neon)",
                  color: "var(--color-neon)",
                  animation: hover ? "play-pulse 900ms ease-in-out infinite" : undefined,
                }}
              >
                <Play size={24} strokeWidth={2.4} />
              </span>
            </div>
            <span
              className="absolute bottom-3 left-3 font-sans text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "color-mix(in oklab, var(--color-neon) 80%, white)" }}
            >
              16:9
            </span>
          </>
        )}
      </div>
      <figcaption className="pt-4 sm:pt-3">
        <h4 className="truncate font-display text-[18px] leading-tight font-bold tracking-tight text-ink sm:text-[17px]">
          {title}
        </h4>
        <p className="mt-1.5 font-sans text-[15px] leading-[1.5] text-forest sm:mt-1 sm:text-[13px] sm:leading-snug">{description}</p>
      </figcaption>
    </figure>
  );
}
