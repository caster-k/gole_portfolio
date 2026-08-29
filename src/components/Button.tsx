import type { ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "secondary";
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Renders an internal, client-side routed link for in-app paths
 * (e.g. "/projects"), or a normal anchor for anything else
 * (external URLs, mailto:, tel:).
 */
function Button({ children, to = "/", variant = "primary", onClick }: ButtonProps) {
  const className = `btn btn--${variant}`;
  const isInternal = to.startsWith("/");

  if (isInternal) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export default Button;