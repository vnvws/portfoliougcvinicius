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
      const width = window.innerWidth;
      const currentScale = width / DESIGN_WIDTH;
      setScale(currentScale);

      if (inner.current) {
        // Altura real ocupada na página após o scale
        const rect = inner.current.getBoundingClientRect();
        setScaledHeight(Math.ceil(rect.height));
      }
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    
    // Otimização: debounce/throttle implícito via RAF no resize
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);
    window.addEventListener("load", schedule);
    document.fonts?.ready.then(schedule).catch(() => {});

    // Observer para mudanças de conteúdo interno
    const ro = new ResizeObserver(schedule);
    if (inner.current) ro.observe(inner.current);

    // Safari iOS às vezes falha no primeiro cálculo após o carregamento total
    const timer = setTimeout(schedule, 1000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
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
        minHeight: "100vh",
        height: scaledHeight,
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--color-bone)",
        touchAction: "pan-y",
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