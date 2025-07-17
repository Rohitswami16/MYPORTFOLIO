export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h1 className="header">Work Experience</h1>

      <div className="experience-list">
        <div className="experience-card">
          <h2>Software Development Intern</h2>
          <h3>XYZ Technologies | Jan 2024 – May 2024</h3>
          <ul>
            <li>Developed REST APIs using Python and Django for internal dashboards.</li>
            <li>Collaborated with frontend team using React.js and Tailwind CSS.</li>
            <li>Optimized backend queries improving performance by 20%.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h2>Web Developer Intern</h2>
          <h3>ABC Solutions | Jun 2023 – Dec 2023</h3>
          <ul>
            <li>Designed and implemented responsive web pages using HTML, CSS, and JavaScript.</li>
            <li>Integrated EmailJS for contact form functionality.</li>
            <li>Improved website SEO and accessibility score by 30%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
