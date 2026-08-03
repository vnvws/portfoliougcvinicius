import { useEffect, useRef, useState, type ReactNode } from "react";

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

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      // Use offsetWidth para largura real disponível sem scrollbar (mais estável no mobile)
      const width = window.innerWidth;
      const currentScale = width / DESIGN_WIDTH;
      setScale(currentScale);

      if (inner.current) {
        // No iOS Safari, scrollHeight ou offsetHeight podem ser imprecisos antes do layout final.
        // O bounding box do elemento transformado escala com ele.
        const height = inner.current.offsetHeight * currentScale;
        setScaledHeight(Math.ceil(height));
      }
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    
    // Multiplos gatilhos para garantir recálculo
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);
    window.addEventListener("load", schedule);
    document.fonts?.ready.then(schedule).catch(() => {});

    // ResizeObserver para o conteúdo interno (vídeos carregando, etc)
    const ro = new ResizeObserver(schedule);
    if (inner.current) ro.observe(inner.current);

    // Polling agressivo nos primeiros segundos para corrigir crashes/flashes do iOS
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
        touchAction: "pan-y",
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
  );
}