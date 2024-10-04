import Project from "./Project";
import { FaReact , FaJs } from "react-icons/fa";


function Projects(props) {
  const projects = [
    {
      title: "Camera Shopping Cart",
      description: "A camera shopping cart webpage displays products with images, prices, and 'Add to Cart' buttons. The cart shows selected items, total price, and options to checkout or continue shopping.",
      image:
        "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg",
      link:"https://beautiful-arithmetic-815eef.netlify.app/",
      stack: [<FaReact className="stack-icon"/> , <FaJs className="stack-icon"/>],
    },
    {
      title: "CyroFlex | Landing Page",
      description: "Landing page for a logistic service of Argentina.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
      link:"https://logisticacyroflex.com",
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
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}
export default Projects;
