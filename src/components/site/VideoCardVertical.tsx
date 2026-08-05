import { Play } from "lucide-react";
import { useState } from "react";
import { InlineVideo } from "./InlineVideo";

export type VideoItem = {
  title: string;
  description: string;
  /** URL do vídeo real (mp4). */
  src?: string;
  /** ID do vídeo no YouTube. */
  youtubeId?: string;
  /** URL completa do vídeo no YouTube (será convertida em ID). */
  youtubeUrl?: string;
  /** Imagem de capa opcional. */
  poster?: string;
  /** Label opcional para o player (ex: "9:16", "Clique"). */
  label?: string;
};

export function VideoCardVertical({
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
      className="group w-full cursor-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative overflow-hidden rounded-[14px] bg-ink"
        style={{
          aspectRatio: "9 / 16",
          border: "1px solid color-mix(in oklab, var(--color-neon) 55%, transparent)",
          boxShadow: hover
            ? "0 0 0 1px var(--color-neon), 0 0 30px -2px color-mix(in oklab, var(--color-neon) 60%, transparent)"
            : "none",
          transform: hover ? "scale(1.035)" : "scale(1)",
          transition: "transform 420ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {hasMedia ? (
          <InlineVideo
            src={src}
            youtubeId={youtubeId}
            youtubeUrl={youtubeUrl}
            poster={poster}
            iconSize={20}
            label={label || "9:16"}
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 30%, color-mix(in oklab, var(--color-forest) 55%, transparent), transparent 62%)",
              }}
            />
            <div className="grain absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  border: "1px solid var(--color-neon)",
                  color: "var(--color-neon)",
                  animation: hover ? "play-pulse 900ms ease-in-out infinite" : undefined,
                }}
              >
                <Play size={20} strokeWidth={2.4} />
              </span>
            </div>
            <span
              className="absolute bottom-3 left-3 font-sans text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "color-mix(in oklab, var(--color-neon) 80%, white)" }}
            >
              9:16
            </span>
          </>
        )}
      </div>
      <figcaption className="pt-3">
        <h4 className="truncate font-display text-[15px] leading-tight font-bold tracking-tight text-ink">
          {title}
        </h4>
        <p className="mt-1 font-sans text-[12px] leading-snug text-forest">{description}</p>
      </figcaption>
    </figure>
  );
}
