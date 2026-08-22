import { useEffect, useRef } from "react";
import { journey } from "../data/content";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Timeline() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-year]", {
        opacity: 0,
        x: -24,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="bg-surface py-28 lg:py-36">
      <div ref={root} className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-muted">Journey</p>
        <h2 className="display text-4xl sm:text-6xl">A long view.</h2>
        <ol className="mt-16 space-y-0">
          {journey.map((item) => (
            <li
              key={item.year}
              data-year
              className="grid gap-4 border-t border-white/8 py-8 md:grid-cols-[140px_220px_1fr] md:items-baseline"
            >
              <p className="display text-3xl text-accent">{item.year}</p>
              <p className="text-lg">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
