import { Play, Pause, Maximize, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useVideoControl } from "./FixedScale";
import { getYouTubeEmbedUrl, getYouTubeId, getYouTubeThumbnail } from "./youtube";

type Props = {
  src?: string | undefined;
  youtubeId?: string | undefined;
  youtubeUrl?: string | undefined;
  poster?: string | undefined;
  /** Se a prévia muda ao passar o mouse */
  previewOnHover?: boolean | undefined;
  iconSize?: number | undefined;
  label?: string | undefined;
};

/**
 * Player inline configurado para:
 * - Reprodução com som apenas ao clicar
 * - Sem reprodução automática
 * - Modal de visualização ampliada (Lightbox) no lugar de Fullscreen nativo
 * - Suporte a vídeos nativos (src) e YouTube (youtubeId/youtubeUrl)
 */
export function InlineVideo({
  src,
  youtubeId: rawYoutubeId,
  youtubeUrl,
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

  const youtubeId = rawYoutubeId || getYouTubeId(youtubeUrl) || undefined;
  const isYouTube = Boolean(youtubeId);
  const videoKey = youtubeId || src || "";

  const playing = activeVideoSrc === videoKey;
  
  const setPlaying = useCallback((val: boolean) => {
    if (val) {
      setActiveVideoSrc(videoKey);
    } else if (activeVideoSrc === videoKey) {
      setActiveVideoSrc(null);
    }
  }, [videoKey, activeVideoSrc, setActiveVideoSrc]);

  // IntersectionObserver: só mantém o player real no DOM quando visível,
  // liberando memória de decodificadores no iOS.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((e) => e.isIntersecting);
        setInView(isIntersecting);
        // Se saiu da tela, garante que parou de tocar
        if (!isIntersecting && playing) {
          setPlaying(false);
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playing, setPlaying]);

  // Para vídeos nativos, sincroniza play/pause via ref.
  useEffect(() => {
    if (isYouTube) return;
    const v = ref.current;
    if (!v) return;
    
    if (playing) {
      v.muted = false;
      // Garante que tentamos tocar após o src estar pronto
      v.play().catch(err => {
        console.warn("Playback failed:", err);
        setPlaying(false);
      });
    } else {
      v.pause();
    }
  }, [playing, isYouTube, src, setPlaying]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isYouTube) {
      setPlaying(!playing);
      return;
    }
    
    // Se não está carregado no DOM ainda, apenas setamos playing como true
    // O useEffect cuidará de dar o play assim que o ref estiver disponível
    setPlaying(!playing);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Lightbox desativado conforme solicitado
  };

  const closeLightbox = () => {
    setIsExpanded(false);
  };

  const onEnter = () => {
    if (!previewOnHover || playing || isExpanded || isYouTube) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const v = ref.current;
    if (v) {
      v.muted = true;
      void v.play();
    }
  };

  const onLeave = () => {
    if (playing || isExpanded || isYouTube) return;
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const thumbnailUrl = isYouTube ? getYouTubeThumbnail(youtubeId!) : poster;
  const shouldMountPlayer = (playing) && inView;

  return (
    <>
      <div
        ref={wrapRef}
        data-video-key={videoKey}
        className="absolute inset-0"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={toggle}
      >
        {shouldMountPlayer ? (
          isYouTube ? (
            <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
              <iframe
                src={getYouTubeEmbedUrl(youtubeId!, true)}
                title="YouTube video player"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 border-0"
                style={{ pointerEvents: 'none' }}
                // @ts-ignore - attributes for mobile inline play
                playsinline="1"
                webkit-playsinline="1"
              />
            </div>
          ) : (
            <video
              key={src}
              ref={ref}
              src={src}
              poster={poster}
              muted={!playing}
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload"
              controls={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 bg-ink/5">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={label || "Capa do vídeo"}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={`${src}#t=0.5`}
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            )}
            <div className="grain absolute inset-0 opacity-20 pointer-events-none" />
          </div>
        )}

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


        {label ? (
          <span
            className="pointer-events-none absolute bottom-3 left-3 text-[10px] tracking-[0.18em] uppercase"
            style={{ color: "color-mix(in oklab, var(--color-neon) 80%, white)" }}
          >
            {label}
          </span>
        ) : null}
      </div>

      {isExpanded && <VideoLightbox src={src} youtubeId={youtubeId} onClose={closeLightbox} />}
    </>
  );
}

function VideoLightbox({
  src,
  youtubeId,
  onClose,
}: {
  src?: string | undefined;
  youtubeId?: string | undefined;
  onClose: () => void;
}) {
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
        aria-label="Fechar vídeo"
        className="absolute top-4 right-4 z-[10000] p-2 text-white transition-colors hover:text-neon md:top-6 md:right-6 md:cursor-none"
      >
        <X size={32} />
      </button>

      <div
        className="relative max-h-full w-full max-w-[520px] overflow-hidden rounded-lg shadow-2xl md:w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {youtubeId ? (
          <iframe
            src={getYouTubeEmbedUrl(youtubeId, true, false)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            {...{ webkitallowfullscreen: "true", mozallowfullscreen: "true" } as any}
            className="aspect-[9/16] max-h-[80vh] w-full rounded-lg md:w-auto border-0"
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            controlsList="nodownload"
            autoPlay
            className="max-h-[80vh] w-full rounded-lg md:w-auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        )}

        {!playing && !youtubeId && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/20 md:cursor-none"
            onClick={togglePlay}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon bg-black/40 text-neon">
              <Play size={40} fill="currentColor" />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
