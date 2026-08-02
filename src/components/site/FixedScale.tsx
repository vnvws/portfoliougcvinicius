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
    const measure = () => {
      const currentScale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      setScale(currentScale);

      if (inner.current) {
        // We set the container height to the scaled height of the content
        // to prevent the empty space at the bottom (overflow-hidden container)
        setScaledHeight(inner.current.offsetHeight * currentScale);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    // Also watch for content changes that might change the height
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
        height: scaledHeight,
        overflow: "hidden",
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