import './nav.css';

function Navbar() {
  return (
    <div className="top-navbar">
<h1 className="logo" onClick={() => {
  const section = document.getElementById("home");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}}>
  SAKTHI
</h1>
      
      <div className="nav-item">
        <div className="nav-icon"><a href="#about">ABOUT</a></div>
       
      </div>
<div className="nav-item">
        <div className="nav-icon"><a href="#skills">SKILLS</a></div>
        
      </div>
      <div className="nav-item">
        <div className="nav-icon"><a href="#projects">PROJECTS</a></div>
      </div>
      <div className="nav-item">
        <div className="nav-icon"><a href="#Academics">ACADEMICS</a></div>
       
      </div>
      <div className="nav-item">
        <div className="nav-icon"><a href="#certifications">CERTIFICATIONS</a></div>  
      </div>
      <div className="nav-item">
        <div className="nav-icon"><a href="#interests">INTERESTS & STRENGTH</a></div>
        
      </div>
      <div className="nav-item">
        <div className="nav-icon"><a href="#contact">CONTACT ME</a></div>

      </div>
    </div>
  );
}

export default Navbar;