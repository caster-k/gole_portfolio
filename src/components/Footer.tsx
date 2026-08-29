import { NavLink as RouterNavLink } from "react-router-dom";
import type { NavLink } from "../types";
import "./Footer.css";

const FOOTER_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <RouterNavLink to="/" className="footer__name">
            Shubham Joshi
          </RouterNavLink>

          <span className="footer__role">
            Developer &amp; AI/ML Enthusiast
          </span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className="footer__link"
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} Shubham Joshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;