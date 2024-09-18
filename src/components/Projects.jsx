import Project from "./Project";
import { FaReact , FaJs } from "react-icons/fa";


function Projects(props) {
  const projects = [
    {
      title: "Meme Generator",
      description: "Get a random meme image and insert the text",
      image:
        "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
    {
      title: "Tic Tac Toe",
      description: "Clasical tic tac toe game",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
    {
      title: "Meme Generator",
      description: "Get a random meme image and insert the text",
      image:
        "https://static.vecteezy.com/system/resources/previews/018/990/688/non_2x/3d-black-rough-grunge-techno-abstract-background-overlap-layer-on-dark-space-with-red-lines-decoration-modern-graphic-design-element-cutout-style-concept-for-banner-flyer-card-or-brochure-cover-vector.jpg",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
    {
      title: "Tic Tac Toe",
      description: "Clasical tic tac toe game",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/010/481/741/small/light-and-dark-background-random-minimalist-abstract-illustration-for-logo-card-banner-web-and-printing-free-vector.jpg",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
  ];

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
          />
        ))}
      </div>
    </>
  );
}
export default Projects;
