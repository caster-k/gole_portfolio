import SectionTitle from "../components/SectionTitle";
import type { Certification } from "../types";

const certifications: Certification[] = [
  {
    id: "Graphic Design Training",
    title: "Graphic Design Training",
    category: "Professional Development",
    year: "2025",
    description: "Completed professional training in graphic design, including visual design, typography, layout, and creative content development.",
  },
//   {
    // id: "machine-learning",
    // title: "Machine Learning",
    // category: "Professional Development",
    // year: "2026",
//   },
//   {
    // id: "data-analysis",
    // title: "Data Analysis",
    // category: "Professional Development",
    // year: "2026",
//   },
];

function CertificateIcon() {
  return (
    <svg
      className="certificate-card__icon"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionTitle title="Certifications" />

        <div className="certificate-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="certificate-card">
              <CertificateIcon />

              <h3 className="certificate-card__title">
                {cert.title}
              </h3>

              <p className="certificate-card__category">
                {cert.category}
              </p>

              {cert.description && (
                <p className="certificate-card__description">
                  {cert.description}
                </p>
              )}

              <span className="certificate-card__year">
                {cert.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;