import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle title="Featured Projects" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;