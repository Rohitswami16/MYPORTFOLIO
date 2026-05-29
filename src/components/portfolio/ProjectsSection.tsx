import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "JDBC CRUD System",
    description:
      "Desktop application to perform CRUD operations on employee data with a user-friendly GUI. Includes exception handling for duplicates and invalid IDs.",
    tags: ["Java", "JDBC", "MySQL"],
    accent: "cyan",
    github: "https://github.com/Rohitswami16",
  },
  {
    title: "Data Structure Visualizer",
    description:
      "Interactive Java/JFrame application visualizing insertion, deletion, sorting, and searching operations on core data structures in real time with robust exception handling.",
    tags: ["Java SE", "JFrame", "DSA"],
    accent: "orange",
    github: "https://github.com/Rohitswami16",
  },
  {
    title: "Skin Disease Detection",
    description:
      "Machine learning powered web application using BERT, LSTM, and Vision Transformer models for image-based skin disease detection with a Django backend serving predictions.",
    tags: ["Python", "Django", "Machine Learning"],
    accent: "purple",
    github: "https://github.com/Rohitswami16",
  },
  {
    title: "ERP Management System",
    description:
      "Worked on backend modules and enterprise workflows for a live ERP system using Spring Boot, Servlets, and Hibernate with scalable architecture and database integration.",
    tags: ["Spring Boot", "Hibernate", "MySQL", "ERP"],
    accent: "pink",
    github: "https://github.com/Rohitswami16",
  },
  {
    title: "Company Portfolio Website",
    description:
      "Designed and developed a production-ready responsive company website using React JS, Astro, and Tailwind CSS with modern UI, optimized performance, and clean architecture.",
    tags: ["React JS", "Astro", "Tailwind CSS"],
    accent: "cyan",
    github: "https://github.com/Rohitswami16",
  },
  {
    title: "Online Quiz System",
    description:
      "Full-stack quiz management platform where teachers can manage questions and students can attempt quizzes with category-based filtering and score tracking.",
    tags: ["JSP", "Servlets", "MySQL", "Java"],
    accent: "orange",
    github: "https://github.com/Rohitswami16",
  },
];

const accentStyles: Record<
  string,
  { glow: string; tag: string; border: string; icon: string }
> = {
  purple: {
    glow: "card-glow-purple",
    tag: "bg-[hsl(var(--color-purple)/0.15)] text-[hsl(var(--color-purple))]",
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    icon: "text-[hsl(var(--color-purple))]",
  },
  pink: {
    glow: "card-glow-pink",
    tag: "bg-[hsl(var(--color-pink)/0.15)] text-[hsl(var(--color-pink))]",
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    icon: "text-[hsl(var(--color-pink))]",
  },
  cyan: {
    glow: "card-glow-cyan",
    tag: "bg-[hsl(var(--color-cyan)/0.15)] text-[hsl(var(--color-cyan))]",
    border: "hover:border-[hsl(var(--color-cyan)/0.5)]",
    icon: "text-[hsl(var(--color-cyan))]",
  },
  orange: {
    glow: "",
    tag: "bg-[hsl(var(--color-orange)/0.15)] text-[hsl(var(--color-orange))]",
    border: "hover:border-[hsl(var(--color-orange)/0.5)]",
    icon: "text-[hsl(var(--color-orange))]",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[hsl(var(--color-pink))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />

        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-pink))] text-sm tracking-widest uppercase mb-2"
        >
          03 — Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Featured <span className="text-gradient-warm">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const styles = accentStyles[project.accent];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 ${styles.border} hover:${styles.glow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 text-muted-foreground">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      <Github
                        size={16}
                        className={`hover:${styles.icon} cursor-pointer transition-colors`}
                      />
                    </a>

                    <ExternalLink
                      size={16}
                      className={`hover:${styles.icon} cursor-pointer transition-colors`}
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-display px-2.5 py-1 rounded-full ${styles.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;