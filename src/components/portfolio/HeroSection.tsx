import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--color-purple))] glow-orb animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[hsl(var(--color-pink))] glow-orb animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[hsl(var(--color-cyan))] glow-orb animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(265 85% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(265 85% 65%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple)/0.1)] mb-6"
        >
          <Sparkles
            size={14}
            className="text-[hsl(var(--color-purple))]"
          />

          <span className="font-display text-sm tracking-widest uppercase text-[hsl(var(--color-purple))]">
            Software Developer
          </span>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-[hsl(var(--color-purple)/0.3)] bg-[hsl(var(--color-purple)/0.1)] mb-6 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2">
            <Sparkles
              size={14}
              className="text-[hsl(var(--color-purple))]"
            />

            <span className="font-display text-sm tracking-widest uppercase text-[hsl(var(--color-purple))]">
              Software Developer
            </span>
          </div>

          <div className="h-5 w-px bg-[hsl(var(--color-purple)/0.3)]" />

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 font-display text-sm tracking-widest uppercase text-[hsl(var(--color-purple))] hover:bg-[hsl(var(--color-purple)/0.1)] transition-colors"
          >
            Open to Work
          </button>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient-vivid">
            Rohit Swami
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          I think in products, not languages. Give me a problem — I'll figure out the right stack, build it, and ship it        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[hsl(var(--color-purple))] to-[hsl(var(--color-pink))] text-white font-display text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-[hsl(var(--color-purple)/0.3)]"
          >
            View Projects
          </button>
          {/* Tertiary — Download Resume */}
          <a
            href="/Rohit_Swami_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[hsl(var(--color-purple)/0.4)] text-foreground font-display text-sm font-medium hover:border-[hsl(var(--color-purple))] hover:bg-[hsl(var(--color-purple)/0.1)] transition-all"
          >
            <Download size={15} />
            Download Resume
          </a>


          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[hsl(var(--color-purple)/0.4)] text-foreground font-display text-sm font-medium hover:border-[hsl(var(--color-purple))] hover:bg-[hsl(var(--color-purple)/0.1)] transition-all"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-[hsl(var(--color-purple))] transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section >
  );
};

export default HeroSection;