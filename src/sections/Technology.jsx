import { useEffect, useRef } from "react";
import { technology } from "../data/content";
import { ThreeScene } from "../three/ThreeScene";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Technology() {
  const root = useRef(null);
  const scrollRef = useRef(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        scrollRef.current = self.progress;
      },
    });
    if (!reduced) {
      gsap.from("[data-tech-copy]", {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }
    return () => st.kill();
  }, [reduced]);

  return (
    <section id="technology" ref={root} className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl" data-tech-copy>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-muted">Ecosystem</p>
          <h2 className="display text-4xl sm:text-6xl">{technology.headline}</h2>
          <p className="mt-6 max-w-xl text-muted">{technology.body}</p>
        </div>
      </div>
      <div className="relative mx-auto mt-10 h-[58vh] min-h-[360px] max-w-7xl">
        <ThreeScene variant="ecosystem" className="absolute inset-0" scrollRef={scrollRef} />
      </div>
    </section>
  );
}
