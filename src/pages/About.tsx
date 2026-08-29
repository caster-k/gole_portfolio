import SectionTitle from "../components/SectionTitle";

const INFO_CARDS = [
  { label: "Focus", value: "Software Development" },
  { label: "Interests", value: "AI / ML / Data" },
  { label: "Location", value: "Nepal" },
];

function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Who I Am" />

        <div className="about__layout">
          <div className="about__text">
            <p>
              I am Shubham Joshi, a passionate developer interested in
              software development, artificial intelligence, machine
              learning, and data-driven applications.
            </p>
            <p>
              I enjoy solving real-world problems using technology and
              building applications that are useful, simple, and easy to
              use.
            </p>
            <p>
              My interests include web development, Python, machine
              learning, computer vision, IoT, and intelligent systems.
            </p>
          </div>

          <div className="about__cards">
            {INFO_CARDS.map((card) => (
              <div key={card.label} className="about-card">
                <span className="about-card__label">{card.label}</span>
                <span className="about-card__value">{card.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;