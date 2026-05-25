import './interest.css';
function Interests() {
  const interests = [
    "Seminars & Public Speaking 🎤",
    "Learning New Topics 📚",
    "Preparing Presentations 📊",
    "Compering (Event Hosting) 🎉",
    "Crafting 🧵",
    "Editing ✂️",
    "Adaptability  🔄",
    "Creativity  💡"
    
  ];

  return (
    <section id="interests">
      <h2><u>Interests & Strength</u></h2>

      <div className="interests-container">
        {interests.map((item, index) => (
          <div key={index} className="interest-box">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;