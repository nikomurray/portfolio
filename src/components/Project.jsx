function Project(props) {
  return (
    <div className="project">
      <img className="project-image" src={props.image} />
      <div className="project-top">
        <h4 className="project-title">{props.title}</h4>
        <div className="project-buttons">
          <a href="#" className="btn">Live demo</a>
          <a href="#" className="btn">View code</a> 
        </div>
      </div>
      <p className="project-description">{props.description}</p>
      <p className="project-stack">{props.stack}</p>
    </div>
  );
}

export default Project;
