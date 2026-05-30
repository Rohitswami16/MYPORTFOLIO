import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    href: "mailto:rohitswami1612@gmail.com",
    icon: Mail,
    label: "Email",
    color: "purple",
  },
  {
    href: "https://www.linkedin.com/in/rohit-swami16/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "cyan",
  },
  {
    href: "https://github.com/Rohitswami16",
    icon: Github,
    label: "GitHub",
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  purple:
    "hover:border-[hsl(var(--color-purple))] hover:text-[hsl(var(--color-purple))] hover:bg-[hsl(var(--color-purple)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-purple)/0.2)]",

  cyan:
    "hover:border-[hsl(var(--color-cyan))] hover:text-[hsl(var(--color-cyan))] hover:bg-[hsl(var(--color-cyan)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-cyan)/0.2)]",

  pink:
    "hover:border-[hsl(var(--color-pink))] hover:text-[hsl(var(--color-pink))] hover:bg-[hsl(var(--color-pink)/0.1)] hover:shadow-[0_0_20px_hsl(var(--color-pink)/0.2)]",
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--color-purple))] glow-orb opacity-20" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="section-line mb-12" />

        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-purple))] text-sm tracking-widest uppercase mb-2"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Get In{" "}
          <span className="text-gradient-vivid">
            Touch
          </span>
        </motion.h2>

        {/* Contact Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-6 text-lg"
        >
          Bengalore, Karnataka, India · (+91) 70904 28655 ·
          rohitswami1612@gmail.com
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-muted-foreground mb-10 text-base"
        >
          Have a project in mind or just want to say hello? I'm always
          open to new opportunities, collaborations, and software
          development roles.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground font-display text-sm transition-all duration-300 ${colorMap[link.color]}`}
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-xs text-muted-foreground font-display relative z-10">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} · Built with{" "}
          <Heart
            size={12}
            className="text-[hsl(var(--color-pink))]"
          />{" "}
          by Rohit Swami
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;