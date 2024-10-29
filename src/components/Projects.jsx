import Project from "./Project";
import projects from "../data.jsx"

function Projects(props) {
 
  return (
    <>
      <h3 className="projects-title">PROJECTS</h3>
      <div className="projects" id="projects">
        {projects.map((project,i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}
export default Projects;
