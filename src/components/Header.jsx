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
        <a href="https://wa.me/5491169427833" className="btn"><span className="material-symbols-outlined">
contacts_product
</span> Contact me</a>
        {/* <a href="#" className="btn"><span class="material-symbols-outlined">
        description
</span>Download resume</a> */}
      </div>
    </div>
  );
}
export default Header;
