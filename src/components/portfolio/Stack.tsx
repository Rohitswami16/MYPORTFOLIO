const stack = [
  { label: "Frontend", value: "React, Next.js, Vue 3, Svelte" },
  { label: "Styling", value: "Tailwind, Radix UI, CSS Modules" },
  { label: "Tools", value: "Vite, Turborepo, Playwright" },
  { label: "Backend", value: "Node.js, PostgreSQL, Redis" },
];

const Stack = () => {
  return (
    <section id="stack" className="bg-card border-y border-border-subtle py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        <h2 className="text-sm font-mono text-text-dim uppercase tracking-widest mb-12 md:mb-16">
          Technological Foundation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 md:gap-x-24 gap-y-10">
          {stack.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="text-foreground font-medium">{s.label}</span>
              <span className="text-text-dim text-sm">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
