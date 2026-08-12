import React, { useEffect, useRef, useState, useLayoutEffect, type ReactNode, useMemo, createContext, useContext } from "react";

const DESIGN_WIDTH = 1440;

const VideoControlContext = createContext<{
  activeVideoSrc: string | null;
  setActiveVideoSrc: (src: string | null) => void;
} | null>(null);

export const useVideoControl = () => {
  const context = useContext(VideoControlContext);
  if (!context) return { activeVideoSrc: null, setActiveVideoSrc: () => {} };
  return context;
};

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
    let lastWidth = 0;
    let lastHeight = 0;

    const measure = () => {
      const width = Math.min(window.innerWidth, document.documentElement.clientWidth);
      const currentScale = width / DESIGN_WIDTH;
      
      if (width !== lastWidth) {
        setScale(currentScale);
        lastWidth = width;
      }

      if (inner.current) {
        const rect = inner.current.getBoundingClientRect();
        // Usamos offsetHeight como base para evitar recursão infinita
        const contentHeight = inner.current.offsetHeight;
        // Usamos Math.round para evitar sub-pixels que causam jitter no Safari
        // Adicionamos um pequeno buffer de 2px para garantir que não corte conteúdo por arredondamento
        const newHeight = Math.round(contentHeight * currentScale);
        
        // Só atualiza se a diferença for significativa (> 1px)
        if (Math.abs(newHeight - lastHeight) >= 1) {
          setScaledHeight(newHeight);
          lastHeight = newHeight;
        }
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);
    window.addEventListener("load", schedule);

    const ro = new ResizeObserver(() => {
      // Quando o conteúdo muda, agendamos uma medição
      schedule();
    });
    
    if (inner.current) ro.observe(inner.current);

    // Safari às vezes precisa de um tempo extra após o carregamento das fontes
    document.fonts?.ready.then(schedule).catch(() => {});

    return () => {
      cancelAnimationFrame(raf);
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
          height: scaledHeight,
          position: "relative",
          overflow: "clip",
          contain: "paint",
          backgroundColor: "var(--color-bone)",
          paddingBottom: "env(safe-area-inset-bottom)",

        }}
      >
        <div
          ref={inner}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: DESIGN_WIDTH,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
            WebkitTransform: `translateX(-50%) scale(${scale})`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "flat",
            WebkitTransformStyle: "flat",
            WebkitPerspective: "1000px",
            perspective: "1000px",
            isolation: "isolate",
          }}
        >
          {children}
        </div>
      </div>
    </VideoControlContext.Provider>
  );
}
