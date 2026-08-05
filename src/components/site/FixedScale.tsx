import { useEffect, useRef, useState, useLayoutEffect, type ReactNode, useMemo } from "react";

const DESIGN_WIDTH = 1440;

/**
 * Canva-like "do not resize" behaviour: the page keeps the exact desktop
 * composition at 1440px and is only scaled down proportionally on smaller
 * screens. No reflow, no breakpoints.
 */
export function FixedScale({ children }: { children: ReactNode }) {
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<string | number>("auto");

  // Contexto para controlar que apenas um vídeo toque por vez
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  const contextValue = useMemo(() => ({
    activeVideoSrc,
    setActiveVideoSrc
  }), [activeVideoSrc]);

  useLayoutEffect(() => {
    let raf = 0;
    const measure = () => {
      const width = window.innerWidth;
      const currentScale = width / DESIGN_WIDTH;
      setScale(currentScale);

      if (inner.current) {
        // Obter a altura real do conteúdo
        const rect = inner.current.getBoundingClientRect();
        // A altura escalada é a altura do rect, mas o Safari às vezes
        // reporta valores errados durante o resize.
        // Usamos o offsetHeight * currentScale como fallback confiável.
        const height = Math.max(rect.height, inner.current.offsetHeight * currentScale);
        setScaledHeight(Math.ceil(height));
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    // Executa imediatamente no mount
    measure();
    
    // Gatilhos globais
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);
    window.addEventListener("load", schedule);
    document.fonts?.ready.then(schedule).catch(() => {});

    // ResizeObserver para o conteúdo que muda dinamicamente
    const ro = new ResizeObserver(schedule);
    if (inner.current) ro.observe(inner.current);

    // Polling nos primeiros segundos para corrigir saltos de layout do Safari
    const interval = setInterval(measure, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      window.removeEventListener("load", schedule);
      ro.disconnect();
    };
  }, []);

  return (
    <VideoControlContext.Provider value={contextValue}>
      <div
        style={{
          width: "100%",
          minHeight: "100svh",
          height: scaledHeight,
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--color-bone)",
          touchAction: "auto",
          position: "relative",
        }}
      >
        <div
          ref={inner}
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            flexShrink: 0,
          }}
        >
          {children}
        </div>
      </div>
    </VideoControlContext.Provider>
  );
}

import { createContext, useContext } from "react";

const VideoControlContext = createContext<{
  activeVideoSrc: string | null;
  setActiveVideoSrc: (src: string | null) => void;
} | null>(null);

export const useVideoControl = () => {
  const context = useContext(VideoControlContext);
  if (!context) return { activeVideoSrc: null, setActiveVideoSrc: () => {} };
  return context;
};