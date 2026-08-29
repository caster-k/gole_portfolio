import profileImage from "../assets/profile/profile_shubham.jpeg";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I&apos;m</p>

          <h1 className="hero__name">Shubham Joshi</h1>

          <h2 className="hero__role">
            Video Editor & Motion Graphics Designer
          </h2>

          <p className="hero__description">
            Creative and passionate Video Editor with experience in editing
            engaging videos for social media, YouTube, and promotional content.
            Skilled in video editing, motion graphics, visual effects, color
            correction, and storytelling. Focused on delivering high quality,
            professional, and visually appealing content.
          </p>
        </div>

        <div className="hero__image-wrapper">
          <img
            src={profileImage}
            alt="Shubham Joshi"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;