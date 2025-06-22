import "../../styles/App.css";
import github from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";
import website from "../images/website-icon.png";

function About() {
  return (
    <section
      className="about-page-container"
      style={{
        padding: "40px 20px",
        backgroundColor: "#f8f8f8",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        maxWidth: "900px",
        margin: "40px auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          marginBottom: "30px",
        }}
      >
        About Me
      </h2>
      <div
        className="text"
        style={{
          fontSize: "14px",
          lineHeight: "1.7",
          wordSpacing: "normal",
          paddingLeft: "25px",
          paddingRight: "25px",
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          color: "#444",
          textAlign: "left",
        }}
      >
        <p
          style={{
            marginBottom: "1em",
            lineHeight: "inherit",
            fontSize: "20px",
            color: "inherit",
            padding: "0",
          }}
        >
          Hi there 👋
        </p>
                <p
          style={{
            marginBottom: "1.5em",
            lineHeight: "inherit",
            fontSize: "inherit",
            color: "inherit",
            padding: "0",
          }}
        >
          I'm Grace Alfon, a junior software developer. My
          journey into software development began in September 2024 at BVC where
          I took Software Development Apprenticeship-Style program. I started
          working at Okos in January 2025, as a Software Developer Intern.
        </p>
        <p
          style={{
            marginBottom: "1.5em",
            lineHeight: "inherit",
            fontSize: "inherit",
            color: "inherit",
            padding: "0",
          }}
        >
          I have worked with HTML, CSS, JavaScript, React, Node.js, and C#, as
          well as various tools and frameworks like Git, GitHub, React-Admin and
          React-Native.
        </p>
        <p
          style={{
            marginBottom: "1.5em",
            lineHeight: "inherit",
            fontSize: "inherit",
            color: "inherit",
            padding: "0",
          }}
        >
          Outside of programming, school and work, I enjoy hiking, swimming,
          reading, writing, playing the guitar, and baking. I also spend time
          volunteering to share about the Bible with others as one of Jehovah's
          Witnesses. I believe in a balanced life and bring the same dedication
          and creativity from my hobbies into my professional work.
        </p>
        <p
          style={{
            marginBottom: "0",
            lineHeight: "inherit",
            fontSize: "inherit",
            color: "inherit",
            padding: "0",
          }}
        >
          Feel free to connect with me on LinkedIn or explore my projects on
          GitHub!
        </p>
      </div>
      <div
        className="links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <a
          href="http://github.com/alfongrace"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "#555",
            transition: "color 0.3s ease",
          }}
        >
          <img
            src={github}
            alt="Github"
            className="icon"
            style={{
              width: "55px",
              height: "55px",
              marginBottom: "8px",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          />
          <span style={{ fontSize: "0.9em", fontWeight: "600" }}>Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/grace-alfon/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "#555",
            transition: "color 0.3s ease",
          }}
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon"
            style={{
              width: "55px",
              height: "55px",
              marginBottom: "8px",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          />
          <span style={{ fontSize: "0.9em", fontWeight: "600" }}>
            LinkedIn
          </span>
        </a>
        <a
          href="https://www.alfongrace.ca"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "#555",
            transition: "color 0.3s ease",
          }}
        >
          <img
            src={website}
            alt="Website"
            className="icon"
            style={{
              width: "55px",
              height: "55px",
              marginBottom: "8px",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          />
          <span style={{ fontSize: "0.9em", fontWeight: "600" }}>Website</span>
        </a>
      </div>
    </section>
  );
}

export default About;