const projects = [
  {
    title: "Aether Analytics Dashboard",
    description: "A high-throughput visualization engine for real-time crypto telemetry.",
    tags: ["REACT", "TYPESCRIPT", "FRAMER MOTION"],
    image: "https://picsum.photos/seed/aether/1200/800",
  },
  {
    title: "Lumen Design System",
    description: "An atomic component library powering multiple enterprise platforms.",
    tags: ["NEXT.JS", "TAILWIND", "ZUSTAND"],
    image: "https://picsum.photos/seed/lumen/1200/800",
  },
  {
    title: "Neural Monitoring Suite",
    description: "Operational dashboard for observability across distributed systems.",
    tags: ["REACT", "D3", "WEBSOCKETS"],
    image: "https://picsum.photos/seed/neural/1200/800",
  },
  {
    title: "Kinetic Motion Library",
    description: "A high-performance animation primitive set for production interfaces.",
    tags: ["TYPESCRIPT", "VITE", "MOTION"],
    image: "https://picsum.photos/seed/kinetic/1200/800",
  },
];

const Projects = () => {
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
          <div key={p.title} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-card transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow">
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
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-text-dim">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
