import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "1st Place — Coding Competition",
    issuer: "Angadi Institute of Technology and Management",
    year: "2023",
    color: "cyan",
  },
  // {
  //   title: "K-Tech Idea Proposal — Funded",
  //   issuer: "Government of Karnataka Initiative",
  //   year: "2023",
  //   color: "pink",
  // },
  {
    title: "Java Full Stack Internship",
    issuer: "Tequed Labs",
    year: "2023",
    color: "purple",
  },
  {
    title: "B.E. Computer Science — CGPA 8.1",
    issuer: "Angadi Institute of Technology and Management",
    year: "2024",
    color: "orange",
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

  purple: {
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    icon: "text-[hsl(var(--color-purple))]",
    badge:
      "bg-[hsl(var(--color-purple)/0.15)] text-[hsl(var(--color-purple))]",
  },

  orange: {
    border: "hover:border-[hsl(var(--color-orange)/0.5)]",
    icon: "text-[hsl(var(--color-orange))]",
    badge:
      "bg-[hsl(var(--color-orange)/0.15)] text-[hsl(var(--color-orange))]",
  },
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[hsl(var(--color-purple))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />

        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-purple))] text-sm tracking-widest uppercase mb-2"
        >
          04 — Certificates
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Certifications &{" "}
          <span className="text-gradient-vivid">
            Achievements
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => {
            const styles = colorStyles[cert.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 ${styles.border}`}
              >
                <div className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-background/50 border border-border flex items-center justify-center">
                    <Award
                      size={18}
                      className={styles.icon}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {cert.title}
                      </h3>

                      <span
                        className={`text-xs font-display px-2.5 py-1 rounded-full ${styles.badge}`}
                      >
                        {cert.year}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.issuer}
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

export default CertificatesSection;