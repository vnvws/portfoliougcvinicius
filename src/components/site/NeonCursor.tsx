import { useEffect, useRef, useState } from "react";

export function NeonCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("[data-cursor='link'], a, button")));
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-full md:block"
      style={{
        width: active ? 54 : 18,
        height: active ? 54 : 18,
        opacity: visible ? 1 : 0,
        border: "1px solid var(--color-neon)",
        backgroundColor: active
          ? "color-mix(in oklab, var(--color-neon) 14%, transparent)"
          : "color-mix(in oklab, var(--color-neon) 45%, transparent)",
        boxShadow: "0 0 18px -2px color-mix(in oklab, var(--color-neon) 70%, transparent)",
        transition: "width 220ms ease, height 220ms ease, background-color 220ms ease, opacity 200ms",
      }}
    />
  );
}