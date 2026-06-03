import { useState, useEffect, useRef } from 'react';
import './skills.css';

function Skills() {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);

  const [vs, setVs] = useState(0);
  const [canva, setCanva] = useState(0);
  const [figma, setFigma] = useState(0);

  const [ppt, setPpt] = useState(0);
  const [comp, setComp] = useState(0);
  const [edit, setEdit] = useState(0);

  const [word, setWord] = useState(0);
  const [excel, setExcel] = useState(0);
  const [pptOffice, setPptOffice] = useState(0);
  const [access, setAccess] = useState(0);

  const skillsRef = useRef(null);

  const animateCounters = () => {
    setHtml(0); setCss(0); setJs(0); setReact(0);
    setVs(0); setCanva(0); setFigma(0);
    setPpt(0); setComp(0); setEdit(0);
    setWord(0); setExcel(0); setPptOffice(0); setAccess(0);

    const htmlInt = setInterval(() => setHtml(p => (p < 99 ? p + 1 : 99)), 20);
    const cssInt = setInterval(() => setCss(p => (p < 95 ? p + 1 : 95)), 20);
    const jsInt = setInterval(() => setJs(p => (p < 80 ? p + 1 : 80)), 20);
    const reactInt = setInterval(() => setReact(p => (p < 40 ? p + 1 : 40)), 40);

    const vsInt = setInterval(() => setVs(p => (p < 90 ? p + 1 : 90)), 20);
    const canvaInt = setInterval(() => setCanva(p => (p < 80 ? p + 1 : 80)), 20);
    const figmaInt = setInterval(() => setFigma(p => (p < 40 ? p + 1 : 40)), 40);

    const pptInt = setInterval(() => setPpt(p => (p < 95 ? p + 1 : 95)), 20);
    const compInt = setInterval(() => setComp(p => (p < 90 ? p + 1 : 90)), 20);
    const editInt = setInterval(() => setEdit(p => (p < 85 ? p + 1 : 85)), 20);

    const wordInt = setInterval(() => setWord(p => (p < 95 ? p + 1 : 95)), 20);
    const excelInt = setInterval(() => setExcel(p => (p < 90 ? p + 1 : 90)), 20);
    const pptOfficeInt = setInterval(() => setPptOffice(p => (p < 92 ? p + 1 : 92)), 20);
    const accessInt = setInterval(() => setAccess(p => (p < 85 ? p + 1 : 85)), 20);

    setTimeout(() => {
      clearInterval(htmlInt); clearInterval(cssInt); clearInterval(jsInt); clearInterval(reactInt);
      clearInterval(vsInt); clearInterval(canvaInt); clearInterval(figmaInt);
      clearInterval(pptInt); clearInterval(compInt); clearInterval(editInt);
      clearInterval(wordInt); clearInterval(excelInt); clearInterval(pptOfficeInt); clearInterval(accessInt);
    }, 4000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2><u>Skills</u></h2>

      <div className="skills-grid">
        {/* Left: Frontend */}
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="progress-bar"><div className="progress" style={{width:`${html}%`}}>HTML {html}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${css}%`}}>CSS {css}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${js}%`}}>JavaScript {js}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${react}%`}}>React (Beginner) {react}%</div></div>
        </div>
        {/* Right: Developer Tools */}
        <div className="skill-category">
          <h3>Developer Tools</h3>
          <div className="progress-bar"><div className="progress" style={{width:`${vs}%`}}>VS Code {vs}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${canva}%`}}>Canva {canva}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${figma}%`}}>Figma (Beginner) {figma}%</div></div>
        </div>

        {/* Left: Creative Skills */}
        <div className="skill-category">
          <h3>Creative Skills</h3>
          <div className="progress-bar"><div className="progress" style={{width:`${ppt}%`}}>PPT {ppt}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${comp}%`}}>Compering {comp}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${edit}%`}}>Editing {edit}%</div></div>
        </div>

        {/* Right: MS Office */}
        <div className="skill-category">
          <h3>Microsoft Office</h3>
          <div className="progress-bar"><div className="progress" style={{width:`${word}%`}}>Word {word}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${excel}%`}}>Excel {excel}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${pptOffice}%`}}>PowerPoint {pptOffice}%</div></div>
          <div className="progress-bar"><div className="progress" style={{width:`${access}%`}}>Access {access}%</div></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
