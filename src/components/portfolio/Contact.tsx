const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-40">
      <div className="max-w-3xl">
        <h2 className="text-sm font-mono text-text-dim uppercase tracking-widest mb-8">
          Get in touch
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-8">
          Let&apos;s build something <span className="text-primary">exceptional</span>.
        </h3>
        <p className="text-lg text-text-dim mb-10 max-w-xl">
          Open to senior frontend roles, technical consulting, and select freelance engagements.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          hello@example.com
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
