import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Technologies I Work With" />

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;