function Header() {
  const userInfo = {
    name: "Nicolas Murray",
    position: "Full-Stack Developer",
    description:
      "Creating seamless web experiences with expertise in React, Node.js and PostgreSQL. Driven by clean code, innovative solutions, and scalable applications.",
  };

  return (
    <div className="header">
      <div className="header-info">
        <h1>{userInfo.name}</h1>
        <h2>{userInfo.position}</h2>
        <p>{userInfo.description}</p>
      </div>
      <div className="header-buttons">
        <button className="btn"><span class="material-symbols-outlined">
contacts_product
</span> Contact me</button>
        <button className="btn"><span class="material-symbols-outlined">
workspace_premium
</span> View Projects</button>
      </div>
    </div>
  );
}
export default Header;
