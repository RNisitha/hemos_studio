import { useEffect, useRef } from "react";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function AnimatedCounter({ value, suffix = "", label }) {
  const numRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    if (reduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const { gsap, ScrollTrigger } = getGsap();
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.n)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [value, suffix, reduced]);

  return (
    <div>
      <p ref={numRef} className="display text-5xl sm:text-6xl">
        0{suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted">{label}</p>
    </div>
  );
}
