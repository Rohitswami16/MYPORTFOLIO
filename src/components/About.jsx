import profilePic from "../assets/RohitSwami.jpeg.jpg";
import mainpic from "../assets/main.jpg";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="header">About Me</h1>
        <div className="aboutme">
          <div className="about-container">
            <p className="about-description">
              Computer Science graduate with expertise in Java and SQL, eager to
              deliver innovative software solutions as a Software Developer.
              Passionate about leveraging technical skills in a collaborative
              environment and dedicated to ongoing learning and career
              advancement.
            </p>
            <p>
              <strong>Name:</strong> Rohit Swami
            </p>
            <p>
              <strong>Education:</strong> Bachelor of Engineering (B.E.) in
              Computer Science, 2024
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:rohitswami1612@gmail.com">
                rohitswami1612@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917090428655">+91 70904 28655</a>
            </p>
          </div>

          {/* <div className="home-image">
            <img src={profilePic} alt="Rohit Swami" />
          </div> */}
        </div>

        {/* <div className="about-domain">
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Fronted Developer</h3>
          </div>
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Java Developer</h3>
          </div>
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Full Stack Developer</h3>
          </div>
        </div> */}
      </section>
    </>
  );
}
