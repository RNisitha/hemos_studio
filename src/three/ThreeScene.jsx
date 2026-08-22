import { Suspense, lazy, useEffect, useState } from "react";
import { useDeviceTier } from "../hooks/useDeviceTier";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const HeroCanvas = lazy(() => import("./HeroCanvas"));
const EcosystemCanvas = lazy(() => import("./EcosystemCanvas"));

function FallbackOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20 bg-[radial-gradient(circle_at_30%_30%,rgba(79,140,255,0.28),rgba(255,79,216,0.08),transparent_62%)]" />
    </div>
  );
}

export function ThreeScene({ variant = "hero", className = "", scrollRef }) {
  const tier = useDeviceTier();
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setReady(true))
      : window.setTimeout(() => setReady(true), 120);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, []);

  if (reduced || !ready || tier === "low") {
    return (
      <div className={className}>
        <FallbackOrb />
      </div>
    );
  }

  const Canvas = variant === "ecosystem" ? EcosystemCanvas : HeroCanvas;

  return (
    <div className={className}>
      <Suspense fallback={<FallbackOrb />}>
        <Canvas tier={tier} scrollRef={scrollRef} />
      </Suspense>
    </div>
  );
}
