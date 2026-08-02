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
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = Math.min(1, window.innerWidth / DESIGN_WIDTH);
        setScale(next);
        if (inner.current) setHeight(inner.current.offsetHeight * next);
      });
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (inner.current) ro.observe(inner.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden", display: "flex", justifyContent: "center" }}>
      <div
        ref={inner}
        style={{
          width: DESIGN_WIDTH,
          minHeight: "100vh",
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