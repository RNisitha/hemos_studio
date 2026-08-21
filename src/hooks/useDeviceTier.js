import { useEffect, useState } from "react";

export function getDeviceTier() {
  if (typeof window === "undefined") return "medium";
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 8;
  if (reduced || mobile || cores <= 4 || mem <= 4) return "low";
  if (cores <= 8) return "medium";
  return "high";
}

export function useDeviceTier() {
  const [tier, setTier] = useState("medium");

  useEffect(() => {
    const update = () => setTier(getDeviceTier());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return tier;
}
