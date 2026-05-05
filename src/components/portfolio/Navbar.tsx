const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex justify-between items-center">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-background rounded-sm" />
        </div>
        <span className="font-semibold text-lg tracking-tight uppercase font-mono">Dev_Studio</span>
      </a>
      <div className="hidden md:flex gap-8 text-sm font-medium text-text-dim items-center">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
        <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
        <a href="#contact" className="text-foreground px-4 py-1.5 border border-border-subtle rounded-full hover:bg-foreground hover:text-background transition-all duration-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
