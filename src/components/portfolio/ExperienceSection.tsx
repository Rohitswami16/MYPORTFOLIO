// ================= EXPERIENCE SECTION =================

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Trainee Software Developer",
    company: "OMS Business Digitalisation Pvt Ltd",
    period: "Sep 2025 — Jan 2026",
    description:
      "Worked on two live product-based projects — a company website built from scratch with React JS, React Router, Astro and Tailwind CSS, and an ERP system. Developed backend modules with Advanced Java, Servlets, Spring Boot and MongoDB. Supported live production by shipping features, debugging frontend/backend, resolving Git merge conflicts, and assisting with deployments.",
    color: "cyan",
  },
  {
    role: "Java Full Stack Intern",
    company: "Tequed Labs",
    period: "Aug 2023 — Sep 2023",
    description:
      "Designed and optimized user-friendly frontend components with HTML, CSS and React.js to boost engagement. Built backend systems with improved database queries, caching, and modular architecture for better scalability and performance.",
    color: "pink",
  },
];

const colorStyles: Record<
  string,
  { border: string; icon: string; badge: string }
> = {
  cyan: {
    border: "hover:border-[hsl(var(--color-cyan)/0.5)]",
    icon: "text-[hsl(var(--color-cyan))]",
    badge:
      "bg-[hsl(var(--color-cyan)/0.15)] text-[hsl(var(--color-cyan))]",
  },

  pink: {
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    icon: "text-[hsl(var(--color-pink))]",
    badge:
      "bg-[hsl(var(--color-pink)/0.15)] text-[hsl(var(--color-pink))]",
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--color-orange))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />

        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-pink))] text-sm tracking-widest uppercase mb-2"
        >
          02 — Experience
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Work <span className="text-gradient-warm">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const styles = colorStyles[exp.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300 ${styles.border}`}
              >
                <div className="flex gap-5">
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center border border-border">
                    <Briefcase
                      size={18}
                      className={styles.icon}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {exp.role}
                      </h3>

                      <span
                        className={`text-xs font-display px-2.5 py-1 rounded-full ${styles.badge}`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {exp.company}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;