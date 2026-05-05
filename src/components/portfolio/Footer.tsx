const Footer = () => {
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-dim">
        <p>© {new Date().getFullYear()} Engineering Portfolio. Built with React & Tailwind CSS.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
