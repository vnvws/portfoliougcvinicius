import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      data-cursor="link"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 md:right-6 md:bottom-6 md:cursor-none"
      style={{
        backgroundColor: "var(--color-ink)",
        color: "var(--color-neon)",
        border: "1px solid var(--color-neon)",
        boxShadow: "0 0 24px -6px color-mix(in oklab, var(--color-neon) 70%, transparent)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={20} strokeWidth={2.4} />
    </button>
  );
}
