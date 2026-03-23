import './skills.css';
function Skills() {
  const skills = [
     "Designing in Canva & Figma",
     "Creative Skills: PPt Presentations, Compering,Editing",
      "Frontend Development: HTML, CSS, JavaScript ,Basics in React(Beginner)",
    "Microsoft Office (Word, Excel, PPT, Access)",
   
  ];

  return (
    <section id="skills"className="skills-section">
  <h2><u>Skills</u></h2>

  <div className="skills-container">   {/* ✅ added */}
    {skills.map((skill, index) => (
      <div key={index} className="skill-box">   {/* ✅ added */}
        {skill}
      </div>
    ))}
  </div>
</section>
  );
}

export default Skills;
