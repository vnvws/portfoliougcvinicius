import { Play, Pause, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useVideoControl } from "./FixedScale";
import { getYouTubeEmbedUrl, getYouTubeId } from "./youtube";

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
 * Player inline otimizado com padrão Facade:
 * - O iframe do YouTube só é montado após o clique (Sob demanda)
 * - Mostra uma thumbnail estática de alta qualidade inicialmente
 * - Gerencia um único player ativo por vez via FixedScale context
 * - Desmonta players inativos ao sair da viewport
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
  
  // Estados para controle de montagem e interação
  const [inView, setInView] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const youtubeId = rawYoutubeId || getYouTubeId(youtubeUrl) || undefined;
  const isYouTube = Boolean(youtubeId);
  const videoKey = youtubeId || src || "";

  const isPlaying = activeVideoSrc === videoKey;
  
  // Se pararmos de estar "inView", garantimos que o player seja resetado
  // Isso ajuda a liberar memória no mobile
  useEffect(() => {
    if (!inView && isPlaying) {
      setActiveVideoSrc(null);
      setHasInteracted(false);
    }
  }, [inView, isPlaying, setActiveVideoSrc]);

  // IntersectionObserver: Monitora visibilidade
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((e) => e.isIntersecting);
        setInView(isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasInteracted(true);
    setActiveVideoSrc(videoKey);
  };

  // Thumbnail do YouTube (Prioriza 720p, depois HQ)
  const youtubeThumbnail = youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hq720.jpg` : poster;

  // Só montamos o player real se:
  // 1. Estiver na viewport
  // 2. O usuário clicou para dar play (Facade pattern)
  // 3. Este vídeo é o ativo no contexto global
  const shouldShowPlayer = inView && hasInteracted && isPlaying;

  return (
    <div
      ref={wrapRef}
      data-video-key={videoKey}
      className="absolute inset-0 bg-ink overflow-hidden"
      onClick={!shouldShowPlayer ? handlePlay : undefined}
    >
      {shouldShowPlayer ? (
        isYouTube ? (
          <div className="absolute inset-0 h-full w-full bg-black">
            <iframe
              src={getYouTubeEmbedUrl(youtubeId!, true, false)}
              title="YouTube video player"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              className="absolute inset-0 h-full w-full border-0"
              style={{ pointerEvents: 'auto' }}
              sandbox="allow-forms allow-scripts allow-same-origin allow-presentation allow-popups"
              // @ts-ignore
              playsinline="true"
              autoPlay="1"
            />
          </div>
        ) : (
          <video
            ref={ref}
            src={src}
            poster={poster}
            loop
            playsInline
            autoPlay
            disablePictureInPicture
            controlsList="nodownload"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        )
      ) : (
        /* Facade (Thumbnail + Play Button) */
        <div className="absolute inset-0 cursor-none">
          {(youtubeThumbnail && !hasError) ? (
            <img 
              src={youtubeThumbnail}
              alt={label || "Capa do vídeo"}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                if (isYouTube && target.src.includes('hq720')) {
                  target.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
                } else {
                  setHasError(true);
                }
              }}
            />
          ) : !isYouTube && (
            <div className="h-full w-full bg-ink flex items-center justify-center">
              <span className="text-neon/20 text-[8px] tracking-widest uppercase">Carregando...</span>
            </div>
          )}
          
          {/* Overlay de Play */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/0">
            <span
              className="flex items-center justify-center rounded-full backdrop-blur-sm transition-transform duration-300 active:scale-90"
              style={{
                height: iconSize * 2.8,
                width: iconSize * 2.8,
                border: "1px solid var(--color-neon)",
                color: "var(--color-neon)",
                background: "rgba(0,0,0,0.25)",
                boxShadow: "0 0 20px rgba(57, 255, 20, 0.2)"
              }}
            >
              <Play size={iconSize} strokeWidth={2.4} className="ml-1" />
            </span>
          </div>
        </div>
      )}

      {/* Removido o label verde conforme solicitado */}
    </div>
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
