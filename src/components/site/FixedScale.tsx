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
    const measure = () => {
      const currentScale = window.innerWidth / DESIGN_WIDTH;
      setScale(currentScale);

      if (inner.current) {
        setScaledHeight(inner.current.offsetHeight * currentScale);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver(measure);
    if (inner.current) ro.observe(inner.current);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        height: scaledHeight,
        overflow: "hidden",
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