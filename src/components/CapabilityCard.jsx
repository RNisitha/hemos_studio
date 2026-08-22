import { useRef } from "react";
import * as Icons from "lucide-react";

export function CapabilityCard({ item }) {
  const card = useRef(null);
  const Icon = Icons[item.icon] || Icons.Sparkles;

  const onMove = (event) => {
    const el = card.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    if (card.current) card.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  };

  return (
    <article
      ref={card}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="surface-card group min-h-56 p-7 transition-[transform,border-color,background-color,box-shadow] duration-300 will-change-transform hover:border-accent/40 hover:bg-card hover:shadow-[0_0_32px_rgba(79,140,255,0.1)]"
    >
      <Icon
        className="mb-8 h-6 w-6 text-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
        strokeWidth={1.4}
        aria-hidden="true"
      />
      <h3 className="display text-2xl">{item.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{item.description}</p>
    </article>
  );
}
