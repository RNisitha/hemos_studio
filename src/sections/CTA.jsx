import { cta } from "../data/content";
import { MagneticButton } from "../components/MagneticButton";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-32 lg:px-8 lg:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,138,255,0.14),transparent_64%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">{cta.headline}</h2>
        <p className="mx-auto mt-7 max-w-xl text-muted">{cta.support}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton href={cta.primary.href}>{cta.primary.label}</MagneticButton>
          <MagneticButton href={cta.secondary.href} variant="secondary">
            {cta.secondary.label}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
