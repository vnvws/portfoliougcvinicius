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
    let rafId: number | null = null;
    let lastWidth = 0;
    let lastHeight = 0;
    let isPinching = false;

    const measure = () => {
      rafId = null;
      
      const width = Math.min(window.innerWidth, document.documentElement.clientWidth);
      const currentScale = width / DESIGN_WIDTH;
      
      if (Math.abs(width - lastWidth) > 0.5) {
        setScale(currentScale);
        lastWidth = width;
      }

      if (inner.current) {
        const contentHeight = inner.current.offsetHeight;
        const newHeight = Math.round(contentHeight * currentScale);
        
        if (Math.abs(newHeight - lastHeight) >= 1) {
          setScaledHeight(newHeight);
          lastHeight = newHeight;
        }
      }
    };

    const schedule = () => {
      if (isPinching) return;
      if (rafId === null) {
        rafId = requestAnimationFrame(measure);
      }
    };

    const handleVisualViewportChange = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      
      if (Math.abs(vv.scale - 1) > 0.01) {
        isPinching = true;
      } else {
        isPinching = false;
        schedule();
      }
    };

    measure();
    
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);
    window.visualViewport?.addEventListener("resize", handleVisualViewportChange);
    window.visualViewport?.addEventListener("scroll", handleVisualViewportChange);

    const ro = new ResizeObserver(() => {
      schedule();
    });
    
    if (inner.current) ro.observe(inner.current);

    document.fonts?.ready.then(schedule).catch(() => {});

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      window.visualViewport?.removeEventListener("resize", handleVisualViewportChange);
      window.visualViewport?.removeEventListener("scroll", handleVisualViewportChange);
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
