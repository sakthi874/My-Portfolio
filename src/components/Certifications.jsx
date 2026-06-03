import './certification.css';

function Certifications() {
  const certifications = [
    { title: "Figma for UI/UX Design", org: "Great Learning", pdf: ["/certificates/figma.pdf"] },
    { title: "Frontend - HTML", org: "Great Learning", pdf: ["/certificates/basics.pdf"] },
    { title: "Data Analytics Internship", org: "DSP Office (Offline)", pdf: ["/certificates/data.pdf"] },
    { title: "Computer Office Automation (COA)", org: "Govt. Certification", pdf: ["/certificates/COA.pdf"] },
    { title: "Type Writing (Lower & Higher)", org: "Govt. Certification", pdf: ["/certificates/Typewriting.pdf"] },
    { title: "Frontend development (HTML, CSS, JS, React)", org: "LeSucess", pdf: ["/certificates/Frontend.pdf"] },
  ];
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <p className="subtitle">
        Here are the certifications I earned while expanding my skills and knowledge.
      </p>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            {cert.pdf.map((file, i) => (
              <a key={i} href={file} target="_blank" rel="noopener noreferrer">
                <button className="certificate-btn">View Certificate</button>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
