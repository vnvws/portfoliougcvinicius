import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  /** Prévia muda ao passar o mouse (sem clique). */
  previewOnHover?: boolean;
  iconSize?: number;
  label?: string;
};

/**
 * Player inline: reproduz DENTRO do frame, nunca em tela cheia.
 * - clique = play/pause
 * - hover  = prévia muda (opcional)
 * - botão de som para ativar áudio
 */
export function InlineVideo({
  src,
  poster,
  previewOnHover = true,
  iconSize = 20,
  label,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const onEnter = () => {
    if (!previewOnHover || playing) return;
    const v = ref.current;
    if (v) void v.play();
  };

  const onLeave = () => {
    if (playing) return;
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={toggle}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controls={false}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay de controle — desaparece durante a reprodução */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: playing ? 0 : 1 }}
      >
        <span
          className="flex items-center justify-center rounded-full backdrop-blur-sm"
          style={{
            height: iconSize * 2.8,
            width: iconSize * 2.8,
            border: "1px solid var(--color-neon)",
            color: "var(--color-neon)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          {playing ? (
            <Pause size={iconSize} strokeWidth={2.4} />
          ) : (
            <Play size={iconSize} strokeWidth={2.4} />
          )}
        </span>
      </div>

      <button
        type="button"
        aria-label={muted ? "Ativar som" : "Desativar som"}
        onClick={(e) => {
          e.stopPropagation();
          const v = ref.current;
          const next = !muted;
          setMuted(next);
          if (v) v.muted = next;
        }}
        className="absolute right-3 bottom-3 flex h-8 w-8 cursor-none items-center justify-center rounded-full backdrop-blur-sm"
        style={{
          border: "1px solid color-mix(in oklab, var(--color-neon) 70%, transparent)",
          color: "var(--color-neon)",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>

      {label ? (
        <span
          className="pointer-events-none absolute bottom-3 left-3 font-sans text-[10px] tracking-[0.18em] uppercase"
          style={{ color: "color-mix(in oklab, var(--color-neon) 80%, white)" }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}