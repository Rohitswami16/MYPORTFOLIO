import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  role: string;
  client: string;
  overview: string;
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Aether Analytics Dashboard",
    description: "A high-throughput visualization engine for real-time crypto telemetry.",
    tags: ["REACT", "TYPESCRIPT", "FRAMER MOTION"],
    image: "https://picsum.photos/seed/aether/1200/800",
    year: "2024",
    role: "Lead Frontend Engineer",
    client: "Aether Labs",
    overview:
      "Designed and shipped a real-time analytics platform handling 50k+ events per second. Focused on rendering performance, virtualization, and ergonomic data exploration.",
    highlights: [
      "Reduced first-paint latency by 62% via streaming hydration",
      "Built a custom WebGL chart engine for 60fps under heavy load",
      "Shipped a typed query DSL adopted by 12 internal teams",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Lumen Design System",
    description: "An atomic component library powering multiple enterprise platforms.",
    tags: ["NEXT.JS", "TAILWIND", "ZUSTAND"],
    image: "https://picsum.photos/seed/lumen/1200/800",
    year: "2024",
    role: "Design Systems Engineer",
    client: "Lumen Inc.",
    overview:
      "Built a polymorphic, fully typed component library with first-class theming, accessibility, and SSR support. Powers four production apps.",
    highlights: [
      "150+ accessible primitives with full keyboard parity",
      "Token-driven theming via CSS variables and Tailwind plugins",
      "Documented in MDX with live, editable examples",
    ],
    liveUrl: "#",
  },
  {
    title: "Neural Monitoring Suite",
    description: "Operational dashboard for observability across distributed systems.",
    tags: ["REACT", "D3", "WEBSOCKETS"],
    image: "https://picsum.photos/seed/neural/1200/800",
    year: "2023",
    role: "Frontend Architect",
    client: "Neural OS",
    overview:
      "End-to-end observability surface unifying metrics, logs, and traces. Built collaborative dashboards with realtime presence.",
    highlights: [
      "Sub-second cross-region log search UX",
      "CRDT-backed collaborative dashboard editor",
      "Composable widget API used by 30+ partner teams",
    ],
    repoUrl: "#",
  },
  {
    title: "Kinetic Motion Library",
    description: "A high-performance animation primitive set for production interfaces.",
    tags: ["TYPESCRIPT", "VITE", "MOTION"],
    image: "https://picsum.photos/seed/kinetic/1200/800",
    year: "2022",
    role: "Open Source Author",
    client: "Independent",
    overview:
      "An ergonomic, tree-shakable animation library focused on choreography and interruptibility. 8k+ GitHub stars.",
    highlights: [
      "Zero-dependency core under 4kb gzipped",
      "Spring physics engine with continuous interruption",
      "First-class React, Vue, and vanilla bindings",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-8 pb-32 md:pb-40">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-sm font-mono text-text-dim uppercase tracking-widest">
          Selected Work (2022—2024)
        </h2>
        <div className="h-px flex-grow mx-8 bg-border-subtle" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((p) => (
          <button
            key={p.title}
            onClick={() => setActive(p)}
            className="group cursor-pointer text-left"
            aria-label={`View details for ${p.title}`}
          >
            <article className="relative overflow-hidden rounded-xl border border-border-subtle bg-card transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow">
              <div className="p-1">
                <div className="bg-secondary rounded-lg overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    loading="lazy"
                    alt={p.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 border border-border-subtle rounded text-text-dim">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-text-dim mb-4">{p.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                  View case study →
                </span>
              </div>
            </article>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl bg-card border-border-subtle p-0 overflow-hidden">
          {active && (
            <>
              <div className="aspect-[16/9] bg-secondary overflow-hidden">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <DialogHeader className="text-left mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {active.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 border border-border-subtle rounded text-text-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                  <DialogTitle className="text-3xl font-semibold tracking-tight">{active.title}</DialogTitle>
                  <DialogDescription className="text-text-dim text-base pt-2">
                    {active.description}
                  </DialogDescription>
                </DialogHeader>

                <dl className="grid grid-cols-3 gap-4 mb-8 font-mono text-[11px] uppercase tracking-widest">
                  <div>
                    <dt className="text-text-dim mb-1">Year</dt>
                    <dd className="text-foreground">{active.year}</dd>
                  </div>
                  <div>
                    <dt className="text-text-dim mb-1">Role</dt>
                    <dd className="text-foreground normal-case">{active.role}</dd>
                  </div>
                  <div>
                    <dt className="text-text-dim mb-1">Client</dt>
                    <dd className="text-foreground normal-case">{active.client}</dd>
                  </div>
                </dl>

                <div className="mb-8">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-text-dim mb-3">Overview</h4>
                  <p className="text-foreground/90 leading-relaxed">{active.overview}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-mono uppercase tracking-widest text-text-dim mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-foreground/90">
                        <span className="text-primary mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(active.liveUrl || active.repoUrl) && (
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-border-subtle">
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity mt-6"
                      >
                        Visit live site →
                      </a>
                    )}
                    {active.repoUrl && (
                      <a
                        href={active.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-border-subtle px-5 py-2.5 rounded-full text-sm font-medium hover:border-primary/50 transition-colors mt-6"
                      >
                        View source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
