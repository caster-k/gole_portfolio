import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import type { NavLink } from "../types";
import "./Navbar.css";

const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Projects", path: "/projects" },
  { label: "Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <RouterNavLink to="/" className="navbar__logo" onClick={closeMenu}>
          Shubham Joshi
        </RouterNavLink>

        <nav
          className="navbar__links navbar__links--desktop"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${
            isOpen ? "navbar__toggle--open" : ""
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`navbar__links navbar__links--mobile ${
          isOpen ? "navbar__links--mobile-open" : ""
        }`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <RouterNavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `navbar__link navbar__link--mobile ${
                isActive ? "navbar__link--active" : ""
              }`
            }
            onClick={closeMenu}
          >
            {link.label}
          </RouterNavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;