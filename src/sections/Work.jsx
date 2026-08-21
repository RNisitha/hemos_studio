import { useEffect, useRef } from "react";
import { projects } from "../data/content";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { getGsap } from "../animations/gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Work() {
  const root = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-project]", {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="work" ref={root} className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Selected work" title="Built for Impact." />
        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <div key={project.id} data-project>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
