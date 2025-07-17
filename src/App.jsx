import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Exeprience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      {/* <Exeprience/>  */}
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
