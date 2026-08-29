import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle title="My Experiences" />

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div
                className="timeline-item__marker"
                aria-hidden="true"
              />

              <div className="timeline-item__card">
                <span className="timeline-item__period">
                  {item.period}
                </span>

                <h3 className="timeline-item__role">
                  {item.role}
                </h3>

                <h4 className="timeline-item__company">
                  {item.company}
                </h4>

                <p className="timeline-item__description">
                  {item.description}
                </p>

                <ul className="timeline-item__list">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;