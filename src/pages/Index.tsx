import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/HeroSection";
import About from "@/components/portfolio/AboutSection";
import Projects from "@/components/portfolio/ProjectsSection";
import Experience from "@/components/portfolio/ExperienceSection";
import Certificates from "@/components/portfolio/CertificatesSection";
import Contact from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
