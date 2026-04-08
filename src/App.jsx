import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
       <Projects />
      <Academics />
      <Certifications />
      <Interests />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
