import './certification.css';
import { useState } from "react";


function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certifications = [
   
    { title: "Figma for UI/UX Design", org: "Great Learning",
  img: ["/certificates/figma.jpg"] },
    { title: "Frontend - HTML", org: "Great Learning", img: ["/certificates/basics.jpg"] },
    { title: "Data Analytics Internship", org: "DSP Office (Offline)", img: ["/certificates/data.jpeg"] },
    { title: "Computer Office Automation (COA)", org: "Govt. Certification", img: ["/certificates/COA.jpeg"] },
    { title: "Type Writing English (Lower & Higher)", org: "Govt. Certification", 
      img: ["/certificates/Higher-English.jpeg",
     "/certificates/Lower-English.jpeg"]
     },
    { title: "Type Writing Tamil (Lower & Higher)", org: "Govt. Certification", img: ["/certificates/Higher-Tamil.jpeg",
      "/certificates/Lower-Tamil.jpeg"] },
  ];

  return (
    <section id="certifications">
      <h2><u>Certifications</u></h2>
      <p className="subtitle">
        Here are the certifications I earned while expanding my skills and knowledge.
      </p>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            <button onClick={() => setSelectedCert(cert.img)}>View
</button>
            
          </div>
        ))}
      
      </div>
      {selectedCert && (
  <div className="cert-preview">
    <img src={selectedCert} alt="Certificate" />
    <br />
    
    
    {/* ✅ Updated Close Button */}
    <button
      onClick={() => {
        setSelectedCert(null);

        setTimeout(() => {
          const section = document.getElementById("certifications");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 1);
      }}
    >
      Close
    </button>

  </div>
)}
    </section>
  );
}

export default Certifications;
