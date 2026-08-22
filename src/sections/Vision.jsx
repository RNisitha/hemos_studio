import { useEffect, useRef } from "react";
import { vision } from "../data/content";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Vision() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const { gsap } = getGsap();
    const words = root.current.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(words, {
        opacity: 0.12,
        y: 18,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "center 40%",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  const words = vision.statement.split(" ");

  return (
    <section id="vision" ref={root} className="px-5 py-32 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-muted">Vision</p>
        <h2 className="display text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
          {words.map((word, index) => (
            <span key={`${word}-${index}`} data-word className="mr-[0.28em] inline-block">
              {word}
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">{vision.body}</p>
      </div>
    </section>
  );
}
