import SectionTitle from "../components/SectionTitle";

function Education() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Education" />

        <div className="education-card">
          <div className="education-card__header">
            <h3 className="education-card__degree">Bachelor&apos;s Degree</h3>
            <span className="education-card__status">Present</span>
          </div>
          <p className="education-card__field">
            Computing / Information Technology
          </p>
          <p className="education-card__description">
            Currently studying computing and developing practical skills in
            software development, databases, data analysis, artificial
            intelligence, and information systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;