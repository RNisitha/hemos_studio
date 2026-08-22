import { capabilities } from "../data/content";
import { CapabilityCard } from "../components/CapabilityCard";
import { SectionHeading } from "../components/SectionHeading";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Capabilities" title="What we build." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <CapabilityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
