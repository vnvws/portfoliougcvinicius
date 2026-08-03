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
  const [scaledHeight, setScaledHeight] = useState<string | number>("100%");

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const width = document.documentElement.clientWidth || window.innerWidth;
      const currentScale = width / DESIGN_WIDTH;
      setScale(currentScale);

      if (inner.current) {
        setScaledHeight(Math.ceil(inner.current.offsetHeight * currentScale));
      }
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);

    const ro = new ResizeObserver(schedule);
    if (inner.current) ro.observe(inner.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
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