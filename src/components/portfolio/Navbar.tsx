import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "home",
  "about",
  "experience",
  "projects",
  "certificates",
  "contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50 bg-background/70"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-xl md:text-2xl font-bold text-gradient-vivid font-display tracking-wide"
        >
          Rohit.dev
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="relative text-sm font-display tracking-wide text-muted-foreground hover:text-[hsl(var(--color-purple))] transition-colors duration-300 group capitalize"
            >
              {item}

              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-gradient-to-r from-[hsl(var(--color-purple))] to-[hsl(var(--color-pink))] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item)}
                  className="text-left text-sm font-display tracking-wide text-muted-foreground hover:text-[hsl(var(--color-purple))] transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;