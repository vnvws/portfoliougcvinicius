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
    console.log("FixedScale mounted, DESIGN_WIDTH:", DESIGN_WIDTH);
    const measure = () => {
      const currentScale = window.innerWidth / DESIGN_WIDTH;
      console.log("FixedScale measuring, scale:", currentScale);
      setScale(currentScale);

      if (inner.current) {
        const height = inner.current.offsetHeight * currentScale;
        console.log("FixedScale new scaledHeight:", height);
        setScaledHeight(height);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver((entries) => {
      console.log("FixedScale ResizeObserver trigger");
      measure();
    });
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