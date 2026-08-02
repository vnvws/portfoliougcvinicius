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

  useEffect(() => {
    const measure = () => {
      const next = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      setScale(next);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--color-bone)",
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