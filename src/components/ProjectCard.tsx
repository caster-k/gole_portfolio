import { useState } from "react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        {project.videoUrl && (
          <button
            type="button"
            className="project-card__video-button"
            onClick={() => setIsOpen(true)}
            aria-label={`Play ${project.title}`}
          >
            <div className="project-card__video">
              <iframe
                src={`${project.videoUrl}?autoplay=1&mute=1`}
                title={project.title}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </button>
        )}

        <div className="project-card__index">
          {String(index).padStart(2, "0")}
        </div>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="project-card__tech-item">
              {tech}
            </li>
          ))}
        </ul>
      </article>

      {isOpen && project.videoUrl && (
        <div
          className="video-modal"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="video-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>

            <iframe
              src={`${project.videoUrl}?autoplay=1&mute=1`}
              title={project.title}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;