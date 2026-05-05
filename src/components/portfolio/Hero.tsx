const Hero = () => {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-24 md:pb-32">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-xs font-mono text-success tracking-widest uppercase">
          Available for new engineering roles
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] max-w-4xl mb-8">
        Building <span className="text-primary">high-performance</span> React interfaces for the modern web.
      </h1>
      <p className="text-lg md:text-xl text-text-dim max-w-2xl leading-relaxed">
        Senior Frontend Engineer specializing in scalable design systems, type-safe architecture, and pixel-perfect execution.
      </p>
    </header>
  );
};

export default Hero;
