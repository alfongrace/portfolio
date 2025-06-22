import React from 'react';
import '../../styles/App.css';

const skillsData = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js",
  "SQL", "Git", "GitHub", "Responsive Design", "React", "Node",
  "React-Admin", "React-Native", "C#"
];

function Skills() {
  return (
    <section className="skills-page-container">
      <h2>My Skills</h2>
      <div className="skill-list">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;