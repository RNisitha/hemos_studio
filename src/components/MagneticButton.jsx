import { useMagnetic } from "../hooks/useMagnetic";

export function MagneticButton({ href, children, variant = "primary", className = "" }) {
  const ref = useMagnetic(0.28);
  const base =
    "button inline-flex items-center justify-center gap-2 transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-white hover:text-bg"
      : "border border-white/15 text-white hover:border-accent hover:text-accent";

  return (
    <a ref={ref} href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
