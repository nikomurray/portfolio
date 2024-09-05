function Project(props) {
  return (
    <div className="project">
      <img className="project-image" src={props.image} />
      <h4 className="project-title">{props.title}</h4>
      <p className="project-description">{props.description}</p>
      <p className="project-stack">{props.stack}</p>
    </div>
  );
}

export default Project;
