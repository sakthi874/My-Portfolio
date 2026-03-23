import './project.css';
function Projects() {
 const projects = [
  {
    title: "🛒 E-Commerce Website",
    description: "Developed a responsive e-commerce platform to display products and provide a smooth shopping experience.",
    tech: "HTML, CSS, SQL"
  },
  {
    title: "💬 Customer Feedback System",
    description: "Built a system to collect and manage customer feedback, helping improve services based on user input.",
    tech: "HTML, CSS, SQL"
  },
  {
    title: "💰 Expense Tracker",
    description: "Created a web application to track daily expenses and help users manage their budget effectively.",
    tech: "HTML, CSS, JS, Flask (Python)"
  },
  {
    title: "❤️ Heart Disease Impact Analysis",
    description: "Developed a machine learning project to analyze health data and predict Other Organ risks.",
    tech: "HTML, CSS, JS, ML (Python)"
  }
];

  return (
    <section id="projects">
  <h2><u>Projects</u></h2>

  <div className="projects-container">   {/* ✅ added */}
    {projects.map((proj, index) => (
      <div key={index} className="project-card">   {/* ✅ added */}
        <h3>{proj.title}</h3>
        <p>{proj.tech}</p>
        <p>{proj.description}</p>
      </div>
    ))}
  </div>
</section>
  );
}

export default Projects;
