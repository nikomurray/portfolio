import enablegif from "../assets/enable.svg"

function Project(props) {
  return (
    <div className="project">
      <img className="project-image" src={props.image} />
      <div className="project-top">
        <h4 className="project-title">{props.title}</h4>
        <div className="project-buttons">
          <a href="#" className="btn">
            Live demo <img src={enablegif} alt="enablegif" width="20px" height="20px" />
          </a>
          <a href="#" className="btn">
            View code
          </a>
        </div>
      </div>
      <p className="project-description">{props.description}</p>
      <div className="project-stacks">
        {props.stack.map((stack) => (
          <p className="project-stack">{stack}</p>
        ))}
      </div>
    </div>
  );
}

export default Project;
