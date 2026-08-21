import { ArrowUpRight } from "lucide-react";

const visuals = {
  north: "from-[#1a1f33] via-[#0d0d0d] to-[#6B8AFF]/30",
  aether: "from-[#12131a] via-[#1a2240] to-[#6B8AFF]/20",
  lumen: "from-[#0e1014] via-[#243056] to-white/10",
  vector: "from-[#101014] via-[#1c2438] to-[#6B8AFF]/25",
  orbit: "from-[#0c0d12] via-[#162033] to-[#6B8AFF]/15",
  helix: "from-[#101218] via-[#1a1c28] to-white/8",
};

export function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      className="group grid overflow-hidden rounded-xl border border-white/10 bg-surface transition-colors duration-300 hover:border-accent/40 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className={`relative min-h-[240px] overflow-hidden bg-gradient-to-br ${visuals[project.visual] || visuals.north}`}>
        <div className="absolute inset-0 origin-center scale-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_45%)] transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.28em] text-white/50">
          {project.year}
        </div>
      </div>
      <div className="flex flex-col justify-between p-8 lg:p-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted">{project.category}</p>
          <h3 className="display mt-3 text-3xl transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
        </div>
        <span className="mt-10 inline-flex items-center gap-2 text-sm text-white/80">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </a>
  );
}
