import './project.css';
function Projects() {
  const projects = [
    { title: "E-Commerce Website", tech: "HTML, CSS, SQL" },
    { title: "Customer Feedback System", tech: "HTML, CSS, SQL" },
    { title: "Expense Tracker", tech: "HTML, CSS, JS, Flask (Python)" },
    { title: "Heart Disease Impact Analysis", tech: "HTML, CSS, JS, ML (Python)" }
  ];

  return (
    <section id="projects">
  <h2><u>Projects</u></h2>

  <div className="projects-container">   {/* ✅ added */}
    {projects.map((proj, index) => (
      <div key={index} className="project-card">   {/* ✅ added */}
        <h3>{proj.title}</h3>
        <p>{proj.tech}</p>
      </div>
    ))}
  </div>
</section>
  );
}

export default Projects;
