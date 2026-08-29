import type { CSSProperties } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center" | "right";
}

function SectionTitle({
  eyebrow,
  title,
  align = "left",
}: SectionTitleProps) {
  const style: CSSProperties = {
    textAlign: align,
  };

  return (
    <div className="section-title" style={style}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}

      <h2 className="section-title__title">{title}</h2>
    </div>
  );
}

export default SectionTitle;