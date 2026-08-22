import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "../data/content";
import { MagneticButton } from "../components/MagneticButton";
import { ThreeScene } from "../three/ThreeScene";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Hero() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="top" ref={root} className="relative flex min-h-[100svh] items-end overflow-hidden">
      <ThreeScene variant="hero" className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/35 to-bg" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-24">
        <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-muted" data-hero-line>
          HEMOS Studio
        </p>
        <h1 className="display max-w-5xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl" data-hero-line>
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg" data-hero-line>
          {hero.support}
        </p>
        <div className="mt-10 flex flex-wrap gap-4" data-hero-line>
          <MagneticButton href={hero.primaryCta.href}>{hero.primaryCta.label}</MagneticButton>
          <MagneticButton href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </MagneticButton>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted"
        aria-label="Scroll to about"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
