import { Play, Pause, Maximize } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string | undefined;
  /** Se a prévia muda ao passar o mouse */
  previewOnHover?: boolean;
  iconSize?: number;
  label?: string;
};

/**
 * Player inline configurado para:
 * - Reprodução com som apenas ao clicar
 * - Sem reprodução automática (exceto prévia sem som opcional no hover)
 * - Botão de tela cheia no lugar do botão de som
 */
export function InlineVideo({
  src,
  poster,
  previewOnHover = false, // Desativado por padrão conforme pedido de remover reprodução automática
  iconSize = 20,
  label,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    
    if (v.paused) {
      v.muted = false; // Tocar com som ao clicar
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    
    if (v.requestFullscreen) {
      void v.requestFullscreen();
    } else if ((v as any).webkitRequestFullscreen) {
      void (v as any).webkitRequestFullscreen();
    }
  };

  const onEnter = () => {
    if (!previewOnHover || playing) return;
    const v = ref.current;
    if (v) {
      v.muted = true; // Prévia sempre sem som
      void v.play();
    }
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
        muted={true} // Inicia mutado para evitar bloqueios, mas toggle ativa o som
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
        aria-label="Tela cheia"
        onClick={handleFullscreen}
        className="absolute right-3 bottom-3 flex h-8 w-8 cursor-none items-center justify-center rounded-full backdrop-blur-sm"
        style={{
          border: "1px solid color-mix(in oklab, var(--color-neon) 70%, transparent)",
          color: "var(--color-neon)",
          background: "rgba(0,0,0,0.35)",
        }}
      >
        <Maximize size={14} />
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