import { useEffect, useRef } from "react";
import { about } from "../data/content";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function About() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-about-copy]", {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
      gsap.from("[data-pillar]", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-pillar]", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="about" ref={root} className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <h2 className="display text-4xl leading-[1.05] sm:text-6xl" data-about-copy>
          {about.headline}
        </h2>
        <div className="space-y-5 text-muted" data-about-copy>
          {about.body.map((p) => (
            <p key={p} className="text-base leading-relaxed sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {about.pillars.map((pillar) => (
          <div key={pillar.index} data-pillar className="border-t border-white/10 pt-6">
            <p className="display text-4xl text-accent">{pillar.index}</p>
            <p className="mt-4 text-lg">{pillar.title}</p>
            <p className="mt-2 text-sm text-muted">{pillar.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
