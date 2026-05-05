const experience = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Parallel Systems",
    location: "Remote",
    summary:
      "Lead frontend for the realtime analytics product. Owning architecture, design system, and rendering performance across the platform.",
    stack: ["React", "TypeScript", "WebGL", "tRPC"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Lumen Inc.",
    location: "Stockholm",
    summary:
      "Built and maintained the Lumen design system used across four production apps. Drove accessibility audits and SSR migration.",
    stack: ["Next.js", "Tailwind", "Radix UI"],
  },
  {
    period: "2019 — 2021",
    role: "Product Engineer",
    company: "Neural OS",
    location: "Berlin",
    summary:
      "Shipped collaborative dashboards and the realtime presence layer. Helped scale the editor to thousands of concurrent users.",
    stack: ["React", "WebSockets", "CRDTs"],
  },
  {
    period: "2017 — 2019",
    role: "Frontend Developer",
    company: "Studio Foundry",
    location: "Stockholm",
    summary:
      "Built marketing sites and bespoke web experiences for early-stage startups and cultural institutions.",
    stack: ["JavaScript", "GSAP", "Three.js"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-card border-y border-border-subtle py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-sm font-mono text-text-dim uppercase tracking-widest">
            Work Experience
          </h2>
          <div className="h-px flex-grow mx-8 bg-border-subtle" />
        </div>

        <ol className="space-y-px">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-border-subtle hover:bg-background/40 transition-colors -mx-2 px-2 rounded-md"
            >
              <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-widest text-text-dim">
                {job.period}
              </div>
              <div className="md:col-span-6">
                <h3 className="text-xl font-semibold mb-1">
                  {job.role}{" "}
                  <span className="text-text-dim font-normal">/ {job.company}</span>
                </h3>
                <p className="text-text-dim leading-relaxed mb-4">{job.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-1 border border-border-subtle rounded text-text-dim"
                    >
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-widest text-text-dim">
                {job.location}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
