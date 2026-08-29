interface CurveProps {
  fill?: string;
  position?: "top" | "bottom";
}

/**
 * A reusable curved section divider, absolutely positioned against
 * the top or bottom edge of its parent (parent needs position: relative
 * and overflow: hidden, which every .section already has).
 * Height is controlled purely by CSS so it scales down on mobile
 * without ever causing horizontal overflow.
 */
function Curve({ fill = "var(--bg-primary)", position = "top" }: CurveProps) {
  return (
    <div className={`curve curve--${position}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C240,96 480,0 720,32 C960,64 1080,16 1200,32 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default Curve;