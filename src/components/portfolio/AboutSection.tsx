import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "Java (Core, Advanced)",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JUnit",
      // "Mockito",
      "Python Django",
    ],
    color: "purple",
  },
  {
    category: "Web Technologies",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "TypeScript (Basics)",
      "React.js",
    ],
    color: "pink",
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "MongoDB",
      "Redis (Basics)",
    ],
    color: "cyan",
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "GitHub Actions",
      // "AWS (EC2 / S3 Basics)",
      // "Railway",
      // "Render",
    ],
    color: "orange",
  },
  {
    category: "Tools & Platforms",
    items: [
      "VS Code",
      "Spring Tool Suite",
      "Git / GitHub / GitLab",
      "SourceTree",
      "Postman",
    ],
    color: "purple",
  },
  {
    category: "AI & ML Tools",
    items: [
      "GitHub Copilot",
      "LLM-assisted Development",
      // "OpenAI API",
      "Prompt Engineering",
      // "LangChain (Basics)",
    ],
    color: "pink",
  },
  {
    category: "Architecture & Patterns",
    items: [
      "REST API Design",
      "Microservices Architecture",
      "JWT Authentication & RBAC",
      // "CI/CD Pipeline Design",
      // "Docker Containerisation",
    ],
    color: "cyan",
  },
  {
    category: "Practices",
    items: [
      "Agile / Scrum",
      "Code Review",
      "Technical Documentation",
    ],
    color: "orange",
  },
];

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; dot: string }
> = {
  purple: {
    border: "hover:border-[hsl(var(--color-purple)/0.5)]",
    bg: "bg-[hsl(var(--color-purple)/0.08)]",
    text: "text-[hsl(var(--color-purple))]",
    dot: "bg-[hsl(var(--color-purple))]",
  },
  pink: {
    border: "hover:border-[hsl(var(--color-pink)/0.5)]",
    bg: "bg-[hsl(var(--color-pink)/0.08)]",
    text: "text-[hsl(var(--color-pink))]",
    dot: "bg-[hsl(var(--color-pink))]",
  },
  cyan: {
    border: "hover:border-[hsl(var(--color-cyan)/0.5)]",
    bg: "bg-[hsl(var(--color-cyan)/0.08)]",
    text: "text-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-cyan))]",
  },
  orange: {
    border: "hover:border-[hsl(var(--color-orange)/0.5)]",
    bg: "bg-[hsl(var(--color-orange)/0.08)]",
    text: "text-[hsl(var(--color-orange))]",
    dot: "bg-[hsl(var(--color-orange))]",
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[hsl(var(--color-cyan))] glow-orb" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="section-line mb-12" />

        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-[hsl(var(--color-cyan))] text-sm tracking-widest uppercase mb-2"
        >
          01 — About
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Turning ideas into{" "}
          <span className="text-gradient-cool">
            production-ready software products
          </span>
        </motion.h2>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-lg"
        >
          "I'm Rohit Swami — a Java Full Stack Developer currently working at OMS Business Digitalisation, where I've shipped a production company website and contributed to a live ERP system within my first 5 months. I work across the full stack: Spring Boot APIs on the backend, React.js on the frontend, and MongoDB / MySQL for data. I care about clean architecture, fast APIs, and writing code that actually ships. Based in Bengaluru, and actively looking for my next full-time role or freelance project."
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((group, i) => {
            const colors = colorMap[group.color];

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border border-border bg-card p-5 transition-all duration-300 ${colors.border}`}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full ${colors.bg} mb-4`}
                >
                  <h3
                    className={`font-display text-xs tracking-widest uppercase ${colors.text}`}
                  >
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-secondary-foreground flex items-center gap-2.5"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[hsl(var(--color-pink))] glow-orb" />
    </section>
  );
};

export default AboutSection;