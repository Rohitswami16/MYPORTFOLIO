import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skin Disease Detection Web App",
    description:
      "AI-powered diagnostic tool trained on 10,000+ images using a ViT + LSTM + BERT ensemble model, achieving 87% diagnostic accuracy. Patients upload images and receive AI-generated prescriptions via a Django backend — 20% faster than manual evaluation.",
    tags: ["Python", "Django", "ViT", "BERT", "LSTM"],
    accent: "purple",
    github: "https://github.com/rohitswami16/skin-disease-detection",
    live: "https://your-live-demo-link.com", // replace with actual or remove
  },
  {
    title: "Spring Boot Employee REST API",
    description:
      "Production-grade REST API with full CRUD, JWT authentication, and role-based access control. Containerised with Docker, deployed to Railway, and automated with GitHub Actions CI/CD — with Swagger docs and global exception handling.",
    tags: ["Java", "Spring Boot", "JWT", "Docker", "GitHub Actions"],
    accent: "pink",
    github: "https://github.com/rohitswami16/employee-api",
    live: null,
  },
  {
    title: "Data Structure Visualizer",
    description:
      "Rebuilt from a desktop JFrame app into a browser-accessible React web app. Visualises insertion, deletion, sorting, and searching on arrays, stacks, queues, and linked lists — with Big-O complexity labels for each operation.",
    tags: ["React.js", "JavaScript", "DSA"],
    accent: "orange",
    github: "https://github.com/rohitswami16/data-structure-visualizer", // update with real link
    live: null,
  },
  {
    title: "ERP Management System",
    description:
      "Contributed 4+ backend modules to a live ERP product at OMS Business Digitalisation. Built Spring Boot services that reduced manual processing time by ~30% and implemented MongoDB APIs improving data retrieval speed by ~25%.",
    tags: ["Spring Boot", "Hibernate", "MongoDB", "MySQL"],
    accent: "cyan",
    github: null, // private/company project
    live: null,
  },
  {
    title: "Company Portfolio Website",
    description:
      "Sole frontend developer — designed and delivered a production-ready company website in under 8 weeks using React.js, Astro, and Tailwind CSS. Went from zero to live deployment with optimised performance and modern UI.",
    tags: ["React.js", "Astro", "Tailwind CSS"],
    accent: "orange",
    github: null, // add if public
    live: null,
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