// ================= EXPERIENCE SECTION =================

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [

  {
    role: "Trainee Software Developer",
    company: "OMS Business Digitalisation Pvt Ltd",
    period: "Sep 2025 — Jan 2026",
    points: [
      "Single-handedly built and launched a modern dynamic website from scratch in React.js, Astro & Tailwind CSS for a live production environment.",
      "Integrated WhatsApp direct contact & automated resume delivery via SendGrid, turning the site into an active lead generation tool.",
      "Implemented end-to-end SEO (meta tags, sitemap.xml, robots.txt, Google Analytics, Search Console) - achieved top search ranking for targeted keywords.",
      "Developed 4+ Spring Boot backend modules for a live ERP product, reducing manual processing time by ~30% for key workflows.",
      "Built RESTful APIs integrated with MongoDB, improving data retrieval speed by ~25% through query optimisation.",
      "Resolved 10+ Git merge conflicts and supported deployment pipelines, maintaining >99% uptime across both products.",
    ],
    color: "cyan",
  },
  {
    role: "Java Full Stack Developer",
    company: "KodNest Technologies Pvt Ltd",
    period: "Jun 2024 — Mar 2025",
    type: "Training",
    points: [
      "Completed an intensive 9-month full stack program covering Java, Spring Boot, Python, Django, React.js, HTML/CSS, MySQL, MongoDB, and Manual Testing.",
      "Built hands-on projects applying both frontend and backend skills in a structured, industry-aligned curriculum.",
    ],
    color: "purple",
  },
  {
    role: "Java Full Stack Intern",
    company: "Tequed Labs",
    period: "Aug 2023 — Sep 2023",
    points: [
      "Built responsive UI components with React.js and HTML/CSS, improving average page load time by 15%.",
      "Optimised backend database queries and introduced a caching layer, reducing API response time by 20%.",
      "Applied modular architecture patterns across 3 major features to improve code reusability.",
    ],
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
    badge: "bg-[hsl(var(--color-cyan)/0.15)] text-[hsl(var(--color-cyan))]",
  },
  purple: {
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    icon: "text-[hsl(var(--color-purple))]",
    badge: "bg-[hsl(var(--color-purple)/0.15)] text-[hsl(var(--color-purple))]",
  },
  pink: {
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    icon: "text-[hsl(var(--color-pink))]",
    badge: "bg-[hsl(var(--color-pink)/0.15)] text-[hsl(var(--color-pink))]",
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
                      <span className={`text-xs font-display px-2.5 py-1 rounded-full ${styles.badge}`}>
                        {exp.period}
                      </span>
                      {exp.type && (
                        <span className="text-xs font-display px-2.5 py-1 rounded-full bg-[hsl(var(--color-orange)/0.15)] text-[hsl(var(--color-orange))]">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {exp.company}
                    </p>

                    <ul className="space-y-2 mt-1">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${styles.icon}`}
                            style={{ background: "currentColor" }} />
                          {point}
                        </li>
                      ))}
                    </ul>
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