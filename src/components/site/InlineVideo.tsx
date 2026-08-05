import { Play, Pause, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useVideoControl } from "./FixedScale";

type Props = {
  src?: string | undefined;
  poster?: string | undefined;
  /** Se a prévia muda ao passar o mouse */
  previewOnHover?: boolean | undefined;
  iconSize?: number | undefined;
  label?: string | undefined;
};

/**
 * Player inline otimizado para performance mobile:
 * - Usa a API nativa de vídeo HTML5 (zero scripts externos)
 * - Reprodução com som apenas ao clicar
 * - Lazy loading via IntersectionObserver
 * - Modal customizado para visualização focada
 */
export function InlineVideo({
  src,
  poster,
  previewOnHover = false,
  iconSize = 20,
  label,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { activeVideoSrc, setActiveVideoSrc } = useVideoControl();
  const [isExpanded, setIsExpanded] = useState(false);
  const [inView, setInView] = useState(false);

  const videoKey = src || "";
  const playing = activeVideoSrc === videoKey;
  
  const setPlaying = useCallback((val: boolean) => {
    if (val) {
      setActiveVideoSrc(videoKey);
    } else if (activeVideoSrc === videoKey) {
      setActiveVideoSrc(null);
    }
  }, [videoKey, activeVideoSrc, setActiveVideoSrc]);

  // IntersectionObserver: lazy mount/play
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((e) => e.isIntersecting);
        setInView(isIntersecting);
        if (!isIntersecting && playing) {
          setPlaying(false);
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playing, setPlaying]);

  // Sincroniza play/pause
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    
    if (playing) {
      v.muted = false;
      v.play().catch(err => {
        console.warn("Playback failed:", err);
        setPlaying(false);
      });
    } else {
      v.pause();
    }
  }, [playing]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlaying(!playing);
  };

  const onEnter = () => {
    if (!previewOnHover || playing || isExpanded) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
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

  const shouldMountPlayer = inView || playing;

  return (
    <>
      <div
        ref={wrapRef}
        data-video-key={videoKey}
        className="absolute inset-0 bg-ink/5 overflow-hidden"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={toggle}
      >
        {shouldMountPlayer ? (
          <video
            key={src}
            ref={ref}
            src={src}
            poster={poster}
            muted={!playing}
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            controlsList="nodownload"
            controls={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          poster && (
            <img
              src={poster}
              alt={label || "Capa"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          )
        )}

        <div className="grain absolute inset-0 opacity-20 pointer-events-none" />

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

        {label && (
          <span
            className="pointer-events-none absolute bottom-3 left-3 text-[10px] tracking-[0.18em] uppercase"
            style={{ color: "color-mix(in oklab, var(--color-neon) 80%, white)" }}
          >
            {label}
          </span>
        )}
      </div>

      {isExpanded && <VideoLightbox src={src} onClose={() => setIsExpanded(false)} />}
    </>
  );
}

function VideoLightbox({
  src,
  onClose,
}: {
  src?: string | undefined;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[10000] p-2 text-white hover:text-neon"
      >
        <X size={32} />
      </button>

      <div
        className="relative max-h-full w-full max-w-[520px] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          autoPlay
          controlsList="nodownload"
          className="max-h-[85vh] w-full"
        />
      </div>
    </div>,
    document.body,
  );
}
