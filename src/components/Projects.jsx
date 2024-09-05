import Project from "./Project";

function Projects(props) {
  const projects = [
    {
      title: "Meme Generator",
      description: "Get a random meme image and insert the text",
      image:
        "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg",
    },
    {
        title: "Tic Tac Toe",
        description: "Clasical tic tac toe game",
        image:"https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg"
      }
  ];

  return (
    <>
      <h3 className="projects-title">PROJECTS</h3>
      <div className="projects" id="projects">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
}
export default Projects;
