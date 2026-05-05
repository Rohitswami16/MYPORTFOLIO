const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-8 pb-32 md:pb-40">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-sm font-mono text-text-dim uppercase tracking-widest">About</h2>
        <div className="h-px flex-grow mx-8 bg-border-subtle" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-8 space-y-6">
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug text-balance">
            I build resilient, type-safe interfaces with an obsessive focus on clarity, performance, and the small details users feel but never see.
          </p>
          <p className="text-text-dim leading-relaxed">
            Over the past seven years I&apos;ve led frontend architecture for analytics platforms, design systems, and developer tools — partnering with product, design, and infrastructure teams to ship software that holds up under real load.
          </p>
          <p className="text-text-dim leading-relaxed">
            I care about composable APIs, accessible primitives, and shipping. When I&apos;m not at a keyboard you&apos;ll find me cycling, reading systems papers, or rebuilding my keyboard for the third time this year.
          </p>
        </div>

        <div className="md:col-span-4 space-y-6 font-mono text-[11px]">
          <div className="pb-4 border-b border-border-subtle">
            <span className="block text-text-dim uppercase tracking-widest mb-2">Based in</span>
            <span className="block text-foreground">Stockholm, Sweden</span>
          </div>
          <div className="pb-4 border-b border-border-subtle">
            <span className="block text-text-dim uppercase tracking-widest mb-2">Focus</span>
            <span className="block text-foreground">React, TypeScript, Design Systems</span>
          </div>
          <div className="pb-4 border-b border-border-subtle">
            <span className="block text-text-dim uppercase tracking-widest mb-2">Currently</span>
            <span className="block text-foreground">Open to senior FE roles</span>
          </div>
          <div>
            <span className="block text-text-dim uppercase tracking-widest mb-2">Years building</span>
            <span className="block text-foreground">07+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
