import SectionTitle from "../components/SectionTitle";

const CONTACT_METHODS = [
  {
    id: "email",
    label: "Email",
    value: "shubhamjoshi2062@gmail.com",
    href: "mailto:shubhamjoshi2062@gmail.com",
  },
  {
    id: "phone",
    label: "Phone/WhatsApp",
    value: "+977 9869314546",
    href: "tel:+9779869314546",
  },
];

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle title="Let's Work Together" />

        <p className="contact__intro">
          Have a project, idea, or opportunity? Feel free to get in touch.
        </p>

        <div className="contact-grid">
          {CONTACT_METHODS.map((method) => (
            <a key={method.id} href={method.href} className="contact-card">
              <span className="contact-card__label">{method.label}</span>
              <span className="contact-card__value">{method.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;