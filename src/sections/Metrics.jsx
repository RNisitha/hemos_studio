import { metrics } from "../data/content";
import { AnimatedCounter } from "../components/AnimatedCounter";

export function Metrics() {
  return (
    <section className="border-y border-white/8 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {metrics.map((item) => (
          <AnimatedCounter key={item.id} value={item.value} suffix={item.suffix} label={item.label} />
        ))}
      </div>
    </section>
  );
}
