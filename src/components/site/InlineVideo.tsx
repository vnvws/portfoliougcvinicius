import { Play, Pause, Maximize, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
 * - Modal de visualização ampliada (Lightbox) no lugar de Fullscreen nativo
 */
export function InlineVideo({
  src,
  poster,
  previewOnHover = false,
  iconSize = 20,
  label,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    
    if (v.paused) {
      v.muted = false;
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ref.current && !ref.current.paused) {
      ref.current.pause();
      setPlaying(false);
    }
    setIsExpanded(true);
  };

  const closeLightbox = () => {
    setIsExpanded(false);
  };

  const onEnter = () => {
    if (!previewOnHover || playing || isExpanded) return;
    const v = ref.current;
    if (v) {
      v.muted = true;
      void v.play();
    }
  };

  const onLeave = () => {
    if (playing || isExpanded) return;
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <>
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
          muted={true}
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controls={false}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay de controle */}
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
          aria-label="Ampliar vídeo"
          onClick={openLightbox}
          className="absolute right-3 bottom-3 z-10 flex h-8 w-8 cursor-none items-center justify-center rounded-full backdrop-blur-sm"
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

      {isExpanded && <VideoLightbox src={src} onClose={closeLightbox} />}
    </>
  );
}

function VideoLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      void v.play();
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[10000] p-2 text-white hover:text-neon transition-colors cursor-none"
      >
        <X size={32} />
      </button>

      <div 
        className="relative max-h-full max-w-full overflow-hidden rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="max-h-[85vh] w-auto rounded-lg"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        
        {!playing && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-none"
            onClick={togglePlay}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon bg-black/40 text-neon">
              <Play size={40} fill="currentColor" />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}